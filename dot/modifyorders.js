window.androidObj = function AndroidClass(){};
var loaded = 0;
var orderID = "";
var dpid = "";
var backgrounds = ["linear-gradient(to right, #d194ff, #9389ff)","linear-gradient(to right, #7cbfee, #00d0b8)","linear-gradient(to right, #ff77a7, #ff7b7e)"];
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

function loadstatus(){
	loaded = 1;
	Swal.fire({
	title: 'DOT',
	html: 'Status changed to live',
	timer: 1000,
	timerProgressBar: true,
	allowEscapeKey: false,
	allowOutsideClick: false,
});
}
  function loadingtime() {
  var qtload = Math.floor(Math.random() * 4);
    let timerInterval;
  Swal.fire({
  title: 'DOT',
  html: '<img width="80%" height="auto" src="assets/img/loading.gif"><br>',
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
    //document.getElementById("mainbody").style.display = "block";
  }
}).then((result) => {
  /* Read more about handling dismissals below 
  if (result.dismiss === Swal.DismissReason.timer) {
    initskip();
  }*/
})
  var parameters = location.search.substring(1).split("=");
  //orderID = parameters[1];
  dpid = parameters[1];
  orderdetails();
}
  
  function orderdetails() {
    var rootRef = firebase.database().ref('allorders');

      rootRef.on("child_added", snap => {

var ordid = snap.child("ordid").val();
var cname = snap.child("uname").val();
var cphone = snap.child("orduid").val();
var paymode = snap.child("ordpay").val();
var dotp = snap.child("dotp").val();
var ordval = snap.child("ordval").val();
var caddress = snap.child("uaddr").val();
var orderstatus = snap.child("orderstatus").val();
var picked = snap.child("picked").val();
var delivered = snap.child("delivered").val();
var did = snap.child("did").val();
var dname = snap.child("dname").val();
var shopnames = snap.child("shopnames").val();
var shopaddrs = snap.child("shopaddrs").val();
var totalqty = snap.child("ordqty").val().split(",").reduce((a, b) => Number(a) + Number(b), 0);
var shopids = snap.child("shopids").val();
var dtnow = snap.child("dtnow").val();
var timenow = snap.child("timenow").val();
var products = snap.child("products").val();
var products = products.split("sp2lt").join(" | ");
var resqty = snap.child("qtys").val();
var resqty = resqty.split("sp2lt").join(" | ");
var productids = snap.child("productids").val().split("sp2lt").join(" | ");
var ordqty = snap.child("ordqty").val();
var dcharge = snap.child("dcharge").val();
var pcode = snap.child("ordpcode").val();
var prices = snap.child("prices").val().split("sp2lt").join(" | ");

var lnk = "";


if(shopids.length < 10){
  lnk = "<b onclick=\"window.open('modifyshoporders.html?id=" + shopids + "')\">" + shopnames + "</b>,";
}
else{
 var shopids = shopids.split(",");
 var shopnamessplt = shopnames.split(",");
 console.log(shopids.length);
 for (var i = 0; i < shopids.length; i++) {
   lnk = lnk +  "<b onclick=\"window.open('modifyshoporders.html?id=" + shopids[i] + "')\">" + shopnamessplt[i] + "</b>,";
 }
}

console.log(shopids);


if(orderstatus == 11 || orderstatus == 22){
    var backg = "background: linear-gradient(to right, #d194ff, #9389ff)!important";
}
if(orderstatus == 24){
    var backg = 'background: linear-gradient(to right, #7cbfee, #00d0b8)!important';
}
if(orderstatus == 19 || orderstatus == 29 || orderstatus == 28){
    var backg = 'background: linear-gradient(to right, #ff77a7, #ff7b7e)!important';
}
if(orderstatus == 23){
    var backg = "background: linear-gradient(to right, #9c9c0b, #8bcca0)!important";
}

	/*if(loaded == 0){	
    $("#allordercard").append('<div class="card card--' + backg + '"><p class="card__number">Order No.: ' + ordid +'</p><center><hr style="width: 50%"></center><br><p class="card__owner"><b>Customer Name: </b> ' + cname + ' </p><p class="card__owner"><b>Contact no. : </b><i onclick="calldboy(\'call' + cphone + '\')">+91 ' + cphone + '</i></p><p class="card__owner"><b>Delivery Address : </b>' + caddress + '</p><br><p class="card__owner"><b>Delivery Person: </b> ' + dname + ' </p><br><p class="card__owner"><b>Pickup Shop Name(s) : </b><br>' + shopnames + '</p><b>Respective Pickup Address(es) : </b><br>' + shopaddrs + '</p><b>Respective Item(s) to collect : </b><br>' + products + '</p><b>Respective Quantity(s) to collect : </b><br>' + resqty + '</p><div class="card__info"><p class="card__integral"><b>Total Quantity :</b> ' + totalqty +'</p><p class="card__amount"><b>Total Amount: ₹</b>' + ordval + '</p></div><div class="card__info"><p class="card__integral"><b>Payment Status :</b> ' + paymode +'</p><p class="card__amount"><b>OTP: </b> ' + dotp + '</p></div><div class="card__info"><p class="card__integral"><b>Date :</b> ' + dtnow +'</p><p class="card__amount"><b>Time: </b> ' + timenow + '</p></div><center><div class="card__info"><p class="card__integral"><button disabled id="' + ordid + 'p" class="opc' + pickbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" data-shopids="' + shopids + '" onclick="picked(this)">Picked Up</button></p><p class="card__amount"><button disabled id="' + ordid + 'd" class="opc' + delbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" data-shopids="' + shopids + '" onclick="delivered(this)">Delivered</button></p></div></center></div><br>');
	}
	if(loaded == 1){	
    $("#allordercard").insertAdjacentHTML('afterend','<div class="card card--' + backg + '"><p class="card__number">Order No.: ' + ordid +'</p><center><hr style="width: 50%"></center><br><p class="card__owner"><b>Customer Name: </b> ' + cname + ' </p><p class="card__owner"><b>Contact no. : </b><i onclick="calldboy(\'call' + cphone + '\')">+91 ' + cphone + '</i></p><p class="card__owner"><b>Delivery Address : </b>' + caddress + '</p><br><p class="card__owner"><b>Delivery Person: </b> ' + dname + ' </p><br><p class="card__owner"><b>Pickup Shop Name(s) : </b><br>' + shopnames + '</p><b>Respective Pickup Address(es) : </b><br>' + shopaddrs + '</p><b>Respective Item(s) to collect : </b><br>' + products + '</p><b>Respective Quantity(s) to collect : </b><br>' + resqty + '</p><div class="card__info"><p class="card__integral"><b>Total Quantity :</b> ' + totalqty +'</p><p class="card__amount"><b>Total Amount: ₹</b>' + ordval + '</p></div><div class="card__info"><p class="card__integral"><b>Payment Status :</b> ' + paymode +'</p><p class="card__amount"><b>OTP: </b> ' + dotp + '</p></div><div class="card__info"><p class="card__integral"><b>Date :</b> ' + dtnow +'</p><p class="card__amount"><b>Time: </b> ' + timenow + '</p></div><center><div class="card__info"><p class="card__integral"><button disabled id="' + ordid + 'p" class="opc' + pickbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" data-shopids="' + shopids + '" onclick="picked(this)">Picked Up</button></p><p class="card__amount"><button disabled id="' + ordid + 'd" class="opc' + delbtn + '" data-ordid="' + ordid + '" data-uid="' + cphone + '" data-shopids="' + shopids + '" onclick="delivered(this)">Delivered</button></p></div></center></div><br>');
	var xaudio = document.getElementById("new"); 
	xaudio.play(); 
	}*/
  //$("#allitems").append('<tr><td>' + id + '</td><td>Name: <textarea class="textclass" id="name' + id + '">' + name + '</textarea><br>Description: <textarea class="textclass" id="desc' + id + '">' + desc + '</textarea><br>Category: <textarea class="textclass" id="cat' + id + '">' + cat + '</textarea><br>Search Tags: <textarea class="textclass" id="tagsr' + id + '">' + tagsr + '</textarea></td><td><img src=' + thumb + ' width="150px" height="auto"></td><td>Rating Count: <input type="text" id="ratcnt' + id + '" value="' + ratcnt + '"><br>Ratings: <input type="text" id="rating' + id + '" value="' + rating + '"><br>Piority: <input type="text" id="dotpri' + id + '" value="' + dotpri + '"></td><td><input type="text" id="priceshp' + id + '" value="' + priceshp + '"></td><td><input type="text" id="price' + id + '" value="' + price + '"><br><br><select id="perc' + id + '" onchange="updateper(this)"><option value="5">5%</option><option value="10">10%</option><option value="15">15%</option><option value="20">20%</option><option value="25">25%</option><option value="30">30%</option></select></td><td><label class="switch"><input type="checkbox" ' + stock + ' id="prst' + id + '" data-val="' + stockst + '" onchange="productchange(this)"><span class="slider round"></span></label></td><td><button onclick="updateproduct(\'' + id + '\',\'' + prtype + '\')">Update</button></td><td><button onclick="deleteproduct(\'' + id + '\',\'' + prtype + '\')">Delete</button></td></tr>');
 
  $("#allorders").append('<tr style="' + backg + '"><td>ID: <u>' + ordid + '</u><br>Status: <input type="text" id="orderstatus' + ordid + '" value="' + orderstatus + '"><br>Date: ' + dtnow + '<br>Time: ' + timenow + '<br>Picked: ' + picked + '<br>Delivered: ' + delivered + '</td><td>Name: <br><b>' + cname + '</b><br>Phone: <br><b id="cphone' + ordid + '">' + cphone + '</b></td><td>Name: <input type="text" id="dname' + ordid + '" value="' + dname + '"><br>Id: <input type="text" id="did' + ordid + '" value="' + did + '"></td><td>Name: <textarea class="textclass" id="shopnames' + ordid + '">' + shopnames + '</textarea><br>Address: <textarea class="textclass" id="shopaddrs' + ordid + '">' + shopaddrs + '</textarea><br>Id: <textarea class="textclass" id="shopids' + ordid + '">' + shopids + '</textarea><br><i>Open Shop: </i>' + lnk + '<br> </td><td>Product Name: <textarea class="textclass" id="products' + ordid + '">' + products + '</textarea><br>ID: <textarea class="textclass" id="productids' + ordid + '">' + productids + '</textarea></td><td>Quantity (, & |): <input type="text" id="qtys' + ordid + '" value="' + resqty + '"><br>Total Quantity: <input type="text" id="ordqty' + ordid + '" value="' + ordqty + '"></td><td>Total value: <input type="text" id="ordval' + ordid + '" value="' + ordval + '"><br>Prices (, & |): <input type="text" id="prices' + ordid + '" value="' + prices + '"><br>Delivery Charge: <input type="text" id="dcharge' + ordid + '" value="' + dcharge + '"><br>Promocode: <input type="text" id="ordpcode' + ordid + '" value="' + pcode + '"></td><td><button onclick="updateproduct(\'' + ordid + '\')">Update</button></td><td><button onclick="deleteproduct(\'' + ordid + '\')">Remove</button></td></tr>');

});

  }
  
  
  
