var statusall = ["offline","sit","road"];
var roadstatus = "";
var stocker = ["","checked"];
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

var ipAddress = "";

$.get("https://ipinfo.io", function(response) {
            ipAddress = response.ip;
        }, "json")
function deleteguest(){
var rootRef = firebase.database().ref("user");

rootRef.on("child_added", snap => {
var id = snap.child("id").val();

if(id.includes("GUser")){
	console.log("user/" + id);
	firebase.database().ref("user/" + id).remove();
}
});
}



function getstatus(){
var rootRef = firebase.database().ref("dboy");

rootRef.on("child_added", snap => {
roadstatus = "";
var id = snap.child("id").val();
var status = snap.child("status").val();
var name = snap.child("name").val();
if(status == "road"){
  status = "sit";
  roadstatus = "On road";
}
if(status != "deactivated"){
$("#dboytbl").append('<tr><td>' + id + '</td><td>' + name + '</td><td><label class="switch" id="chk' + id + '"><input type="checkbox" ' + stocker[statusall.indexOf(status)] + ' id="dboyst' + id + '" data-dval="' + statusall.indexOf(status) + '" onchange="dboychange(this)"><span class="slider round"></span><br><br><b style="color:RED">' + roadstatus + '</b></label></td><td><button id="dtls' + id + '" onclick="dboydtls(this)">View Details</button></td></tr>');
}
roadstatus = "";
});



rootRef.on("child_changed", snap => {
roadstatus = "";
var id = snap.child("id").val();
var status = snap.child("status").val();
var name = snap.child("name").val();
if(status == "road"){
  status = "sit";
  roadstatus = "On road";
}
$("#chk" + id).html('<input type="checkbox" ' + stocker[statusall.indexOf(status)] + ' id="dboyst' + id + '" data-dval="' + statusall.indexOf(status) + '" onchange="dboychange(this)"><span class="slider round"></span><br><br><b style="color:RED">' + roadstatus + '</b>');
roadstatus = "";
});

}

function fixshoperror(){
	firebase.database().ref("shopfoods/stupd").remove();
}

function cancelorder(){
	var x = document.getElementById("userid").value;
	document.getElementById("userpage").src="https://quantumwebgarden.github.io/dot/del.html?uid=" + x;
	document.getElementById("userpage").style.display = "block";
}

function clearrecent(){
	var rootRef = firebase.database().ref("foods");

rootRef.on("child_added", snap => {
var id = snap.child("id").val();
var rcntvw = snap.child("rcntvw").val();

	console.log(id + " - " + rcntvw);
	firebase.database().ref("foods/" + id).update({rcntvw:"splt"});

});
}


function dboychange(x){
  var dbid = x.id;
  dbid = dbid.substring(6,dbid.length);
  dbval = x.getAttribute("data-dval");
  newdbval = 1 - Number(dbval);
  console.log(statusall[newdbval] + " - " + dbid);
  x.setAttribute("data-dval", newdbval);
  firebase.database().ref("dboy/" + dbid).update({status:statusall[newdbval]});
  var date = new Date();
  var timestamp = date.getTime();
  var chnageId = new Date("12/31/2099").getTime() - timestamp;
  var dtnow = date.getDate() + "/" + Number(date.getMonth()+1) + "/" + date.getFullYear();
  var timenow = date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  //firebase.database().ref("dboy/" + dbid + "/lastchanges/" + chnageId).update({changedBy:ipAddress,chnageId:chnageId,dateNow:dtnow,timeNow:timenow,status:statusall[newdbval]});
}


function dboydtls(x){
  var dbid = x.id;
  dbid = dbid.substring(4,dbid.length);
	var myWindow = window.open("", "_self");
	myWindow.document.write('<center><br><a href="manager.html"> Admin Home</a></center><br><iframe src="https://quantumwebgarden.github.io/dot/delp.html?uid=' + dbid + '" width="100%" height="100%" style="border:none"></iframe>');
}


function getcurrentuser(){
  var rootRef = firebase.database().ref("users");
  var str = "";
rootRef.on("child_added", snap => {
str = snap.child("allusers").val();
var res = str.split("splt");
  console.log(res.length);
  Swal.fire({
  title: 'DOT: Delivery On time',
  html: '<b>Current registered User: ' + res.length + '</b>',//<br> <b>All users are :</b><br>" + res.join("<br>"),
  icon: 'info',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Okay!'
});
});
  
}
