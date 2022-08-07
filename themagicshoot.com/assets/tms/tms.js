window.scrollTo(0,0);
myID = document.getElementById("brand");
  gap = document.getElementById("brandm");
  mlogo = document.getElementById("brandl");
  elem = document.getElementById("brandl");
  let r = elem.getBoundingClientRect();
  tp = r.top;
  var v = tp/100;
  tp = tp + 105;
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= tp) {
    myID.style.display = "block";
    document.getElementById("brandl").style.opacity = "0";
    gap.style.width = '100px';
	}
	else {
    myID.style.display = "none";
	document.getElementById("brandl").style.opacity = "1";
    gap.style.width = y/v + 'px';
    var m = 250 - y/v;
    if(m>=100){mlogo.style.width = m + 'px';}
    else
    	{
    		mlogo.style.width = '100px';
		}
  }
};
window.addEventListener("scroll", myScrollFunc);
