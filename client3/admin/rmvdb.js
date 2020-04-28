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



$(document).ready(function(){

var rootRef = firebase.database().ref('instagram');

rootRef.on("child_added", snap => {

var dtype = snap.child("dtype").val();

var cap = snap.child("cap").val();

var ulnk = snap.child("ulnk").val();

var insid = snap.child("insid").val();

$("#insta").append("<tr id=\"" + insid + "\"><td>" + insid + "</td><td>" + cap + "</td><td><iframe src=\"" + ulnk + "\" width=\"150px\" height=\"150px\"></iframe></td><td><button type=\"button\" onclick=\"rmvinsta(\'" + insid +"\');\">Delete</button></td></tr>");
});

});

function rmvinsta(id){
    let userRef = firebase.database().ref('instagram/' + id);
    userRef.remove();
    document.getElementById(id).style.display = 'none';
    Swal.fire({
    icon: 'info',
    title: 'The Magic Shoot <br>Admin Panel',
    html: 'Instagram Post with ID <b><u>' + id + '</u></b> has been deleted from the database.',
    footer: '<a href ="../themagicshoot/instagram.html" target="_blank">Visit Instagram Home Page</a> &nbsp; or &nbsp; <a href ="instadmin.html" target="_blank">Visit Instagram Upload Page</a>'
    })
}
