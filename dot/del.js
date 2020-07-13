window.androidObj = function AndroidClass(){};

var itemcnt = 0;
var u = "";
var uname = "";
var uadrid = "";
var uhome = "";
var qtarray = ["Now Loading...","The more you sweat in practice the less you bleed in battle - Michael Jordan","Work hard in silence, let your success be your noise - Frank Ocean","Slow network may create delay","Welcome To DOT: Delivery on Time"];
var dtimes = ["5 Minutes","10 Minutes","15 Minutes","20 Minutes","25 Minutes","30 Minutes","45 Minutes","1 Hour","Out of Delivery Area"];
var dchargearray = ["0","3","5","7","10","13","15","20","22","25","30","35"];
var dhomes = ["","Diamond Harbour","Sarisha","Karanjali"];
var dsts = ["offline","sit","road"];
var dmsg = ["","","For Lockdown issues we are working with less staff. It may take longer than usual"];

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



/* themes: 
	purple = order placed // 11  21 // notpicked.html
	green = order track // 12  22 // maponly.html
	orange = order completed  // 13  23 // delivered.html
	red = order error or cancel or not paid // 19  29 28(only for unpaid) // error.html

*/
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
    //document.getElementById("allnet").style.display = "block";
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    //initskip();
    
  }
})
  var parameters = location.search.substring(1).split("=");
  u = parameters[1];
  elid = parameters[2];
  lat = parameters[3];
  lang = parameters[4];
  locst = parameters[5];
  console.log(u);
  chkorders(u);

}

