
var flag = 0 ;
var firebaseConfig = {
    apiKey: "AIzaSyA7wly3NvCF90pJFs7a9kMBl-eXHJvXYw4",
    authDomain: "dotqwdtls.firebaseapp.com",
    databaseURL: "https://dotqwdtls.firebaseio.com",
    projectId: "dotqwdtls",
    storageBucket: "dotqwdtls.appspot.com",
    messagingSenderId: "374863944922",
    appId: "1:374863944922:web:3025e1648144afe89fd9e3",
    measurementId: "G-NWB5LL551K"
  };
  firebase.initializeApp(firebaseConfig);


function loginmerchant() {
	Swal.fire({
  title: 'DOT',
  html: '<img width="80%" height="auto" src="https://quantumwebgarden.github.io/dot/assets/img/loading.gif"><br>',
  timer: 3000,
  timerProgressBar: true,
  allowEscapeKey: false,
  allowOutsideClick: false,
		});
		
	var mrid = document.getElementById("merchantid").value;
	var mrpass = document.getElementById("merchantpass").value;
    var rootRef = firebase.database().ref('allshop');

      rootRef.on("child_added", snap => {
		  
var mrcid = snap.child("id").val();
var mrcpass = snap.child("password").val();
var shtype = snap.child("shtype").val();

	if(mrid == mrcid && mrpass == mrcpass){	
	flag ++;
    var myWindow = window.open("", "_blank");
	myWindow.document.write('<iframe src="https://quantumwebgarden.github.io/dot/restall.html?uid=' + mrcid + '=' + shtype + '" width="100%" height="100%" style="border:none"></iframe>');
	
	}
});
setTimeout(function(){
		if(flag==0){
			Swal.fire({
				title: 'DOT',
				html: 'Wrong User Id or Password',
				allowEscapeKey: false,
				allowOutsideClick: false,
		});
		} 
	}, 3000);
  }
  
