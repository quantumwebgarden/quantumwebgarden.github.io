
var firebaseConfig = {
  apiKey: "AIzaSyC7EEb7C2FSdW_Oqb3irQxWItqoiYCzbKA",
  authDomain: "echampqw.firebaseapp.com",
  databaseURL: "https://echampqw-default-rtdb.firebaseio.com",
  projectId: "echampqw",
  storageBucket: "echampqw.appspot.com",
  messagingSenderId: "1054862556520",
  appId: "1:1054862556520:web:1c5469eef4bfdf54afaadd",
  measurementId: "G-XFVFNW4ZBY"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();  

function savematch() {
	
var date = new Date();
var timestamp = date.getTime();
timestamp = 2554396200000 - timestamp;
firebase.database().ref('freefire/match/' + timestamp).set({
matchId:timestamp,
matchName:document.getElementById("matchname").value,
matchType:document.getElementById("matchtype").value,
amount:document.getElementById("amount").value,
matchDate:document.getElementById("matchdate").value,
matchTime:document.getElementById("matchtime").value,
roomId:document.getElementById("roomid").value,
password:document.getElementById("roompass").value,
visible:1,
joined:0
});

Swal.fire(
  'Saved',
  'New match details has been saved',
  'success'
);

}

function ongoingDetails(){

var rootRef = firebase.database().ref("freefire/match");

rootRef.on("child_added", snap => {
var matchId = snap.child("matchId").val();
var matchName = snap.child("matchName").val();
var matchType = snap.child("matchType").val();
var amount = snap.child("amount").val();
var matchDate = snap.child("matchDate").val();
var matchTime = snap.child("matchTime").val();
var roomId = snap.child("roomId").val();
var password = snap.child("password").val();
var visible = snap.child("visible").val();
var joined = snap.child("joined").val();
var updbtn = '<input type="button" onclick="updatematch(\'' + matchId + '\')" value="Update Match Details">';
var removebtn = '<input type="button" onclick="removematch(\'' + matchId + '\')" value="Remove Match Details">';
var matchDetails = '<input type="button" onclick="detailedmatch(\'' + matchId + '\')" value="View Match Details">';

$("#allMatch").append('<tr id="matchId' + matchId + '"><td class="backg" id="backgound' + matchId + '">' + matchId + '</td><td>' + matchName + '</td><td>' + matchType + '</td><td><input type="date" id="matchDate' + matchId + '" value="' + matchDate + '"></td><td><input type="time" id="matchTime' + matchId + '" value="' + matchTime + '"></td><td>' + amount + '</td><td>' + joined + '</td><td><input type="text" id="roomId' + matchId + '" value="' + roomId + '"></td><td><input type="text" id="roomPassword' + matchId + '" value="' + password + '"></td><td><input type="number" id="matchVisible' + matchId + '" value="' + visible + '"></td><td>' + matchDetails + '</td><td>' + updbtn + '</td><td>' + removebtn + '</td></tr>')

});

}

function removematch(x){
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
    firebase.database().ref("freefire/match/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Match Details has been deleted.',
      'success'
    )
    document.getElementById("matchId" + x).style.display = "none";
  }
})
}

function updatematch(x){
  Swal.fire({
  title: 'Are you sure?',
  text: "Match details will be updated",
  icon: 'quetion',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update!'
}).then((result) => {
  if (result.isConfirmed) {
  	firebase.database().ref("freefire/match/" + x).update({roomId:document.getElementById("roomId" + x).value,password:document.getElementById("roomPassword" + x).value,visible:document.getElementById("matchVisible" + x).value,matchDate:document.getElementById("matchDate" + x).value,matchTime:document.getElementById("matchTime" + x).value});
    Swal.fire(
      'Updated!',
      'Match Details has been updated.',
      'success'
    )
  }
})
}


function detailedmatch(x){
var z, i;
  z = document.querySelectorAll(".backg");
  for (i = 0; i < z.length; i++) {
    z[i].style.backgroundColor = "white";
  }
document.getElementById("backgound" + x).style.backgroundColor = "#56bf76";
$("#allPlayer").empty();
var rootRef = firebase.database().ref("freefire/match/" + x + "/player");

rootRef.on("child_added", snap => {
var playerId = snap.child("playerId").val();
var playerName = snap.child("playerName").val();
var position = snap.child("position").val();
if(position == null){position = "";}
var reward = snap.child("reward").val();
if(reward == null || reward == ""){reward = 0};
var playerUPI = snap.child("playerUPI").val();
var playerPhone = snap.child("playerPhone").val();
var remarks = snap.child("remarks").val();
if(remarks == null){remarks = "";}
var updbtn = '<input type="button" onclick="updateplayer(\'' + playerId + '\',\'' + x + '\')" value="Update Player Details">';
var removebtn = '<input type="button" onclick="removeplayer(\'' + playerId + '\',\'' + x + '\')" value="Remove Player">';

$("#allPlayer").append('<tr id="playerID' + playerId + x + '"><td>' + x + '</td><td>' + playerId + '</td><td>' + playerName + '</td><td><input type="text" id="position' + playerId + x +'" value="' + position + '"></td><td><input type="number" id="reward' + playerId + x +'" value="' + reward + '"></td><td><input type="text" id="remarks' + playerId + x +'" value="' + remarks + '"></td><td>' + playerPhone + '</td><td>' + playerUPI + '</td><td>' + updbtn + '</td><td>' + removebtn + '</td></tr>')

});

}

