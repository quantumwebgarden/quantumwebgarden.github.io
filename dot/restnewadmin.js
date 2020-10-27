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
var mcphone = "";

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
var shopphone = snap.child("phone").val();
if(id == mcid){
  $("#mcname").html(shopname);
  mcname = shopname;
  mcaddr = shopaddr;
  mclat = shoplat;
  mclang = shoplang;
  mcpin = dpincode;
  mcstatus = shopstatus;
  mcshare = shareamount;
  mcphone = shopphone;
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
    	if(document.getElementById("pic").value==""){
    		document.getElementById("pic").value="noimg.jpg";
    	}
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
		shopname:mcname,
		shopaddr:mcaddr,
		shoplat:mclat,
		shoplang:mclang,
		shopphone:mcphone,
		shopstatus:mcstatus,
		dpincode:mcpin,
		price:Number(document.getElementById("price").value),
		priceshp:Number(document.getElementById("priceshp").value),
		priceoffer:Number(document.getElementById("price").value),
		rating:0,
		ratcnt:0,
		img:document.getElementById("pic").value,
		thumb:document.getElementById("pic").value,
		pricerev:Number(5000 - Number(document.getElementById("price").value)),
		desc:document.getElementById("desc").value,
		favlst:"splt",
		tagsr:document.getElementById("name").value + " " + mcname,
		shopid:mcid,
		rcntvw:"splt",
		dotpri:Number(2000 - Number(document.getElementById("dotpri").value)),
		dotprirev:Number(10000 - Number(2000 - Number(document.getElementById("dotpri").value))),
		stock:0,
		weight:Number(document.getElementById("weight").value)
		});
}
