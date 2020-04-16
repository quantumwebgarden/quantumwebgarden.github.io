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

