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
let urlString = window.location.href;
var parameters = location.search.substring(1).split("=");


function getAllProduct() {
var rootRef = firebase.database().ref('items');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var name = snap.child("name").val();
var qty = snap.child("quantity").val();
var rate = snap.child("rate").val();
var rateUpdate = "<button class='upd' onclick='updateRate(" + id + ")'>Update Rate</button>";
var qtyUpdate = "<button class='upd' onclick='updateQty(" + id + ")'>Update Stock</button>";
var removeItem = "<button class='rmv' onclick='removeItem(" + id + ")'>Remove Item</button>";
cntid++;
  $("#stockReport").append('<tr id="item' + id + '"><td>' + id + '</td><td>' + name + '</td><td><input type="number" id="irate' + id + '" value="' + rate + '"><br>' + rateUpdate + '</td><td><input type="number" id="iqty' + id + '" value="' + qty + '"><br>' + qtyUpdate + '</td><td>' + removeItem + '</td></tr>');
  });
}

function getAllItems() {
var rootRef = firebase.database().ref('items');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var name = snap.child("name").val();
var qty = snap.child("quantity").val();
var rate = snap.child("rate").val();
  $("#itemReport").append('<tr><td>' + id + '</td><td>' + name + '</td><td>' + rate + '</td><td>' + qty + '</td></tr>');
  });
}


function removeItem(x){
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("items/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Your product has been deleted.',
      'success'
    )
    document.getElementById('item' + x).style.display="none";
  }
})
}

function updateRate(x){
  Swal.fire({
  title: 'Are you sure?',
  text: "Your item details will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, update it!'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("items/" + x).update({rate:document.getElementById('irate' + x).value});
    Swal.fire(
      'Updated!',
      'Your item details has been updated.',
      'success'
    )
    //document.getElementById('irate' + x).style.display="none";
  }
})
}


function updateQty(x){
  Swal.fire({
  title: 'Are you sure?',
  text: "Your item details will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, update it!'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("items/" + x).update({quantity:document.getElementById('iqty' + x).value});
    Swal.fire(
      'Updated!',
      'Your item details has been updated.',
      'success'
    )
    //document.getElementById('irate' + x).style.display="none";
  }
})
}


function getRangeOrder() {
var rootRef = firebase.database().ref('orders');

rootRef.on("child_added", snap => {

var custName = snap.child("customerName").val();
var custPhone = snap.child("customerPhone").val();
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
var custPhone = "<a href='tel:" + custPhone + "'>" + custPhone + "</a>";
var orderTimings = snap.child("orderTimings").val();
var line="<table class='innerTable'><tr><th>Id</th><th>Name</th><th>Quantity</th><th>Price</th></tr><tbody>";
var endLine = "<tr class='lastTr'><td colspan='2'>Total: </td><td>" + quantityTotal + "</td><td>" + totalPrice + "</td></tr></tbody></table>";
 for (var i = 0; i < nameList.length; i++) {
   line = line + "<tr><td>" + idList[i] + "</td><td>" + nameList[i] + "</td><td>" + quantityList[i] + "</td><td>" + priceList[i] + "</td></tr>";
   }
var finalLine=line + endLine;
var removeLine = "<button class='rmv' onclick='removeOrder(" + orderId + ")'>Remove</button>";
  
if(new Date(parameters[1]).getTime()<new Date(orderTimings).getTime() && Number(new Date(parameters[2]).getTime())+Number(86400000)>new Date(orderTimings).getTime()){
$("#orderReport").append('<tr id="order' + orderId + '"><td><u>' + orderId + '</u></td><td><b>' + orderDate + '<br>' + orderTime + '</b></td><td><b>' + custName + '<br>(' + custPhone + ')</b></td><td>' + finalLine + '</td><td>' + removeLine + '</td></tr>');
}
});

}

