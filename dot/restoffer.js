var mcname = "";
var mcaddr = "";
var mclat = "";
var mclang = "";
var mcpin = "";
var mcid = "";
var mctype = "";
var prtype = "";
var prid = "";
var today = "";
var mcstatus = "";
var mcshare = 10;
var stocker = ["","checked"];
var resultsall = [];
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
//   firebase.analytics();     

function getuid() {
    var parameters = location.search.substring(1).split("=");
    mcid = parameters[1];
	mctype = parameters[2];
	prtype = mctype.substring(4, mctype.length);
	console.log(mcid + " - " + mctype);
	var date = new Date();
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
    var timestamp = date.getTime();
    prid = new Date("12/31/2099").getTime() - timestamp;
	getmcdtls(mctype,mcid);

}



function getmcdtls(mctype,mcid){

var rootRef = firebase.database().ref(mctype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopname = snap.child("shopname").val();
var shopaddr = snap.child("shopaddr").val();
var shoplat = snap.child("shoplat").val();
var shoplang = snap.child("shoplang").val();
var dpincode = snap.child("dpincode").val();
var processtime = snap.child("processtime").val();
var picthumb = snap.child("picthumb").val();
var tagsr = snap.child("tagsr").val();
var shopstatus = snap.child("shopstatus").val();
var shareamount = snap.child("shareperc").val();
if(id == mcid){
  $("#mcname").html(shopname);
  mcname = shopname;
  mcaddr = shopaddr;
  mclat = shoplat;
  mclang = shoplang;
  mcpin = dpincode;
  mcstatus = shopstatus;
  $("#checkstatus").html('<input type="checkbox" ' + stocker[mcstatus] + ' data-val="' + mcstatus + '" id="shst' + id + '" onclick="shopchange(this)"><span class="slider"></span>');
  getallitems(mcid,prtype);
} 
/*if (x == "ALL") {
$("#fdsshp").append('<div class="aspect-tab"><input id="' + id + '" type="checkbox" class="aspect-input" name="aspect"><label for="' + id + '" class="aspect-label"></label><div class="aspect-content"><div class="aspect-info"><img class="chart-pie" src="' + picthumb + '" width="50px" height="auto"><span class="aspect-name" data-tagshp="' + tagsr + '">' + shopname + ' &nbsp;&nbsp;<img src="assets/img/marker.png" width="15px" height="auto">' + shopaddr + ' &nbsp;<span class="' + shopstatus + '"></span><br><i>Usually prepare foods within ' + processtime + ' minutes</i></span></div><div class="aspect-stat"><div class="all-opinions"><span class="all-opinions-count">' + optcnt + '</span><span> opinion</span></div><div><span class="positive-count">' + posopt + '</span><span class="neutral-count">' + neuopt + '</span><span class="negative-count">' + negopt + '</span></div></div></div><div class="aspect-tab-content"><div class="sentiment-wrapper"><div class="productlst"><ul class="products" id="' + id + 'shp"></ul></div></div></div></div>');
}*/
});
}



function getallitems(mcid,prtype){
  var rootRef = firebase.database().ref(prtype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var name = snap.child("name").val();
var shopid = snap.child("shopid").val();
var thumb = snap.child("img").val();
var price = snap.child("price").val();
var stockst = snap.child("stock").val();
var priceshp = snap.child("priceshp").val();
var desc = snap.child("desc").val();
var cat = snap.child("cat").val();
var tagsr = snap.child("tagsr").val();
var rating = snap.child("rating").val();
var ratcnt = snap.child("ratcnt").val();
var dotprirev = snap.child("dotprirev").val();
var dotpri = snap.child("dotpri").val();
var stock = stocker[stockst];
if(shopid == mcid){
  
$("#allitems").append('<tr><td>' + id + '</td><td>Name: <textarea class="textclass" id="name' + id + '">' + name + '</textarea><br>Description: <textarea class="textclass" id="desc' + id + '">' + desc + '</textarea><br>Category: <textarea class="textclass" id="cat' + id + '">' + cat + '</textarea><br>Search Tags: <textarea class="textclass" id="tagsr' + id + '">' + tagsr + '</textarea></td><td><img src=' + thumb + ' id="oldimg' + id + '" width="150px" height="auto"><br><input type="text" id="imgthumb' + id + '" value="' + thumb + '"></td><td>Rating Count: <input type="text" id="ratcnt' + id + '" value="' + ratcnt + '"><br>Ratings: <input type="text" id="rating' + id + '" value="' + rating + '"><br>Piority: <input type="text" id="dotpri' + id + '" value="' + dotpri + '"></td><td><input type="text" id="priceshp' + id + '" value="' + priceshp + '"></td><td><input type="text" id="price' + id + '" value="' + price + '"><br><br><select id="perc' + id + '" onchange="updateper(this)"><option value="5">5%</option><option value="10">10%</option><option value="15">15%</option><option value="20">20%</option><option value="25">25%</option><option value="30">30%</option></select></td><td><label class="switch"><input type="checkbox" ' + stock + ' id="prst' + id + '" data-val="' + stockst + '" onchange="productchange(this)"><span class="slider round"></span></label></td><td><button onclick="updateproduct(\'' + id + '\',\'' + prtype + '\')">Update</button></td><td><button onclick="deleteproduct(\'' + id + '\',\'' + prtype + '\')">Delete</button></td></tr>');
  
} 

});
}

