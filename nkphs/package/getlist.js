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
if(y == "NI" || y == "NII" || y == "KG" || y == "V" || y == "VI" || y == "VII" || y == "VIII"){
$("#table_body").append("<tr id='package" + id + x + "'><td>" + sub + "</td><td>" + name + "</td><td>" + price + "</td><td>" + quantity + "</td></tr>");
}
});
}
