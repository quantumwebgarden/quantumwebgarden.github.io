var uid = 0;
var elid = "";
var lats = 0;
var langs = 0;
var locst= "";

window.onload=function () {
	var parameters = location.search.substring(1).split("=");
    uid = parameters[1];
    elid = parameters[2];
    lats = parameters[3];
    langs = parameters[4];
    locst = parameters[5];
    document.getElementById('number').value = uid;
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number= "+91" + document.getElementById('number').value;
    phno = number;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        Swal.fire('Message sent to your phone number');
      document.getElementById('mainsec').style.display = "none";
      document.getElementById('verifysec').style.display = "block";
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
        window.open("https://quantumwebgarden.github.io/dot/index.html?uid=" + uid + "=0=" + lats + "=" + langs + "=0");
		window.close();
        console.log(user);
    }).catch(function (error) {
        Swal.fire('Some Error occured. Contact Support with the error message - ' + error.message);
    });
}
