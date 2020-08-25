window.androidObj = function AndroidClass(){};

var mcID = "";
var dpid = "";
var t_body = "";

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
  mcID = parameters[1];
  orderdetails(mcID);
  
}
  
  function orderdetails(x) {
    var rootRef = firebase.database().ref('allshop/' + mcID + "/orders/");

      rootRef.on("child_added", snap => {

var ordid = snap.child("id").val();
var prices = snap.child("prices").val();
var productids = snap.child("productids").val();
var products = snap.child("products").val();
var qtys = snap.child("qtys").val();
var user = snap.child("user").val();
var orderstatus = snap.child("orderstatus").val();
var dotp = snap.child("dotp").val();
//var ordstatus = getstatus(ordid);
console.log(user + " - " + ordid);

if(orderstatus == 11 || orderstatus == 21 || orderstatus == 12 || orderstatus == 22){
    var backg = 'one';
}
if(orderstatus == 13 || orderstatus == 23){
    var backg = 'two';
}
if(orderstatus == 19 || orderstatus == 29){
    var backg = 'three';
}
if(orderstatus == 11 || orderstatus == 21){
    var pickbtn = 'one';
    var delbtn = 'two';
}
if(orderstatus == 12 || orderstatus == 22){
    var pickbtn = 'two';
    var delbtn = 'one';
}
if(orderstatus == 13 || orderstatus == 23 || orderstatus == 29 || orderstatus == 19){
    var pickbtn = 'two';
    var delbtn = 'two';
}

if(!products.includes("sp2lt")){
  t_body = '<td>' + products + '</td><td>' + qtys + '</td><td>' + prices + '</td>'
}
else{
  for (var ij = qtys.split("sp2lt").length - 1; ij >= 0; ij--) {
    t_body =t_body + '<tr><td>' + products.split("sp2lt")[ij] + '</td><td>' + qtys.split("sp2lt")[ij] + '</td><td>' + prices.split("sp2lt")[ij] + '</td></tr>';
    }
  
}
if(orderstatus != 28){
    $("#allordercard").append('<div class="card card--' + backg + '"><p class="card__number">Order No.: ' + ordid +'</p><center><hr style="width: 50%"></center><br><div class="card__info"><p class="card__amount"><b>OTP: </b> ' + dotp + '</p></div><br><table class="tab_report"><tr><th>Product</th><th>Quantity</th><th>Price</th></tr><tbody>' + t_body + '</tbody></table><center><div class="card__info"><p class="card__integral"><button class="opcone" data-ordid="' + ordid + '" data-uid="' + user + '" onclick="picked(this)">Ready for Delivery</button></p></div></center></div>');
}
t_body = "";

});

  }

  /*function getstatus(ordid) {
    var rootRef = firebase.database().ref('allorders/' + ordid);

      rootRef.on("child_added", snap => {

var ordid = snap.child("id").val();
var orderstatus = snap.child("id").val();

if(){
  
}

});
  }*/

function calldboy(x){
    window.androidObj.textToAndroid(x);
}

function picked(x) {
    suid = x.getAttribute("data-uid");
    sord = x.getAttribute("data-ordid");
    firebase.database().ref(suid + "/order/" + sord).update({orderstatus:"22"});
    firebase.database().ref("allorders/" + sord).update({orderstatus:"22"});
    location.reload();
    /*document.getElementById(sord + "p").style.display = 'none';
    document.getElementById(sord + "d").style.display = 'block';*/
}

function delivered(x) {
    suid = x.getAttribute("data-uid");
    sord = x.getAttribute("data-ordid");
    firebase.database().ref(suid + "/order/" + sord).update({orderstatus:"23"});
    firebase.database().ref("allorders/" + sord).update({orderstatus:"23"});
    location.reload();
    /*document.getElementById(sord + "p").style.display = 'none';
    document.getElementById(sord + "d").style.display = 'none';*/
}