var uid = "";
function getusername()
            {
                var username= parseInt(sessionStorage.getItem("username"));
                return username;
            }
            uid = getusername();
            
            

var config = {
    apiKey: "AIzaSyBfmpYLNt0LKUqzpLE5t1K6rlUsmiTFSz4",
    authDomain: "technova18-info.firebaseapp.com",
    databaseURL: "https://technova18-info.firebaseio.com",
    projectId: "technova18-info",
    storageBucket: "technova18-info.appspot.com",
    messagingSenderId: "793790133335",
    appId: "1:793790133335:web:c06886b1d50a44f32d9f12"
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