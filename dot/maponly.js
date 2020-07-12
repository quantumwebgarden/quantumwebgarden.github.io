
var latf = "";
var langf = "";


function getLocation() {
        latf = location.search.substring(1).split("=")[1];
        langf = location.search.substring(1).split("=")[2];
        initMap();
        }      



      (function(exports) {
        "use strict";

        // In this example, we center the map, and add a marker, using a LatLng object
        // literal instead of a google.maps.LatLng object. LatLng object literals are
        // a convenient way to add a LatLng coordinate and, in most cases, can be used
        // in place of a google.maps.LatLng object.

        function initMap() {
          
          var mapOptions = {
            zoom: 8,
            center: {
              lat: Number(latf),
              lng: Number(langf)
            }
          };
          exports.map = new google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          var marker = new google.maps.Marker({
            // The below line is equivalent to writing:
            // position: new google.maps.LatLng(-34.397, 150.644)
            position: {
              lat: Number(latf),
              lng: Number(langf)
            },
            icon: "https://quantumwebgarden.github.io/dot/dotfico.png",
            map: exports.map
          }); // You can use a LatLng literal in place of a google.maps.LatLng object when
          // creating the Marker object. Once the Marker object is instantiated, its
          // position will be available as a google.maps.LatLng object. In this case,
          // we retrieve the marker's position using the
          // google.maps.LatLng.getPosition() method.

          var infowindow = new google.maps.InfoWindow({
            content: "<p>Marker Location:" + marker.getPosition() + "</p>"
          });
          google.maps.event.addListener(marker, "click", function() {
            infowindow.open(exports.map, marker);
          });
        }

        exports.initMap = initMap;
      })((this.window = this.window || {}));