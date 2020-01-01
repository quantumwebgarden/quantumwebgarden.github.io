var appid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("appidset").innerHTML = "Thanks for your Contact. You may note down your token ID for further reference : " + appid;
  document.getElementById("cappid").value = appid;
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
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	name = getInputVal('cname');
var	email = getInputVal('cemail');
var phone = getInputVal('cphone');
var topics = getInputVal('ctopics');
var appid = getInputVal('cappid');
var msg = getInputVal('cmsg');
 // Save message
  saveMessage(name,email,phone,topics,appid,msg);


  document.getElementById("contactForm").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(name,email,phone,topics,appid,msg){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('qwcontact/' + phone + '/'+ appid).set({
appid:appid,
name:name,
email:email,
phone:phone,
topics:topics,
msg:msg
  });
}