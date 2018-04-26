var OFFICE_POSITION = {lat: 50.62988, lng: 26.26961},
    YOUR_POSITION;


function initMap() {
    var directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer;

    var map = new google.maps.Map(document.getElementById('map'), {
        center: OFFICE_POSITION,
        zoom: 17
    });

    directionsDisplay.setMap(map);

    var marker = new google.maps.Marker({
        position: OFFICE_POSITION,
        map: map,
        title: 'Nail Art Studio by Julia Paray'
    });


    var infoWindow = new google.maps.InfoWindow({map: map});


    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            YOUR_POSITION = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(YOUR_POSITION);
            infoWindow.setContent('You are here.');
            map.setCenter(YOUR_POSITION);

            calculateAndDisplayRoute(directionsService, directionsDisplay);

        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: YOUR_POSITION,
        destination: OFFICE_POSITION,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow) {
    infoWindow.setPosition(YOUR_POSITION);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
