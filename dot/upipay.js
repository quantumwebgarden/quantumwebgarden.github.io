window.androidObj = function AndroidClass(){};

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
var shopgroups = snap.child("productids").val().split(",");
var shopitemnames = snap.child("products").val().split(",");
var shoppays = snap.child("prices").val().split(",");
var shopitemqtys = snap.child("qtys").val().split(",");
var dotp = snap.child("dotp").val();
var shopids = snap.child("shopids").val().split(",");
var shopphones = snap.child("shopphones").val().split(",");
var shopnames = snap.child("shopnames").val().split(",");
var udphone = snap.child("dphone").val();
if (odid == ordid && ordstatus == "22") {

  firebase.database().ref("allorders/" + odid).update({orderstatus:ordstatus});

	for (var i = cartitems.length - 1; i >= 0; i--) {
    firebase.database().ref(u + "/cart/" + cartitems[i]).update({typ:"temp"});
    }

    deliverymsg = encodeURI("New Order with Order id : " + ordid + " has been placed. Shop Name(s): " + shopnames + " with respective Phone Number(s): " + shopphones + ". Check your App and meet or call.")

    document.getElementById("msgonlydp").src = "http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=" + udphone + "&Msg=" + deliverymsg;
    

    for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + ordid).update({orderstatus:ordstatus,paystatus:0});
          //SMS to shopphones;
          if(!shopitemnames[i].includes("sp2lt")){
            var msgraw = 'Name - ' + shopitemnames[i] + ', quantity - ' + shopitemqtys[i] + ";";
          }
          else{
            var msgraw = "";
            var itemsf = shopitemnames[i].split("sp2lt");
            var qtysf = shopitemqtys[i].split("sp2lt")
            for (var ij = itemsf.length - 1; ij >= 0; ij--) {
                var msgraw = msgraw + 'Name: ' + itemsf[ij] + ', quantity: ' + qtysf[ij] + "; ";
              }
          }
          var finalmsg = encodeURI("New Order with Order id : " + ordid + " has been placed. Details as follow: " + msgraw);
          console.log(finalmsg + " to " + shopphones[i]);
          document.getElementById("msgonly" + i).src = "http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=" + shopphones[i] + "&Msg=" + finalmsg;
    }

	Swal.fire({
  title: 'DOT',
  html: 'Your order has been placed successfully. ' + dmsg[dsts.indexOf(dstatus)] + "<br/><u>Track your delivery status from \'My orders\'.</u>",
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

if(odid == ordid && ordstatus == "29"){
	Swal.fire({
  title: 'DOT',
  html: 'Sorry, Payment Failed.<br>If amount debited from your account, please contact DOT Customer Care with ID: \'' + odid + '\'<br>Email: support@deliveryontimedot.com<br>Call us at: +91 8918007407',
  icon: 'error',
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

function backtohome() {
  window.open("cart.html" + location.search.substring(0, location.search.lastIndexOf("=")));
}

function sendsms(x){
    window.androidObj.textToAndroid(x);
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