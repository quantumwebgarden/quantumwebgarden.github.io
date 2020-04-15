var tmsid = "";
function appidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	tmsid = diff;
  document.getElementById("tmsid").value =tmsid;
}



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

// Listen for form submit
document.getElementById('contactformtms').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	name = getInputVal('name-form1-z');
var	email = getInputVal('email-form1-z');
var	phone = getInputVal('phone-form1-z');
var msg = getInputVal('message-form1-z');
var tmsid = getInputVal('tmsid');

 // Save message
  saveMessage(name,email,phone,msg,tmsid);


  document.getElementById("contactformtms").style.display = 'none';
  document.getElementById("thankyoutms").style.display = 'block';

  document.getElementById('contactformtms').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(name,email,phone,msg,tmsid){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('tmscontact/' + tmsid).set({
name:name,
email:email,
phone:phone,
msg:msg,
tmsid:tmsid
  });
}
