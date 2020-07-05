var removedItem,
sum = 0;
var cnt = 0;
var ids = [];
var qtys = [];
var tmsts = [];
var lstid = "";
var lstqty = "";
var u = "";
var uname = "";
var uphone = "";
var uemail = "";
var ulat = "";
var ulang = "";
var uadrid = "";
var upin = "";
var totalquantity = 0;
var totalprice = 0;
var dtimes = ["5 Minutes","10 Minutes","15 Minutes","20 Minutes","25 Minutes","30 Minutes","45 Minutes","1 Hour","Out of Delivery Area"];
var ditems = ["foods","medicine","grocery","essentials"];
var delgb = ["6","7","5","7"];
var dchargearray = ["0","7","10","13","15","20","22","25","30","35"];
var dflag = 0;
var dchtotal = 0;
var pricetotal = 0;
var discounttotal = 0;
var flagpch = 0;
var pcodefinal = "";
var grandtotalall = 0;
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


$(function () {
  // calculate the values at the start
  calculatePrices();

  // Click to remove an item
  $(document).on("click", "a.remove", function () {
    removeItem.apply(this);
  });

  // Undo removal link click
  $(document).on("click", ".removeAlert a", function () {
    // insert it into the table
    addItemBackIn();
    //remove the removal alert message
    hideRemoveAlert();
  });

  $(document).on("change", "input.quantity", function () {
    var val = $(this).val(),
    pricePer,
    total;

    if (val <= "0") {
      removeItem.apply(this);
    } else {
      // reset the prices
      sum = 0;

      // get the price for the item
      pricePer = $(this).parents("td").prev("td").text();
      // set the pricePer to a nice, digestable number
      pricePer = formatNum(pricePer);
      // calculate the new total
      total = parseFloat(val * pricePer).toFixed(2);
      // set the total cell to the new price
      $(this).parents("td").siblings(".itemTotal").text("$" + total);

      // recalculate prices for all items
      calculatePrices();
    }
  });

});



function removeItem() {
  // store the html
  removedItem = $(this).closest("tr").clone();
  // fade out the item row
  $(this).closest("tr").fadeOut(500, function () {
    $(this).remove();
    sum = 0;
    calculatePrices();
  });
  // fade in the removed confirmation alert
  $(".removeAlert").fadeIn();

  // default to hide the removal alert after 5 sec
  setTimeout(function () {
    hideRemoveAlert();
  }, 5000);
}

function hideRemoveAlert() {
  $(".removeAlert").fadeOut(500);
}

function addItemBackIn() {
  sum = 0;
  $(removedItem).prependTo("table.items tbody").hide().fadeIn(500);
  calculatePrices();
}

function updateSubTotal() {
  $("table.items td.itemTotal").each(function () {
    var value = $(this).text();
    // set the pricePer to a nice, digestable number
    value = formatNum(value);

    sum += parseFloat(value);
    $("table.pricing td.subtotal").text("$" + sum.toFixed(2));
  });
}

function addTax() {
  var tax = parseFloat(sum * 0.05).toFixed(2);
  $("table.pricing td.tax").text("$" + tax);
}

function calculateTotal() {
  var subtotal = $("table.pricing td.subtotal").text(),
  tax = $("table.pricing td.tax").text(),
  shipping = $("table.pricing td.shipping").text(),
  total;

  subtotal = formatNum(subtotal);
  tax = formatNum(tax);
  shipping = formatNum(shipping);

  total = (subtotal + tax + shipping).toFixed(2);

  $("table.pricing td.orderTotal").text("$" + total);
}

function calculatePrices() {
  updateSubTotal();
  addTax();
  calculateTotal();
}

function formatNum(num) {
  return parseFloat(num.replace(/[^0-9-.]/g, ''));
}

function loadtime(){
  var parameters = location.search.substring(1).split("=");
  u = parameters[1];
  elid = parameters[2];
  lat = parameters[3];
  lang = parameters[4];
  locst = parameters[5];
  console.log(u + "," + lat);
  userdtls(u);
  chkcart(u,ulat,ulang,upin);
}


function userdtls(u){
    var rootRef = firebase.database().ref('user');

rootRef.on("child_added", snap => {

var uuid = snap.child("id").val();
var uuname = snap.child("name").val();
var uuphone = snap.child("phone").val();
var uumail = snap.child("email").val();
var sltadd = snap.child("sltadd").val();

console.log(uuid);
if(uuid == u){
    uname = uuname;
    uphone = uuphone;
    uemail = uumail;
    uid_add(u,sltadd);
}

});

rootRef.on("child_changed", snap => {

var uuid = snap.child("id").val();
var uuname = snap.child("name").val();
var uuphone = snap.child("phone").val();
var uumail = snap.child("email").val();
var sltadd = snap.child("sltadd").val();

console.log(uuid);
if(uuid == u){
    uname = uuname;
    uphone = uuphone;
    uemail = uumail;
    uid_add(u,sltadd);
}


});

}

