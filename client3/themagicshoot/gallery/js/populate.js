var uid = "";
function getusername()
            {
                var username= parseInt(sessionStorage.getItem("username"));
                return username;
            }
            uid = getusername();
            
            

var config = {
    apiKey: "AIzaSyC5hD8l1JE0G97zlflv8R8UZ4vcDv7JcsU",
    authDomain: "admission-2020.firebaseapp.com",
    databaseURL: "https://admission-2020.firebaseio.com",
    projectId: "admission-2020",
    storageBucket: "admission-2020.appspot.com",
    messagingSenderId: "319954780627",
    appId: "1:319954780627:web:e7619e9df08e54d703af26",
    measurementId: "G-K3CT148EJR"
  };
  firebase.initializeApp(config);            
var ntn = 0;

$(document).ready(function(){

var rootRef = firebase.database().ref('gly/' + uid);

rootRef.on("child_added", snap => {


var caption = snap.child("icap").val();

var updphoto = snap.child("pic").val();

var appid = snap.child("picid").val();

var acv = snap.child("acv").val();

var aname = snap.child("aname").val();

ntn = ntn +1;
//var n = updphoto.indexOf("token=");
//var pht = updphoto.substring(n + 6, updphoto.length);

$("#og-grid").append("<li><a href=\"#\" data-largesrc=\"" + updphoto + "\" data-title=\"" + appid + "\" data-description=\"" + caption + "\"><img src=\"" + updphoto + "\" width=\"auto\" height=\"210px\" alt=\"img" + ntn + "\" onclick=\"addField(\'" + appid +"\',\'" + updphoto +"\',\'" + caption +"\');\"/></a></li>");
document.getElementById("cntgal").style.backgroundImage = "url("+ acv +")";
$("#galname").html(aname);
});

});


function addField(appid,updphoto,caption){
  
  //var file = "https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/gallery%2Fg" + appid + "?alt=media&token=" + pht
  Swal.fire({
  title: caption,
  //text: caption,
  imageUrl: updphoto,
  imageAlt: caption,
  showConfirmButton: false,
});
  }