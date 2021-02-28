var uid = "";
var password = "";

var config = {
    apiKey: "AIzaSyCSoiDuslBP3AsGgA7tNT1Bq02XB8wEGe8",
    authDomain: "nkphs2020.firebaseapp.com",
    databaseURL: "https://nkphs2020-default-rtdb.firebaseio.com",
    projectId: "nkphs2020",
    storageBucket: "nkphs2020.appspot.com",
    messagingSenderId: "876141817104",
    appId: "1:876141817104:web:2bfb5de3f60265d3128995",
    measurementId: "G-BQCBG9T67D"
   };
   firebase.initializeApp(config);       

function logIN(){
	uid	= document.getElementById("accountID").value;
	password = document.getElementById("accountPassword").value;
var rootRef = firebase.database().ref('admin/user');
rootRef.on("child_added", snap => {
var accountID = snap.child("accountID").val();
var accountPassword = snap.child("accountPassword").val();
var accountuid = snap.child("uid").val();
console.log(password + " - " + accountPassword);
if (accountID == uid && accountPassword == password) {
	Swal.fire({
  title: 'Choose from below',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Order Report`,
  denyButtonText: `Fees Report`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    window.open("order_report.html?uid=" + accountuid);
  } else if (result.isDenied) {
    window.open("fees_report.html?uid=" + accountuid);
  }
})
}
});
}