function uid_add(x,y) {
    console.log(x + "," + y);
    var rootRef = firebase.database().ref('user/' + x + '/address');

rootRef.on("child_added", snap => {

var adrid = snap.child("id").val();
var adrdtl = snap.child("dtl").val();
var adrpin = snap.child("PIN").val();
var adrlang = snap.child("lang").val();
var adrlat = snap.child("lat").val();

//rmvalloptions();

if(adrid == y){
    ulat = adrlat;
    ulang = adrlang;
    upin = adrpin;
    uadrid = adrid;
    $("#alladdr").append("<option value=\"" + adrid+ "\" selected>" + adrdtl + "</option>");
}
else{
  $("#alladdr").append("<option value=\"" + adrid+ "\">" + adrdtl + "</option>");
}



});
}

function addrchange(x){
  y = document.getElementById("alladdr").value;
  firebase.database().ref("user/" + u).update({sltadd:y});
  location.reload(); 
}





function chkcart(x) {
            var rootRef = firebase.database().ref(x + '/cart');

            rootRef.on("child_added", snap => {

            var id = snap.child("id").val();
            var qnty = snap.child("qnty").val();
            var ctid = snap.child("tmst").val();
            var lmd = snap.child("typ").val();
            var itype = snap.child("shptype").val();
            

            if(!ids.includes(id) && lmd!="temp"){
                ids[cnt] = id;
            qtys[cnt] = qnty;
            tmsts[cnt] = ctid;
            console.log(ids[cnt] + ", " + qtys[cnt] + ", " + tmsts[cnt]);
            
            chkfoods(id,qnty,ctid,itype);
            cnt += 1;
        }
        });

        }

        function chkfoods(y,z,m,typ) {
            var rootRef = firebase.database().ref(typ);

            rootRef.on("child_added", snap => {

            var id = snap.child("id").val();
            var eachprice = snap.child("price").val();
            var name = snap.child("name").val();
            var shopname = snap.child("shopname").val();
            var thumb = snap.child("thumb").val();
            var shoplat = snap.child("shoplat").val();
            var shoplang = snap.child("shoplang").val();
            var dpincode = snap.child("dpincode").val();
            var dtimechk = distance(shoplat,shoplang,ulat,ulang,"K");
              if(dtimechk > Number(delgb[ditems.indexOf(typ)]) || !dpincode.includes(upin)){dtimechk = 8}
            var dtime = dtimes[dtimechk.toFixed(0)];
            var price = snap.child("price").val();
            var priceshp = snap.child("priceshp").val();

            if(id == y){
            price = eachprice * z;
            pricetotal = pricetotal + price;

            additem(m,price,eachprice,id,name,thumb,z,typ,shopname,dtime);

            var dcharge = Number(dchargecal(m,price,z,dtimechk));
            dchtotal = dchtotal + dcharge;
            
            calculateall();
        }
        });
                      
        }
        function additem(timestamp,price,itemeachprice,itemid,itemname,itempic,itemqty,itemtyp,itemshopname,itemdtime){
          $('#bonusitems').append('<li id="' + timestamp + '" class="item"><div class="item-main cf"><div class="item-block ib-info cf"><img class="product-img" src="' + itempic + '" /><div class="ib-info-meta"><span class="title">' + itemname+ '</span><span class="itemno">' + itemshopname + '</span></div></div><div class="item-block ib-qty"><input type="text" readonly value="' + itemqty + '" class="qty" /><span class="price"><span>x</span> ' + itemeachprice + '</span></div><div class="item-block ib-total-price"><span class="tp-price">₹' + price + '</span></div></div><br><div class="item-foot cf"><div class="if-left"><span class="if-status">' + itemdtime + '</span></div><div class="if-right"><span class="red-link" data-itemst="' + timestamp + '" onclick="removeitemc(this)">REMOVE</span></div></div></li>');
          totalprice = totalprice + price;
          totalquantity = totalquantity + itemqty;
        }

function calculateall(argument) {
  document.getElementById("itemsub").innerHTML = "₹ " + pricetotal.toFixed(2);
  document.getElementById("itemdc").innerHTML = "₹ " + dchtotal.toFixed(2);
  document.getElementById("itemdisc").innerHTML = "₹ " + discounttotal.toFixed(2);
  var grandtotal = Number(pricetotal) + Number(dchtotal) - Number(discounttotal);
  document.getElementById("itemgrand").innerHTML = "₹ " + grandtotal.toFixed(2);
  grandtotalall = Math.round(grandtotal).toFixed(2);
}

