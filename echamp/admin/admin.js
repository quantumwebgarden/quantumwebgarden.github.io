
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
firebase.database().ref('freefire/match/' + timestamp).set({
matchId:timestamp,
matchName:document.getElementById("matchname").value,
matchType:document.getElementById("matchtype").value,
amount:document.getElementById("amount").value,
matchDate:document.getElementById("matchdate").value,
matchTime:document.getElementById("matchtime").value,
roomId:document.getElementById("roomid").value,
password:document.getElementById("roompass").value
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
var updbtn = '<input type="button" onclick="updatematch(\'' + matchId + '\')" value="Update Match Details">';
var removebtn = '<input type="button" onclick="removematch(\'' + matchId + '\')" value="Remove Match Details">';
var matchDetails = '<input type="button" onclick="detailedmatch(\'' + matchId + '\')" value="View Match Details">';

$("#allMatch").append('<tr id="matchId' + matchId + '"><td class="backg" id="backgound' + matchId + '">' + matchId + '</td><td>' + matchName + '</td><td>' + matchType + '</td><td>' + matchDate + '</td><td>' + matchTime + '</td><td>' + amount + '</td><td><input type="text" id="roomId' + matchId + '" value="' + roomId + '"></td><td><input type="text" id="roomPassword' + matchId + '" value="' + password + '"></td><td>' + matchDetails + '</td><td>' + updbtn + '</td><td>' + removebtn + '</td></tr>')

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
    firebase.database().ref("freefire/match" + x).remove();
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
  	firebase.database().ref("freefire/match" + x).update({roomId:document.getElementById("roomID" + x).value,password:document.getElementById("roomPassword" + x).value});
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
var reward = snap.child("reward").val();
var upiId = snap.child("upiId").val();
var updbtn = '<input type="button" onclick="updateplayer(\'' + playerId + ',' + x + '\')" value="Update Player Details">';
var removebtn = '<input type="button" onclick="removeplayer(\'' + playerId + ',' + x + '\')" value="Remove Player">';
//var matchDetails = '<input type="button" onclick="detailedmatch(\'' + matchId + '\')" value="View Match Details">';

$("#allPlayer").append('<tr id="playerID' + playerId + x + '"><td>' + x + '</td><td>' + playerId + '</td><td>' + playerName + '</td><td><input type="text" id="position' + playerId + x +'" value="' + position + '"></td><td><input type="text" id="reward' + playerId + x +'" value="' + reward + '"></td><td>' + upiId + '</td><td>' + updbtn + '</td><td>' + removebtn + '</td></tr>')

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
  	firebase.database().ref("freefire/match" + y + "/player/" + x).update({position:document.getElementById("position" + x + y).value,reward:document.getElementById("reward" + x + y).value});
  	//firebase.database().ref("freefire/players" + x).update({position:document.getElementById("position" + x + y).value,reward:document.getElementById("reward" + x + y).value});
    Swal.fire(
      'Updated!',
      'Player Details has been updated.',
      'success'
    )
  }
})
}


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