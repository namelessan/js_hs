const path = require('path');
const { initMap, setMarker, convertToDegreeDecial } = require(path.resolve(
  './js/map'
));
const Exif = require('exif').ExifImage;
const _ = require('lodash');
const GeoCoder = require('node-geocoder');
const fs = require('fs');
const fsize = require('filesize');

const modal = document.getElementById('image-modal');
const cache = {};
let currentImg = {};

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
    console.log(exif);
    cache[src] = exif;
  }

  const gps = cache[src].gps;
  if (!_.isEmpty(gps)) setMarker(gps);
  setCurrentImg(cache[src], src);
  updateDetail();
  showModal();
}

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

function setCurrentImg({ image, exif, gps }, src) {
  const { GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef } = gps;
  const latitude = convertToDegreeDecial(GPSLatitude, GPSLatitudeRef);
  const longitude = convertToDegreeDecial(GPSLongitude, GPSLongitudeRef);
  currentImg.latLng = [latitude, longitude];

  const { CreateDate } = exif;
  currentImg.createDate = CreateDate;

  const title = src.split('\\').pop().split('/').pop();
  currentImg.title = title;

  const { ExifImageWidth, ExifImageHeight } = exif;
  currentImg.resolution = `${ExifImageWidth}x${ExifImageHeight}`;

  const stats = fs.statSync(src);
  const filesize = fsize(stats.size, { round: 0 });
  currentImg.size = filesize;
}

function updateDetail() {
  const date = document.getElementsByClassName('detail__date')[0];
  const location = document.getElementsByClassName('detail__location')[0];
  const title = document.getElementsByClassName('more-detail__title')[0];
  const size = document.getElementsByClassName('more-detail__size')[0];
  const resolution = document.getElementsByClassName(
    'more-detail__resolution'
  )[0];

  const address = getLocation(currentImg.latLng);

  date.innerHTML = `Date: ${currentImg.createDate}`;
  location.innerHTML = `Location: ${address}`;
  title.innerHTML = `Title: ${currentImg.title}`;
  size.innerHTML = `Size: ${currentImg.size}`;
  resolution.innerHTML = `Resolution: ${currentImg.resolution}`;
}

async function getLocation(latLng) {
  const options = {
    provider: 'openstreetmap',
    fetch: customFetchImplementation,
    apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
    formatter: null, // 'gpx', 'string', ..
  };
  const geo = GeoCoder(options);
  const location = await geo.reverse({ lat: latLng[0], lon: latLng[1] });
  console.log(location);
  return location;
}
