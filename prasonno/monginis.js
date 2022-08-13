   const firebaseConfig = {
    apiKey: "AIzaSyAcN9zqFr-eEryjJLeMlkSYfAaOVco-f7Y",
    authDomain: "prasonno2021.firebaseapp.com",
    databaseURL: "https://prasonno2021-default-rtdb.firebaseio.com",
    projectId: "prasonno2021",
    storageBucket: "prasonno2021.appspot.com",
    messagingSenderId: "343069271365",
    appId: "1:343069271365:web:fae86f3d91ed1895d7ca2c",
    measurementId: "G-SHYKKHR3YQ"
  };
  firebase.initializeApp(firebaseConfig);
  function getAllProduct(){

  }
function getAllOrder() {
var rootRef = firebase.database().ref('orders');

rootRef.on("child_added", snap => {

var orderId = snap.child("orderId").val();
var orderDate = snap.child("orderDate").val();
var orderTime = snap.child("orderTime").val();
var billedby = snap.child("billedby").val();
var priceList = snap.child("priceList").val().split(",");
var quantityTotal = snap.child("quantityList").val().split(",").reduce((a, b) => Number(a) + Number(b), 0);
var quantityList = snap.child("quantityList").val().split(",");
var nameList = snap.child("nameList").val().split(",");
var idList = snap.child("idLst").val().split(",");
var totalPrice = snap.child("totalPrice").val();


var line="<table class='innerTable'><tr><th>Id</th><th>Name</th><th>Quantity</th><th>Price</th></tr><tbody>";
var endLine = "<tr class='lastTr'><td colspan='2'>Total: </td><td>" + quantityTotal + "</td><td>" + totalPrice + "</td></tr></tbody></table>";
 for (var i = 0; i < nameList.length; i++) {
   line = line + "<tr><td>" + idList[i] + "</td><td>" + nameList[i] + "</td><td>" + quantityList[i] + "</td><td>" + priceList[i] + "</td></tr>";
   }
var finalLine=line + endLine;
var removeLine = "<button class='rmv' onclick='removeOrder(" + orderId + ")'>Remove</button>";
  $("#orderReport").append('<tr><td><u>' + orderId + '</u></td><td><b>' + orderDate + '</b></td><td><b>' + orderTime + '</b></td><td>' + billedby + '</td><td>' + finalLine + '</td><td>' + removeLine + '</td></tr>');
});

  }
  function removeOrder(orderId){
    alert(orderId);
  }
  function logIn() {
    if($('#loginUsername').val() == "admin" &&  $('#loginPassword').val() == "admin" ){
      alert("done");
    }
    else{
      alert("Error");
    }
  }