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
var shopofferpays = [];
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
var shopindividualprice = [];
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
var finaltagsr = "";
var totalquantity = 0;
var totalprice = 0;
var bonusapplied = 0;
var dflagsecond = 0
var finalpuser = "";
var qtarray = ["Now Loading...","The more you sweat in practice the less you bleed in battle - Michael Jordan","Work hard in silence, let your success be your noise - Frank Ocean","Slow network may create delay","Welcome To DOT: Delivery on Time"];
var dtimes = ["20 Minutes (without Preparation Time)","25 Minutes (without Preparation Time)","30 Minutes (without Preparation Time)","35 Minutes (without Preparation Time)","40 Minutes (without Preparation Time)","50 Minutes (without Preparation Time)","55 Minutes (without Preparation Time)","More than 1 Hour (without Preparation Time)","Out of Delivery Area","Shop Closed","Out of Stock"];
var ditems = ["foods","medicine","grocery","essentials"];
var delgb = ["4","3","3","3"];
var dchargearray = ["7","9","13","17","21","25"];
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
// var firebaseConfig = {
//     apiKey: "AIzaSyA7wly3NvCF90pJFs7a9kMBl-eXHJvXYw4",
//     authDomain: "dotqwdtls.firebaseapp.com",
//     databaseURL: "https://dotqwdtls.firebaseio.com",
//     projectId: "dotqwdtls",
//     storageBucket: "dotqwdtls.appspot.com",
//     messagingSenderId: "374863944922",
//     appId: "1:374863944922:web:3025e1648144afe89fd9e3",
//     measurementId: "G-NWB5LL551K"
//   };
//   firebase.initializeApp(firebaseConfig);
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
            var rootRef = firebase.database().ref('vvcart/' + x + '/cart');

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
        if(lmd=="temp"){
          firebase.database().ref('vvcart/' + x + '/cart/' + ctid).remove();
        }
        });

        }

        function chkfoods(y,z,m,typ) {
            var rootRef = firebase.database().ref(typ);

            rootRef.on("child_added", snap => {

            var deliverystatus = "if-status";

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
            var tagsr = snap.child("tagsr").val();
                var stock = snap.child("stock").val();
            var dpincode = snap.child("dpincode").val();
            var dtimechk = distance(shoplat,shoplang,ulat,ulang,"K");
              if(dtimechk > Number(delgb[ditems.indexOf(typ)]) || !dpincode.includes(upin)){dtimechk = 8; deliverystatus = "else-status";}
              if(shopstatus == 0){dtimechk = 9; deliverystatus = "else-status";}
            if(stock == 0){dtimechk = 10; deliverystatus = "else-status";}
            var dtime = dtimes[dtimechk.toFixed(0)];
            //var price = snap.child("price").val();
            //var priceshp = snap.child("priceshp").val();
            var weight = snap.child("weight").val();
            var shopphone = snap.child("shopphone").val();
            var shareamount = snap.child("shareamount").val();

            if(id == y){
            price = eachprice * z;
            weight = weight * z;
                
            var shpofferprice = Math.round(Number(shpprice - Number(Number(eachprice)*Number(shareamount)/100)));
            var shpofferpriceall = shpofferprice * z;

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
              shoppays[shopids.indexOf(shopid)] = shoppays[shopids.indexOf(shopid)] + "sp2lt" + price;
              shopofferpays[shopids.indexOf(shopid)] = shopofferpays[shopids.indexOf(shopid)] + "sp2lt" + shpofferpriceall;
              shopitemnames[shopids.indexOf(shopid)] = shopitemnames[shopids.indexOf(shopid)] + "sp2lt" + name;
              shopitemqtys[shopids.indexOf(shopid)] = shopitemqtys[shopids.indexOf(shopid)] + "sp2lt" + z;
              if(shopid=="12600070" && tagsr.toLowerCase().includes("combo")){
                shopindividualprice[shopids.indexOf(shopid)] = Number(shopindividualprice[shopids.indexOf(shopid)]) + 0;
              }
              else{
                shopindividualprice[shopids.indexOf(shopid)] = Number(shopindividualprice[shopids.indexOf(shopid)]) + Number(price);
              }
            }
              else{
            shopnames[cnts] = shopname;
            shopaddrs[cnts] = shopaddr;
            shopids[cnts] = shopid;
            shopphones[cnts] = shopphone;
            dapprox[cnts] = dtimechk;
            shopgroups[cnts] = y;
            shoppays[cnts] = price;
            shopofferpays[cnts] = shpofferpriceall;
            if(shopid=="12600070" && tagsr.toLowerCase().includes("combo")){
              shopindividualprice[cnts] = 0;
            }
            else{
              shopindividualprice[cnts] = price;
            }
            shopitemnames[cnts] = name;
            shopitemqtys[cnts] = z;
            cnts+= 1;
              }
            
            additem(m,price,eachprice,id,name,thumb,z,typ,shopname,dtime,deliverystatus);
              calculateall();
            
        }
        });
            /*setTimeout(function(){ 
              var dcharge = Number(dchargecal(m,price,z,dtimechk,weighttotal));
              dchtotal = dchtotal + dcharge;
            

            }, 3000);*/
                      
        }
        function additem(timestamp,price,itemeachprice,itemid,itemname,itempic,itemqty,itemtyp,itemshopname,itemdtime,deliverystatus){
          $('#bonusitems').append('<li id="' + timestamp + '" class="item"><div class="item-main cf"><div class="item-block ib-info cf"><img class="product-img" src="' + itempic + '" /><div class="ib-info-meta"><span class="title">' + itemname+ '</span><span class="itemno">' + itemshopname + '</span></div></div><div class="item-block ib-qty"><button data-itemst="' + timestamp + '" onclick="updateminus(this)"> - </button> <input type="text" readonly id="itemqty' + timestamp + '" value="' + itemqty + '" class="qty" /> <button data-itemst="' + timestamp + '" onclick="updateplus(this)"> + </button><span class="price"><span>x</span><i id="eachprice' + timestamp + '"> ' + itemeachprice + '</i></span></div><div class="item-block ib-total-price">₹<span class="tp-price" id="price' + timestamp + '">' + price + '</span></div></div><br><div class="item-foot cf"><div class="if-left"><span class="' + deliverystatus + '">' + itemdtime + '</span></div><div class="if-right"><span id="updatebtn' + timestamp + '" style="display:none" class="green-link" data-itemst="' + timestamp + '" onclick="location.reload()">Update Quantity</span> <span class="red-link" id="removebtn' + timestamp + '" data-itemst="' + timestamp + '" onclick="removeitemc(this)">REMOVE</span></div></div></li>');
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
  dflagsecond = 0
  dchargecal(pricetotal,weighttotal,qtytotal,dtimefinal.toFixed(0));
  calculateall();
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
  if(Number(pt)< 40){
    Swal.fire(
  'DOT',
  'Minimum Order Value Rs. 40 Required.',
  'warning'
    );
    dflagsecond++;
  }
  else if(Number(dt) > 7){
    Swal.fire(
  'DOT',
  'Some of your added item(s) are NON-DELIVERABLE now. Please remove them (red marked) items and try again.',
  'warning'
    );
    dflagsecond++;
  }
//   else if(Number(qt) > 35){
//     Swal.fire(
//   'DOT',
//   'Maximum of 35 items can be placed in a single order. Please remove some items and try again.',
//   'warning'
//     );
//     dflagsecond++;
//   }
  else if(Number(wt) > 5000){
    Swal.fire(
  'DOT',
  'More than 5Kg weight. Please remove some heavy weight items and try again.',
  'warning'
    );
    dflagsecond++;
  }
  else{
    if(Number(pt)>300){
      dchtotal = 0;
    }
    else{
      dchtotal = Number(dchargearray[dt]);
    }
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
  firebase.database().ref("vvcart/" + u + "/cart/" + ctid).update({typ:'temp'});
  location.reload();
}

function updateplus(x){
  var ctid = x.getAttribute("data-itemst");
  if(document.getElementById("itemqty" + ctid).value < 50){
    document.getElementById("itemqty" + ctid).value = Number(document.getElementById("itemqty" + ctid).value) + 1;
    firebase.database().ref("vvcart/" + u + "/cart/" + ctid).update({qnty:document.getElementById("itemqty" + ctid).value});
    document.getElementById("price" + ctid).innerHTML = Number(document.getElementById("eachprice" + ctid).innerHTML) * Number(document.getElementById("itemqty" + ctid).value);
    document.getElementById("updatebtn" + ctid).style.display = "block";
    document.getElementById("calculatebtn").style.display = "none";
    document.getElementById("updatebtn").style.display = "block";
  }
}
/*
  firebase.database().ref("vvcart/" + u + "/cart/" + ctid).update({typ:'temp'});
  location.reload();*/
function updateminus(x){
  var ctid = x.getAttribute("data-itemst");
  if(document.getElementById("itemqty" + ctid).value > 1){
    document.getElementById("itemqty" + ctid).value = Number(document.getElementById("itemqty" + ctid).value) - 1;
    firebase.database().ref("vvcart/" + u + "/cart/" + ctid).update({qnty:document.getElementById("itemqty" + ctid).value});
    document.getElementById("price" + ctid).innerHTML = Number(document.getElementById("eachprice" + ctid).innerHTML) * Number(document.getElementById("itemqty" + ctid).value);
    document.getElementById("updatebtn" + ctid).style.display = "block";
    document.getElementById("calculatebtn").style.display = "none";
    document.getElementById("updatebtn").style.display = "block";
  }
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
    var pstatus = snap.child("pstatus").val();
        
    var dtn = new Date();
    var ntn = dtn.getDay();
    if(pid == appliedp && pricetotal >= minam && !puser.includes(u + "splt") && pstatus == "ON"){
       if(appliedp == "BIGDAY" && (ntn == "3" || ntn == "5")){
        if(shopids.includes("12054892") || shopids.includes("12898901") || shopids.includes("12916592") || shopids.includes("12970207") || shopids.includes("12977653")){
          if(per == 0){
          	per = Math.floor(3 + Math.random() * 3);
          }
        }
        else if(shopids.includes("12743019")){
        	if(per == 0){
          per = Math.floor(5 + Math.random() * 4);
      }
        }
        else if(shopids.includes("12479021")){
        	if(per == 0){
          per = Math.floor(6 + Math.random() * 7);
      }
        }
        else{
        	if(per == 0){
          per = Math.floor(6 + Math.random() * 4);
      }
        }
        
        discounttotal = Number((pricetotal*per/100) + flat);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
       }
       if(appliedp == "BIGDAY" && (ntn == "0" || ntn == "1" || ntn == "2" || ntn == "4" || ntn == "6")){
       		per = 0;
       }
       if(appliedp == "MIO21"){
       if(shopids.includes("12600070")){
        var mioprice = shopindividualprice[shopids.indexOf("12600070")];
        if(mioprice> 199){
        	if(per == 0){
        per = Math.floor(3 + Math.random() * 3);
    		}
        discounttotal = Number((mioprice*per/100)+flat);
        //console.log(per + "-" + discounttotal);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
        }
        }
        
       }
        if(appliedp == "HAJI20"){
       if(shopids.includes("12479021")){
        var shindprice = shopindividualprice[shopids.indexOf("12479021")];
        if(shindprice>= minam){
        	if(per == 0){
        per = Math.floor(3 + Math.random() * 8);
    		}
        discounttotal = Number((shindprice*per/100)+flat);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
        }
        }
        
       }
       else{
       discounttotal = Number((pricetotal*per/100)+flat);
       pflag = 1;
       finalpuser = puser;
       chkflg(pflag,appliedp);
       return true;
       }
       
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
if(dflag == 0 && grandtotalall > 39 && !u.includes("GUser")){
    if(grandtotalall < 5000){
  Swal.fire({
  title: 'Ready to Pay?',
  html: "<p>Choose one of the options below. Once accepted, you cannot revert back.</p>",
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#7d6eeb',
  confirmButtonText: 'Pay Online',
  showCloseButton: true,
  cancelButtonText: 'Cash On Delivery',
  footer: '<a href="javascript:void(0)">Payments are secured and safe</a>'
}).then((result) => {
  if (result.value) {

    Swal.fire({
  title: 'Sorry...',
  text: "We are not accepting Online payments right now. Click on Cash On Delivery. You may pay through any upi app like Paytm, GPAY or Phonepay at the time of delivery.",
  icon: 'info',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#dd3333',
  confirmButtonText: 'Okay',
  showCloseButton: true,
  footer: '<a href="javascript:void(0)">Payments are secured and safe</a>'
      });
    }
  else if(result.dismiss === Swal.DismissReason.cancel){

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

    Swal.fire({
  title: 'Sorry...',
  text: "We are not accepting Online payments right now. Click on Cash On Delivery. You may pay through any upi app like Paytm, GPAY or Phonepay at the time of delivery. Contact Customer Care at: 8768626927 for further details.",
  icon: 'info',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#dd3333',
  confirmButtonText: 'Okay',
  showCloseButton: true,
  footer: '<a href="javascript:void(0)">Payments are secured and safe</a>'
      });
  }
})
}
}
else{
  Swal.fire({
  title: 'DOT',
  html: 'Check items in your cart. <br> <u>Possible Solutions</u><br>1. Add item in your cart. <br>2. Remove items marked with "Out Of Delivery" status.<br>3. Minimum Order amount Rs.40 required.<br>4. Guest User can\'t place and order',
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
  firebase.database().ref("vvcart/" + u + "/order/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"cod",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:"11",ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});//2 for Payment POD & 1 for not ready for delivery
  firebase.database().ref("allorders/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"cod",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:"11",ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});//2 for Payment POD & 1 for not ready for delivery
    
    finalpuser = finalpuser + u + "splt";
    firebase.database().ref("pcodes/" + pcodefinal).update({puser:finalpuser});
    firebase.database().ref("zzdevices/" + u).update({userdevice:getDeviceType()});
    deliverymsg = encodeURI("New Order with Order id : " + ordid + " has been placed. Shop Name(s): " + shopnames + " with respective Phone Number(s): " + shopphones + ". Check your App and meet or call.")
    
    document.getElementById("msgonlydp").src = "https://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTDHS&Phno=" + udphone + "&Msg=" + deliverymsg + "&EntityID=1701159895507169332";
    document.getElementById("developeronly").src ="https://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTDHS&Phno=8768626927&Msg=" + deliverymsg + "%20for%20" + udphone + "%20By%20" + u + "&EntityID=1701159895507169332";
  for (var i = shopids.length - 1; i >= 0; i--) {
          firebase.database().ref("allshop/" + shopids[i] + "/orders/" + ordid).update({dimg:udimg,dphone:udphone,dname:udname,dtnow:dtnow,paystatus:0,id:ordid,productids:shopgroups[i],products:shopitemnames[i],prices:shoppays[i],payprice:shopofferpays[i],qtys:shopitemqtys[i],dotp:dotp,user:u,orderstatus:"11"});
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
          document.getElementById("msgonly" + i).src = "https://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=ammar11860&Password=dliu2330DL&SenderID=DOTDHS&Phno=" + shopphones[i] + "&Msg=" + finalmsg + "&EntityID=1701159895507169332";
    }
  


  for (var i = tmsts.length - 1; i >= 0; i--) {
    firebase.database().ref("vvcart/" + u + "/cart/" + tmsts[i]).update({typ:"temp"});
    }
  document.getElementById("successshow").style.display = "block";
  document.getElementById("mainbody").style.display = "none";
  Swal.fire({
  title: 'DOT',
  text: 'Your order has been placed successfully. Check order section for details' + dmsg[dsts.indexOf(finaldst)],
  icon: 'success',
  showCancelButton: false,
  showConfirmButton: false,
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
    firebase.database().ref("vvcart/" + u + "/order/" + ordid).update({shopphones:shopphones.toString(),dtimeapprox:dtimeapprox,dlat:ulat,dlang:ulang,dcharge:dchtotal,discount:discounttotal,dimg:udimg,dphone:udphone,dname:udname,uname:uname,uaddr:uadrdtl,timenow:timenow,dtnow:dtnow,dotp:dotp,shopids:shopids.toString(),shopnames:shopnames.toString(),shopaddrs:shopaddrs.toString(),cartids:tmsts.toString(),dstatus:finaldst,did:finaldid,ordhome:uhome,ordpay:"online",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:bcode,ordpcode:pcodefinal,productids:shopgroups.toString(),products:shopitemnames.toString(),prices:shoppays.toString(),qtys:shopitemqtys.toString()});
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
    firebase.database().ref("vvcart/" + u + "/order/" + ordid).update({payment_id : response.razorpay_payment_id,did:finaldid,ordhome:uhome,ordpay:"online",orduid:u,ordid:ordid,ordval:grandtotalall,orditems:ids.toString(),ordqty:qtys.toString(),orderstatus:bcode,ordpcode:pcodefinal});

    var payRef = firebase.database().ref('payments/' + u);
    payRef.child(ordid).set({
    payment_id : response.razorpay_payment_id
    })
    for (var i = tmsts.length - 1; i >= 0; i--) {
    firebase.database().ref("vvcart/" + u + "/cart/" + tmsts[i]).update({typ:"temp"});
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

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
