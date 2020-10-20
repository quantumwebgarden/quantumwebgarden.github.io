var cnt = 0;
var productprice = 0;
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
  firebase.analytics();    


  function getmore(x){
    console.log(x.selectedIndex);
  } 

  function getfoodlist(x){
    $("#foodlist").html('<select id="foodlist"><option value="NA" disabled>Select Any one</option></select>');
    var selectedshopid = x.value;
  var rootRef = firebase.database().ref("foods");
  rootRef.on("child_added", snap => {
  var id = snap.child("id").val();
  var name = snap.child("name").val();
  var price = snap.child("price").val();
  var shopid = snap.child("shopid").val();
  var desc = snap.child("desc").val();

  if(shopid == selectedshopid){
    $("#foodlist").append('<option value="' + id + '">' + name + ' || ' + price + ' || ' + desc + '</option>');
  }
  cnt++;
  
});

}


function getfooddetails(z){
  var x = z.selectedIndex;
var y = z.options;
var allval = z.value + ' - ' + y[x].index + ' - ' + y[x].text;
  console.log(allval);
  var finalname = allval.split(" || ")[0];
  var finalprice = allval.split(" || ")[1];
  productprice = finalprice;
  var finaldesc = allval.split(" || ")[2];
  console.log(finalname + ' <> '+ finalprice + ' <> ' + finaldesc);
}

function gettotalval(x){
  console.log(x.value + ' - ' + productprice);
  var qty = Number(x.value);
  var totalval = Number(qty * Number(productprice));
  $("#totalprice").html('Total Price : &#x20B9;' + totalval);
}