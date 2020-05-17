window.addEventListener('offline', toOff);
    function toOff(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<p>Check your Internet Connection</p>'
        });
      document.getElementById("vdy").style.display = "none";
      document.getElementById("err").style.display = "block";
      document.getElementById("bnav").style.display = "none";
      document.getElementById("unav").style.display = "none";

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

function fdsrf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("fdsr");
    filter = input.value.toUpperCase();
    ul = document.getElementById("fds");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    }  
    function mdcrf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("mdcr");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mdc");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    }  
    function grcrf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("grcr");
    filter = input.value.toUpperCase();
    ul = document.getElementById("grc");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    } 
    function estrf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("estr");
    filter = input.value.toUpperCase();
    ul = document.getElementById("est");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    } 




var pntr = "";
  function foods() {
    pntr = "food_list";

    document.getElementById("foods").style.display = "block";
    document.getElementById("medicine").style.display = "none";
    document.getElementById("grocery").style.display = "none";
    document.getElementById("essentials").style.display = "none";

    document.getElementById("fdsr").style.display = "block";
    document.getElementById("mdcr").style.display = "none";
    document.getElementById("grcr").style.display = "none";
    document.getElementById("estr").style.display = "none";

    document.getElementById("fdsshp").style.display = "block";
    document.getElementById("mdcshp").style.display = "none";
    document.getElementById("grcshp").style.display = "none";
    document.getElementById("estshp").style.display = "none";

    document.getElementById("fdsrs").style.display = "block";
    document.getElementById("mdcrs").style.display = "none";
    document.getElementById("grcrs").style.display = "none";
    document.getElementById("estrs").style.display = "none";
    
  }
  function medicine() {
    pntr = "medicine_list";

    document.getElementById("foods").style.display = "none";
    document.getElementById("medicine").style.display = "block";
    document.getElementById("grocery").style.display = "none";
    document.getElementById("essentials").style.display = "none";

    document.getElementById("fdsr").style.display = "none";
    document.getElementById("mdcr").style.display = "block";
    document.getElementById("grcr").style.display = "none";
    document.getElementById("estr").style.display = "none";

    document.getElementById("fdsshp").style.display = "none";
    document.getElementById("mdcshp").style.display = "block";
    document.getElementById("grcshp").style.display = "none";
    document.getElementById("estshp").style.display = "none";

    document.getElementById("fdsrs").style.display = "none";
    document.getElementById("mdcrs").style.display = "block";
    document.getElementById("grcrs").style.display = "none";
    document.getElementById("estrs").style.display = "none";

  }
  function grocery() {
    pntr = "grocery_list";

    document.getElementById("foods").style.display = "none";
    document.getElementById("medicine").style.display = "none";
    document.getElementById("grocery").style.display = "block";
    document.getElementById("essentials").style.display = "none";

    document.getElementById("fdsr").style.display = "none";
    document.getElementById("mdcr").style.display = "none";
    document.getElementById("grcr").style.display = "block";
    document.getElementById("estr").style.display = "none";

    document.getElementById("fdsshp").style.display = "none";
    document.getElementById("mdcshp").style.display = "none";
    document.getElementById("grcshp").style.display = "block";
    document.getElementById("estshp").style.display = "none";

    document.getElementById("fdsrs").style.display = "none";
    document.getElementById("mdcrs").style.display = "none";
    document.getElementById("grcrs").style.display = "block";
    document.getElementById("estrs").style.display = "none";

  }
  function essentials() {
    pntr = "essentials_list";

    document.getElementById("foods").style.display = "none";
    document.getElementById("medicine").style.display = "none";
    document.getElementById("grocery").style.display = "none";
    document.getElementById("essentials").style.display = "block";

    document.getElementById("fdsr").style.display = "none";
    document.getElementById("mdcr").style.display = "none";
    document.getElementById("grcr").style.display = "none";
    document.getElementById("estr").style.display = "block";

    document.getElementById("fdsshp").style.display = "none";
    document.getElementById("mdcshp").style.display = "none";
    document.getElementById("grcshp").style.display = "none";
    document.getElementById("estshp").style.display = "block";

    document.getElementById("fdsrs").style.display = "none";
    document.getElementById("mdcrs").style.display = "none";
    document.getElementById("grcrs").style.display = "none";
    document.getElementById("estrs").style.display = "block";

  }

