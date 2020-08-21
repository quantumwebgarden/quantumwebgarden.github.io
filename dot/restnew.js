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
	prtype = mctype.substr(4, mctype.length);
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
  $("#mcname").val(shopname);
  mcname = shopname;
  mcaddr = shopaddr;
  mclat = shoplat;
  mclang = shoplang;
  mcpin = dpincode;
  mcstatus = shopstatus;
  mcshare = shareamount;
} 

/*if (x == "ALL") {
$("#fdsshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + ' &nbsp;<span class="' + shopstatus + '"></span><br><i>Usually prepare foods within ' + processtime + ' minutes</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}*/



});
}

function chkall() {

	if(document.getElementById("name").value===""){
   swal("Oops..","Enter Product Name","error");
   document.getElementById("name").focus();}
 	else if(document.getElementById("desc").value===""){
   swal("Oops..","Enter Product Description","error");
   document.getElementById("desc").focus();}
   	else if(document.getElementById("category").value==="" || document.getElementById("category").value==="NA"){
   swal("Oops..","Enter Product Category","error");
   document.getElementById("category").focus();}
    else if(document.getElementById("price").value===""){
   swal("Oops..","Enter Product Price","error");
   document.getElementById("price").focus();}
   else if(document.getElementById("dotpri").value===""){
   swal("Oops..","Enter Product Priority","error");
   document.getElementById("dotpri").focus();}
    else{
    	mcnewadd();
	    swal("Success","Item Details Successfully Submitted","success");
	location.reload();
    }
}

function mcnewsave() {
	firebase.database().ref(prtype + "/" + prid).update({tmst:cartid, id: x.getAttribute('data-itemid'),typ:'main', qnty: Number(x.getAttribute('data-qty')) + 1,shptype: x.getAttribute('data-itemtype')});
}

function mcnewadd(){
	firebase.database().ref(prtype + "/" + prid).set({
		id:prid,
		cat:document.getElementById("category").value,
		name:document.getElementById("name").value,
		dad:today,
		lastmodify:today,
		modifycnt:1,
		shopname:mcname,
		shopaddr:mcaddr,
		shoplat:mclat,
		shoplang:mclang,
		shopstatus:mcstatus,
		dpincode:mcpin,
		price:Number(document.getElementById("price").value),
		priceshp:Number(document.getElementById("price").value),
		rating:"4.0",
		ratcnt:1,
		pricerev:Number(2000 - Number(document.getElementById("price").value)),
		desc:document.getElementById("desc").value,
		favlst:"8768626927splt",
		tagsr:document.getElementById("name").value + " " + mcname,
		shopid:mcid,
		rcntvw:"8768626927splt",
		dotpri:Number(2000 - Number(document.getElementById("dotpri").value))

		});
}
