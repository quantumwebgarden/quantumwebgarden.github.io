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