function deleteproduct(x){

  var customer = document.getElementById("cphone" + x).innerHTML;
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("allorders/" + x).remove();
    firebase.database().ref("vvcart/" + customer + "/order/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Your product has been deleted.',
      'success'
    )
    //location.reload();
  }
})
}


function updateproduct(x){
  var neworderstatus = document.getElementById("orderstatus" + x).value;
  var newdname = document.getElementById("dname" + x).value;
  var newdid = document.getElementById("did" + x).value;
  var newshopnames = document.getElementById("shopnames" + x).value.split(" | ").join("sp2lt");
  var newshopaddrs = document.getElementById("shopaddrs" + x).value.split(" | ").join("sp2lt");
  var newshopids = document.getElementById("shopids" + x).value.split(" | ").join("sp2lt");
  var newproducts = document.getElementById("products" + x).value.split(" | ").join("sp2lt");
  var newproductids = document.getElementById("productids" + x).value.split(" | ").join("sp2lt");
  var newqtys = document.getElementById("qtys" + x).value.split(" | ").join("sp2lt");
  var newordqty = document.getElementById("ordqty" + x).value.split(" | ").join("sp2lt");
  var newordval = document.getElementById("ordval" + x).value;
  var newprices = document.getElementById("prices" + x).value.split(" | ").join("sp2lt");
  var newordpcode = document.getElementById("ordpcode" + x).value;
  var newdcharge = document.getElementById("dcharge" + x).value;


  var customer = document.getElementById("cphone" + x).innerHTML;

  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update!'
    }).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("allorders/" + x).update({dname:newdname,orderstatus:neworderstatus,did:newdid,shopnames:newshopnames,shopaddrs:newshopaddrs,shopids:newshopids,products:newproducts,productids:newproductids,qtys:newqtys,ordqty:newordqty,ordval:newordval,prices:newprices,ordpcode:newordpcode,dcharge:newdcharge});
    firebase.database().ref("vvcart/" + customer + "/order/" + x).update({dname:newdname,orderstatus:neworderstatus,did:newdid,shopnames:newshopnames,shopaddrs:newshopaddrs,shopids:newshopids,products:newproducts,productids:newproductids,qtys:newqtys,ordqty:newordqty,ordval:newordval,prices:newprices,ordpcode:newordpcode,dcharge:newdcharge});

    Swal.fire(
      'Updated!',
      'Your product has been updated.',
      'success'
    )
  }
})

}



function showcalculator(){
  Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2','3']
}).queue([
  {
    title: ' DOT',
    text: 'Enter a Number'
  },
  {
    title: 'DOT',
    text: 'Enter percentage Amount'
  },
  {
    title: 'DOT',
    text: 'Enter 1 for Discount 2 for Increment'
  }
]).then((result) => {
  if (result.value) {
    resultsall = result.value;
    if(resultsall[2] == "1"){
      var perval = Number(100 - Number(resultsall[1]));
    }
    if(resultsall[2] == "2"){
      var perval = Number(100 + Number(resultsall[1]));
    }
    var finalval = Number(resultsall[0] * Number(perval/100)).toFixed(0);
    const answers = JSON.stringify(result.value)
    Swal.fire({
      title: 'All done!',
      html: `
        Your Result:
        <pre><code>${resultsall[0]} x ${perval}% = ${finalval}</code></pre>
      `,
      confirmButtonText: 'It\'s all'
    })
  }
})
}