function dchargecal(tm,price,qty,dtime) {
  var dcr = 0;
  if(dtime!=8){
    if(qty > 10){
      if (price > 300) {
        dcr = (Number(dchargearray[1])*dtime).toFixed(2);console.log(dcr);
      }
      else{
        dcr = (Number(dchargearray[1])*(dtime/qty)).toFixed(2);console.log(dcr);
      }
    }
    else{
      if (price > 300) {
        dcr = (Number(dchargearray[1])*dtime).toFixed(2);console.log(dcr);
      }
      else{
        dcr = (Number(dchargearray[1])*dtime).toFixed(2);console.log(dcr);
      }
    }
  }
  else{
    dflag = 1;
    $("#" + tm).addClass("oda");
    dcr = 0;console.log(dcr);
    $("#removeline").addClass("showme");

  }
  
  return dcr;
}

function removeitemc(x){
  var ctid = x.getAttribute("data-itemst");
  firebase.database().ref(u + "/cart/" + ctid).update({typ:'temp'});
  location.reload();
}

function pcodecheck(){
  var pflag = 0;
  discounttotal = 0;
  var appliedp = document.getElementById("pcode").value;
  if(appliedp != ""){
  
  var rootRef = firebase.database().ref("pcodes");

    rootRef.on("child_added", snap => {

    var pid = snap.child("id").val();
    var flat = snap.child("flat").val();
    var per = snap.child("per").val();
            
    if(pid == appliedp){
       discounttotal = Number((pricetotal*per/100)+flat);
       pflag = 1;
       chkflg(pflag,appliedp);
       return true;
    }

  });
    chkflg(pflag,appliedp);

  }
  else{
    Swal.fire(
  'DOT',
  'Enter promocode and Apply',
  'error'
);
  }
}

function chkflg(a,x) {
  if(a == 0){
      document.getElementById("pinvalid").style.display = "block";
      discounttotal = 0;
      calculateall();
    }
    else{
      document.getElementById("pinvalid").style.display = "none";
      calculateall();
      pcodefinal = x;
    }  
}

function distance(lat1, lon1, lat2, lon2, unit) {

    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        //unit ="K";
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
}

function chkordertotal(){
  if(dflag == 0){
    if(grandtotalall < 120){
    Swal.fire({
  title: '<strong><i>Choose to Proceed</i></strong>',
  icon: 'info',
  html:
    'Order amount of less than<b>120</b>, ' +
    'is eligible for Pay On Delivery',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<b onclick="placepod()"><i class="fa fa-money" aria-hidden="true"></i> Pay On Delivery</b>',
  //confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<b onclick="placeorder()"><i class="fa fa-credit-card" aria-hidden="true"></i> Pay Online</b>',
  //cancelButtonAriaLabel: 'Thumbs down'
})
  }
  else{
    Swal.fire({
  title: '<strong><i>Pay Online</i></strong>',
  icon: 'info',
  html:
    'Order amount of less than<b>120</b>, ' +
    'is eligible for Pay On Delivery',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
  confirmButtonText:
    '<b onclick="placeorder()"><i class="fa fa-credit-card" aria-hidden="true"></i> Pay Online</b>',
  //confirmButtonAriaLabel: 'Thumbs up, great!',
  
})
  }
  }
  else{
    Swal.fire(
  'DOT',
  'Remove all items marked as Out of Delivery Area to prooceed',
  'error'
);
  }
  
}

function placeorder() {
  var date = new Date();
  var timestamp = date.getTime();
  var ordid = new Date("12/31/2099").getTime() - timestamp;
  firebase.database().ref(u + "/order/" + ordid).update({ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),orderstatus:"11",ordpcode:pcodefinal});//First 1 for Payment Pending & 2nd 1 for not ready for delivery
  window.open('https://deliveryontime.000webhostapp.com/rdot/rp/dp/pay.php?checkout=automatic&orderid=9876543210');
}

function placepod(){
  var date = new Date();
  var timestamp = date.getTime();
  var ordid = new Date("12/31/2099").getTime() - timestamp;
  firebase.database().ref(u + "/order/" + ordid).update({ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),orderstatus:"21",ordpcode:pcodefinal});//2 for Payment POD & 1 for not ready for delivery
}


function backtohome() {
  var loc = "index.html" + location.search;
  console.log(loc);
  window.open(loc);
}











        /*
        
        function chkchd(x) {
            var rootRef = firebase.database().ref(x + '/cart');

            rootRef.on("child_changed", snap => {

            var id = snap.child("id").val();
            var qnty = snap.child("qnty").val();
            var ctid = snap.child("tmst").val();
            var lmd = snap.child("typ").val();
            var itype = nap.child("shptype").val();

                if(lmd!="temp")
                chkdd(x);
            
        });

        }
        
        function chkdd(y) {
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0] = 0.00;
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__count')[0].getElementsByTagName('li')[0] = 1;
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__count')[0].getElementsByTagName('li')[0] = 2;            
            price = 0;
            quantity = 0;
            cartCountItems[0].innerText = 0;
            cartTotal.innerText = 0;
             var x = document.querySelectorAll(".cd-cart__product");
                var i;
                for (i = 0; i < x.length; i++) {
                x[i].remove();
            }
            ids = [];
            qtys = [];
            tmsts = [];
            chkcart(y);
        }
        */