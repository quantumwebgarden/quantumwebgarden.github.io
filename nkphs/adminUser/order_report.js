var cnt = 0;
var producttype = "";
var deliverytype = "";
var cls = "";
var cnt = 0;
var statusArray = ["Placed","Packed","Dispatched","Delivered","Wrong"];
var statusArrayDuplicate = ["Order Placed","Order Packed (Ready for Self Pickup)","Order Dispatched","Order Delivered","Something Went Wrong"]
function fldtls() {

    cls = document.getElementById("clsslct").value;
    producttype =document.getElementById('productslct').value;
    deliverytype =document.getElementById('deliveryslct').value;
    $("#clsdtls").html("Details of order placed by students of <b>" +  $("#clsslct option:selected").text() + "</b><br>Sorted by <b>" + $("#productslct option:selected").text() + "</b> and <b>" + $("#deliveryslct option:selected").text() + "</b>");
    cnt = 0;
    $("#table_body").empty();
    getAllUser();
    }        

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

function getAllUser(){
var parameters = location.search.substring(1).split("=");
accountUid = parameters[1];
slctupd(accountUid);
}
function slctupd(x){

var rootRef = firebase.database().ref('user/' + x + '/order');

rootRef.on("child_added", snap => {

cnt ++;
var orderid = snap.child("orderID").val();
var name = snap.child("name").val();
var stdclass = snap.child("class").val();
var section = snap.child("section").val();
var roll  = snap.child("roll").val();
var prtype = snap.child("productType").val();
var orderdescription = snap.child("description").val();
var price = snap.child("price").val();
var paymentmethod = snap.child("paymentMethod").val();
var paymentID = snap.child("paymentID").val();
var dltype = snap.child("deliveryType").val();
var deliveryaddress = snap.child("deliveryAddress").val();
var phone = snap.child("phone").val();
var pincode = snap.child("PINCode").val();
var orderdate = "21/01/2021";
var orderStatus = snap.child("orderStatus").val();
var deliveryDate = snap.child("deliveryDate").val();
var updbtn = 'Current Status: ' + orderStatus + '<br><select name="status" id="orderStatus' + x + orderid +'"><option value="NA" disabled selected>Select Status</option><option value="Order Dispatched">Order Dispatched</option><option value="Order Packed (Ready for Self Pickup)">Order Packed (Ready for Self Pickup)</option><option value="Order Delivered">Order Delivered</option></select><br><button onclick="updateOrder(\'' + orderid + '\',\'' + x + '\')" class="button">Update Order</button>';
var removebtn = '<button onclick="removeOrder(\'' + orderid + '\',\'' + x + '\')" class="button">Delete Order</button>';
var dldesc = dltype;
var statusShort = statusArray[statusArrayDuplicate.indexOf(orderStatus)];
if(dltype == "Self Pickup"){
    dldesc = dltype + "<br>Current Pickup Date: " + deliveryDate + "<br><input type=\"date\" id=\"deliveryDate" + orderid + x + "\" value=\"" + deliveryDate + "\"><br><button onclick=\"updateDate(\'" + orderid + "\',\'" + x + "\')\" class=\"button\">Update Pickup Date</button>"
}
if(cls == "ALL"){
    if(producttype == "ALL"){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
    else if(prtype == producttype){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
}
else if(cls == stdclass){
    if(producttype == "ALL"){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
    else if(prtype == producttype){
        if(deliverytype == "ALL"){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
        else if(dltype == deliverytype){
            $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + orderdate + "</td><td>" + prtype + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td><b>" + dldesc + "</b></td><td>" + deliveryaddress + "</td><td>" + phone + "</td><td>" + pincode + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
        }
    }
}
});


}
function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of order placed with selected category = " + rowCount +"");
}

function updateOrder(x,y){
    firebase.database().ref("user/" + y + "/order/" + x).update({orderStatus:document.getElementById("orderStatus" + y + x).value});
    if(document.getElementById("orderStatus" + y + x).value == "Order Delivered"){
        updateStock(x,y);
    }
Swal.fire(
  'NKPHS',
  "Order Details Updated",
  'success'
);
}
function removeOrder(x,y) {
        Swal.fire({
  title: 'Are you sure?',
  text: "Order details will be permanently removed.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, remove'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("user/" + y + "/order/" + x).remove();
    document.getElementById("tr" + y + x).style.display = "none";
    Swal.fire(
      'Removed!',
      'Order Details removed permanently.',
      'success'
    )
  }
})

    
}
function updateStock(x,y) {
    firebase.database().ref("user/" + y + "/order/" + x).update({orderStatus:document.getElementById("orderStatus" + y + x).value});
}
function updateDate(x,y){
    firebase.database().ref("user/" + y + "/order/" + x).update({deliveryDate:document.getElementById("deliveryDate" + x + y).value});
Swal.fire(
  'NKPHS',
  "Order Self Pickup Date Updated",
  'success'
);
}

function searchName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("nameInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab_report");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchRoll() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("rollInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab_report");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function searchStatus() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("statusInput").value;
  console.log(input);
  table = document.getElementById("table_body");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
     console.log(tr[i]);
        if(tr[i].getAttribute("class") == input){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
    }

}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_body");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
