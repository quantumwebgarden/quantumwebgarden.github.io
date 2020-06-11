var catm = 0;
var cnt = 0;
var x = "ALL";
var y = "";
var u = "7894561230";
var t = "22.12542";
var g = "88.195623";
var dtimes = ["5 Minutes","10 Minutes","15 Minutes","20 Minutes","25 Minutes","30 Minutes","45 Minutes","1 Hour","Out of Delivery Area"];
var ditems = ["foods","medicine","grocery","essentials"];
var delgb = ["3","6","5","7"];
var dshorts = ["fds","mdc","grc","est"];

function fldtls() {/*
    strm = document.getElementById("strmslct").value;
    srt = document.getElementById("srtslct").value;
    var sel =document.getElementById('srtslct');
    $("#clsdtls").html("Details of Students applied for <b>" + strm + " </b><br>Sorted by <b> " + sel.options[sel.selectedIndex].text + " </b>");
    if (sel.options[sel.selectedIndex] != 2) {
        catm = 0;
    }
    else{catm = 1;}
    cnt = 0;
    $("#table_body").empty();
    */
    
    slctupd("ALL","price");
    }        

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

//var fln = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

$(document).ready(chkmulti(),
//any function by putting a , after last 2nd bracket
);
function chkmulti() {
    if(fln == 1){
        foodshp();
        medicineshp();
        groceryshp();
        essentialsshp();
        foodnxt();
        mednxt();
        grcnxt();
        estnxt();
    }
    else if(fln == 2){
        singledtls(elid);
    }
}

function foodshp(){

var rootRef = firebase.database().ref('shopfoods');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var posopt = snap.child("posopt").val();
var neuopt = snap.child("neuopt").val();
var negopt = snap.child("negopt").val();
var optcnt = posopt + neuopt + negopt;
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();

if (x == "ALL") {
$("#fdsshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + '<br><i>Usually prepare foods within ' + processtime + ' minutes</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}

});
}
function medicineshp(){

var rootRef = firebase.database().ref('shopmedicine');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var posopt = snap.child("posopt").val();
var neuopt = snap.child("neuopt").val();
var negopt = snap.child("negopt").val();
var optcnt = posopt + neuopt + negopt;
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();

if (x == "ALL") {
$("#mdcshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + '<br><i>' + processtime + '</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}

});
}
function groceryshp(){

var rootRef = firebase.database().ref('shopgrocery');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var posopt = snap.child("posopt").val();
var neuopt = snap.child("neuopt").val();
var negopt = snap.child("negopt").val();
var optcnt = posopt + neuopt + negopt;
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();

if (x == "ALL") {
$("#grcshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + '<br><i>' + processtime + '</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}

});
}
function essentialsshp(){

var rootRef = firebase.database().ref('shopessentials');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var posopt = snap.child("posopt").val();
var neuopt = snap.child("neuopt").val();
var negopt = snap.child("negopt").val();
var optcnt = posopt + neuopt + negopt;
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();

if (x == "ALL") {
$("#estshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + '<br><i>' + processtime + '</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}

});
}

/*48795623


48771623
49395623
48795073
*/
function foodnxt(){

var rootRef = firebase.database().ref('foods');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtimechk = distance(shoplat,shoplang,t,g,"K");
if(dtimechk > Number(delgb[ditems.indexOf("foods")])){dtimechk = 8}
var dtime = dtimes[dtimechk.toFixed(0)];
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var thumb = snap.child("thumb").val();
var img = snap.child("img").val();
var pricerev = snap.child("pricerev").val();
var desc = snap.child("desc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);
var tagsr = snap.child("tagsr").val();
var shopid = snap.child("shopid").val();
/*
var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');
*/

if (x = "ALL") {
$("#fds").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"foodsA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"foodsA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"foods/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
$("#" + shopid + "shp").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"foodsA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"foodsA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"foods/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycntshp\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vwshp\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtysshp\"> 0 </span></li>");

}


});
}
/*
$(document).ready(*/
    //function slctupd(x,y,u,t,g){}
