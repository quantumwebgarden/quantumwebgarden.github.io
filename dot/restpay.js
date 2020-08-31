var mcname = "";
var mcaddr = "";
var mclat = "";
var mclang = "";
var mcpin = "";
var mcid = "";
var mctype = "";
var prtype = "";
var prid = "";
var today = "";
var mcstatus = "";
var mcshare = 10;
var stocker = ["","checked"];
var payst = ["Unpaid","Paid"];

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
  firebase.analytics();     

function getuid() {
    var parameters = location.search.substring(1).split("=");
    mcid = parameters[1];
	mctype = parameters[2];
	prtype = mctype.substring(4, mctype.length);
	console.log(mcid + " - " + mctype);
	var date = new Date();
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
    var timestamp = date.getTime();
    prid = new Date("12/31/2099").getTime() - timestamp;
	getmcdtls(mctype,mcid);

}



function getmcdtls(mctype,mcid){

var rootRef = firebase.database().ref(mctype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();

if(id == mcid){
  $("#mcname").html(shopname);
  mcname = shopname;
  
  //$("#checkstatus").html('<input type="checkbox" ' + stocker[mcstatus] + ' data-val="' + mcstatus + '" id="shst' + id + '" onclick="shopchange(this)"><span class="slider"></span>');
  getallorders(mcid);
} 
/*if (x == "ALL") {
$("#fdsshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + ' &nbsp;<span class="' + shopstatus + '"></span><br><i>Usually prepare foods within ' + processtime + ' minutes</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}*/
});
}



function getallorders(mcid){
  var rootRef = firebase.database().ref("allshop/" + mcid + "/orders");

rootRef.on("child_added", snap => {

var id = snap.child("id").val();

var orderstatus = snap.child("orderstatus").val();
var dtnow = snap.child("dtnow").val();
var prices = snap.child("prices").val();
var qtys = snap.child("qtys").val();
var products = snap.child("products").val();

if(products.includes("sp2lt")){
  products = products.split("sp2lt").join("<br>");
  prices = snap.child("prices").val().split("sp2lt").join("<br>");
  qtys = snap.child("qtys").val().split("sp2lt").join("<br>");
}


var paystatus = snap.child("paystatus").val();
var paystatus = payst[paystatus];
/*
var smj = prices.reduce(function(a, b){
            return a + b;
            }, 0);
var prices = prices + " = " + smj;
var smjq = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
var qtys = qtys + " = " + smjq;
  */
  if(orderstatus == 23){
$("#allitems").append('<tr><td>' + dtnow + '</td><td>' + id + '</td><td>' + products + '</td><td>' + prices + '</td><td>' + qtys + '</td><td>' + paystatus + '</td></tr>');
  }

});
}

function shopchange(x){
  var shid = x.id;
  shid = shid.substring(4,shid.length);
  var oldst = document.getElementById(x.id).getAttribute("data-val");
  var newst = Number(1 - Number(oldst)); 
  console.log(newst);
  document.getElementById(x.id).setAttribute("data-val", newst);
  firebase.database().ref(mctype + "/" + shid).update({shopstatus:newst});
  updateallitems(shid,newst);
}

function productchange(x){
  var prid = x.id;
  prid = prid.substring(4,prid.length);
  var oldst = document.getElementById(x.id).getAttribute("data-val");
  var newst = Number(1 - Number(oldst)); 
  console.log(newst);
  document.getElementById(x.id).setAttribute("data-val", newst);
  firebase.database().ref(prtype + "/" + prid).update({stock:newst});
}

function updateallitems(x,y){
  var rootRef = firebase.database().ref(prtype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopid = snap.child("shopid").val();
if(shopid == x){
  firebase.database().ref(prtype + "/" + id).update({shopstatus:y});
} 

});
}