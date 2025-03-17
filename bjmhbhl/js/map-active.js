$(document).ready(function(){
    /*====================================
        Google Map JS
    ======================================*/  
    (function(){
        var map = new GMaps({
            el: '#myMap',
            lat: 25.35827,
            lng: 74.64790,
            scrollwheel: false,
            zoom: 15,
            zoomControl: true,  // Enabled for better navigation
            panControl: true,    // Enabled for better usability
            streetViewControl: true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        // Custom Marker Icon
        var image = 'img/map-marker.png';
        map.addMarker({
            lat: 25.35827,
            lng: 74.64790,
            icon: image,
            animation: google.maps.Animation.BOUNCE,  // More eye-catching animation
            title: "Bone and Joint Multispeciality Hospital",
        });

        // Custom Map Styles
        var styles = [
            {
                "featureType": "road",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "water",
                "stylers": [{ "color": "#bde5f6" }]
            },
            {
                "featureType": "landscape",
                "stylers": [{ "color": "#f2f2f2" }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#FF7550" }]
            },
            {
                "featureType": "poi",
                "stylers": [{ "color": "#e2f0cd" }]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": 2 },
                    { "weight": 0.3 },
                    { "color": "#a8a8a8" }
                ]
            }
        ];

        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    })();
});