function mednxt(){

var rootRef = firebase.database().ref('medicine');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtimechk = distance(shoplat,shoplang,t,g,"K");
if(dtimechk > Number(delgb[ditems.indexOf("medicine")])){dtimechk = 8}
var dtime = dtimes[dtimechk.toFixed(0)];
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var thumb = snap.child("thumb").val();
var img = snap.child("img").val();
var pricerev = snap.child("pricerev").val();
var desc = snap.child("desc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);
var tagsr = snap.child("tagsr").val();
var shopid = snap.child("shopid").val();


if (x == "ALL") {
$("#mdc").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"medcineA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"medcineA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"medicine/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
$("#" + shopid + "shp").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"medicineA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"medicineA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"medicine/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycntshp\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vwshp\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtysshp\"> 0 </span></li>");

}

});

}

function grcnxt(){

var rootRef = firebase.database().ref('grocery');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtimechk = distance(shoplat,shoplang,t,g,"K");
if(dtimechk > Number(delgb[ditems.indexOf("grocery")])){dtimechk = 8}
var dtime = dtimes[dtimechk.toFixed(0)];
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var thumb = snap.child("thumb").val();
var img = snap.child("img").val();
var pricerev = snap.child("pricerev").val();
var desc = snap.child("desc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);
var tagsr = snap.child("tagsr").val();
var shopid = snap.child("shopid").val();


if (x == "ALL") {
$("#grc").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"groceryA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"groceryA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"grocery/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
$("#" + shopid + "shp").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"groceryA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"groceryA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"grocery/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycntshp\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vwshp\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtysshp\"> 0 </span></li>");

}

});

}


function estnxt(){

var rootRef = firebase.database().ref('essentials');

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtimechk = distance(shoplat,shoplang,t,g,"K");
if(dtimechk > Number(delgb[ditems.indexOf("essentials")])){dtimechk = 8}
var dtime = dtimes[dtimechk.toFixed(0)];
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var thumb = snap.child("thumb").val();
var img = snap.child("img").val();
var pricerev = snap.child("pricerev").val();
var desc = snap.child("desc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);
var tagsr = snap.child("tagsr").val();
var shopid = snap.child("shopid").val();


if (x == "ALL") {
$("#est").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"essentialsA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"essentialsA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"essentials/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
$("#" + shopid + "shp").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"essentialsA_9" + shopid + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"essentialsA_9" + shopid + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"essentials/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycntshp\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vwshp\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtysshp\"> 0 </span></li>");

}

});

}


