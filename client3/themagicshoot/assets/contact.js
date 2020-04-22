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
