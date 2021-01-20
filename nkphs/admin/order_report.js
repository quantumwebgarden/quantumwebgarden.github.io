var cnt = 0;
var producttype = "";
var deliverytype = "";
var cls = "";
var cnt = 0;
function fldtls() {

    cls = document.getElementById("clsslct").value;
    producttype =document.getElementById('productslct').value;
    deliverytype =document.getElementById('deliveryslct').value;
    $("#clsdtls").html("Details of order placed by students of <b>" +  $("#clsslct option:selected").text() + "</b><br>Sorted by <b>" + $("#productslct option:selected").text() + "</b> and <b>" + $("#deliveryslct option:selected").text() + "</b>");
    cnt = 0;
    $("#table_body").empty();
    getAllUser();
    }        

 var config = {
    apiKey: "AIzaSyCSoiDuslBP3AsGgA7tNT1Bq02XB8wEGe8",
    authDomain: "nkphs2020.firebaseapp.com",
    databaseURL: "https://nkphs2020-default-rtdb.firebaseio.com",
    projectId: "nkphs2020",
    storageBucket: "nkphs2020.appspot.com",
    messagingSenderId: "876141817104",
    appId: "1:876141817104:web:2bfb5de3f60265d3128995",
    measurementId: "G-BQCBG9T67D"
   };
   firebase.initializeApp(config);            

function getAllUser(){
var rootRef = firebase.database().ref('user');
rootRef.on("child_added", snap => {
    var userid = snap.child("id").val();
    if(snap.child("order").exists()){
    console.log(snap.child("order").val());
        slctupd(userid);
    }

});
}
function slctupd(x){

var rootRef = firebase.database().ref('user/' + x + '/order');

rootRef.on("child_added", snap => {

cnt ++;
var orderid = snap.child("orderID").val();
var name = snap.child("name").val();
var stdclass = snap.child("class").val();
var section = snap.child("section").val();
var roll  = snap.child("roll").val();
var prtype = snap.child("productType").val();
var orderdescription = snap.child("description").val();
var price = snap.child("price").val();
var paymentmethod = snap.child("paymentMethod").val();
var paymentID = snap.child("paymentID").val();
var dltype = snap.child("deliveryType").val();
var deliveryaddress = snap.child("deliveryAddress").val();
var phone = snap.child("phone").val();
var pincode = snap.child("PINCode").val();
var orderdate = "21/01/2021";

var updbtn = '<button onclick="" class="button">Update Order</button>';
var removebtn = '<button onclick="" class="button">Delete Order</button>';

if(cls == "ALL"){
    if(producttype == "ALL"){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
    else if(prtype == producttype){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
}
else if(cls == stdclass){
    if(producttype == "ALL"){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
    else if(prtype == producttype){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dltype + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
}
});


}
function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of order placed with selected category = " + rowCount +"");
}