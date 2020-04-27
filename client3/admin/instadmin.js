var insid = "";
function appidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	insid = diff;
  document.getElementById("insid").value = insid;
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
document.getElementById('instagram').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	dtype = getInputVal('dtype');
var	cap = getInputVal('cap');
var ulnk = getInputVal('ulnk');
var insid = getInputVal('insid');

 // Save message
  saveMessage(dtype,cap,ulnk,insid);


  document.getElementById("instagram").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('instagram').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(dtype,cap,ulnk,insid){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('instagram/' + insid).set({
dtype:dtype,
cap:cap,
ulnk:ulnk,
insid:insid
  });
}
