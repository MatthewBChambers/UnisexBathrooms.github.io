// Initialize and add the map
function initMap() {
  // The location of Uluru
  const athens = { lat: 33.9519, lng: -83.3576 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: athens,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: athens,
    map: map,
  });
}