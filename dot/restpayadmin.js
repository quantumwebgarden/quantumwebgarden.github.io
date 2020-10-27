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
var mcshare = 0;
var stocker = ["","checked"];
var payst = ["Unpaid","Paid"];

var firebaseConfig = {
    apiKey: "AIzaSyA7wly3NvCF90pJFs7a9kMBl-eXHJvXYw4",
    authDomain: "dotqwdtls.firebaseapp.com",
    databaseURL: "https://dotqwdtls.firebaseio.com",
    projectId: "dotqwdtls",
    storageBucket: "dotqwdtls.appspot.com",
    messagingSenderId: "374863944922",
    appId: "1:374863944922:web:3025e1648144afe89fd9e3",
    measurementId: "G-NWB5LL551K"
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
var shareamount = snap.child("shareamount").val();
var phone = snap.child("phone").val();
if(id == mcid){
  $("#mcname").html(shopname);
  mcname = shopname;
  mcshare = shareamount;
  $("#sharep").html("Share: " + shareamount + " %");
  //$("#callp").html('Phone No.: <u onclick="calldboy(\'call' + phone + '\')">' + phone + '</u>');
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
var payst = stocker[paystatus];
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
$("#allitems").append('<tr><td>' + dtnow + '</td><td>' + id + '</td><td>' + products + '</td><td>' + prices + '</td><td>' + qtys + '</td><td><label class="switch"><input type="checkbox" ' + payst + ' id="prst' + id + '" data-val="' + paystatus + '" onchange="paychange(this)"><span class="slider round"></span></label></td></tr>');
  }
});
}

function paychange(x){
  var prid = x.id;
  prid = prid.substring(4,prid.length);
  var oldst = document.getElementById(x.id).getAttribute("data-val");
  var newst = Number(1 - Number(oldst)); 
  console.log(newst);
  document.getElementById(x.id).setAttribute("data-val", newst);
  //console.log("allshop/" + mcid + "/orders/" + prid);
  firebase.database().ref("allshop/" + mcid + "/orders/" + prid).update({paystatus:newst});
}


function getduebalance(){
  var sumall = 0;
  var percamt = 0;
  var chkdt = document.getElementById("datetxt").value;
  var rootRef = firebase.database().ref("allshop/" + mcid + "/orders");

rootRef.on("child_added", snap => {

var id = snap.child("id").val();

var orderstatus = snap.child("orderstatus").val();
var dtnow = snap.child("dtnow").val();
var prices = snap.child("prices").val();
var products = snap.child("products").val();


if(products.includes("sp2lt")){
  prices = snap.child("prices").val().split("sp2lt");
  //console.log(prices);
  var smj = prices.reduce(function(a, b){
            return Number(a) + Number(b);
            }, 0);
  //console.log(smj);
}
var paystatus = snap.child("paystatus").val();
var payst = stocker[paystatus];

  if(orderstatus == 23 && chkdt == dtnow){
    if(products.includes("sp2lt")){
      var sum = prices.reduce(function(a, b){
            return Number(a) + Number(b);
            }, 0);
      sumall = Number(sumall) + Number(sum);
    }
    else{
      sumall = Number(sumall) + Number(prices);
    }
    console.log(sumall);
    percamt = Number(sumall* Number(100 - Number(mcshare))/100).toFixed(2);
    firebase.database().ref("zpayshop/" + mcid + "/" + dtnow.split("/").join("-")).update({sellamount:sumall,payamount:percamt,shid:mcid,paydt:dtnow});

  }

});

Swal.fire(
  'DOT',
  'Sell Amount = ' + sumall + ' And Pay Amount = ' + percamt,
  'info'
    );
}

