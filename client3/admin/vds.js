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



$(document).ready(function(){

var rootRef = firebase.database().ref('tmscontact');

rootRef.on("child_added", snap => {

var tmsid = snap.child("tmsid").val();
var name = snap.child("name").val();
var email = snap.child("email").val();
var phone = snap.child("phone").val();
var msg = snap.child("msg").val();

/*if(fclass=="V")
{*/
$("#table_body").append("<tr><td>" + tmsid + "</td><td>" + name + "</td><td><a href =\"mailto:" + email + "\">" + email + "</a></td><td><a href =\"tel:" + phone + "\">" + phone + "</a></td><td>" + msg + "</td></tr>");
//}

});

});

