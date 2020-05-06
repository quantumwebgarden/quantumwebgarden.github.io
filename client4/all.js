window.addEventListener('offline', toOff);
    function toOff(){
      alert("You gone Offline. Check Internet Connection");
      document.getElementById("vdy").style.display = "none";
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



function navsh() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("mymain");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
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

  }

function sh_shops(){
	document.getElementById("itemlist").style.display = "none";
	document.getElementById("shoplist").style.display = "block";
	document.getElementById("item").classList.remove("nav__link--active");
	document.getElementById("shop").classList.add("nav__link--active");

}

function sh_items(){
	document.getElementById("itemlist").style.display = "block";
	document.getElementById("shoplist").style.display = "none";
	document.getElementById("item").classList.add("nav__link--active");
	document.getElementById("shop").classList.remove("nav__link--active");
	
}