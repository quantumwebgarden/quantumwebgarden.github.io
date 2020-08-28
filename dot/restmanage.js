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
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();
var shopstatus = snap.child("shopstatus").val();
var shareamount = snap.child("shareperc").val();
if(id == mcid){
  $("#mcname").html(shopname);
  mcname = shopname;
  mcaddr = shopaddr;
  mclat = shoplat;
  mclang = shoplang;
  mcpin = dpincode;
  mcstatus = shopstatus;
  $("#checkstatus").html('<input type="checkbox" ' + stocker[mcstatus] + ' id="shst' + id + '"  onchange="shopchange(this)"><span class="slider"></span>');
  getallitems(mcid,prtype);
} 
/*if (x == "ALL") {
$("#fdsshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + ' &nbsp;<span class="' + shopstatus + '"></span><br><i>Usually prepare foods within ' + processtime + ' minutes</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}*/
});
}

function getallitems(mcid,prtype){
  var rootRef = firebase.database().ref(prtype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var name = snap.child("name").val();
var shopid = snap.child("shopid").val();
var price = snap.child("priceshp").val();
var stockst = snap.child("stock").val();
var stock = stocker[stockst];
if(shopid == mcid){
  
$("#allitems").append('<tr><td>' + id + '</td><td>' + name + '</td><td>' + price + '</td><td><label class="switch"><input type="checkbox" ' + stock + ' id="prst' + id + '"  onchange="productchange(this)"><span class="slider round"></span></label></td></tr>');
  
} 

});
}

function shopchange(x){
  var shid = x.id;
  shid = shid.substring(4,shid.length);
  alert(shid + " - " + x.value);
  //firebase.database().ref("").update({rcntvw: sng[3].concat(u + "splt")});
}

function productchange(x){
  var prid = x.id;
  prid = prid.substring(4,prid.length);
  alert(prid);
}