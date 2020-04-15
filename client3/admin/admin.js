var albumid = "";
var picid = "";
function aidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	albumid = diff;
  document.getElementById("aid").value = albumid;
  picidset();
}
function edited(){
	document.getElementById("aid").disabled = false;
}

function picedit(){
	document.getElementById("picedit").disabled = false;
}

function picidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	picid = diff;
  document.getElementById("picid").value = picid;
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
document.getElementById('galleryadd').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  // Get values
var	aid = getInputVal('aid');
var aname = getInputVal('aname');
var acv = getInputVal('acv');
var	picid = getInputVal('picid');
var pic = getInputVal('pic');
var icap = getInputVal('icap');

 // Save message
  saveMessage(aid,aname,acv,picid,pic,icap);
  document.getElementById("pic").value = "";
  document.getElementById("imgshow").src = "image.png";
  picidset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(aid,aname,acv,picid,pic,icap){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('gly/' + aid + "/" + picid).set({
aid:aid,
aname:aname,
acv:acv,
picid:picid,
pic:pic,
icap:icap
  });
}
