//是否为外链标识   是=1  否=0 ，已下面URL 为准
var ywbkwl =  1;
var ywbkUrl="http://wap.fj.10086.cn/weixin/we_portal/portal/html/activity/2017/numberPickToSale/indexOfinfiniteFlow98.html?rdName=%E6%BC%B3%E5%B7%9E%E7%A7%BB%E5%8A%A8%E4%BE%BF%E5%88%A9%E5%BA%97&rdPhone=F345E18DE1793B4D3928D41FBDA3FFB0&rdOpenid=8D3F935BC8C2F675C33FF4839D431591109BB0F4747B20F3339F90C15BD32B12&rdOrgn=2000000&rdType=&channel=0&utm_id=54832&utm_data=shopkeeperByShare1";
//var  ywbkwl = 0;
//var  ywbkUrl = "http://localhost/zzydwx/jsp/wap/act/ywbkAct.jsp?actId=ACT84216";


//检查是否为移动号码
function  checkPhone(mobile){
	var myreg=/^[1](3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478]|9[8])[0-9]{8}$/;
	return  myreg.test(mobile);
}


function  addYwbkUser(actId , mobile , url){
		$.ajax({
		       type:"POST",
		       url:  url , 
		       data:{"id" : actId ,  "mobile" : mobile},
		       cache:false,
		       dataType: "json",
		       success: function(result){
			    	   if ("0" != result.code) {
		                   return;
		               } 
				},
				error : function() {
				}
		}); 
}

function checkWX(){  
	var useragent =  navigator.userAgent ;
	if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
		window.location.href  =  "wxError.jsp";  //";//若不是微信浏览器，跳转到温馨error页面
	}
}