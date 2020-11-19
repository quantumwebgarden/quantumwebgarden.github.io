
var latf = "";
var langf = "";
var did = "";
var u = "";
// var firebaseConfig = {
//     apiKey: "AIzaSyCIHNdljOqzWgasMfB2bBZuFVHhof3-SLQ",
//     authDomain: "quantumdot20.firebaseapp.com",
//     databaseURL: "https://quantumdot20.firebaseio.com",
//     projectId: "quantumdot20",
//     storageBucket: "quantumdot20.appspot.com",
//     messagingSenderId: "1011845585600",
//     appId: "1:1011845585600:web:cdd2e4e8ee38046b262b25",
//     measurementId: "G-Y98ZR7S8EQ"
//   };
//   firebase.initializeApp(firebaseConfig);


      function getLocation() {
        //latf = location.search.substring(1).split("=")[1];
        //langf = location.search.substring(1).split("=")[2];
        did = location.search.substring(1).split("=")[1];
        u = location.search.substring(1).split("=")[2];
        var rootRef = firebase.database().ref('dboy');

          rootRef.on("child_added", snap => {

          var id = snap.child("id").val();
          var lastlat = snap.child("lastlat").val();
          var lastlang = snap.child("lastlang").val();
          if(id == did){
            latf = Number(lastlat);
            langf = Number(lastlang);
            initMap();
          }
        });
      }      

      (function(exports) {
        "use strict";

        function initMap() {
          
          var mapOptions = {
            zoom: 14,
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
            
            position: {
              lat: Number(latf),
              lng: Number(langf)
            },
            icon: "https://quantumwebgarden.github.io/dot/dotfico.png",
            map: exports.map
          });

          var infowindow = new google.maps.InfoWindow({
            content: "<p>Marker Location:" + marker.getPosition() + "</p>"
          });
          google.maps.event.addListener(marker, "click", function() {
            infowindow.open(exports.map, marker);
          });

          var rootRef = firebase.database().ref('dboy');

          rootRef.on("child_changed", snap => {

          var id = snap.child("id").val();
          var lastlat = snap.child("lastlat").val();
          var lastlang = snap.child("lastlang").val();

          if(id == did){
            latf = Number(lastlat);
            langf = Number(lastlang);
            initMap();
          }
        });
        }

        exports.initMap = initMap;
      })((this.window = this.window || {}));
