window.androidObj = function AndroidClass(){};

var removedItem,
sum = 0;
var cnt = 0;
var cnts = 0;
var ids = [];
var qtys = [];
var tmsts = [];
var shopnames = [];
var shopaddrs = [];
var shopids = [];
var dapprox = [];
var shopgroups = [];
var shoppays = [];
var shopitemnames = [];
var shopitemqtys = [];
var shopgrpids = [];
var shopphones = [];
var avldboys = [];
var avldboyr = [];
var avlphones = [];
var avlphoner = [];
var avlnames = [];
var avlnamer = [];
var cntdboysit = 0;
var cntdboyroad = 0;
var dtimeapprox = "";
var dflagsecond = 0;
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
var uhome = "";
var uadrdtl = "";
var udphone = "";
var udname = "";
var udimg = "";
var totalquantity = 0;
var totalprice = 0;
var bonusapplied = 0;
var finalpuser = "";
var qtarray = ["Now Loading...","The more you sweat in practice the less you bleed in battle - Michael Jordan","Work hard in silence, let your success be your noise - Frank Ocean","Slow network may create delay","Welcome To DOT: Delivery on Time"];
var dtimes = ["5 Minutes","10 Minutes","15 Minutes","20 Minutes","25 Minutes","30 Minutes","45 Minutes","1 Hour","Out of Delivery Area","Shop Closed"];
var ditems = ["foods","medicine","grocery","essentials"];
var delgb = ["4","3","3","3"];
var dchargearray = ["0","7","11","15","19","23"];
var dhomes = ["","Diamond Harbour","Sarisha","Diamond Harbour to Sarisha","Sarisha to Diamond Harbour"];
var dsts = ["offline","sit","road"];
var dmsg = ["","","For Lockdown issues we are working with less staff. It may take longer than usual"];
var dflag = 0;
var dchtotal = 0;
var pricetotal = 0;
var discounttotal = 0;
var flagpch = 0;
var pcodefinal = "";
var grandtotalall = 0;
var finaldid = "";
var finaldst = "";
var weighttotal = 0;
var dtimefinal = 0;
var qtytotal = 0;
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
var dstatusflag = 0;

window.addEventListener('offline', toOff);
    function toOff(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<p>Check your Internet Connection</p>'
        });

      document.getElementById('nonet').style.display = "block";
      document.getElementById('allnet').style.display = "none";
      $('body').addClass('overlay');
      
    }
window.addEventListener('online', toOn);
    function toOn(){
      Swal.fire({
        icon: 'success',
        title: 'Yay!',
        text: 'Rule the way you want',
        footer: '<p>Don\'t keep your hunger active. Order soon.</p>'
        });
      location.reload();
    }



function loadtime(){
  var qtload = Math.floor(Math.random() * 4);
    let timerInterval;
  Swal.fire({
  title: 'DOT',
  html: '<img width="80%" height="auto" src="assets/img/loading.gif"><br><b>' + qtarray[qtload] + '</b>',
  timer: 2000,
  timerProgressBar: true,
  allowEscapeKey: false,
  allowOutsideClick: false,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          //b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval);
    document.getElementById("mainbody").style.display = "block";
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer && u.includes("GUser")) {
    window.history.back();
  }
})
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
var adrhome = snap.child("hometown").val();

//rmvalloptions();

