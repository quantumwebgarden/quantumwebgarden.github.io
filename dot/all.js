window.androidObj = function AndroidClass(){};

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

function itemsr(x) {
    z = document.getElementById(x + "r").value;
    if(z.charAt(z.length - 1) == " "){}
    else{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(x + "r");
    filter = input.value.toUpperCase();
    ul = document.getElementById(x);
    li = ul.getElementsByTagName("li");
    b = filter.split(" ");
    
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("h3")[0].getAttribute("data-stag");
        flagsr = 0;
        for (j = 0; j < b.length; j++) {
            if(a.toUpperCase().includes(b[j]) || b[j].toUpperCase().indexOf(a) > -1){
                flagsr ++ ;
            }
        }
        if (flagsr > 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    }
    } 
function shopsr(x) {
    z = document.getElementById(x + "rs").value;
    if(z.charAt(z.length - 1) == " "){}
    else{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(x + "rs");
    filter = input.value.toUpperCase();
    ul = document.getElementById(x + "shp");
    li = ul.querySelectorAll(".aspect-tab");
    b = filter.split(" ");
    
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("span")[0].getAttribute("data-tagshp");
        flagsr = 0;
        
        for (j = 0; j < b.length; j++) {
            if(a.toUpperCase().includes(b[j]) || b[j].toUpperCase().indexOf(a) > -1){
                flagsr ++ ;
            }
        }
        if (flagsr > 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    } 
    }

    /*
    function estrf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("estr");
    filter = input.value.toUpperCase();
    ul = document.getElementById("est");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0].getAttribute("data-stag");
        b = li[i].getElementsByTagName("h3")[0];
        txtValue = b.textContent || b.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    } 
    */

var allitems = ['foods','medicine','grocery','essentials'];
var allshorts = ['fds','mdc','grc','est'];
var pntr = "";

  function showhide(b) {

    pntr = allshorts[allitems.indexOf(b)] + "_list";

        x = document.querySelectorAll("section.productlst");
    for (var i = x.length - 1; i >= 0; i--) {
        x[i].style.display = "none";
    }
    document.getElementById(b).style.display = "block";

        x = document.querySelectorAll("input.srch");
    for (var i = x.length - 1; i >= 0; i--) {
        x[i].style.display = "none";
    }
    document.getElementById(allshorts[allitems.indexOf(b)] + "r").style.display = "block";

        x = document.querySelectorAll("input.srchs");
    for (var i = x.length - 1; i >= 0; i--) {
        x[i].style.display = "none";
    }
    document.getElementById(allshorts[allitems.indexOf(b)] + "rs").style.display = "block";

        x = document.querySelectorAll("div.shlst");
    for (var i = x.length - 1; i >= 0; i--) {
        x[i].style.display = "none";
    }
    document.getElementById(allshorts[allitems.indexOf(b)] + "shp").style.display = "block";
    
  }



function sh_shops(){
    document.getElementById("vdy").style.display = "block";
	document.getElementById("itemlist").style.display = "none";
	document.getElementById("shoplist").style.display = "block";
	document.getElementById("item").classList.remove("nav__link--active");
    document.getElementById("order").classList.remove("nav__link--active");
	document.getElementById("shop").classList.add("nav__link--active");
    document.getElementById("itmsrc").style.display = "none";
    document.getElementById("shpsrc").style.display = "block";
    document.getElementById("ordsrc").style.display = "none";
    window.scrollTo(0, 0);

}

function sh_items(){
    document.getElementById("vdy").style.display = "block";
	document.getElementById("itemlist").style.display = "block";
	document.getElementById("shoplist").style.display = "none";
	document.getElementById("item").classList.add("nav__link--active");
	document.getElementById("shop").classList.remove("nav__link--active");
    document.getElementById("order").classList.remove("nav__link--active");
    document.getElementById("itmsrc").style.display = "block";
    document.getElementById("shpsrc").style.display = "none";
    document.getElementById("ordsrc").style.display = "none";
    window.scrollTo(0, 0);
}

function sh_orders(){
    Swal.fire({
        title: 'DOT',
        text: 'Other Services Will be available soon',
        showConfirmButton: true,
        background: 'white',
        backdrop: 'rgba(0,0,0,0.5)'
    });

}

function sh_orders_show(){
    //tocountorder();
    $(".page-wrapper").removeClass("toggled");
    window.open("del.html" + location.search);
}

function showcart(){
    $(".page-wrapper").removeClass("toggled");
    toshowcart();
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

});




function showme(x) {
    Swal.fire({
  title: document.getElementById('uname').innerHTML,
  text: '',
  html:'<b>' + 
  document.getElementById('utype').innerHTML.replace("<i class=\"fa fa-circle\" style=\"color: green;\"></i>", " ") + ' </b>user <br>' +
     document.getElementById('uphone').innerHTML + '<br>' +
    document.getElementById('umail').innerHTML + '<br>' +
    document.getElementById('uaddress').innerHTML,
  imageUrl: x.src,
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'DOT User',
  customClass: 'sweet-wid',
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
/*
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Location service is not activated.");
  }
}
*/
function showPosition(position) {
    lat1 = 22.2085069;
    lon1 = 88.1842761;
    var dst = distance(lat1, lon1, position.coords.latitude, position.coords.longitude, "K")
  /*alert("Latitude: " + position.coords.latitude + 
  "\nLongitude: " + position.coords.longitude + "\n My Distance from Quantum Webgarden is: " + dst + "KM");*/
  Swal.fire({
        icon: 'info',
        title: 'Distance Measurement',
        text: 'Something went wrong!',
        html:'My latitude: ' + 
        position.coords.latitude + ' <br>My Longitude: ' +
        position.coords.longitude + '<br> My Distance from Quantum Webgarden is: ' +
        dst.toFixed(3) + 'KM',
        footer: '<p>Project : DOT</p>'
        });
  slctupd('ALL','','7894561230',position.coords.latitude,position.coords.longitude)

}
function showimg(x){
    Swal.fire({
        imageUrl: x.src,
        imageWidth: 800,
        showCancelButton: false,
        showConfirmButton: false,
        background: 'rgba(0,0,0,0.5)',
        backdrop: 'rgba(0,0,0,0)'
    });

}

function cntm() {
    sngcntdiv = document.getElementById("cntdiv").getAttribute("data-cnt");
    if(sngcntdiv > 1){
        sngcntdiv --;
        document.getElementById("cntdiv").setAttribute("data-cnt", sngcntdiv);
        document.getElementById("cntdiv").innerHTML = sngcntdiv;
    }
}
function cntp() {
    sngcntdiv = document.getElementById("cntdiv").getAttribute("data-cnt");
    if(sngcntdiv < 10){
        sngcntdiv ++;
        document.getElementById("cntdiv").setAttribute("data-cnt", sngcntdiv);
        document.getElementById("cntdiv").innerHTML = sngcntdiv;
    }
}

function doit(x) {
    sngcntdiv = document.getElementById("cntdiv").getAttribute("data-cnt");
    for (var i = 0; i < sngcntdiv; i++) {
        adc(x);
    }
    document.getElementById("cntdiv").setAttribute("data-cnt", 1);
    document.getElementById("cntdiv").innerHTML = 1;
}

function chkback() {
    history.back();
}

function chngloc(){
    swal("This feature will be available soon...", {
  buttons: false,
  timer: 2500,
});
}


function videoshow(){
    swal("This feature will be available soon...", {
  buttons: false,
  timer: 2500,
});
}
function termshow(){
    swal("This feature will be available soon...", {
  buttons: false,
  timer: 2500,
});
}
function aboutshow(){
    swal("This feature will be available soon...", {
  buttons: false,
  timer: 2500,
});
}

function sharefriends(x){
    window.androidObj.textToAndroid(x);
}