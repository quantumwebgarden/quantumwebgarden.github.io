var phno = "";
window.onload=function () {
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
        Swal.fire(
  'DOT',
  'Message sent to your phone number',
  'success'
);
      document.getElementById('mainsec').style.display = "none";
      document.getElementById('verifysec').style.display = "block";
    }).catch(function (error) {
      Swal.fire(
  'DOT',
  'Some Error occured. Contact Support with the error message - ' + error.message,
  'error'
);
        //alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        Swal.fire(
        'DOT',
        'Verified Successfully',
        'success'
          );
        var user=result.user;
        window.AppInventor.setWebViewString(user + "ussd" + phno);
        console.log(user);
    }).catch(function (error) {
      
        Swal.fire(
        'DOT',
        'Some Error occured. Contact Support with the error message - ' + error.message,
        'error'
         );
    });
}