if(adrid == y){
    ulat = adrlat;
    ulang = adrlang;
    upin = adrpin;
    uadrid = adrid;
    uhome = adrhome;
    uadrdtl = adrdtl;
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
            //console.log(ids[cnt] + ", " + qtys[cnt] + ", " + tmsts[cnt]);
            
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
            var shpprice = snap.child("priceshp").val();
            var name = snap.child("name").val();
            var shopname = snap.child("shopname").val();
            var thumb = snap.child("thumb").val();
            var shoplat = snap.child("shoplat").val();
            var shoplang = snap.child("shoplang").val();
            var shopaddr = snap.child("shopaddr").val();
            var shopid = snap.child("shopid").val();
            var shopstatus = snap.child("shopstatus").val();
            var dpincode = snap.child("dpincode").val();
            var dtimechk = distance(shoplat,shoplang,ulat,ulang,"K");
              if(dtimechk > Number(delgb[ditems.indexOf(typ)]) || !dpincode.includes(upin)){dtimechk = 8}
              if(shopstatus == "offline"){dtimechk = 9}
            var dtime = dtimes[dtimechk.toFixed(0)];
            var price = snap.child("price").val();
            var priceshp = snap.child("priceshp").val();
            var weight = snap.child("weight").val();
            var shopphone = snap.child("shopphone").val();


            if(id == y){
            price = eachprice * z;
            weight = weight * z;

            var shppriceall = shpprice * z;
            pricetotal = pricetotal + price;
            weighttotal = weighttotal + weight;
            qtytotal = qtytotal + z;
            if(dtimefinal < dtimechk){
              dtimefinal = dtimechk;
            }
            console.log(dtimechk);
            if(dtimechk.toFixed(0) > 7){
              $("#" + m).addClass("oda");
              dflag = 1;
              $("#removeline").addClass("showme");
            }
            
            if(shopids.includes(shopid)){
              shopgroups[shopids.indexOf(shopid)] = shopgroups[shopids.indexOf(shopid)] + "sp2lt" + y;
              shoppays[shopids.indexOf(shopid)] = shoppays[shopids.indexOf(shopid)] + "sp2lt" + shppriceall;
              shopitemnames[shopids.indexOf(shopid)] = shopitemnames[shopids.indexOf(shopid)] + "sp2lt" + name;
              shopitemqtys[shopids.indexOf(shopid)] = shopitemqtys[shopids.indexOf(shopid)] + "sp2lt" + z;
            }
              else{
            shopnames[cnts] = shopname;
            shopaddrs[cnts] = shopaddr;
            shopids[cnts] = shopid;
            shopphones[cnts] = shopphone;
            dapprox[cnts] = dtimechk;
            shopgroups[cnts] = y;
            shoppays[cnts] = shppriceall;
            shopitemnames[cnts] = name;
            shopitemqtys[cnts] = z;
            cnts+= 1;
              }
            
            additem(m,price,eachprice,id,name,thumb,z,typ,shopname,dtime);
              calculateall();
            
        }
        });
            /*setTimeout(function(){ 
              var dcharge = Number(dchargecal(m,price,z,dtimechk,weighttotal));
              dchtotal = dchtotal + dcharge;
            

            }, 3000);*/
                      
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

function calculatetotal(){
  var dflagsecond = 0
  dchargecal(pricetotal,weighttotal,qtytotal,dtimefinal.toFixed(0));
  calculateall();
  var bonusload = Math.floor(Math.random() * 4);
  if(grandtotalall > 220){
    addbonus();
  }
  else if(bonusload == 3){
    Swal.fire(
  'DOT',
  'Order value more than ₹220 will get an bonus item for free.',
  'info'
    );
  }
  if(dflagsecond == 0){
    document.getElementById("checkoutbtn").style.display = "block";
    document.getElementById("calculatebtn").style.display = "none";
  }
  else{
    document.getElementById("checkoutbtn").style.display = "none";
    document.getElementById("calculatebtn").style.display = "block";
  }
  

}