function sh_shops(){
    document.getElementById("vdy").style.display = "block";
    document.getElementById("ordertrack").style.display = "none";
    document.getElementById("cartdtls").style.display = "none";
	document.getElementById("itemlist").style.display = "none";
	document.getElementById("shoplist").style.display = "block";
	document.getElementById("item").classList.remove("nav__link--active");
    document.getElementById("order").classList.remove("nav__link--active");
	document.getElementById("shop").classList.add("nav__link--active");
    document.getElementById("itmsrc").style.display = "none";
    document.getElementById("shpsrc").style.display = "block";
    document.getElementById("ordsrc").style.display = "none";
    document.getElementById("krtsrc").style.display = "none";

}

function sh_items(){
    document.getElementById("vdy").style.display = "block";
    document.getElementById("ordertrack").style.display = "none";
    document.getElementById("cartdtls").style.display = "none";
	document.getElementById("itemlist").style.display = "block";
	document.getElementById("shoplist").style.display = "none";
	document.getElementById("item").classList.add("nav__link--active");
	document.getElementById("shop").classList.remove("nav__link--active");
    document.getElementById("order").classList.remove("nav__link--active");
    document.getElementById("itmsrc").style.display = "block";
    document.getElementById("shpsrc").style.display = "none";
    document.getElementById("ordsrc").style.display = "none";
    document.getElementById("krtsrc").style.display = "none";

}

function sh_orders(){
    document.getElementById("vdy").style.display = "none";
    document.getElementById("ordertrack").style.display = "block";
    document.getElementById("cartdtls").style.display = "none";
    document.getElementById("order").classList.add("nav__link--active");
    document.getElementById("shop").classList.remove("nav__link--active");
    document.getElementById("item").classList.remove("nav__link--active");
    document.getElementById("itmsrc").style.display = "none";
    document.getElementById("shpsrc").style.display = "none";
    document.getElementById("ordsrc").style.display = "block";
    document.getElementById("krtsrc").style.display = "none";

}

function showcart(){
    document.getElementById("vdy").style.display = "none";
    document.getElementById("ordertrack").style.display = "none";
    document.getElementById("cartdtls").style.display = "block";
    document.getElementById("order").classList.remove("nav__link--active");
    document.getElementById("shop").classList.remove("nav__link--active");
    document.getElementById("item").classList.remove("nav__link--active");
    document.getElementById("itmsrc").style.display = "none";
    document.getElementById("shpsrc").style.display = "none";
    document.getElementById("ordsrc").style.display = "none";
    document.getElementById("krtsrc").style.display = "block";

}















jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
/*$("#divback").click(function() {
  $(".page-wrapper").removeClass("toggled");
});*/
});
/*
var element = document.getElementById('divback');

Hammer(element).on("swiperight", function(event) {
    $(".page-wrapper").addClass("toggled");
});
Hammer(element).on("swipeleft", function(event) {
    $(".page-wrapper").removeClass("toggled");
});
*/
/*
var touchArea = document.getElementById('divback');
var myRegion = new ZingTouch.Region(touchArea);

myRegion.bind(touchArea, 'swipe', function(e){
    console.log(e.detail);
});


*/




function showme(x) {
    Swal.fire({
  title: document.getElementById('uname').innerHTML,
  text: '',
  html:'<b>' + 
  document.getElementById('utype').innerHTML + ' </b>user <br>' +
     document.getElementById('uphone').innerHTML + '<br>' +
    document.getElementById('umail').innerHTML + '<br>' +
    document.getElementById('uaddress').innerHTML,
  imageUrl: x.src,
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'DOT User',

})
}







window.addEventListener('load', function(){
 
    function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 400, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:

var el = document.getElementById('divback')
swipedetect(el, function(swipedir){
    //swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir =='left')
        $(".page-wrapper").removeClass("toggled");
    if (swipedir =='right')
        $(".page-wrapper").addClass("toggled");
});


}, false) // end window.onload
