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
getAccess()
function getAccess(){
var rootRef = firebase.database().ref("admin/booklist");
rootRef.on("child_added", snap => {
var type = snap.child("type").val();
    $("#table_body").css("display", type);
});
}

function getAllBook(x,y){
$("#table_body").empty();
var rootRef = firebase.database().ref("item/adminPackage/"+ x + "/" + y + "/books");
console.log("item/package/"+ x + "/" + y + "/books");
rootRef.on("child_added", snap => {
var id = snap.child("id").val();
var sub = snap.child("sub").val();
var name = snap.child("name").val();
var price = snap.child("price").val();
var quantity = snap.child("quantity").val();
if(y == "NI" || y == "NII" || y == "KG" || y == "I" || y == "II" || y == "III" || y == "IV" || y == "V" || y == "VI" || y == "VII" || y == "VIII" || y == "IX" || y == "X"){
$("#table_body").append("<tr id='package" + id + x + "'><td>" + sub + "</td><td>" + name + "</td><td>" + price + "</td><td>" + quantity + "</td></tr>");
}
});
}
var cntr = 0;
$('#table_report').click(function(){
    cntr++;
    if(cntr == 3){
        getActive();
    }
});

function getActive(){
var name = prompt("Enter admin Password:", "");
if(name==window.atob("bmtwaHNAbGl2ZQ=="))
{
    $("#table_body").css("display", "");
}
else{
    $("#table_body").css("display", "none");
}
}
