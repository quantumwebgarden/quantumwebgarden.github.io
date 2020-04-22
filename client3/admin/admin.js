var albumid = "";
var picid = 0;
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
	
	picid = picid + 1;
  document.getElementById("picid").value = picid;
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
