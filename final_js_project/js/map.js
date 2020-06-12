let mymap = L.map('mapid').setView([51.505, -0.09], 13);

function initMap() {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.MAP_TOKEN,
    }
  ).addTo(mymap);

  // const marker = L.marker([51.5, -0.09]).addTo(mymap);

  // marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

  // const popup = L.popup()
  //   .setLatLng([51.5, -0.09])
  //   .setContent('I am a standalone popup.')
  //   .openOn(mymap);

  // function onMapClick(e) {
  //   popup
  //     .setLatLng(e.latlng)
  //     .setContent('You clicked the map at ' + e.latlng.toString())
  //     .openOn(mymap);
  // }

  // mymap.on('click', onMapClick);
}

function convertToDegreeDecial(latLong, direction) {
  const i = direction === 'E' || direction === 'N' ? 1 : -1;
  const degree = latLong[0] + latLong[1] / 60 + latLong[2] / 3600;
  return degree * i;
}

function setMarker(gps) {
  const { GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef } = gps;
  const latitude = convertToDegreeDecial(GPSLatitude, GPSLatitudeRef);
  const longitude = convertToDegreeDecial(GPSLongitude, GPSLongitudeRef);
  const marker = L.marker([latitude, longitude]).addTo(mymap);
  mymap.setView([latitude, longitude], 13);
}

module.exports = { initMap, setMarker, convertToDegreeDecial };
