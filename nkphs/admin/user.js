var cnt = 0;
var producttype = "";
var deliverytype = "";
var cls = "";
var cnt = 0;
function fldtls() {
    $("#table_body").empty();
    adminUpdate();
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


function allData(){
document.getElementById("BENG_report").style.display = "none";
document.getElementById("HINDI_report").style.display = "none";
document.getElementById("Bengnewbook").style.display = "none";
document.getElementById("Hindinewbook").style.display = "none";
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
var rootRef = firebase.database().ref('item/adminPackage/BENG');
rootRef.on("child_added", snap => {
var books_bag = snap.child("books_bag").val();
var books_only = snap.child("books_only").val();
var deliveryCharge = snap.child("deliveryCharge").val();
var stock = snap.child("stock").val();
var id = snap.child("id").val();
var ready = snap.child("ready").val();
if(id == document.getElementById("clsslct").value){
$("#BENGbooks_bag").val(books_bag);
$("#BENGbooks_only").val(books_only);
$("#BENGdeliveryCharge").val(deliveryCharge);
$("#BENGstock").val(stock);
if(ready == 1){
    $('#BENGready').attr('checked', true);
}
else{
    $('#BENGready').attr('checked', false);
}
//getBengBook("BNEG",id);
}
});
var rootRef = firebase.database().ref('item/adminPackage/HINDI');
rootRef.on("child_added", snap => {
var books_bag = snap.child("books_bag").val();
var books_only = snap.child("books_only").val();
var deliveryCharge = snap.child("deliveryCharge").val();
var stock = snap.child("stock").val();
var id = snap.child("id").val();
var ready = snap.child("ready").val();
if(id == document.getElementById("clsslct").value){
$("#HINDIbooks_bag").val(books_bag);
$("#HINDIbooks_only").val(books_only);
$("#HINDIdeliveryCharge").val(deliveryCharge);
$("#HINDIstock").val(stock);
if(ready == 1){
    $('#HINDIready').attr('checked', true);
}
else{
    $('#HINDIready').attr('checked', false);
}
//getHindiBook("HINDI",id);
}
});

}
function getAllBook(x){
var cnt = 0;
var totalprice = 0;
var y = document.getElementById("clsslct").value;
$("#" + x + "_body").empty();
var rootRef = firebase.database().ref("item/adminPackage/"+ x + "/" + y + "/books");
console.log("item/adminPackage/"+ x + "/" + y + "/books");
rootRef.on("child_added", snap => {
var id = snap.child("id").val();
var sub = snap.child("sub").val();
var name = snap.child("name").val();
var price = snap.child("price").val();
var quantity = snap.child("quantity").val();
totalprice = totalprice + Number(price);

var removebtn = '<button onclick="removeBook(\'' + id + '\',\'' + x + '\',\'' + y + '\')" class="button">Delete Book</button>';
var updatebtn = '<button onclick="updateBook(\'' + id + '\',\'' + x + '\',\'' + y + '\')" class="button">Update</button>';

$("#" + x + "_body").append("<tr id='package" + id + x + "'><td>" + id + "</td><td><input type=\"text\" id=\"sub" + id + "splt" + x + "splt" + y + "\" value=\"" + sub + "\"></td><td><input type=\"text\" id=\"name" + id + "splt" + x + "splt" + y + "\" value=\"" + name + "\"></td><td><input type=\"number\" id=\"price" + id + "splt" + x + "splt" + y + "\" value=\"" + price + "\"></td><td><input type=\"number\" id=\"quantity" + id + "splt" + x + "splt" + y + "\" value=\"" + quantity + "\"></td><td>" + updatebtn + "</td><td>" + removebtn + "</td></tr>");
cnt ++;
if(cnt>0){
    document.getElementById(x + "_report").style.display = "block";
}
});
if($("#" + x + "books_only").val() != totalprice){
    Swal.fire(
  'NKPHS',
  "Package price is different from booklist. Total Price according to booklist is(Books Only) :" + totalprice,
  'info'
);
}
if(x == "BENG"){
    document.getElementById("Bengnewbook").style.display = "block";
}
else if(x == "HINDI"){
    document.getElementById("Hindinewbook").style.display = "block";
}
}

function adminUpdate(){
firebase.database().ref('SPDate').once('value').then((snapshot) => {
var maxAllow = (snapshot.child("maxAllow").val());
$("#maxallowed").val(maxAllow);
});
firebase.database().ref('item/charge').once('value').then((snapshot) => {
var serviceCharge = (snapshot.child("service").val());
$("#serviceCharge").val(serviceCharge);
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
var updatestock = '<button onclick="updateStock(\'' + id + '\')" class="button">Update Stock</button>';
$("#table_body").append("<tr id='" + id + "'><td>" + name + "</td><td>" + price + "</td><td>" + remarks + "</td><td><input type=\"number\" id=\"stock" + id + "\" value=\"" + stock + "\"><br>" + updatestock + "</td><td>" + removebtn + "</td></tr>");
});
}
function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of item added to Stationary = " + rowCount +"");
}

function updatemaxallow(){
    Swal.fire({
  title: 'Are you sure?',
  text: "Number of students max allow will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("SPDate").update({maxAllow:document.getElementById("maxallowed").value});
    Swal.fire(
      'Updated!',
      'Number of students max allow is updated.',
      'success'
    )
  }
})
    
}
function updateServiceCharge(){
     Swal.fire({
  title: 'Are you sure?',
  text: "Self Pickup with COD facility Service Charge will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("item/charge").update({service:document.getElementById("serviceCharge").value});
    Swal.fire(
      'Updated!',
      'Service Charge updated.',
      'success'
    )
  }
})
    
}


