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
var dtime = dtmcal(shoplat,shoplang,t,g);
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

/*
var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');
*/

if (x == "ALL") {
$("#fds").append("<li><img src=\"" + thumb + "\"><h3>" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a class=\"example_fav " + favchk + "\" data-itemid=\"" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\">Add to Cart</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
}

});
},mednxt(),
//any function by putting a , after last 2nd bracket
);

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
var dtime = dtmcal(shoplat,shoplang,t,g);
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


if (x == "ALL") {
$("#mdc").append("<li><img src=\"" + thumb + "\"><h3>" + name + "<b class=\"dt\"><span>" + finalrat + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i><br><i class=\"trat\">(" + ratcnt + ")</i></span></b></h3><h4> ₹ " + price + " <span>₹ " + priceshp + "</span></h4><p class=\"dl_tm\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;" + dtime + "</p><h5>" + shopname + " <span><i class=\"fas fa-map-marker-alt\"></i> " + shopaddr + "</span></h5><p>" + desc + "</p><a class=\"example_fav " + favchk + "\" data-itemid=\"" + id + "\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a><a class=\"example_dl cd-add-to-cart js-cd-add-to-cart\" data-price=\"" + price + "\"  data-itemid=\"" + id + "\" data-itemname=\"" + name + "\" data-pic=\"" + thumb + "\" data-qty=\"0\" id=\"" + id + "qtycnt\"onclick=\"adc(this)\">Add to Cart</a><span class=\"qtymdl\" id=\"" + id + "qtys\"> 0 </span></li>");
}

});

}


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
            dlt();
            var date = new Date();
            var timestamp = date.getTime();
            var cartid = timestamp;
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
            document.getElementById('undobtn').classList.remove('cd-cart__undo--visible');
            if(document.querySelectorAll('cd-cart__product--deleted').length>0){
                firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(document.querySelectorAll('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id'))]).remove();
                document.getElementById('undobtn').classList.remove('cd-cart__undo--visible');
            }
            
            
        }
        /*
function dlt(){
    // definitively removed a product from the cart (undo not possible anymore)
            var deletedProduct = document.querySelectorAll('cd-cart__product--deleted');
            console.log(deletedProduct[0]);
            if(deletedProduct.length > 0 ) {
            var ctid = document.querySelectorAll('.cd-cart__product--deleted')[0].getAttribute('data-ctid');

            var fdSid = cartList.getElementsByClassName('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id');
            document.getElementById(fdSid + "qtys").innerHTML = '0';
            document.getElementById(fdSid + "qtys").style.display = 'none';
            document.getElementById(fdSid + "qtys").style.color = 'black';
            ids[ids.indexOf(fdSid)]= '';
            qtys[ids.indexOf(fdSid)]= '';
            tmsts[ids.indexOf(fdSid)]= '';
            document.getElementById(fdSid + "qtycnt").setAttribute('data-qty', 0);
            upd = fdSid;

            var smj = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
            document.getElementById('cartcntside').innerText = smj;

            var userRef = firebase.database().ref(u + '/cart/' + ctid).remove();
                deletedProduct[0].remove();
            }
}
*/