function getAllOrder() {
var rootRef = firebase.database().ref('orders');

rootRef.on("child_added", snap => {

var custName = snap.child("customerName").val();
var custPhone = snap.child("customerPhone").val();
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
var custPhone = "<a href='tel:" + custPhone + "'>" + custPhone + "</a>";

var line="<table class='innerTable'><tr><th>Id</th><th>Name</th><th>Quantity</th><th>Price</th></tr><tbody>";
var endLine = "<tr class='lastTr'><td colspan='2'>Total: </td><td>" + quantityTotal + "</td><td>" + totalPrice + "</td></tr></tbody></table>";
 for (var i = 0; i < nameList.length; i++) {
   line = line + "<tr><td>" + idList[i] + "</td><td>" + nameList[i] + "</td><td>" + quantityList[i] + "</td><td>" + priceList[i] + "</td></tr>";
   }
var finalLine=line + endLine;
var removeLine = "<button class='rmv' onclick='removeOrder(" + orderId + ")'>Remove</button>";
  $("#orderReport").append('<tr id="order' + orderId + '"><td><u>' + orderId + '</u></td><td><b>' + orderDate + '<br>' + orderTime + '</b></td><td><b>' + custName + '<br>(' + custPhone + ')</b></td><td>' + finalLine + '</td><td>' + removeLine + '</td></tr>');
});

}


var dateArray = "";
var totalDateSale = 0;
var cntid = 0;
function getAllSale() {
var rootRef = firebase.database().ref('orders');

rootRef.on("child_added", snap => {

var custName = snap.child("customerName").val();
var custPhone = snap.child("customerPhone").val();
var orderId = snap.child("orderId").val();
var orderDate = snap.child("orderDate").val();
var orderTime = snap.child("orderTime").val();
var totalPrice = snap.child("totalPrice").val();
var custPhone = "<a href='tel:" + custPhone + "'>" + custPhone + "</a>";

if (dateArray.length>1 && dateArray.includes(orderDate)) {
  totalDateSale=Number(totalDateSale) + Number(totalPrice);
  $("#total" + cntid).remove();
}
else{
  totalDateSale = totalPrice;
  dateArray+="," + orderDate;
}
cntid++;
  $("#orderReport").append('<tr><td><u>' + orderId + '</u></td><td><b>' + orderDate + '<br>' + orderTime + '</b></td><td><b>' + custName + '<br>(' + custPhone + ')</b></td><td>' + totalPrice + '</td></tr>');
  $("#orderReport").append('<tr id="total' + cntid + '" class="lastTr"><td colspan="3">Total(' + orderDate + '): </td><td>' + totalDateSale + '</td></tr>');
});
}


var dateRangeArray = "";
var totalRangeDateSale = 0;
var cntidR = 0;
function getRangeSale() {
var rootRef = firebase.database().ref('orders');

rootRef.on("child_added", snap => {

var custName = snap.child("customerName").val();
var custPhone = snap.child("customerPhone").val();
var orderId = snap.child("orderId").val();
var orderDate = snap.child("orderDate").val();
var orderTime = snap.child("orderTime").val();
var totalPrice = snap.child("totalPrice").val();
var custPhone = "<a href='tel:" + custPhone + "'>" + custPhone + "</a>";
var orderTimings = snap.child("orderTimings").val();
if (dateRangeArray.length>1 && dateRangeArray.includes(orderDate)) {
  totalRangeDateSale=Number(totalRangeDateSale) + Number(totalPrice);
  $("#total" + cntidR).remove();
}
else{
  totalRangeDateSale = totalPrice;
  dateRangeArray+="," + orderDate;
}
cntidR++;
if(new Date(parameters[1]).getTime()<new Date(orderTimings).getTime() && Number(new Date(parameters[2]).getTime())+Number(86400000)>new Date(orderTimings).getTime()){
  $("#orderReport").append('<tr><td><u>' + orderId + '</u></td><td><b>' + orderDate + '<br>' + orderTime + '</b></td><td><b>' + custName + '<br>(' + custPhone + ')</b></td><td>' + totalPrice + '</td></tr>');
  $("#orderReport").append('<tr id="total' + cntidR + '" class="lastTr"><td colspan="3">Total(' + orderDate + '): </td><td>' + totalRangeDateSale + '</td></tr>');
}
});
}



  // function removeOrder(orderId){
  //   alert(orderId);
  // }
  function logIn() {
    if($('#loginUsername').val() == "admin" &&  $('#loginPassword').val() == "admin" ){
      alert("done");
    }
    else{
      alert("Error");
    }
  }

  function removeOrder(x){
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("orders/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Your product has been deleted.',
      'success'
    )
    document.getElementById('order' + x).style.display="none";
  }
})
}

function checkDate(){
  if(new Date('08-13-2022 23:49:37').getTime()>new Date('08-13-2022 23:47:24').getTime()){
alert("less");
}
else{
alert("not");
}
}