function shopchange(x){
  var shid = x.id;
  shid = shid.substring(4,shid.length);
  var oldst = document.getElementById(x.id).getAttribute("data-val");
  var newst = Number(1 - Number(oldst)); 
  console.log(newst);
  document.getElementById(x.id).setAttribute("data-val", newst);
  firebase.database().ref(mctype + "/" + shid).update({shopstatus:newst});
  updateallitems(shid,newst);
}

function productchange(x){
  var prid = x.id;
  prid = prid.substring(4,prid.length);
  var oldst = document.getElementById(x.id).getAttribute("data-val");
  var newst = Number(1 - Number(oldst)); 
  console.log(newst);
  document.getElementById(x.id).setAttribute("data-val", newst);
  firebase.database().ref(prtype + "/" + prid).update({stock:newst});
}

function updateallitems(x,y){
  var rootRef = firebase.database().ref(prtype);

rootRef.on("child_added", snap => {

var id = snap.child("id").val();
var shopid = snap.child("shopid").val();
if(shopid == x){
  firebase.database().ref(prtype + "/" + id).update({shopstatus:y});
} 

});
}

function deleteproduct(x,y){

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
    firebase.database().ref(y + "/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Your product has been deleted.',
      'success'
    )
    location.reload();
  }
})
}


function updateproduct(x,y){
  var orgprice = document.getElementById("priceshp" + x).value;
  var offerprice = document.getElementById("price" + x).value;
  var newname = document.getElementById("name" + x).value;
  var newdesc = document.getElementById("desc" + x).value;
  var newcat = document.getElementById("cat" + x).value;
  var newtagsr = document.getElementById("tagsr" + x).value;
  var newrating = document.getElementById("rating" + x).value;
  var newratcnt = document.getElementById("ratcnt" + x).value;
  var newdotpri = document.getElementById("dotpri" + x).value;
  var newdotprirev = Number(10000 - Number(newdotpri));
  var newthumb = document.getElementById("imgthumb" + x).value;
  document.getElementById("oldimg" + x).src = newthumb;

  console.log(newname + " - " + newdesc);

  var revprice = 5000 - Number(offerprice);
  if(orgprice < offerprice){
    Swal.fire({
  title: 'Sorry',
  text: "Original price can not be less than offerprice!",
  icon: 'error',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Re-enter'
})
  }
  else{
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
    firebase.database().ref(y + "/" + x).update({name:newname,cat:newcat,tagsr:newtagsr,rating:newrating,ratcnt:newratcnt,dotprirev:newdotprirev,dotpri:newdotpri,desc:newdesc,priceshp:orgprice,price:offerprice,pricerev:revprice,priceoffer:offerprice,img:newthumb});
    console.log(orgprice + " - " + offerprice + " - " + revprice + " - " + x + " - " + newdotpri + " - " + newdotprirev + " - " + newratcnt + " - " + newrating + " - " + newtagsr);
    Swal.fire(
      'Updated!',
      'Your product has been updated.',
      'success'
    )
    //location.reload();
  }
})
}
}

/*$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});*/

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


function updateper(x){
  var boxid = x.id;
  boxid = boxid.substring(4,boxid.length);
  document.getElementById("price" + boxid).value = Math.round(Number(Number(document.getElementById("priceshp" + boxid).value) * Number(Number(100 - Number(x.value))/100)));
}