function chkorders(x) {
			itemcnt = 0;
            var rootRef = firebase.database().ref(x + '/order');

            rootRef.on("child_added", snap => {


            var ordval = snap.child("ordval").val();
            var dtnow = snap.child("dtnow").val();
            var timenow = snap.child("timenow").val();
            var shopnames = snap.child("shopnames").val();
            var uaddr = snap.child("uaddr").val();
            var ordqty = snap.child("ordqty").val();
            var dotp = snap.child("dotp").val();
            var ordid = snap.child("ordid").val();
            var ordpay = snap.child("ordpay").val();
            var dname = snap.child("dname").val();
            var dphone = snap.child("dphone").val();
            var dimg = snap.child("dimg").val();
            var shopnames = snap.child("shopnames").val();
            var shopaddrs = snap.child("shopaddrs").val();
            var uname = snap.child("uname").val();
            var uaddr = snap.child("uaddr").val();
            var ulat = snap.child("dlat").val();
            var ulang = snap.child("dlang").val();
            var dstatus = snap.child("orderstatus").val();
            var dtimeapprox = snap.child("dtimeapprox").val();

            console.log(ordid);


            if(dstatus == "21" || dstatus == "11"){
            	$('#orderbody').append('<section ng-repeat="card in cards" class="card theme-purple" data-color="#BA68C8"><div class="card__map"><iframe src="notpicked.html" width="100%" height="100%"></iframe></div><section class="card__part card__part-1"><div class="card__part__inner"><header class="card__header"><div class="card__header__close-btn"></div><span class="card__header__id ng-binding"># ' + ordid + '</span><span class="card__header__price ng-binding">₹' + ordval + '</span></header><div class="card__stats" style="background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);"><div class="card__stats__item card__stats__item--req"><p class="card__stats__type">Quantity</p><span class="card__stats__value ng-binding">' + ordqty + '</span></div><div class="card__stats__item card__stats__item--pledge"><p class="card__stats__type">Pay Mode</p><span class="card__stats__value ng-binding">' + ordpay + '</span></div><div class="card__stats__item card__stats__item--weight"><p class="card__stats__type">OTP</p><span class="card__stats__value ng-binding">' + dotp + '</span></div></div></div></section><section class="card__part card__part-2"><div class="card__part__side m--back"><div class="card__part__inner card__face"><div class="card__face__colored-side"></div><h3 class="card__face__price ng-binding">₹' + ordval + '</h3><div class="card__face__divider"></div><div class="card__face__path"></div><div class="card__face__from-to"><p class="ng-binding">' + shopnames + '</p><p class="ng-binding">' + uaddr + '</p></div><div class="card__face__deliv-date ng-binding">' + dtnow + '<p class="ng-binding">' + timenow + '</p></div><div class="card__face__stats card__face__stats--req">Quantity<p class="ng-binding">' + ordqty + '</p></div><div class="card__face__stats card__face__stats--pledge">OTP<p class="ng-binding">' + dotp +'</p></div><div class="card__face__stats card__face__stats--weight">View Details<p class="card__face__stats__weight"><p class="ng-binding"><i class="fa fa-arrow-right" aria-hidden="true"></i></p></div></div></div><div class="card__part__side m--front"><div class="card__sender"><h4 class="card__sender__heading">Delivery Person</h4><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="' + dimg + '"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + dname + '</p><p class="card__sender__rating card__sender__rating-5"> Call: <span class="card__sender__rating__star" style="color: green!important;"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="card__sender__rating__count ng-binding">(<a href="javascript:void(0)" onclick="calldboy(\'' + dphone + '\')">' + dphone + '</a>)</span></p><p class="card__sender__address ng-binding">4.7 <b style="color: chocolate!important;">★</b><i>(29)</i></p></div><div class="card__receiver"><div class="card__receiver__inner"><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="https://quantumwebgarden.github.io/dot/dotf.png"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + uname + '</p><p class="card__sender__address ng-binding">' + uaddr + '</p></div></div></div><div class="card__path-big"></div></div><div class="card__from-to"><div class="card__from-to__inner"><div class="card__text card__text--left"><p class="card__text__heading">From</p><p class="card__text__middle ng-binding">' + shopnames + '</p><p class="card__text__bottom ng-binding">' + shopaddrs + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">To</p><p class="card__text__middle ng-binding">' + uname + '</p><p class="card__text__bottom ng-binding">' + uaddr + '</p></div></div></div><section class="card__part card__part-3"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><div class="card__timings"><div class="card__timings__inner"><div class="card__text card__text--left"><p class="card__text__heading">Delivery Time</p><p class="card__text__middle ng-binding">' + timenow +'</p><p class="card__text__bottom ng-binding">' + dtnow + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">Approx Delivery Time</p><p class="card__text__middle ng-binding">' + dtimeapprox + '</p></div></div></div><div class="card__timer">' + dtimeapprox + '</div><section class="card__part card__part-4"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><button type="button" class="card__request-btn"><span class="card__request-btn__text-1">View More</span><span class="card__request-btn__text-2">Close</span></button><p class="card__counter ng-binding">Order is under preparation or packaging</p></div></section></div></section></div></section></section>');
                itemcnt+= 1;
        	}
        	if(dstatus == "22" || dstatus == "12"){
        		var lastlat = snap.child("lastlat").val();
        		var lastlang = snap.child("lastlang").val();
        		$('#orderbody').append('<section ng-repeat="card in cards" class="card theme-green" data-color="#52A43A"><div class="card__map"><iframe src="maponly.html?lat=' + lastlat + '=' + lastlang + '=' + ordid + '=' + x + '" width="100%" height="100%"></iframe></div><section class="card__part card__part-1"><div class="card__part__inner"><header class="card__header"><div class="card__header__close-btn"></div><span class="card__header__id ng-binding"># ' + ordid + '</span><span class="card__header__price ng-binding">₹' + ordval + '</span></header><div class="card__stats" style="background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);"><div class="card__stats__item card__stats__item--req"><p class="card__stats__type">Quantity</p><span class="card__stats__value ng-binding">' + ordqty + '</span></div><div class="card__stats__item card__stats__item--pledge"><p class="card__stats__type">Pay Mode</p><span class="card__stats__value ng-binding">' + ordpay + '</span></div><div class="card__stats__item card__stats__item--weight"><p class="card__stats__type">OTP</p><span class="card__stats__value ng-binding">' + dotp + '</span></div></div></div></section><section class="card__part card__part-2"><div class="card__part__side m--back"><div class="card__part__inner card__face"><div class="card__face__colored-side"></div><h3 class="card__face__price ng-binding">₹' + ordval + '</h3><div class="card__face__divider"></div><div class="card__face__path"></div><div class="card__face__from-to"><p class="ng-binding">' + shopnames + '</p><p class="ng-binding">' + uaddr + '</p></div><div class="card__face__deliv-date ng-binding">' + dtnow + '<p class="ng-binding">' + timenow + '</p></div><div class="card__face__stats card__face__stats--req">Quantity<p class="ng-binding">' + ordqty + '</p></div><div class="card__face__stats card__face__stats--pledge">OTP<p class="ng-binding">' + dotp +'</p></div><div class="card__face__stats card__face__stats--weight">View Details<p class="card__face__stats__weight"><p class="ng-binding"><i class="fa fa-arrow-right" aria-hidden="true"></i></p></div></div></div><div class="card__part__side m--front"><div class="card__sender"><h4 class="card__sender__heading">Delivery Person</h4><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="' + dimg + '"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + dname + '</p><p class="card__sender__rating card__sender__rating-5"> Call: <span class="card__sender__rating__star" style="color: green!important;"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="card__sender__rating__count ng-binding">(<a href="javascript:void(0)" onclick="calldboy(\'' + dphone + '\')">' + dphone + '</a>)</span></p><p class="card__sender__address ng-binding">4.7 <b style="color: chocolate!important;">★</b><i>(29)</i></p></div><div class="card__receiver"><div class="card__receiver__inner"><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="https://quantumwebgarden.github.io/dot/dotf.png"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + uname + '</p><p class="card__sender__address ng-binding">' + uaddr + '</p></div></div></div><div class="card__path-big"></div></div><div class="card__from-to"><div class="card__from-to__inner"><div class="card__text card__text--left"><p class="card__text__heading">From</p><p class="card__text__middle ng-binding">' + shopnames + '</p><p class="card__text__bottom ng-binding">' + shopaddrs + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">To</p><p class="card__text__middle ng-binding">' + uname + '</p><p class="card__text__bottom ng-binding">' + uaddr + '</p></div></div></div><section class="card__part card__part-3"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><div class="card__timings"><div class="card__timings__inner"><div class="card__text card__text--left"><p class="card__text__heading">Delivery Time</p><p class="card__text__middle ng-binding">' + timenow +'</p><p class="card__text__bottom ng-binding">' + dtnow + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">Approx Delivery Time</p><p class="card__text__middle ng-binding">' + dtimeapprox + '</p></div></div></div><div class="card__timer">' + dtimeapprox + '</div><section class="card__part card__part-4"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><button type="button" class="card__request-btn"><span class="card__request-btn__text-1">View More</span><span class="card__request-btn__text-2">Close</span></button><p class="card__counter ng-binding">Order is under preparation or packaging</p></div></section></div></section></div></section></section>');
                itemcnt+= 1;
        	}
        	if(dstatus == "23" || dstatus == "23"){
                $('#orderbody').append('<section ng-repeat="card in cards" class="card theme-orange" data-color="#F7AA17"><div class="card__map"><iframe src="delivered.html" width="100%" height="100%"></iframe></div><section class="card__part card__part-1"><div class="card__part__inner"><header class="card__header"><div class="card__header__close-btn"></div><span class="card__header__id ng-binding"># ' + ordid + '</span><span class="card__header__price ng-binding">₹' + ordval + '</span></header><div class="card__stats" style="background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);"><div class="card__stats__item card__stats__item--req"><p class="card__stats__type">Quantity</p><span class="card__stats__value ng-binding">' + ordqty + '</span></div><div class="card__stats__item card__stats__item--pledge"><p class="card__stats__type">Pay Mode</p><span class="card__stats__value ng-binding">' + ordpay + '</span></div><div class="card__stats__item card__stats__item--weight"><p class="card__stats__type">OTP</p><span class="card__stats__value ng-binding">' + dotp + '</span></div></div></div></section><section class="card__part card__part-2"><div class="card__part__side m--back"><div class="card__part__inner card__face"><div class="card__face__colored-side"></div><h3 class="card__face__price ng-binding">₹' + ordval + '</h3><div class="card__face__divider"></div><div class="card__face__path"></div><div class="card__face__from-to"><p class="ng-binding">' + shopnames + '</p><p class="ng-binding">' + uaddr + '</p></div><div class="card__face__deliv-date ng-binding">' + dtnow + '<p class="ng-binding">' + timenow + '</p></div><div class="card__face__stats card__face__stats--req">Quantity<p class="ng-binding">' + ordqty + '</p></div><div class="card__face__stats card__face__stats--pledge">OTP<p class="ng-binding">' + dotp +'</p></div><div class="card__face__stats card__face__stats--weight">View Details<p class="card__face__stats__weight"><p class="ng-binding"><i class="fa fa-arrow-right" aria-hidden="true"></i></p></div></div></div><div class="card__part__side m--front"><div class="card__sender"><h4 class="card__sender__heading">Delivery Person</h4><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="' + dimg + '"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + dname + '</p><p class="card__sender__rating card__sender__rating-5"> Call: <span class="card__sender__rating__star" style="color: green!important;"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="card__sender__rating__count ng-binding">(<a href="javascript:void(0)" onclick="calldboy(\'' + dphone + '\')">' + dphone + '</a>)</span></p><p class="card__sender__address ng-binding">4.7 <b style="color: chocolate!important;">★</b><i>(29)</i></p></div><div class="card__receiver"><div class="card__receiver__inner"><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="https://quantumwebgarden.github.io/dot/dotf.png"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + uname + '</p><p class="card__sender__address ng-binding">' + uaddr + '</p></div></div></div><div class="card__path-big"></div></div><div class="card__from-to"><div class="card__from-to__inner"><div class="card__text card__text--left"><p class="card__text__heading">From</p><p class="card__text__middle ng-binding">' + shopnames + '</p><p class="card__text__bottom ng-binding">' + shopaddrs + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">To</p><p class="card__text__middle ng-binding">' + uname + '</p><p class="card__text__bottom ng-binding">' + uaddr + '</p></div></div></div><section class="card__part card__part-3"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><div class="card__timings"><div class="card__timings__inner"><div class="card__text card__text--left"><p class="card__text__heading">Delivery Time</p><p class="card__text__middle ng-binding">' + timenow +'</p><p class="card__text__bottom ng-binding">' + dtnow + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">Approx Delivery Time</p><p class="card__text__middle ng-binding">' + dtimeapprox + '</p></div></div></div><div class="card__timer">' + dtimeapprox + '</div><section class="card__part card__part-4"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><button type="button" class="card__request-btn"><span class="card__request-btn__text-1">View More</span><span class="card__request-btn__text-2">Close</span></button><p class="card__counter ng-binding">Your Order delivered successfully</p></div></section></div></section></div></section></section>');
                itemcnt+= 1;
        	}
        	if(dstatus == "28" || dstatus == "19" || dstatus == "29"){
                $('#orderbody').append('<section ng-repeat="card in cards" class="card theme-red" data-color="#EF5350"><div class="card__map"><iframe src="error.html" width="100%" height="100%"></iframe></div><section class="card__part card__part-1"><div class="card__part__inner"><header class="card__header"><div class="card__header__close-btn"></div><span class="card__header__id ng-binding"># ' + ordid + '</span><span class="card__header__price ng-binding">₹' + ordval + '</span></header><div class="card__stats" style="background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);"><div class="card__stats__item card__stats__item--req"><p class="card__stats__type">Quantity</p><span class="card__stats__value ng-binding">' + ordqty + '</span></div><div class="card__stats__item card__stats__item--pledge"><p class="card__stats__type">Pay Mode</p><span class="card__stats__value ng-binding">' + ordpay + '</span></div><div class="card__stats__item card__stats__item--weight"><p class="card__stats__type">OTP</p><span class="card__stats__value ng-binding">' + dotp + '</span></div></div></div></section><section class="card__part card__part-2"><div class="card__part__side m--back"><div class="card__part__inner card__face"><div class="card__face__colored-side"></div><h3 class="card__face__price ng-binding">₹' + ordval + '</h3><div class="card__face__divider"></div><div class="card__face__path"></div><div class="card__face__from-to"><p class="ng-binding">' + shopnames + '</p><p class="ng-binding">' + uaddr + '</p></div><div class="card__face__deliv-date ng-binding">' + dtnow + '<p class="ng-binding">' + timenow + '</p></div><div class="card__face__stats card__face__stats--req">Quantity<p class="ng-binding">' + ordqty + '</p></div><div class="card__face__stats card__face__stats--pledge">OTP<p class="ng-binding">' + dotp +'</p></div><div class="card__face__stats card__face__stats--weight">View Details<p class="card__face__stats__weight"><p class="ng-binding"><i class="fa fa-arrow-right" aria-hidden="true"></i></p></div></div></div><div class="card__part__side m--front"><div class="card__sender"><h4 class="card__sender__heading">Delivery Person</h4><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="' + dimg + '"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + dname + '</p><p class="card__sender__rating card__sender__rating-5"> Call: <span class="card__sender__rating__star" style="color: green!important;"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="card__sender__rating__count ng-binding">(<a href="javascript:void(0)" onclick="calldboy(\'' + dphone + '\')">' + dphone + '</a>)</span></p><p class="card__sender__address ng-binding">4.7 <b style="color: chocolate!important;">★</b><i>(29)</i></p></div><div class="card__receiver"><div class="card__receiver__inner"><div class="card__sender__img-cont"><div class="card__sender__img-cont__inner"><img class="card__sender__img" src="https://quantumwebgarden.github.io/dot/dotf.png"></div></div><div class="card__sender__name-and-rating"><p class="card__sender__name ng-binding">' + uname + '</p><p class="card__sender__address ng-binding">' + uaddr + '</p></div></div></div><div class="card__path-big"></div></div><div class="card__from-to"><div class="card__from-to__inner"><div class="card__text card__text--left"><p class="card__text__heading">From</p><p class="card__text__middle ng-binding">' + shopnames + '</p><p class="card__text__bottom ng-binding">' + shopaddrs + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">To</p><p class="card__text__middle ng-binding">' + uname + '</p><p class="card__text__bottom ng-binding">' + uaddr + '</p></div></div></div><section class="card__part card__part-3"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><div class="card__timings"><div class="card__timings__inner"><div class="card__text card__text--left"><p class="card__text__heading">Delivery Time</p><p class="card__text__middle ng-binding">' + timenow +'</p><p class="card__text__bottom ng-binding">' + dtnow + '</p></div><div class="card__text card__text--right"><p class="card__text__heading">Approx Delivery Time</p><p class="card__text__middle ng-binding">' + dtimeapprox + '</p></div></div></div><div class="card__timer">' + dtimeapprox + '</div><section class="card__part card__part-4"><div class="card__part__side m--back"></div><div class="card__part__side m--front"><button type="button" class="card__request-btn"><span class="card__request-btn__text-1">View More</span><span class="card__request-btn__text-2">Close</span></button><p class="card__counter ng-binding">Something went wrong for this order</p></div></section></div></section></div></section></section>');
                itemcnt+= 1;
        	}
        	

        });

        }

function shownomsg(){
	Swal.fire({
  title: 'DOT',
  html: 'No order details retrieved. If you have already placed an order, check your internet connection',
  showCancelButton: false,
  confirmButtonText: 'Back to Home',
  allowEscapeKey: false,
  allowOutsideClick: false,
  customClass: 'swal-wide',
  background: 'rgba(144, 220, 224, 0.9)'
}).then((result) => {
  if (result.value) {
    window.open("index.html" + location.search);
  }
})
}

function calldboy(x){
	window.androidObj.textToAndroid(x);
}