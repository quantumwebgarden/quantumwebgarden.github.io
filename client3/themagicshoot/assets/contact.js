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
  apiKey: "AIzaSyBfmpYLNt0LKUqzpLE5t1K6rlUsmiTFSz4",
    authDomain: "technova18-info.firebaseapp.com",
    databaseURL: "https://technova18-info.firebaseio.com",
    projectId: "technova18-info",
    storageBucket: "technova18-info.appspot.com",
    messagingSenderId: "793790133335",
    appId: "1:793790133335:web:c06886b1d50a44f32d9f12"
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
