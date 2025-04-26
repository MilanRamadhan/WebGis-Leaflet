var map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
  subdomains: "abcd",
  maxZoom: 20,
}).addTo(map);

var markers = L.markerClusterGroup();

var customIcon = L.icon({
  iconUrl: "img/marker-icon.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [8, -41],
});

function addMarkers(locationsArray) {
  markers.clearLayers();
  locationsArray.forEach(function (loc) {
    var marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).bindPopup(loc.popup);
    markers.addLayer(marker);
  });
  map.addLayer(markers);
}

addMarkers(locations);

if (locations.length > 0) {
  map.fitBounds(markers.getBounds());
}

document.getElementById("provinsiFilter").addEventListener("change", function (e) {
  var selectedProvinsi = e.target.value;
  if (selectedProvinsi === "all") {
    addMarkers(locations);
    if (locations.length > 0) {
      map.flyToBounds(markers.getBounds());
    }
  } else if (selectedProvinsi === "Indonesia") {
    var indonesiaData = locations.find(function (loc) {
      return loc.provinsi === "Indonesia";
    });

    if (indonesiaData) {
      markers.clearLayers();
      var marker = L.marker([indonesiaData.lat, indonesiaData.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(indonesiaData.popup).openPopup();

      map.flyTo([indonesiaData.lat, indonesiaData.lng], 5, {
        animate: true,
        duration: 2,
      });
    }
  } else {
    var filtered = locations.filter(function (locations) {
      return locations.provinsi === selectedProvinsi;
    });
    addMarkers(filtered);

    if (filtered.length > 0) {
      var lat = filtered[0].lat;
      var lng = filtered[0].lng;
      map.flyTo([lat, lng], 8, {
        animate: true,
        duration: 2,
      });
    }
  }
});

document.getElementById("locateBtn").addEventListener("click", function () {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      map.flyTo([lat, lng], 13, {
        animate: true,
        duration: 2,
      });
      L.marker([lat, lng]).addTo(map).bindPopup("You are here!").openPopup();
    },
    function () {
      alert("Unable to retrieve your location.");
    }
  );
});
