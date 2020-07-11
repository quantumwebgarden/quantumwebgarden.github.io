var dhomes = ["","Diamond Harbour","Sarisha","Karanjali"];
var dsts = ["offline","sit","road"];
var dmsg = ["","","For Lockdown issues we are working with less staff. It may take longer than usual"];
var ordid = "";
var u = "";

function callall() {
	getuid();
	onchageofpayment();
}
function getuid() {
    var parameters = location.search.substring(1).split("=");
    u = parameters[1];
    /*
	var elid = parameters[2].split("%20").join(" ");
	var t = parameters[3];
	var g = parameters[4];
	var locst = parameters[5];
	*/
	ordid = parameters[6];
}

var firebaseConfig = {
    apiKey: "AIzaSyCIHNdljOqzWgasMfB2bBZuFVHhof3-SLQ",
    authDomain: "quantumdot20.firebaseapp.com",
    databaseURL: "https://quantumdot20.firebaseio.com",
    projectId: "quantumdot20",
    storageBucket: "quantumdot20.appspot.com",
    messagingSenderId: "1011845585600",
    appId: "1:1011845585600:web:cdd2e4e8ee38046b262b25",
    measurementId: "G-Y98ZR7S8EQ"
  };
  firebase.initializeApp(firebaseConfig);


function onchageofpayment(){

var rootRef = firebase.database().ref(u + '/order');

rootRef.on("child_changed", snap => {

var odid = snap.child("ordid").val();
var ordstatus = snap.child("orderstatus").val();
var orditems = snap.child("orditems").val().split(",");
var dstatus = snap.child("dstatus").val();
var cartitems = snap.child("cartids").val().split(",");

if (odid == ordid && ordstatus == "22") {

	for (var i = cartitems.length - 1; i >= 0; i--) {
    firebase.database().ref(u + "/cart/" + cartitems[i]).update({typ:"temp"});
    }

	Swal.fire({
  title: 'DOT',
  html: 'Your order has been placed successfully. ' + dmsg[dsts.indexOf(dstatus)] + "<br/><u>Track delivery status from \'My orders\'.</u>",
  icon: 'success',
  showCancelButton: false,
  confirmButtonText: 'Back to Home',
  allowEscapeKey: false,
  allowOutsideClick: false,
}).then((result) => {
  if (result.value) {
    window.open("index.html" + location.search.substring(0, location.search.lastIndexOf("=")));
  }
})
}

});

}




/*
function savetoDB(response) {
    
    var payRef = firebase.database().ref('payments/' + u);
    payRef.child(ordid).set({
    payment_id : response.razorpay_payment_id
    })
    for (var i = tmsts.length - 1; i >= 0; i--) {
    firebase.database().ref(u + "/cart/" + tmsts[i]).update({typ:"temp"});
    }

  document.getElementById("successshow").style.display = "block";
  document.getElementById("mainbody").style.display = "none";
  Swal.fire({
  title: 'DOT',
  html: 'Your order has been placed successfully. ' + dmsg[dsts.indexOf(finaldst)] + "<br/><u>Track delivery status from \'My orders\'.</u>",
  icon: 'success',
  showCancelButton: false,
  confirmButtonText: 'Back to Home',
  allowEscapeKey: false,
  allowOutsideClick: false,
}).then((result) => {
  if (result.value) {
    window.open("index.html" + location.search.substring(0, location.search.lastIndexOf("=")));
  }
})

}
*/
//str.lastIndexOf("=")+1, str.length