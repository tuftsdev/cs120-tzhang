let map;

const SOUTH_STATION = { lat: 42.352271, lng: -71.055242 };
const ICON_BASE = "./";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(SOUTH_STATION.lat, SOUTH_STATION.lng),
    zoom: 14,
  });

  const icons = {
    car: {
      icon: ICON_BASE + "car.png",
    },
  };

  const features = [
    {
      title: "mXfkjrFw",
      position: new google.maps.LatLng(42.3453, -71.0464),
      type: "car",
    },
    {
      title: "nZXB8ZHz",
      position: new google.maps.LatLng(42.3662, -71.0621),
      type: "car",
    },
    {
      title: "Tkwu74WC",
      position: new google.maps.LatLng(42.3603, -71.0547),
      type: "car",
    },
    {
      title: "5KWpnAJN",
      position: new google.maps.LatLng(42.3472, -71.0802),
      type: "car",
    },
    {
      title: "uf5ZrXYw",
      position: new google.maps.LatLng(42.3663, -71.0544),
      type: "car",
    },
    {
      title: "VMerzMH8",
      position: new google.maps.LatLng(42.3542, -71.0704),
      type: "car",
    },
  ];

  // Create markers.
  const markers = features.map(
    (feature) =>
      new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
      })
  );

  console.log(markers);
}

window.initMap = initMap;