function singledtls(x){
var cntdt = 0;
var cntvw = 0;
var sngitem = x.split("A_9");
var str1 ="img";
var str2 =["0","1","2","3"];
itemid = sngitem[0];
itemtag = sngitem[1];
itemcat = sngitem[2];
itemshopid = sngitem[3];
var rootRef = firebase.database().ref(itemcat);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtimechk = distance(shoplat,shoplang,t,g,"K");
if(dtimechk > Number(delgb[ditems.indexOf(itemcat)])){dtimechk = 8}
var dtime = dtimes[dtimechk.toFixed(0)];
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var thumb = snap.child("thumb").val();
var img = snap.child("img").val();
var pricerev = snap.child("pricerev").val();
var desc = snap.child("desc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);
var tagsr = snap.child("tagsr").val();
var shopid = snap.child("shopid").val();
var rcntvw = snap.child("rcntvw").val();
var dotpriority = snap.child("dotpriority").val();


if(id == itemid){
    
    document.getElementById("imgsng").src = img;
    document.getElementById("namesng").innerHTML = name;
    document.getElementById("shopsng").innerHTML = shopname;
    document.getElementById("catsng").innerHTML = cat;
    document.getElementById("descsng").innerHTML = desc;
    document.getElementById("pricesng").innerHTML = "₹ " + price + " <span>₹ " + priceshp + "</span>";
    document.getElementById("dtmesng").innerHTML = "<i class=\"dtsng" + dtimechk.toFixed(0) + "\">Delivery Time : " + dtime + "</i><br>";
    document.getElementById("cartsng").innerHTML = "<a data-price=" + price + "data-itemid=" + id + "data-itemname=" + name + "data-pic=" + thumb + "data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"doit(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a>";
    
}

var tagmatch = itemsrch(itemtag,tagsr);
if (Number(tagmatch) > 0 && id != itemid) {
$("#rld").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"" + itemcat + "/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
}
if (shopid == itemshopid) {
$("#shpall").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"" + itemcat + "/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
}

if(rcntvw.includes(id) && id != itemid && cntvw < 20){
$("#rcnt").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"" + itemcat + "/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");  
cntvw ++;
}
if(dotpriority > 290 && cntdt < 30){
$("#bstsell").append("<li class=\"dtf" + dtimechk.toFixed(0) + "\"><img src=\"" + thumb + "\" onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\"><h3 onclick=\"sngl(this)\" data-sid=\"" + id + "\" data-stag=\"" + tagsr + "\" data-sname=\"" + itemcat + "A_9" + shopname + "\">" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a onclick=\"fvfd(this)\" class=\"example_fav " + favchk + "\" data-fvl=\"" + favlst + "\" data-itemid=\"" + itemcat + "/" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"> Add</i></a><a class=\"example_dl_vd\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + img + "\" data-qty=\"0\" data-shopname=\"" + shopname + "\" data-shoploc=\"" + shopaddr + "\" data-desc=\"" + desc + "\" data-ratings=\"" + finalrat + "\"  id=\"" + id + "vw\"onclick=\"vw(this)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");  
cntdt ++;
}


});

}


function itemsrch(x,y) {
    var filter, ul, li, a, i, txtValue;
    var a = y.toUpperCase();
    var b = x.toUpperCase().split(" ");
    var flagsrs = 0;
        for (j = 0; j < b.length; j++) {
            if(a.includes(b[j]) || b[j].toUpperCase().indexOf(a) > -1){
                flagsrs ++ ;
            }
        }
        return flagsrs; 
    }



function sngl(x) {
    var sng = [];
    sng[0] = x.getAttribute('data-sid');
    sng[1] = x.getAttribute('data-stag');
    sng[2] = x.getAttribute('data-sname');
    localStorage.setItem('el_id', sng[0] + 'A_9' + sng[1] + 'A_9' + sng[2]);
    window.open("single.html");
}


function favchkf(x,y) {
    z = "act";
    zz = "";
  var n = x.includes(y + "splt");
  if(n == 1){return z;}
  else{return zz;}
}

function fvfd(x) {
    if(x.classList.contains("act")){
        x.classList.remove("act");
        
        firebase.database().ref(x.getAttribute("data-itemid")).update({favlst:x.getAttribute("data-fvl").replace(u + 'splt','')});
    }
    else{
        x.classList.add("act");
        firebase.database().ref(x.getAttribute("data-itemid")).update({favlst:(x.getAttribute("data-fvl").replace(u + 'splt','')).concat(u + 'splt')});
    }
}



function dtmcal(st,sg,ut,ug) {
    insd = "10 min";
    lowd = "20 min";
    mid = "30 min";
    hid = "50 min";
    nod = "Out of Delivery Range";
    var dstn = distance(st,sg,ut,ug,'K');
    if(dstn<3){
        return insd;
    }
    else if(dstn<6){
        return lowd;
    }
    else if(dstn<9){
        return mid;
    }
    else if(dstn<12){
        return hid;
    }
    else{
        return nod;
    }
}

