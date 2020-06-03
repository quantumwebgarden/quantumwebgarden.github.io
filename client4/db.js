var catm = 0;
var cnt = 0;
var x = "ALL";
var y = "";
var u = "7894561230";
var t = "22.12542";
var g = "88.195623";



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



$(document).ready(function dofirst(){

var rootRef = firebase.database().ref('foods');

rootRef.on("child_added", snap => {

var foodid = snap.child("foodid").val();
var foodcat = snap.child("foodcat").val();
var foodname = snap.child("foodname").val();
var dad = snap.child("dad").val();
var lastmodify = snap.child("lastmodify").val();
var modifycnt = snap.child("modifycnt").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var dtime = dtmcal(shoplat,shoplang,t,g);
var price = snap.child("price").val();
var priceshp = snap.child("priceshp").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var finalrat = (rating / ratcnt).toFixed(1);
var foodthumb = snap.child("foodthumb").val();
var foodimg = snap.child("foodimg").val();
var pricerev = snap.child("pricerev").val();
var fooddesc = snap.child("fooddesc").val();
var favlst = snap.child("favlst").val();
var favchk = favchkf(favlst,u);

/*
var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');
*/

if (x == "ALL") {
$("#fds").append("<li><img src=\"" + foodthumb + "\"><h3>" + foodname + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + fooddesc + "</p><a class=\"example_fav " + favchk + "\" data-itemid=\"" + foodid + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + foodid + "\" data-itemname=\"" + foodname + "\" data-pic=\"" + foodthumb + "\" data-qty=\"0\" id=\"" + foodid + "qtycnt\"onclick=\"adc(this)\">Add to Cart</a><span class=\"qtymdl\" id=\"" + foodid + "qtys\"> 0 </span></li>");
}

});
}
//any function by putting a , after last 2nd bracket
);

/*
$(document).ready(*/
    //function slctupd(x,y,u,t,g){}
 


function favchkf(x,y) {
    z = "act";
    zz = "";
  var n = x.includes(y + "splt");
  if(n == 1){return z;}
  else{return zz;}
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
            var date = new Date();
            var timestamp = date.getTime();
            var cartid = timestamp;
            if(ids.includes(x.getAttribute('data-itemid'))){
                firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(x.getAttribute('data-itemid'))]).update({tmst:tmsts[ids.indexOf(x.getAttribute('data-itemid'))], qnty: Number(x.getAttribute('data-qty')) + 1});
                //x.setAttribute('data-qty', Number(qtys[ids.indexOf(x.getAttribute('data-itemid'))]) + 1);
            }
            else{
                firebase.database().ref(u + "/cart/" + cartid).update({tmst:cartid, foodid: x.getAttribute('data-itemid'), qnty: Number(x.getAttribute('data-qty')) + 1});
                //x.setAttribute('data-qty', 1);
            }


            if(Number(x.getAttribute('data-qty')) == 1){
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'visible';
            }

            
        }
function rmv(x) {
            firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(x.getAttribute('data-itemid'))]).update({tmst:tmsts[ids.indexOf(x.getAttribute('data-itemid'))], qnty: Number(x.getAttribute('data-qty')) - 1});
            x.setAttribute('data-qty', Number(x.getAttribute('data-qty')) - 1);
            if(Number(x.getAttribute('data-qty')) <= 1){
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'hidden';
            }
            else{
                document.getElementById('minus' + x.getAttribute('data-itemid')).style.visibility = 'visible';
            }
        }