function dchargecal(pt,wt,qt,dt) {
  if(pt< 40){
    Swal.fire(
  'DOT',
  'Minimum Order Value Rs. 40 Required.',
  'warning'
    );
    dflagsecond++;
  }
  else if(dt > 7){
    Swal.fire(
  'DOT',
  'Orders from out of delivery area added. Please remove red marked items and try again.',
  'warning'
    );
    dflagsecond++;
  }
  else if(qt > 10){
    Swal.fire(
  'DOT',
  'Maximum of 10 items can be placed in a single order. Please remove some items and try again.',
  'warning'
    );
    dflagsecond++;
  }
  else if(wt > 5000){
    Swal.fire(
  'DOT',
  'More than 5Kg weight. Please remove some heavy weight items and try again.',
  'warning'
    );
    dflagsecond++;
  }
  else{
    if(pt>300){
      dchtotal = 0;
      //addbonus();
    }
    else if(pt>200){
      //addbonus();
      dchtotal = Number(dchargearray[dt]);
    }
    else if(pt<200 && wt>4000){
      dchtotal = Number(dchargearray[dt]*1.5);
    }
    else if(pt<200 && wt<4000){
      dchtotal = Number(dchargearray[dt]);
    }
    console.log(dchtotal);
  }
  
}

function addbonus(){
  Swal.fire({
  title: 'DOT',
  html: 'You got a special bonus offer from DOT for order value more than ₹220 <br><img width="80%" height="auto" src="thumsup.jpg"><br><b>Order more to gain more bonus</b>',
  allowEscapeKey: true,
  allowOutsideClick: true,
  showCancelButton: false,
  showConfirmButton: true,
  focusConfirm: true,
  footer: '<p>DOT : Delivery On Time</p>'
});
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
    var minam = snap.child("minam").val();
    var puser = snap.child("puser").val();
                
    if(pid == appliedp && pricetotal >= minam && !puser.includes(u + "splt")){
       discounttotal = Number((pricetotal*per/100)+flat);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
    }
    if(appliedp == "Q99W" && u == "7074492714" && pricetotal <= 450 && !puser.includes(u + "splt")){
      discounttotal = Number(pricetotal*99/100);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
    }
        
    if(appliedp == "S19BQW" && u == "9883566844" && pricetotal <= 1200 && !puser.includes(u + "splt")){
      discounttotal = Number(pricetotal*50/100);
       pflag = 1;
       finalpuser = puser;
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

function confirmpay() {
if(dflag == 0 && grandtotalall > 40){
    if(grandtotalall < 1000 && uhome != "Karanjali"){
  Swal.fire({
  title: 'Ready to Pay?',
  text: "Choose one of the options below. Once accepted, you cannot revert back.",
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#dd3333',
  confirmButtonText: 'Pay Online',
  showCloseButton: true,
  cancelButtonText: 'Cash On Delivery',
  footer: '<a href="javascript:void(0)">Payments are secured and safe</a>'
}).then((result) => {
  if (result.value) {
    console.log("Online");
    payupi();
    }
  else if(result.dismiss === Swal.DismissReason.cancel){
    console.log("COD");
    codpay();
  }
})
}
else {
  Swal.fire({
  title: 'Ready to Pay?',
  text: "Pay Online now. Once accepted, you cannot revert back. Use Google pay for better reluts with lucky cashbacks.",
  icon: 'info',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#dd3333',
  confirmButtonText: 'Pay Online',
  showCloseButton: true,
  footer: '<a href="javascript:void(0)">Payments are secured and safe</a>'
}).then((result) => {
  if (result.value) {
    console.log("online");
    payupi();
  }
})
}
}
else{
  Swal.fire({
  title: 'DOT',
  html: 'Check items in your cart. <br> <u>Possible Solutions</u><br>1. Add item in your cart. <br>2. Remove items marked with "Out Of Delivery" status.<br>3. Minimum Order amount Rs.40 required.',
  icon: 'error'
});
}

}



function codpay(){
  var dotp = Math.floor(1000 + Math.random() * 9000);
  dtimeapprox = dtimes[(Math.max.apply(null, dapprox)).toFixed(0)];
  var date = new Date();
  var timestamp = date.getTime();
  var ordid = new Date("12/31/2099").getTime() - timestamp;
  var dtnow = date.getDate() + "/" + Number(date.getMonth()+1) + "/" + date.getFullYear();
  var timenow = date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  firebase.database().ref(u + "/order/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"cod",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:"11",ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});//2 for Payment POD & 1 for not ready for delivery
  firebase.database().ref("allorders/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"cod",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:"11",ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});//2 for Payment POD & 1 for not ready for delivery
  
    finalpuser = finalpuser + u + "splt";
    firebase.database().ref("pcodes/" + pcodefinal).update({puser:finalpuser});

    deliverymsg = encodeURI("New Order with Order id : " + ordid + " has been placed. Shop Name(s): " + shopnames + " with respective Phone Number(s): " + shopphones + ". Check your App and meet or call.")

    document.getElementById("msgonlydp").src = "http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=" + udphone + "&Msg=" + deliverymsg;
    
  for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + ordid).update({dimg:udimg,dphone:udphone,dname:udname,dtnow:dtnow,paystatus:0,id:ordid,productids:shopgroups[i],products:shopitemnames[i],prices:shoppays[i],qtys:shopitemqtys[i],dotp:dotp,user:u,orderstatus:"11"});
          if(!shopitemnames[i].includes("sp2lt")){
            var msgraw = 'Name - ' + shopitemnames[i] + ', quantity - ' + shopitemqtys[i] + ";";
          }
          else{
            var msgraw = "";
            var itemsf = shopitemnames[i].split("sp2lt");
            var qtysf = shopitemqtys[i].split("sp2lt")
            for (var ij = itemsf.length - 1; ij >= 0; ij--) {
                var msgraw = msgraw + 'Name: ' + itemsf[ij] + ', quantity: ' + qtysf[ij] + "; ";
              }
          }
          var finalmsg = encodeURI("New Order with Order id : " + ordid + " has been placed. Details as follow: " + msgraw);
          console.log(finalmsg + " to " + shopphones[i]);
          document.getElementById("msgonly" + i).src = "http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=" + shopphones[i] + "&Msg=" + finalmsg;
    }
  
  /*
http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=8768626927&Msg=Checking%20Message%20ith%20Some%20Order%20Details

http://nimbusit.biz/api/SmsApi/SendMultipleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=8768626927,9883196152&Msg=Checking%20Message%20With%20Some%20Order%20Details

http://nimbusit.biz/api/SmsApi/SendSingleUnicodeApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTAPP&Phno=8768626927&Msg=my%20test.asp?name=st%C3%A5le&car=saab


var uri = "my test.asp?name=ståle&car=saab";
  var res = encodeURI(uri);
*/

  for (var i = tmsts.length - 1; i >= 0; i--) {
    firebase.database().ref(u + "/cart/" + tmsts[i]).update({typ:"temp"});
    }
  document.getElementById("successshow").style.display = "block";
  document.getElementById("mainbody").style.display = "none";
  Swal.fire({
  title: 'DOT',
  text: 'Your order has been placed successfully. ' + dmsg[dsts.indexOf(finaldst)],
  icon: 'success',
  showCancelButton: false,
  confirmButtonText: 'Back to Home',
  allowEscapeKey: false,
  allowOutsideClick: false,
}).then((result) => {
  if (result.value) {
    window.open("index.html" + location.search);
  }
})
//sendsms("order" + ordid);
}


function backtohome() {
  var loc = "index.html" + location.search;
  console.log(loc);
  window.open(loc);
}

function findDeliveryBoy(){
  Swal.fire({
  position: 'top-end',
  title: 'please wait...',
  showConfirmButton: false,
  timer: 1500
})
  var rootRef = firebase.database().ref("dboy");

    rootRef.on("child_added", snap => {

    var did = snap.child("id").val();
    var darea = snap.child("darea").val();
    var dstatus = snap.child("status").val();
    var dcount = snap.child("dcount").val();
    var dname = snap.child("name").val();
    var dphone = snap.child("phone").val();
        

    if(dhomes[darea] == uhome){   

      if(dstatus == "sit"){
        avldboys[cntdboysit] = did;
        avlnames[cntdboysit] = dname;
        avlphones[cntdboysit] = dphone;
        cntdboysit ++;
      }
      else if(dstatus == "road"){
        avldboyr[cntdboyroad] = did;
        avlnamer[cntdboyroad] = dname;
        avlphoner[cntdboyroad] = dphone;
        cntdboyroad ++;
      }

      }
    
  });

    setTimeout(function(){ 
      if (cntdboysit == 0 && cntdboyroad == 0) {
      Swal.fire('DOT',
        'Sorry, Delivery Boy is not Available right now. We generally supply orders from 8:30 AM to 8:30 PM.',
        'info'
        )
    }
    else{
      if(cntdboysit > 0){
        finaldid = avldboys[0];
        udname = avlnames[0];
        udphone = avlphones[0];
        udimg = "blank.png";
        finaldst = "sit";
        confirmpay();
      }
      else{
        
        finaldid = avldboyr[0];
        udname = avlnamer[0];
        udphone = avlphoner[0];
        udimg = "blank.png";
        finaldst = "road";
        confirmpay();
      }
    }
     }, 2000);
    
}

function payupi() {
  var dotp = Math.floor(1000 + Math.random() * 9000);
  dtimeapprox = dtimes[(Math.max.apply(null, dapprox)).toFixed(0)];
  console.log(dtimeapprox);
  var bcode = "28";
    var date = new Date();
    var timestamp = date.getTime();
    var dtnow = date.getDate() + "/" + Number(date.getMonth()+1) + "/" + date.getFullYear();
    var timenow = date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    var ordid = new Date("12/31/2099").getTime() - timestamp;
    firebase.database().ref(u + "/order/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"online",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:bcode,ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});
    firebase.database().ref("allorders/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"online",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:bcode,ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});
    
    for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + ordid).update({dimg:udimg,dphone:udphone,dname:udname,dtnow:dtnow,id:ordid,productids:shopgroups[i],products:shopitemnames[i],prices:shoppays[i],qtys:shopitemqtys[i],dotp:dotp,user:u,orderstatus:bcode});
    }
    finalpuser = finalpuser + u + "splt";
    firebase.database().ref("pcodes/" + pcodefinal).update({puser:finalpuser});

  window.open("upipay.html" + location.search + "=" + ordid);

}



function payonline() {

    var options = {
        "key": "rzp_test_sHykl1RRfyGvFW", // rzp_test_sHykl1RRfyGvFW
        "amount": Number(grandtotalall)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "method": "upi",
        "name": "DOT : Delivery On Time",
        "description": "Home Delivery Services",
        "image": "https://quantumwebgarden.github.io/dot/dotf.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "email": uemail,
        "handler": function (response){
            savetoDB(response);
            //$('#myModal').modal();
        },
        "prefill": {
            "name": uname,
            "email": uemail,
            "contact": uphone
        },
        "notes": {
            "address": uhome
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response)
    var bcode = "22";
    var date = new Date();
    var timestamp = date.getTime();
    var ordid = new Date("12/31/2099").getTime() - timestamp;
    firebase.database().ref(u + "/order/" + ordid).update({payment_id : response.razorpay_payment_id,did:finaldid,ordhome:uhome,ordpay:"online",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:bcode,ordpcode:pcodefinal});

    var payRef = firebase.database().ref('payments/' + u);
    payRef.child(ordid).set({
    payment_id : response.razorpay_payment_id
    })
    for (var i = tmsts.length - 1; i >= 0; i--) {
    firebase.database().ref(u + "/cart/" + tmsts[i]).update({typ:"temp"});
    }

  document.getElementById("successshow").style.display = "block";
  document.getElementById("mainbody").style.display = "none";
  Swal.fire({
  title: 'DOT',
  html: 'Your order has been placed successfully. ' + dmsg[dsts.indexOf(finaldst)] + "<br/><u>Track delivery status from \'My orders\'.</u>",
  icon: 'success',
  showCancelButton: false,
  confirmButtonText: 'Back to Home',
  allowEscapeKey: false,
  allowOutsideClick: false,
}).then((result) => {
  if (result.value) {
    window.open("index.html" + location.search);
  }
})

}