function updateBooklistMode(){
    Swal.fire({
  title: 'Are you sure?',
  text: "Self Pickup with COD facility Service Charge will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("admin/booklist/live").update({type:document.getElementById("booklistMode").value});
    Swal.fire(
      'Updated!',
      'Book List View Mode updated.',
      'success'
    )
  }
})
    
}

function updatefees() {
    Swal.fire({
  title: 'Are you sure?',
  text: "Fees & Fine Charge for Class " + document.getElementById('clsslct').value + " will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("fees/" + document.getElementById("clsslct").value).update({fee:document.getElementById("fee").value,fine:document.getElementById("fine").value});
    Swal.fire(
      'Updated!',
      'Fees updated.',
      'success'
    )
  }
});
    
}
function bengPackage() {
    Swal.fire({
  title: 'Are you sure?',
  text: "Package Details including price, Stock & Delivery Charge will be updated for Class: " + document.getElementById("clsslct").value + "and Second Language :Bengali",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    var checkBox = document.getElementById("BENGready");
    if (checkBox.checked == true){
    ready = 1;
    } else {
    ready = 0;
    }
    firebase.database().ref("item/adminPackage/BENG/" + document.getElementById("clsslct").value).update({books_bag:document.getElementById("BENGbooks_bag").value,books_only:document.getElementById("BENGbooks_only").value,deliveryCharge:document.getElementById("BENGdeliveryCharge").value,stock:document.getElementById("BENGstock").value,ready:ready});
    Swal.fire(
      'Updated!',
      'Package Details Updated.',
      'success'
    )
  }
});

}
function hindiPackage() {
    Swal.fire({
  title: 'Are you sure?',
  text: "Package Details including price, Stock & Delivery Charge will be updated for Class: " + document.getElementById("clsslct").value + "and Second Language :Hindi",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    var checkBox = document.getElementById("HINDIready");
    if (checkBox.checked == true){
    ready = 1;
    } else {
    ready = 0;
    }
    firebase.database().ref("item/adminPackage/HINDI/" + document.getElementById("clsslct").value).update({books_bag:document.getElementById("HINDIbooks_bag").value,books_only:document.getElementById("HINDIbooks_only").value,deliveryCharge:document.getElementById("HINDIdeliveryCharge").value,stock:document.getElementById("HINDIstock").value,ready:ready});

    Swal.fire(
      'Updated!',
      'Package Details Updated.',
      'success'
    )
  }
});
}
function addStationary() {
Swal.fire({
  title: 'Are you sure?',
  text: "New item will be added to Stationary List.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    var currTime = new Date().getTime();
    firebase.database().ref("item/stationary/" + currTime).update({id:currTime,name:document.getElementById("itemName").value,price:document.getElementById("itemPrice").value,remarks:document.getElementById("itemRemarks").value,stock:document.getElementById("itemStock").value});
    Swal.fire(
      'Updated!',
      'New Item Added.',
      'success'
    )
  }
});
    
}
function removeStationary(x) {
            Swal.fire({
  title: 'Are you sure?',
  text: "Selected item will be removed from Stationary List.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Remove'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("item/stationary/" + x).remove();
    document.getElementById(x).style.display = "none";
    Swal.fire(
      'Deleted!',
      'Item Removed.',
      'success'
    )
  }
});
    
}
function updateStock(x){
Swal.fire({
  title: 'Are you sure?',
  text: "Stock will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("item/stationary/" + x).update({stock:document.getElementById("stock" + x).value});
    Swal.fire(
      'Updated!',
      'Stock Updated.',
      'success'
    )
  }
});
    
}

function updateBook(x,y,z){
    Swal.fire({
  title: 'Are you sure?',
  text: "Book Details of Class " + z +" - Second Language " + y + " will be updated.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("item/adminPackage/" + y + "/" + z + "/books/" + x).update({price:document.getElementById("price" + x + "splt" + y + "splt" + z).value,name:document.getElementById("name" + x + "splt" + y + "splt" + z).value,sub:document.getElementById("sub" + x + "splt" + y + "splt" + z).value,quantity:document.getElementById("quantity" + x + "splt" + y + "splt" + z).value});
    Swal.fire(
      'Updated!',
      'Book Details Updated.',
      'success'
    )
  }
});
}
function removeBook(x,y,z) {
Swal.fire({
  title: 'Are you sure?',
  text: "Book will be removed.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Remove'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("item/adminPackage/" + y + "/" + z + "/books/" + x).remove();
    document.getElementById("package" + x + y).style.display = "none";
    Swal.fire(
      'Removed!',
      'Book removed.',
      'success'
    )
  }
});
    
}

function addNewBook(x){
var y = document.getElementById("clsslct").value;
Swal.fire({
  title: 'Are you sure?',
  text: "New book will be added to class: " + y + " Second Language: " + x + "category of Book List.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update'
}).then((result) => {
  if (result.isConfirmed) {

    firebase.database().ref("item/adminPackage/" + x + "/" + y + "/books/" + document.getElementById(x + "newbookid").value).update({id:document.getElementById(x + "newbookid").value,price:document.getElementById(x + "newbookprice").value,name:document.getElementById(x + "newbookname").value,sub:document.getElementById(x + "newbooksub").value,quantity:document.getElementById(x + "newbookquantity").value});
    Swal.fire(
      'Updated!',
      'New Item Added.',
      'success'
    )
  }
});

    
}
