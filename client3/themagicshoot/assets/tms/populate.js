var uid = "";
function getusername()
            {
                var username= parseInt(sessionStorage.getItem("username"));
                return username;
            }
            uid = getusername();
            
            

var config = {
    apiKey: "AIzaSyCefEYt287pgGET2L6LWJRIWxTRs3Ljebo",
    authDomain: "thems2020.firebaseapp.com",
    databaseURL: "https://thems2020.firebaseio.com",
    projectId: "thems2020",
    storageBucket: "thems2020.appspot.com",
    messagingSenderId: "611585110346",
    appId: "1:611585110346:web:45843523d0448ff1d7d1b3",
    measurementId: "G-H4QF7Z1ZXG"
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