function updateplayer(x,y){
  Swal.fire({
  title: 'Are you sure?',
  text: "Match details will be updated",
  icon: 'quetion',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update!'
}).then((result) => {
  if (result.isConfirmed) {
    getPlayerDetails(x,document.getElementById("reward" + x + y).value);
  	firebase.database().ref("freefire/match/" + y + "/player/" + x).update({position:document.getElementById("position" + x + y).value,reward:document.getElementById("reward" + x + y).value,remarks:document.getElementById("remarks" + x + y).value});
  	Swal.fire(
      'Updated!',
      'Player Details has been updated.',
      'success'
    )
  }
})
}

function getPlayerDetails(x,y) {
  var rootRef = firebase.database().ref("user");

rootRef.on("child_added", snap => {
var playerId = snap.child("id").val();
var userCashback = snap.child("userCashback").val();
if(playerId == x && y!= 0){
  firebase.database().ref("user/" + x).update({userCashback:Number(userCashback)+Number(y)});
}
});
}

function getAllPlayerDetails() {
  var rootRef = firebase.database().ref("user");

rootRef.on("child_added", snap => {
var playerId = snap.child("id").val();
var walletBal = snap.child("ffPay").val();
var userCashback = snap.child("userCashback").val();
var usergame = snap.child("userGame").val();
var userFFAccount = snap.child("userFFAccount").val();
var userPhone = snap.child("userPhone").val();
var userUPI = snap.child("userUPI").val();
var updbtn = '<input type="button" onclick="updateUser(\'' + playerId + '\',\'' + walletBal + '\')" value="Add Money to Wallet">';
$("#allPlayerDetails").append('<tr id="playerId' + playerId + '"><td>' + userFFAccount + '</td><td>' + userPhone + '</td><td>' + userUPI + '</td><td>' + walletBal + '</td><td><input type="number" id="walletAdd' + playerId + '" value="0"></td><td>' + updbtn + '</td></tr>')

});
}

function updateUser(x,y){
  if(Number(document.getElementById("walletAdd" + x).value)>0){
    Swal.fire({
  title: 'Are you sure?',
  text: "Amount will be added to Wallet Balance",
  icon: 'quetion',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update!'
}).then((result) => {
  if (result.isConfirmed) {
    var timestamp = getCurrentDate();
    firebase.database().ref("user/" + x).update({ffPay:Number(y) + Number(document.getElementById("walletAdd" + x).value)});
    firebase.database().ref("user/" + x + "/walletTransaction/" + timestamp).update({approvalRefNo:"FF_Admin",orderAmountRequested:document.getElementById("walletAdd" + x).value,orderId:timestamp,status:"Confirmed"});
    Swal.fire(
      'Updated!',
      'Wallet Balance has been updated.',
      'success'
    )
  }
})
  }
  else if (Number(document.getElementById("walletAdd" + x).value)<0) {
    Swal.fire({
  title: 'Are you sure?',
  text: "Amount will be withdrawn from Wallet Balance",
  icon: 'quetion',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Update!'
}).then((finalResult) => {
  if (finalResult.isConfirmed) {
    var timestamp = getCurrentDate();
    firebase.database().ref("user/" + x).update({ffPay:Number(y) + Number(document.getElementById("walletAdd" + x).value)});
    firebase.database().ref("user/" + x + "/walletTransaction/" + timestamp).update({approvalRefNo:"FF_Admin",orderAmountRequested:document.getElementById("walletAdd" + x).value,orderId:timestamp + "_Withdraw",status:"Confirmed"});
    Swal.fire(
      'Updated!',
      'Wallet Balance has been updated.',
      'success'
    )
  }
})
  }
  else{
    Swal.fire(
      'Denied!',
      'Add value to update.',
      'warning'
    )
  }
  
}
function getCurrentDate(){
let date_ob = new Date();
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
// current hours
let hours = ("0" + date_ob.getHours()).slice(-2);
// current minutes
let minutes = ("0" + date_ob.getMinutes()).slice(-2);
// current seconds
let seconds = ("0" + date_ob.getSeconds()).slice(-2);
// prints date & time in YYYY-MM-DD HH:MM:SS format
return(date + month + year + hours + minutes + seconds);
}
//

//


function removeplayer(x,y){
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
    firebase.database().ref("freefire/match" + y + "/player/" + x).remove();
    Swal.fire(
      'Deleted!',
      'Player Details has been deleted.',
      'success'
    )
    document.getElementById("playerID" + playerId + x).style.display = "none";
  }
})
}


function getWithdrawRequest() {
var rootRef = firebase.database().ref("withdrawRequest");

rootRef.on("child_added", snap => {
  var playerId = snap.child("requestedUserId").val();
  getRequestDetails(playerId);
});
}

function getRequestDetails(x) {
  var rootRef = firebase.database().ref("withdrawRequest/" + x);

rootRef.on("child_added", snap => {
  var amountRequest = snap.child("orderAmountRequested").val();
  var playerId = snap.child("playerId").val();
  var playerName = snap.child("playerName").val();
  var playerUPI = snap.child("playerUPI").val();
  var requestDate = snap.child("requestDate").val();
  var status = snap.child("status").val();
  var withdrawId = snap.child("withdrawId").val();
  var playerPhone = snap.child("playerPhone").val();
  
  //var updbtn = '<input type="button" onclick="updateRequest(\'' + playerId + '\',\'' + withdrawId + '\')" value="Update Request">';
  //var removebtn = '<input type="button" onclick="removeRequest(\'' + playerId + '\',\'' + withdrawId + '\')" value="Remove Request">';

$("#allWithdrawRequest").append('<tr id="withdrawId' + x + withdrawId + '"><td>' + playerName + '</td><td>' + playerPhone + '</td><td>' + playerUPI + '</td><td>' + amountRequest + '</td><td>' + requestDate + '</td></tr>');

});
}