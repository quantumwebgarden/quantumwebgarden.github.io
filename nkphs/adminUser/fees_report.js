var cnt = 0;
var monthtype = "";
var cls = "";
var cnt = 0;
//var paid = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[],[]],[[],[],[]]];
var paid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var classes = ["NI","NII","KG","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];

var statusArray = ["Pending","Review","Approved","Cancelled","Wrong"];
var statusArrayDuplicate = ["Pending","Under Review","Fees Approved","Cancelled","Something Went Wrong"];
function fldtls() {
    //paid = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[],[]],[[],[],[]]];
    paid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    cls = document.getElementById("clsslct").value;
    monthtype =document.getElementById('monthslct').value;
    $("#clsdtls").html("Details of fees paid by students of <b>" +  $("#clsslct option:selected").text() + "</b><br>Sorted by <b>" + $("#monthslct option:selected").text() + " Month</b>");
    cnt = 0;
    $("#table_body").empty();
    $("#unpaid_table").empty();
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
slctupd("T5zQxAiodFMdpmz888kEKBhfzzb2");
}
function slctupd(x){

var rootRef = firebase.database().ref('user/' + x + '/fees');

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
var orderdate = snap.child("order_date").val();
var orderStatus = snap.child("orderStatus").val();
var deliveryDate = snap.child("deliveryDate").val();
var updbtn = 'Current Status: ' + orderStatus + '<br><select name="status" id="orderStatus' + x + orderid +'"><option value="NA" disabled selected>Select Status</option><option value="Pending">Pending</option><option value="Under Review">Under Review</option><option value="Approved">Fees Approved</option><option value="Cancelled">Cancelled</option><option value="Something Went Wrong">Something Went Wrong</option></select><br><button onclick="updateOrder(\'' + orderid + '\',\'' + x + '\')" class="button">Update Order</button>';
var removebtn = '<button onclick="removeOrder(\'' + orderid + '\',\'' + x + '\')" class="button">Delete Order</button>';
var dldesc = dltype;
var statusShort = statusArray[statusArrayDuplicate.indexOf(orderStatus)];
// if(dltype == "Self Pickup"){
//     dldesc = dltype + "<br>Current Pickup Date: " + deliveryDate + "<br><input type=\"date\" id=\"deliveryDate" + orderid + x + "\" value=\"" + deliveryDate + "\"><br><button onclick=\"updateDate(\'" + orderid + "\',\'" + x + "\')\" class=\"button\">Update Pickup Date</button>"
// }
var sec = 0;
if(section == "B"){
  sec = 1;
}

if(cls == "ALL"){
    if(monthtype == "ALL"){
      if(stdclass != null)
        if(orderStatus == "Approved")
      paid[classes.indexOf(stdclass)].push(roll);
    console.log(roll + "-" + stdclass);
        $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + phone + "</td><td>" + orderdate + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
    }
    else{
      if(monthtype == orderdescription){
      if(stdclass != null)
        if(orderStatus == "Approved")
      paid[classes.indexOf(stdclass)].push(roll);
    console.log(roll + "-" + stdclass);
        $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + phone + "</td><td>" + orderdate + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
    }
    }
}

if(stdclass == cls){
   if(monthtype == "ALL"){
      if(stdclass != null)
        if(orderStatus == "Approved")
      paid[classes.indexOf(stdclass)].push(roll);
    console.log(roll + "-" + stdclass);
        $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + phone + "</td><td>" + orderdate + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
    }
    else{
      if(monthtype == orderdescription){
      if(stdclass != null)
        if(orderStatus == "Approved")
      paid[classes.indexOf(stdclass)].push(roll);
    console.log(roll + "-" + stdclass);
        $("#table_body").append("<tr class=" + statusShort + " id=tr" + x + orderid +"><td>" + orderid + "</td><td>" + name + "</td><td>" + stdclass + "</td><td>" + section + "</td><td>" + roll + "</td><td>" + phone + "</td><td>" + orderdate + "</td><td>" + orderdescription + "</td><td><b>" + price + "</td><td>" + paymentmethod + "</b></td><td>" + paymentID + "</td><td>" + updbtn + "</td><td>" + removebtn + "</td></tr>");
    }
  }
}
});


}


function unpaidList() {
  var rootRef = firebase.database().ref('fees');
  rootRef.on("child_added", snap => {
  var clsid = snap.child("id").val();
  if(clsid == cls){
  //   if(paid[classes.indexOf(cls)].length > 1){
  //   var studentsA = snap.child("A").val();
  //   var studentsB = snap.child("B").val();
  //   for (var i = 1; i <= studentsA; i++) {
  //       if(!paid[classes.indexOf(clsid)][0].includes(i))
  //         $("#unpaid_table").append("<tr><td>" + clsid + "</td><td>A</td><td>" + i + "</td></tr>")
  //      }
  //   for (var i = 1; i <= studentsB; i++) {
  //       if(!paid[classes.indexOf(clsid)][1].includes(i))
  //         $("#unpaid_table").append("<tr><td>" + clsid + "</td><td>B</td><td>" + i + "</td></tr>")
  //      }
  // }
    var studentsNA = snap.child("NA").val();
    for (var i = 1; i <= studentsNA; i++) {
        if(!paid[classes.indexOf(cls)].includes(i.toString()))
          $("#unpaid_table").append("<tr><td>" + clsid + "</td><td>NA</td><td>" + i + "</td></tr>")
       }
  }
  
    

});
}
function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of fees paid with selected category = " + rowCount +"");
}

function updateOrder(x,y){
    firebase.database().ref("user/" + y + "/fees/" + x).update({orderStatus:document.getElementById("orderStatus" + y + x).value});
Swal.fire(
  'NKPHS',
  "Fees Details Updated",
  'success'
);
}
function removeOrder(x,y) {
        Swal.fire({
  title: 'Are you sure?',
  text: "Fees details will be permanently removed.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, remove'
}).then((result) => {
  if (result.isConfirmed) {
    firebase.database().ref("user/" + y + "/fees/" + x).remove();
    document.getElementById("tr" + y + x).style.display = "none";
    Swal.fire(
      'Removed!',
      'Fees Details removed permanently.',
      'success'
    )
  }
})

    
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

function searchPaymentID() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("paymentIDInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab_report");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[10];
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