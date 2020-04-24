var insid = "";
function appidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	insid = diff;
  document.getElementById("insid").value = insid;
}



var config = {
  apiKey: "AIzaSyCefEYt287pgGET2L6LWJRIWxTRs3Ljebo",
    authDomain: "thems2020.firebaseapp.com",
    databaseURL: "https://thems2020.firebaseio.com",
    projectId: "thems2020",
    storageBucket: "thems2020.appspot.com",
    messagingSenderId: "611585110346",
    appId: "1:611585110346:web:45843523d0448ff1d7d1b3",
    measurementId: "G-H4QF7Z1ZXG"
};
firebase.initializeApp(config);

// Listen for form submit
document.getElementById('instagram').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	uname = getInputVal('uname');
var	dtype = getInputVal('dtype');
var	cap = getInputVal('cap');
var ulnk = getInputVal('ulnk');
var insid = getInputVal('insid');

 // Save message
  saveMessage(uname,dtype,cap,ulnk,insid);


  document.getElementById("instagram").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('instagram').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(uname,dtype,cap,ulnk,insid){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('instagram/' + insid).set({
uname:uname,
dtype:dtype,
cap:cap,
ulnk:ulnk,
insid:insid
  });
}










var fbBucketName1 = 'instagram';

    var uploader1 = document.getElementById('uploader1');
    var fileButton1 = document.getElementById('fileButton1');
    fileButton1.addEventListener('change', function (e1) {

      console.log('file upload event', e1);
      
      var FileSize = e1.target.files[0].size / 1024 / 1024; // in MB
          if (FileSize > 20) 
          {
              swal('Oops..','File size exceeds 20 MB \n Please Choose another document or resize it.','error');
              document.getElementById('fileButton1').value = "";
          } 
          else 
          {
            var file1 = e1.target.files[0];
          }
          
      var file1 = e1.target.files[0];

      var str = e1.target.files[0].type;
      
      var n = str.length - str.lastIndexOf("/") -1;
      
      var strt = str.substr(str.length - n);


      var bl = strt.includes("wordprocessingml");

      if(bl == 1){strt = "docx"}

      var bl = strt.includes("spreadsheetml");

      if(bl == 1){strt = "xlsx"}

      var bl = strt.includes("plain");

      if(bl == 1){strt = "txt"}

      var bl = strt.includes("presentationml");

      if(bl == 1){strt = "pptx"}


      var storageRef1 = firebase.storage().ref(`${fbBucketName1}/dhs${vid}.${strt}`);

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
          /*
          var link1 = document.getElementById("photo");
          link1.setAttribute("src", downloadURL1);
          */
          document.getElementById('ulnk').value = downloadURL1;
          document.getElementById('updcmpl').style.display = "block";
        });

    });

