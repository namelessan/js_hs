const path = require('path');
const { initMap, setMarker, convertToDegreeDecial } = require(path.resolve(
  './js/map'
));
const Exif = require('exif').ExifImage;
const _ = require('lodash');
const GeoCoder = require('node-geocoder');
const fs = require('fs');
const fsize = require('filesize');
const fetch = require('node-fetch');

const modal = document.getElementById('image-modal');
const cache = {};
let currentImg = {};

// modal.onclick(function () {
//   console.log('triggered after map loaded');
//   setTimeout(() => {
//     map.invalidateSize();
//   }, 1);
// });

main();

function main() {
  initMap();
  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = hideModal;
  window.onclick = function (event) {
    if (event.target === modal) {
      hideModal();
    }
  };
}

function readImage(img) {
  return new Promise((res, rej) => {
    try {
      new Exif({ image: img }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    } catch (error) {
      rej(error);
    }
  });
}

async function onClickImage(e) {
  console.log(e.target.attributes.src.value);
  const src = e.target.attributes.src.value;
  if (!cache[src]) {
    const exif = await readImage(path.resolve(src));
    const { gps } = exif;
    const info = await setCurrentImg(exif, src);
    cache[src] = { ...info, gps };
  }

  currentImg = cache[src];
  const { gps } = currentImg;
  if (!_.isEmpty(gps)) setMarker(gps);
  updateDetail();
  showModal();
}

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

async function setCurrentImg({ image, exif, gps }, src) {
  const { GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef } = gps;
  const latitude = convertToDegreeDecial(GPSLatitude, GPSLatitudeRef);
  const longitude = convertToDegreeDecial(GPSLongitude, GPSLongitudeRef);
  const address = await getLocation(latitude, longitude);
  console.log('location of photo: ', address[0].formattedAddress);

  const location = address[0].formattedAddress;

  const { CreateDate } = exif;
  const createDate = CreateDate ? CreateDate : '';

  const title = src.split('\\').pop().split('/').pop();

  const { ExifImageWidth, ExifImageHeight } = exif;
  const resolution =
    ExifImageWidth && ExifImageHeight
      ? `${ExifImageWidth}x${ExifImageHeight}`
      : '';

  const stats = fs.statSync(src);
  const filesize = fsize(stats.size, { round: 0 });
  const size = filesize;
  return { location, createDate, title, resolution, size };
}

function updateDetail() {
  const date = document.getElementsByClassName('detail__date')[0];
  const location = document.getElementsByClassName('detail__location')[0];
  const title = document.getElementsByClassName('more-detail__title')[0];
  const size = document.getElementsByClassName('more-detail__size')[0];
  const resolution = document.getElementsByClassName(
    'more-detail__resolution'
  )[0];

  date.innerHTML = `Date: ${currentImg.createDate}`;
  location.innerHTML = `Location: ${currentImg.location}`;
  title.innerHTML = `Title: ${currentImg.title}`;
  size.innerHTML = `Size: ${currentImg.size}`;
  resolution.innerHTML = `Resolution: ${currentImg.resolution}`;
}

async function getLocation(lat, lon) {
  const options = {
    provider: 'openstreetmap',
    fetch: fetchGeoCode,
    formatter: null, // 'gpx', 'string', ..
    language: 'en-US',
  };
  const geo = GeoCoder(options);
  let location;
  location = await geo.reverse({ lat, lon });
  return location;
}

function fetchGeoCode(url, options) {
  return fetch(url, {
    ...options,
  });
}