function adc(x) {
            dlt();
            var date = new Date();
            var timestamp = date.getTime();
            var cartid = new Date("12/31/2099").getTime() - timestamp;
            if(ids.includes(x.getAttribute('data-itemid'))){
                firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(x.getAttribute('data-itemid'))]).update({tmst:tmsts[ids.indexOf(x.getAttribute('data-itemid'))],id: x.getAttribute('data-itemid'),typ:'main',qnty: Number(x.getAttribute('data-qty')) + 1});
                //x.setAttribute('data-qty', Number(qtys[ids.indexOf(x.getAttribute('data-itemid'))]) + 1);
            }
            else{
                firebase.database().ref(u + "/cart/" + cartid).update({tmst:cartid, id: x.getAttribute('data-itemid'),typ:'main', qnty: Number(x.getAttribute('data-qty')) + 1});
                //x.setAttribute('data-qty', 1);
            }


            if(Number(x.getAttribute('data-qty')) == 1){
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'visible';
            }
            
        }
function rmv(x) {
            dlt();
            firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(x.getAttribute('data-itemid'))]).update({tmst:tmsts[ids.indexOf(x.getAttribute('data-itemid'))],id: x.getAttribute('data-itemid'),typ:'main',qnty: Number(x.getAttribute('data-qty')) - 1});
            x.setAttribute('data-qty', Number(x.getAttribute('data-qty')) - 1);
            if(Number(x.getAttribute('data-qty')) <= 1){
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'hidden';
            }
            else{
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'visible';
            }
            
        }
function dlt() {
            /*
            var rootRef = firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(lstid)]).on("child_added", snap => {

                var lmd = snap.child("typ").val();

            });
            */
            /*$("#loading_cart").css("display","block");$("#ld_bd").css("display","none");
            setTimeout(function() { $("#loading_cart").css("display","none");$("#ld_bd").css("display","block"); }, 1000);*/
            document.getElementById('undobtn').classList.remove('cd-cart__undo--visible');
            if(document.querySelectorAll('cd-cart__product--deleted').length>0){
                firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(document.querySelectorAll('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id'))]).remove();
                document.getElementById('undobtn').classList.remove('cd-cart__undo--visible');
            }
            
            
        }
function vw(x) {
    viewrelated(x);
Swal.fire({
  title: x.getAttribute('data-itemname'),
  text: '',
  background: 'rgb(184, 222, 227)',
  backdrop: 'rgba(0,0,123,0.4)',
  html:'<p class="vwir">' + x.getAttribute('data-desc') + '</p><b class="vwbr">Price: ₹ ' +
    x.getAttribute('data-price') + '</b><br> <i class="vwir">' +
    x.getAttribute('data-shopname') + '</i> - <i class="vwir">' +
    x.getAttribute('data-shoploc') + '</i><br> Ratings: ' + 
    x.getAttribute('data-ratings') + ' <i class=\"fa fa-star alst\" aria-hidden=\"true\"></i>',
  imageUrl: x.getAttribute('data-pic'),
  imageWidth: 400,
  imageAlt: x.getAttribute('data-itemname'),
  confirmButtonText:
    '<i class="fa fa-shopping-cart" aria-hidden="true"></i> <a data-price="' + x.getAttribute('data-price') + '"  data-itemid="' + x.getAttribute('data-itemid') + '" data-itemname="' + x.getAttribute('data-itemname') + '" data-pic="' + x.getAttribute('data-thumb') + '" data-qty="' + x.getAttribute('data-qty') + '" id="' + x.getAttribute('data-itemid') + 'vs" onclick="adc(this)">Add to Cart</a>',
  showCancelButton: true,
  focusConfirm: false,
  cancelButtonText:
    '<i class="fa fa-times-circle"> Close</i>',
  customClass: {
      title: 'sweet_title_ip',
    }
})
}
function viewrelated(x) {
    console.log(x.getAttribute('data-itemname'));
    //medrl();
    //foodrel();
}