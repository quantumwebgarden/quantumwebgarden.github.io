function adminpass() {
  document.getElementById("passchk").style.display = "none";
  swal("North Kolkata Public High School","Enter Admin Password Here:", {
    content: {
    element: "input",
    attributes: {
      placeholder: "Type your password",
      type: "password",
    },
  },
})
  .then((value) => {

  if (value != null) {
    if (value == window.atob("TktQSFNAYWRtaW4jMjAyMQ==")){
      document.getElementById("passchk").style.display = "block";
      document.getElementById("passchkimg").style.display = "none";
  }
  else{
  swal("North Kolkata Public High School","You are not authorized!","error");
  document.getElementById("passchk").style.display = "none";
  }
  }
});
}
