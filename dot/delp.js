window.androidObj = function AndroidClass(){};

var orderID = "";
var dpid = "";
var shopids = "";
var backgrounds = ["linear-gradient(to right, #d194ff, #9389ff)","linear-gradient(to right, #7cbfee, #00d0b8)","linear-gradient(to right, #ff77a7, #ff7b7e)"];
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


  function loadingtime() {
  var qtload = Math.floor(Math.random() * 4);
    let timerInterval;
  Swal.fire({
  title: 'DOT',
  html: '<img width="80%" height="auto" src="assets/img/loading.gif"><br>',
  timer: 2000,
  timerProgressBar: true,
  allowEscapeKey: false,
  allowOutsideClick: false,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          //b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval);
    //document.getElementById("mainbody").style.display = "block";
  }
}).then((result) => {
  /* Read more about handling dismissals below 
  if (result.dismiss === Swal.DismissReason.timer) {
    initskip();
  }*/
})
  var parameters = location.search.substring(1).split("=");
  //orderID = parameters[1];
  dpid = parameters[1];
  orderdetails();
}
  
  function orderdetails() {
    var rootRef = firebase.database().ref('allorders');

      rootRef.on("child_added", snap => {

var ordid = snap.child("ordid").val();
var cname = snap.child("uname").val();
var cphone = snap.child("orduid").val();
var paymode = snap.child("ordpay").val();
var dotp = snap.child("dotp").val();
var ordval = snap.child("ordval").val();
var caddress = snap.child("uaddr").val();
var orderstatus = snap.child("orderstatus").val();
var did = snap.child("did").val();
var shopnames = snap.child("shopnames").val().split(",").join("<br>");
var shopaddrs = snap.child("shopaddrs").val().split(",").join("<br>");
var totalqty = snap.child("ordqty").val().split(",").reduce((a, b) => Number(a) + Number(b), 0);
shopids = snap.child("shopids").val().split(",");



if(orderstatus == 11 || orderstatus == 22){
    var backg = 'one';
}
if(orderstatus == 24){
    var backg = 'two';
}
if(orderstatus == 19 || orderstatus == 29){
    var backg = 'three';
}
if(orderstatus == 11 || orderstatus == 22){
    var pickbtn = 'one';
    var delbtn = 'two';
}
if(orderstatus == 24){
    var pickbtn = 'two';
    var delbtn = 'one';
}
if(orderstatus == 23 || orderstatus == 29 || orderstatus == 19){
    var pickbtn = 'two';
    var delbtn = 'two';
}
if(dpid == did && orderstatus != 28){
    $("#allordercard").append('<div class="card card--' + backg + '"><p class="card__number">Order No.: ' + ordid +'</p><center><hr style="width: 50%"></center><br><p class="card__owner"><b>Customer Name: </b> ' + cname + ' </p><p class="card__owner"><b>Contact no. : </b><i onclick="calldboy(\'call' + cphone + '\')">+91 ' + cphone + '</i></p><p class="card__owner"><b>Delivery Address : </b>' + caddress + '</p><br><p class="card__owner"><b>Pickup Shop Name(s) : </b><br>' + shopnames + '</p><b>Respective Pickup Address(es) : </b><br>' + shopaddrs + '</p><div class="card__info"><p class="card__integral"><b>Total Quantity :</b> ' + totalqty +'</p><p class="card__amount"><b>Total Amount: ₹</b>' + ordval + '</p></div><div class="card__info"><p class="card__integral"><b>Payment Status :</b> ' + paymode +'</p><p class="card__amount"><b>OTP: </b> ' + dotp + '</p></div><center><div class="card__info"><p class="card__integral"><button id="' + ordid + 'p" class="opc' + pickbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" onclick="picked(this)">Picked Up</button></p><p class="card__amount"><button id="' + ordid + 'd" class="opc' + delbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" onclick="delivered(this)">Delivered</button></p></div></center></div><br>');
}

});

  }

function calldboy(x){
    window.androidObj.textToAndroid(x);
}

function picked(x) {
    firebase.database().ref("dboy/" + dpid + ).update({status:"road"});
    suid = x.getAttribute("data-uid");
    sord = x.getAttribute("data-ordid");
    firebase.database().ref(suid + "/order/" + sord).update({orderstatus:"24"});
    firebase.database().ref("allorders/" + sord).update({orderstatus:"24"});
    for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + sord).update({orderstatus:"24"});
    }
    location.reload();
    /*document.getElementById(sord + "p").style.display = 'none';
    document.getElementById(sord + "d").style.display = 'block';*/
}

function delivered(x) {
  firebase.database().ref("dboy/" + dpid + ).update({status:"sit"});
    suid = x.getAttribute("data-uid");
    sord = x.getAttribute("data-ordid");
    firebase.database().ref(suid + "/order/" + sord).update({orderstatus:"23"});
    firebase.database().ref("allorders/" + sord).update({orderstatus:"23"});
    for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + sord).update({orderstatus:"23"});
    }
    location.reload();
    /*document.getElementById(sord + "p").style.display = 'none';
    document.getElementById(sord + "d").style.display = 'none';*/
}
