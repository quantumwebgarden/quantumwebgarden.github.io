var allids = "";
var uid = 0;
var elid = "";
var lats = 0;
var langs = 0;
var locst= "";
console.log(uid);

function getuid() {
	render();
	checkreg();
    var parameters = location.search.substring(1).split("=");
    uid = parameters[1];
	elid = parameters[2];
	lats = parameters[3];
	langs = parameters[4];
	locst = parameters[5];
    document.getElementById('phno').value = uid;
    document.getElementById('lat').value = lats;
    document.getElementById('lang').value = langs;
	console.log("https://quantumwebgarden.github.io/dot/reg.html?uid=" + uid + "=0=" + lats + "=" + langs + "=0")
}

var firebaseConfig = {
    apiKey: "AIzaSyCIHNdljOqzWgasMfB2bBZuFVHhof3-SLQ",
    authDomain: "quantumdot20.firebaseapp.com",
    databaseURL: "https://quantumdot20.firebaseio.com",
    projectId: "quantumdot20",
    storageBucket: "quantumdot20.appspot.com",
    messagingSenderId: "1011845585600",
    appId: "1:1011845585600:web:cdd2e4e8ee38046b262b25",
    measurementId: "G-Y98ZR7S8EQ"
  };
  firebase.initializeApp(firebaseConfig);

function checkreg(){
	
	var rootRef = firebase.database().ref('users');

rootRef.on("child_added", snap => {

var uuid = snap.child("allusers").val();

allids = uuid;
});
}


  document.getElementById('dotreg').addEventListener('submit', xif);

  function xif(e){
    if(document.getElementById("hometown").value == "0"){
        Swal.fire('Choose your area to proceed');
    }
        else{
      e.preventDefault();

  // Get values
var name = getInputVal('name');
var id = getInputVal('phno');
var email = getInputVal('email');
var phone = getInputVal('phno');
var hometown = getInputVal('hometown');
var PIN = getInputVal('pincode');
var dtl = getInputVal('address');
var img = "dotf.png";
var sltadd = "add1";
var type = "GENERAL";
var lang = getInputVal('lang');
var lat = getInputVal('lat');


 // Save message
  saveMessage(name,id,email,phone,hometown,PIN,dtl,img,sltadd,type,lang,lat);
	firebase.database().ref("users/allid").update({allusers: allids + uid + "splt"});
  document.getElementById('dotreg').reset();
  window.open("https://quantumwebgarden.github.io/dot/index.html?uid=" + uid + "=0=" + lats + "=" + langs + "=0");
}}



  function getInputVal(id){
    if(document.getElementById(id).className == "upt"){
        return document.getElementById(id).value.toUpperCase();
    }
    else{
        return document.getElementById(id).value;
    }
}

function saveMessage(name,id,email,phone,hometown,PIN,dtl,img,sltadd,type,lang,lat){
    firebase.database().ref('user/' + id).set({
name:name,
id:id,
email:email,
phone:phone,
img:img,
sltadd:sltadd,
type:type
});
    firebase.database().ref('user/' + id + '/address/add1').update({
PIN:PIN,
dtl:dtl,
hometown:hometown,
id:sltadd,
lang:lang,
lat:lat
});

}


/*
var fbBucketName1 = 'user';

        var uploader1 = document.getElementById('uploader1');
        var fileButton1 = document.getElementById('fileButton1');
        fileButton1.addEventListener('change', function (e1) {

            console.log('file upload event', e1);

            var FileSize = e1.target.files[0].size / 1024 / 1024; // in MB
            if (FileSize > 1) 
            {
                swal('Oops..','File size exceeds 1 MB \n Please Choose a new Photo.','error');
                document.getElementById('fileButton1').value = "";
            } 
            else 
            {
                var file1 = e1.target.files[0];
            }

            var str = e1.target.files[0].type;
      
            var n = str.length - str.lastIndexOf("/") -1;
      
            var strt = str.substr(str.length - n);
    
            var storageRef1 = firebase.storage().ref(`${fbBucketName1}/${uid}/${uid}.${strt}`);

            var uploadTask1 = storageRef1.put(file1);

            uploadTask1.on(firebase.storage.TaskEvent.STATE_CHANGED, 
                function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader1.value = progress;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: 
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: 
                            console.log('Upload is running');
                            break;
                    }
                }, function (error) {

                        switch (error.code) {
                        case 'storage/unauthorized':
                            break;

                        case 'storage/canceled':
                            break;

                        case 'storage/unknown':
                            break;
                    }
                }, function () {
                    var downloadURL1 = uploadTask1.snapshot.downloadURL;
                    console.log('downloadURL1', downloadURL1);
                    var link1 = document.getElementById("photo");
                    link1.setAttribute("src", downloadURL1);
                    document.getElementById('updphoto').value = downloadURL1;
                });

        });
        */
		
		
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number= "+91" + document.getElementById('phno').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        Swal.fire('Message sent to your phone number');
      document.getElementById('sendbtn').style.display = "none";
	document.getElementById('recaptcha-container').style.display = "none";
      document.getElementById('verifydiv').style.display = "block";
    }).catch(function (error) {
      Swal.fire('Some Error occured. Contact Support with the error message - ' + error.message);
        //alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        Swal.fire('Verified Successfully');
        var user=result.user;
      document.getElementById('verifydiv').style.display = "none";
	    document.getElementById('submitbtn').style.display = "block";
        console.log(user);
    }).catch(function (error) {
        Swal.fire('Some Error occured. Contact Support with the error message - ' + error.message);
    });
}

function resendit() {
    document.getElementById('sendbtn').style.display = "block";
      document.getElementById('recaptcha-container').style.display = "block";
      document.getElementById('verifydiv').style.display = "none";
}
