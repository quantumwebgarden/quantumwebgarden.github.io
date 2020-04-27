        
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
var img = 0;
var vdo = 0;
var viewer = 0;
var posts = 0;
$(document).ready(function(){

var rootRef = firebase.database().ref('instagram');

rootRef.on("child_added", snap => {


var uname = snap.child("uname").val();

var dtype = snap.child("dtype").val();

var cap = snap.child("cap").val();

var ulnk = snap.child("ulnk").val();

var insid = snap.child("insid").val();

ntn = ntn +1;


if(dtype == "Image"){
$("#galinsta").append("<div class=\"gallery-item\" tabindex=\"0\"><img src=\"" + ulnk + "\" class=\"gallery-image\" alt=\"\"><div class=\"gallery-item-type\"><span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-image\" aria-hidden=\"true\"></i></div><div class=\"gallery-item-info\" onclick=\"imgfr(\'" + insid +"\',\'" + ulnk +"\',\'" + uname +"\',\'" + cap +"\');\"><ul><li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-eye\" aria-hidden=\"true\"></i> View</li></ul></div></div>");
}
if(dtype == "Video"){
$("#galinsta").append("<div class=\"gallery-item\" tabindex=\"0\"><iframe width=\"100%\" height=\"200\" src=\"" + ulnk + "\"  frameborder=\"0\" allowfullscreen></iframe><div class=\"gallery-item-type\"><span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i></div><div class=\"gallery-item-info\" onclick=\"vdofr(\'" + insid +"\',\'" + ulnk +"\',\'" + uname +"\',\'" + cap +"\');\"><ul><li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-eye\" aria-hidden=\"true\"></i> View</li></ul></div></div>");
}
if(dtype == "Gvideo"){
$("#galinsta").append("<div class=\"gallery-item\" tabindex=\"0\"><iframe width=\"100%\" height=\"200\" src=\"" + ulnk + "\"  frameborder=\"0\" allowfullscreen></iframe><div class=\"gallery-item-type\"><span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i></div><div class=\"gallery-item-info\" onclick=\"vdofr(\'" + insid +"\',\'" + ulnk +"\',\'" + uname +"\',\'" + cap +"\');\"><ul><li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-eye\" aria-hidden=\"true\"></i> View</li></ul></div></div>");
}
});

});

/*
function showimage(insid,ulnk,uname,cap){
  
  //var file = "https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/gallery%2Fg" + appid + "?alt=media&token=" + pht
  Swal.fire({
  title: cap,
  text: "Uploaded by" + uname + ".",
  imageUrl: ulnk,
  imageAlt: uname,
  showConfirmButton: false,
});
  }

  function showvideo(insid,ulnk,uname,cap){
  
  //var file = "https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/gallery%2Fg" + appid + "?alt=media&token=" + pht
  Swal.fire({
  title: cap,
  text: "Uploaded by" + uname + ".",
  html:
    'Uploaded by <b>' + uname + '</b>, ' +
    '<iframe width="285" height="285" src="' + ulnk + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
    'Instagram',
  showConfirmButton: false,
});
  }
*/
function imgfr(insid,ulnk,uname,cap)
  {
    on1();
  document.getElementById("imgshsrc1").src = ulnk;
  document.getElementById("dtls1").innerHTML = "Uploaded by <b>" + uname+ "</b>";
  document.getElementById("tdtls1").innerHTML = cap;
  }
  function vdofr(insid,ulnk,uname,cap)
  {
    on2();
  document.getElementById("imgshsrc2").src = ulnk;
  document.getElementById("dtls2").innerHTML = "Uploaded by <b>" + uname+ "</b>";
  document.getElementById("tdtls2").innerHTML = cap;
  
  }

  function on1() {
  document.getElementById("overlay1").style.height = "100%";
  document.getElementById("overlay1").style.width = "100%";
  document.getElementById("overlay1").style.top = "0%";
  document.getElementById("overlay1").style.left = "0%";
  document.body.style.overflowY = 'hidden';

}

function off1() {
   document.getElementById("overlay1").style.height = "0%";
   document.getElementById("overlay1").style.width = "0%";
   document.getElementById("overlay1").style.top = "50%";
  document.getElementById("overlay1").style.left = "50%";
  //document.getElementById("imgshsrc1").src = "";
  document.body.style.overflowY = 'auto';
  
}
function on2() {
  document.getElementById("overlay2").style.height = "100%";
  document.getElementById("overlay2").style.width = "100%";
  document.getElementById("overlay2").style.top = "0%";
  document.getElementById("overlay2").style.left = "0%";
  document.body.style.overflowY = 'hidden';
}

function off2() {
   document.getElementById("overlay2").style.height = "0%";
   document.getElementById("overlay2").style.width = "0%";
   document.getElementById("overlay2").style.top = "50%";
  document.getElementById("overlay2").style.left = "50%";
  document.getElementById("imgshsrc2").src = "";
  document.body.style.overflowY = 'auto';
}

