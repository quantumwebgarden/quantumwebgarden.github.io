window.androidObj = function AndroidClass(){};

var mcID = "";
var dpid = "";
var t_body = "";

var backgrounds = ["linear-gradient(to right, #d194ff, #9389ff)","linear-gradient(to right, #7cbfee, #00d0b8)","linear-gradient(to right, #ff77a7, #ff7b7e)"];
// var firebaseConfig = {
//     apiKey: "AIzaSyA7wly3NvCF90pJFs7a9kMBl-eXHJvXYw4",
//     authDomain: "dotqwdtls.firebaseapp.com",
//     databaseURL: "https://dotqwdtls.firebaseio.com",
//     projectId: "dotqwdtls",
//     storageBucket: "dotqwdtls.appspot.com",
//     messagingSenderId: "374863944922",
//     appId: "1:374863944922:web:3025e1648144afe89fd9e3",
//     measurementId: "G-NWB5LL551K"
//   };
//   firebase.initializeApp(firebaseConfig);


  function loadingtime() {
  var qtload = Math.floor(Math.random() * 4);
    let timerInterval;
  document.getElementById("loadDiv").style.display="block";
//   Swal.fire({
//   title: 'DOT',
//   html: '<img width="80%" height="auto" src="assets/img/loading.gif"><br>',
//   timer: 2000,
//   timerProgressBar: true,
//   allowEscapeKey: false,
//   allowOutsideClick: false,
//   onBeforeOpen: () => {
//     Swal.showLoading()
//     timerInterval = setInterval(() => {
//       const content = Swal.getContent()
//       if (content) {
//         const b = content.querySelector('b')
//         if (b) {
//           //b.textContent = Swal.getTimerLeft()
//         }
//       }
//     }, 100)
//   },
//   onClose: () => {
//     clearInterval(timerInterval);
//     //document.getElementById("mainbody").style.display = "block";
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below 
//   if (result.dismiss === Swal.DismissReason.timer) {
//     initskip();
//   }*/
// })
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
var dname = snap.child("dname").val();
var dphone = snap.child("dphone").val();
var dtnow = snap.child("dtnow").val();
console.log(user + " - " + ordid);

if(orderstatus == 11 || orderstatus == 22){
    var backg = 'one';
}
if(orderstatus == 24){
    var backg = 'two';
}
if(orderstatus == 19 || orderstatus == 29 || orderstatus == 28){
    var backg = 'three';
}
if(orderstatus == 11 || orderstatus == 22){
    var pickbtn = 'one';
}
if(orderstatus == 24 || orderstatus == 28 || orderstatus == 23 || orderstatus == 29 || orderstatus == 19){
    var pickbtn = 'two';
}

if(!products.includes("sp2lt")){
  t_body = '<td>' + products + '</td><td>' + qtys + '</td><td>' + prices + '</td>'
}
else{
  for (var ij = qtys.split("sp2lt").length - 1; ij >= 0; ij--) {
    t_body =t_body + '<tr><td>' + products.split("sp2lt")[ij] + '</td><td>' + qtys.split("sp2lt")[ij] + '</td><td>' + prices.split("sp2lt")[ij] + '</td></tr>';
    }
  
}
if(orderstatus != 28 || orderstatus != 29 || orderstatus == 19){
    $("#allordercard").append('<div class="card card--' + backg + '"><p class="card__number">Order No.: ' + ordid +'</p><center><hr style="width: 50%"></center><br><div class="card__info"><p class="card__amount"><b>OTP: </b> ' + dotp + '</p><p class="card__amount"><b>Delivery Person: </b> ' + dname + ' <u onclick="calldboy(\'call' + dphone + '\')"> +91 ' + dphone + '</u></p><p class="card__amount"><b>Date: </b> ' + dtnow + '</p></div><br><table class="tab_report"><tr><th>Product</th><th>Quantity</th><th>Price</th></tr><tbody>' + t_body + '</tbody></table><center><div class="card__info"><p class="card__integral"><button class="opc' + pickbtn + '" data-ordid="' + ordid + '" data-uid="' + user + '" onclick="calldboy(' + dphone + ')">Call Delivery Person</button></p></div></center></div>');
}
t_body = "";

});
document.getElementById("loadDiv").style.display="none";
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
