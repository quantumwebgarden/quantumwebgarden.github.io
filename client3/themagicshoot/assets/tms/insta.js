        
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

var rootRef = firebase.database().ref('instagram');

rootRef.on("child_added", snap => {


var uname = snap.child("uname").val();

var dtype = snap.child("dtype").val();

var cap = snap.child("cap").val();

var ulnk = snap.child("ulnk").val();

var insid = snap.child("insid").val();

ntn = ntn +1;


if(dtype == "Image"){
$("#og-grid").append("<li><a href=\"#\" data-largesrc=\"" + ulnk + "\" data-title=\"" + insid + "\" data-description=\"" + cap + "\"><img src=\"" + ulnk + "\" width=\"auto\" height=\"245px\" alt=\"img" + ntn + "\" onclick=\"addField(\'" + insid +"\',\'" + ulnk +"\',\'" + uname +"\',\'" + cap +"\');\"/></a></li>");
}
if(dtype == "Video"){
$("#og-grid").append("<li><a href=\"#\"><iframe style=\"width: auto; height: 245px;\" src=\"" + ulnk + "\" allowfullscreen></iframe></a></li>");

}
});

});


function addField(insid,ulnk,uname,cap){
  
  //var file = "https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/gallery%2Fg" + appid + "?alt=media&token=" + pht
  Swal.fire({
  title: cap,
  text: "Uploaded by" + uname + ".",
  imageUrl: ulnk,
  imageAlt: uname,
  showConfirmButton: false,
});
  }