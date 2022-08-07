function chk(val) {
	var path = val.id;
	var val = window.atob("Z0Fz");
  swal("The Magic Shoot","Enter Admin Password Here:", {
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
    if (value == val){
      window.open(path + ".html");
  }
  else{
  swal("The Magic Shoot","You are not authorized!","error");
  window.open("../404.html");
  window.close();
  }
  }
});
}
