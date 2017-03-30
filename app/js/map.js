// Google Maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.63, lng: 26.27},
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: {lat: 50.62988, lng: 26.26961},
    map: map,
    title: 'Hello World!'
  });
}
