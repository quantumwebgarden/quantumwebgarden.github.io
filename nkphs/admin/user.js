var cnt = 0;
var producttype = "";
var deliverytype = "";
var cls = "";
var cnt = 0;
function fldtls() {
    $("#table_body").empty();
    //fixedData();
    slctupd();
    allData();
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


// function fixedData(){
// var rootRef = firebase.database().ref();
// rootRef.on("child_added", snap => {
// var maxAllow = snap.child("maxAllow").val();
// if(maxAllow != "null"){}
// $("#maxallowed").val(maxAllow);
// });
// }
function allData(){

var rootRef = firebase.database().ref('fees');
rootRef.on("child_added", snap => {
var fee = snap.child("fee").val();
var fine = snap.child("fine").val();
var id = snap.child("id").val();
if(id == document.getElementById("clsslct").value){
$("#fee").val(fee);
$("#fine").val(fine);
}
});
var rootRef = firebase.database().ref('item/package/BENG');
rootRef.on("child_added", snap => {
var books_bag = snap.child("books_bag").val();
var books_only = snap.child("books_only").val();
var deliveryCharge = snap.child("deliveryCharge").val();
var stock = snap.child("stock").val();
var id = snap.child("id").val();
if(id == document.getElementById("clsslct").value){
$("#BENGbooks_bag").val(books_bag);
$("#BENGbooks_only").val(books_only);
$("#BENGdeliveryCharge").val(deliveryCharge);
$("#BENGstock").val(stock);
}
});
var rootRef = firebase.database().ref('item/package/HINDI');
rootRef.on("child_added", snap => {
var books_bag = snap.child("books_bag").val();
var books_only = snap.child("books_only").val();
var deliveryCharge = snap.child("deliveryCharge").val();
var stock = snap.child("stock").val();
var id = snap.child("id").val();
if(id == document.getElementById("clsslct").value){
$("#HINDIbooks_bag").val(books_bag);
$("#HINDIbooks_only").val(books_only);
$("#HINDIdeliveryCharge").val(deliveryCharge);
$("#HINDIstock").val(stock);
}
});

}




function slctupd(){
var rootRef = firebase.database().ref('item/stationary/');
rootRef.on("child_added", snap => {
var id = snap.child("id").val();
var name = snap.child("name").val();
var price = snap.child("price").val();
var remarks = snap.child("remarks").val();
var stock = snap.child("stock").val();
var removebtn = '<button onclick="removeStationary(\'' + id + '\')" class="button">Delete Item</button>';
var updatestock = '<button onclick="updateStock(\'' + id + '\')" class="button">Update Stock</button>'
$("#table_body").append("<tr id='" + id + "'><td>" + name + "</td><td>" + price + "</td><td>" + remarks + "</td><td><input type=\"number\" id=\"stock" + id + "\" value=\"" + stock + "\"><br>" + updatestock + "</td><td>" + removebtn + "</td></tr>");
});
}
function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of item added to Stationary = " + rowCount +"");
}

function updatemaxallow(){
    firebase.database().ref("SPDate").update({maxAllow:document.getElementById("maxallowed").value});
}
function updateServiceCharge(){
    firebase.database().ref("item/charge").update({service:document.getElementById("serviceCharge").value});
}
function updatefees() {
    firebase.database().ref("fees/" + document.getElementById("clsslct").value).update({fee:document.getElementById("fee").value,fine:document.getElementById("fine").value});
}
function bengPackage() {
    firebase.database().ref("item/package/BENG/" + document.getElementById("clsslct").value).update({books_bag:document.getElementById("BENGbooks_bag").value,books_only:document.getElementById("BENGbooks_only").value,deliveryCharge:document.getElementById("BENGdeliveryCharge").value,stock:document.getElementById("BENGstock").value});
}
function hindiPackage() {
    firebase.database().ref("item/package/HINDI/" + document.getElementById("clsslct").value).update({books_bag:document.getElementById("HINDIbooks_bag").value,books_only:document.getElementById("HINDIbooks_only").value,deliveryCharge:document.getElementById("HINDIdeliveryCharge").value,stock:document.getElementById("HINDIstock").value});
}
function addStationary() {
    var currTime = new Date().getTime();
    firebase.database().ref("item/stationary/" + currTime).update({id:currTime,name:document.getElementById("itemName").value,price:document.getElementById("itemPrice").value,remarks:document.getElementById("itemRemarks").value,stock:document.getElementById("itemStock").value});
}
function removeStationary(x) {
    firebase.database().ref("item/stationary/" + x).remove();
    document.getElementById(x).style.display = "none";
}
function updateStock(x){
    firebase.database().ref("item/stationary/" + x).update({stock:document.getElementById("stock" + x).value});
}