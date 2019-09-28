function opendefaultdialog(v_title, v_url) {
    opendialog( (document.body.clientWidth>640 ? 640 :document.body.clientWidth) - 50, document.body.clientHeight - 200, v_title, v_url,true);
}
function opendefaultdialog2(v_height,v_title, v_url) {
    opendialog((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, v_height, v_title, v_url, true);
} 
function opennoclosedialog(v_title, v_url) {
    opendialog((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, document.body.clientHeight - 200, v_title, v_url, false);
}
function opennoclosedialog2(v_height, v_title, v_url) {
    opendialog((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, v_height, v_title, v_url, false);
}
function opennoclosedialog_pink(v_height, v_title, v_url) {
    opendialog2((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, v_height, v_title, v_url, false);
}

function opendialog(v_width, v_height, v_title, v_url, canclose) {
    if (canclose) {
        closehtml = '<td style="padding-left:30px;font-size:16px;text-align: center;color:#2183F0;">' + v_title + '</td><td style="width:30px;padding-right:10px;text-align: right;cursor:pointer;" align=right onclick="closedialog();"><img src="images/close.png" border=0 style="width:20px;"></td>';
    } else {
        closehtml = '<td style="font-size:16px;text-align: center;color:#2183F0;">' + v_title + '</td>';
    }
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div><div style="Z-INDEX:2002;position:fixed;top:50%;left:50%;width:100px;height:100px;margin-left:-50px;margin-top:-50px;" id="loadimg" align="center"><img src="images/ico-loading.gif" /></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;box-shadow: 0 0 10px rgba(0, 0, 0, 1);-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 1);-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 1);" id="dialogbox">\
					<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">\
					<tr>\
						<td style="height:40px;background:#FFFFFF;">\
							<TABLE cellSpacing="0" cellPadding="0" width="100%" border="0">\
							<tr>' + closehtml + '</tr>\
							</TABLE>\
						</td>\
					</tr>\
					<tr>\
						<td style="background:#FFFFFF;text-align:center;">\
						    <div align="center">\
							<table style="WIDTH: 98%; height:' + v_height + 'px; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
							<tr>\
							<td style="border-top: #2183F0 1px solid;height:' + v_height + 'px;text-align: center;"><iframe width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="auto" src="about:blank"></iframe></td></td>\
							</tr>\
							</TABLE>\
							</div>\
						</td>\
					</tr>\
					</TABLE>\
			</div>\
		';
	if(document.getElementById("dialogCase") == null)   
	{
		var oDiv = document.createElement('span');
		oDiv.id = "dialogCase";
	    document.body.appendChild(oDiv);
	}
	else
	{
	    var oDiv = document.getElementById("dialogCase");
	}
	oDiv.innerHTML = sBG + sBox;
	
	var arr=document.getElementsByTagName("select");
	for (var i=0;i<arr.length;i++)
    {
		var e = arr[i];
		e.style.display="none";
    }
    
	document.getElementById("dialogbg").style.display="";
	document.getElementById("dialogbox").style.display="";
	divwidth=v_width;
	divheight=v_height+40;
	var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
	var top=(document.getElementById("dialogbg").offsetHeight-divheight)/3;
	
	document.getElementById("dialogbox").style.top=top + "px";
	document.getElementById("dialogbox").style.left=left + "px";
	document.getElementById("dialogbox").style.width = divwidth + "px";
    
	var iframe = document.getElementById("iframe_content");
	if (iframe.attachEvent) {
	    iframe.attachEvent("onload", function () {
	        document.getElementById("loadimg").style.display = "none";
	        try {
	            window.frames['iframe_content'].load();
	        } catch (e) {
	        }
	    });
	} else {
	    iframe.onload = function () {
	        document.getElementById("loadimg").style.display = "none";
	        try {
	            window.frames['iframe_content'].load();
	        } catch (e) {
	        }
	    };
	}
	document.getElementById("iframe_content").src = v_url;
}

function opendialog1(v_width, v_height, v_title, v_url, canclose) {
    if (canclose) {
        closehtml = '<td style="padding-left:30px;font-size:16px;text-align: center;color:#08A9FF;">' + v_title + '</td><td style="width:30px;padding-right:10px;text-align: right;cursor:pointer;" align=right onclick="closedialog();"><img src="images/close.png" border=0 style="width:20px;"></td>';
    } else {
        closehtml = '<td style="font-size:16px;text-align: center;color:#08A9FF;">' + v_title + '</td>';
    }
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div><div style="Z-INDEX:2002;position:fixed;top:50%;left:50%;width:100px;height:100px;margin-left:-50px;margin-top:-50px;" id="loadimg" align="center"><img src="images/ico-loading.gif" /></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;box-shadow: 0 0 10px rgba(0, 0, 0, 1);-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 1);-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 1);" id="dialogbox">\
					<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">\
					<tr>\
						<td style="height:40px;background:#FFFFFF;">\
							<TABLE cellSpacing="0" cellPadding="0" width="100%" border="0">\
							<tr>' + closehtml + '</tr>\
							</TABLE>\
						</td>\
					</tr>\
					<tr>\
						<td style="background:#FFFFFF;text-align:center;">\
						    <div align="center" style="height:' + v_height + 'px;">\
							<table style="WIDTH:100%; height:' + v_height + 'px;COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
							<tr>\
							<td style="border-top: #08A9FF 1px solid;height:' + v_height + 'px; text-align: center;"><iframe width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="auto" src="about:blank"></iframe></td></td>\
							</tr>\
							</TABLE>\
							</div>\
						</td>\
					</tr>\
					</TABLE>\
			</div>\
		';
    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    divheight = v_height + 40;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";

    var iframe = document.getElementById("iframe_content");
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        });
    } else {
        iframe.onload = function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        };
    }
    document.getElementById("iframe_content").src = v_url;
}
function opendialog2(v_width, v_height, v_title, v_url, canclose) {
    if (canclose) {
        closehtml = '<td style="padding-left:30px;font-size:16px;text-align: center;color:#eb5b85;">' + v_title + '</td><td style="width:30px;padding-right:10px;text-align: right;cursor:pointer;" align=right onclick="closedialog();"><img src="images/close.png" border=0 style="width:20px;"></td>';
    } else {
        closehtml = '<td style="font-size:16px;text-align: center;color:#eb5b85;">' + v_title + '</td>';
    }
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div><div style="Z-INDEX:2002;position:fixed;top:50%;left:50%;width:100px;height:100px;margin-left:-50px;margin-top:-50px;" id="loadimg" align="center"><img src="images/ico-loading.gif" /></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;box-shadow: 0 0 10px rgba(0, 0, 0, 1);-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 1);-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 1);" id="dialogbox">\
					<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">\
					<tr>\
						<td style="height:40px;background:#FFFFFF;">\
							<TABLE cellSpacing="0" cellPadding="0" width="100%" border="0">\
							<tr>' + closehtml + '</tr>\
							</TABLE>\
						</td>\
					</tr>\
					<tr>\
						<td style="background:#FFFFFF;text-align:center;">\
						    <div align="center" style="height:' + v_height + 'px;">\
							<table style="WIDTH:100%; height:' + v_height + 'px;COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
							<tr>\
							<td style="border-top: #eb5b85 1px solid;height:' + v_height + 'px; text-align: center;"><iframe width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="auto" src="about:blank"></iframe></td></td>\
							</tr>\
							</TABLE>\
							</div>\
						</td>\
					</tr>\
					</TABLE>\
			</div>\
		';
    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    divheight = v_height + 40;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";

    var iframe = document.getElementById("iframe_content");
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        });
    } else {
        iframe.onload = function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        };
    }
    document.getElementById("iframe_content").src = v_url;
}

function openzjdialog(v_height, v_title, v_url) {
    var v_width = (document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50;
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 200px 200px 20px 20px;background:#FFE035;" id="dialogbox">\
						    <div align="center">\
							<table style="WIDTH: 98%; height:' + v_height + 'px; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
							<tr>\
							<td style="height:' + v_height + 'px;text-align: center;"><img id="loadimg" src="images/ico-loading.gif" /><iframe style="display:none" width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="auto" src="about:blank"></iframe></td></td>\
							</tr>\
							</TABLE>\
							</div>\
			</div>\
		';
	if(document.getElementById("dialogCase") == null)   
	{
		var oDiv = document.createElement('span');
		oDiv.id = "dialogCase";
	    document.body.appendChild(oDiv);
	}
	else
	{
	    var oDiv = document.getElementById("dialogCase");
	}
	oDiv.innerHTML = sBG + sBox;
	
	var arr=document.getElementsByTagName("select");
	for (var i=0;i<arr.length;i++)
    {
		var e = arr[i];
		e.style.display="none";
    }
    
	document.getElementById("dialogbg").style.display="";
	document.getElementById("dialogbox").style.display="";
	divwidth=v_width;
	divheight=v_height+40;
	var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
	var top=(document.getElementById("dialogbg").offsetHeight-divheight)/3;
	
	document.getElementById("dialogbox").style.top=top + "px";
	document.getElementById("dialogbox").style.left=left + "px";
	document.getElementById("dialogbox").style.width = divwidth + "px";
    
	var iframe = document.getElementById("iframe_content");
	if (iframe.attachEvent) {
	    iframe.attachEvent("onload", function () {
	        iframe.style.display = "";
	        document.getElementById("loadimg").style.display = "none";
	    });
	} else {
	    iframe.onload = function () {
	        iframe.style.display = "";
	        document.getElementById("loadimg").style.display = "none";
	    };
	}
	document.getElementById("iframe_content").src = v_url;
}

function closedialog()
{
	var arr=document.getElementsByTagName("select");
	for (var i=0;i<arr.length;i++)
    {
		var e = arr[i];
		e.style.display="";
    }
	document.getElementById("dialogbg").style.display="none";
	document.getElementById("dialogbox").style.display = "none";
	document.onscroll = "";
}

function openwaitting()
{
    var v_width=100;
    var v_height=100;
	sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=20);-moz-opacity:.2;opacity:0.2;display:none" id="dialogbg"></div>\
		            ';
	sBox = '\
            <div align="center" id="dialogbox" style="text-align:center;Z-INDEX:2001;position:fixed;display:none">\
              <img src="images/ico-loading.gif" />\
            </div>\
            ';
	if(document.getElementById("dialogCase") == null)   
	{
		var oDiv = document.createElement('span');
		oDiv.id = "dialogCase";
	    document.body.appendChild(oDiv);
	}
	else
	{
	    var oDiv = document.getElementById("dialogCase");
	}
	oDiv.innerHTML = sBG + sBox;
	
	var arr=document.getElementsByTagName("select");
	for (var i=0;i<arr.length;i++)
    {
		var e = arr[i];
		e.style.display="none";
    }
	
	document.getElementById("dialogbg").style.display="";
	document.getElementById("dialogbox").style.display="";
	var left = (document.getElementById("dialogbg").offsetWidth - v_width) / 2;
	var top = (document.getElementById("dialogbg").offsetHeight - v_height) / 2;
	document.getElementById("dialogbox").style.top=top + "px";
	document.getElementById("dialogbox").style.left=left + "px";
	document.getElementById("dialogbox").style.width = v_width + "px";
	document.getElementById("dialogbox").style.height = v_height + "px";
}

function openpicalert(v_str,pictype) {
    if (pictype == 0) //正确信息
        openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 200, '系统提示', v_str, 0, '', '确定', 'images/HD/yes.png', true);
    else if (pictype == 1)//错误信息
        openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 200, '系统提示', v_str, 0, '', '确定', 'images/HD/no.png', true);
    else if (pictype == 2)//警告信息
        openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 200, '系统提示', v_str, 0, '', '确定', 'images/HD/waring.png', true);
    else if (pictype == 3)//开心信息
        openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 200, '系统提示', v_str, 0, '', '确定', 'images/happy.png', true);
    else if (pictype == 4)//伤心信息
        openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 200, '系统提示', v_str, 0, '', '确定', 'images/sad.png', true);
}
function opendefaultalert(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 0, '', '确定', '', true);
}

function openalertandback(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 1, '', '确定', '', true);
}

function openalertandclose(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 2, '', '确定', '', true);
}

function openalertandfocus(v_str, v_par) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 3, v_par, '确定', '', true);
}

function openalertandreload(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 4, '', '确定', '', true);
}

function openalertandreplace(v_str, v_par) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 5, v_par, '确定', '', true);
}
function ppopenalertandreload(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 6, '', '确定', '', true);
}
function openalertandselfreload(v_str) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, 150, '系统提示', v_str, 7, '', '确定', '', true);
}
function openalertdiypic(v_height,v_title, v_str, v_par, v_btn, v_pic, canclose) {
    openalert((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, v_height, v_title, v_str, 8, v_par, v_btn, v_pic, canclose);
}

function openalert(v_width, v_height, v_title, v_str, v_returntype, v_par, v_btn, v_pic, canclose) {
    var returnstr = "";
    var contentPIC = "";
    if (v_pic != "") {
        contentPIC = '<tr><td style="text-align:center;height:' + 75 + 'px;"><img style="width:60px;" src="' + v_pic + '" /></td></tr>';
    }
    if (v_returntype == 1)
        returnstr = "history.back();";
    else if (v_returntype == 2)
        returnstr = "parent.closedialog();";
    else if (v_returntype == 3)//定位焦点
        returnstr = "document.getElementById(\'" + v_par + "\').focus();";
    else if (v_returntype == 4)
        returnstr = "parent.location.reload();";
    else if (v_returntype == 5)
        returnstr = "window.location.href=\'" + v_par + "\';";
    else if (v_returntype == 6)
        returnstr = "parent.parent.location.reload();";
    else if (v_returntype == 7)
        returnstr = "location.reload();";
    else if(v_returntype == 8)//自定义图片
    {
        if (v_pic != "") {
            contentPIC = '<tr><td style="text-align:center;"><img style="max-width:70%;" src="' + v_pic + '" /></td></tr>';
        }
        if (v_par != "") {
            returnstr = "window.location.href=\'" + v_par + "\';";
        }
    }
    var c_height = v_height;
    var btnhtml = "";
    if (v_btn != "") {
        c_height = v_height - 46;
        btnhtml='\
				<div style="WIDTH: 98%;border-top: #E8E6E6 1px solid;">\
				<table style="WIDTH: 100%; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
				<tr>\
					<TD style="text-align: center;height:45px;" onclick="closedialog();'+returnstr+'">\
						<input style="background-color:#FFFFFF;padding:5px 10px;font-size:16px;text-decoration:none;border:0px;text-align:center;width:100%;color:#2183F0" type="button" value="' + v_btn + '" /></TD>\
				</tr>\
				</TABLE>\
				</div>\
        ';
    }

    var closehtml = '<td style="padding-left:30px;font-size:16px;text-align: center;color:#2183F0;">' + v_title + '</td><td style="width:30px;padding-right:10px;text-align: right;cursor:pointer;" align=right onclick="closedialog();' + returnstr + '"><img src="images/close.png" border=0 style="width:20px;"></td>';
    if (!canclose) {
        closehtml = '<td style="font-size:16px;text-align: center;color:#2183F0;">' + v_title + '</td>';
    }
    
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;box-shadow: 0 0 10px rgba(0, 0, 0, 1);-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 1);-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 1);" id="dialogbox">\
					<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">\
					<tr>\
						<td style="height:40px;background:#FFFFFF;">\
							<TABLE cellSpacing="0" cellPadding="0" width="100%" border="0">\
							<tr>' + closehtml + '</tr>\
							</TABLE>\
						</td>\
					</tr>\
					<tr>\
						<td style="background:#FFFFFF;">\
						    <div align="center">\
						    <div style="WIDTH: 98%;OVERFLOW: auto;HEIGHT:' + c_height + 'px;border-top: #2183F0 1px solid;">\
							<table style="WIDTH: 100%; height:' + c_height + 'px; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">' + contentPIC + '\
							<tr>\
							<td style="font-size:14px;color:#3F3F3F;text-align: center;padding:0 15px 10px 15px;">' + v_str + '</td>\
							</tr>\
							</TABLE>\
							</div>' + btnhtml + '</div>\
						</td>\
					</tr>\
					</TABLE>\
			</div>\
		';

    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }
    
    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    divheight = v_height + 40;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 2;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";
}

function openzjalert(v_width, v_height, v_str, v_returntype, v_par, v_btn, v_pic, title_pic) {
    var returnstr = "";
    var contentPIC = "";
    if (v_returntype == 0)//表情
    {
        if (v_pic != "") {
            contentPIC = '<tr><td style="text-align:center;height:75px;"><img style="width:60px;" src="' + v_pic + '" /></td></tr>';
        }
    }
    else if (v_returntype == 1)
        returnstr = "history.back();";
    else if (v_returntype == 2)
        returnstr = "parent.closedialog();";
    else if (v_returntype == 3)//定位焦点
        returnstr = "document.getElementById(\'" + v_par + "\').focus();";
    else if (v_returntype == 4)
        returnstr = "parent.location.reload();";
    else if (v_returntype == 5)
        returnstr = "window.location.href=\'" + v_par + "\';";
    else if (v_returntype == 6)
        returnstr = "parent.parent.location.reload();";
    else if (v_returntype == 7)
        returnstr = "location.reload();";
    else if (v_returntype == 8)//自定义图片
    {
        if (v_pic != "") {
            contentPIC = '<tr><td style="text-align:center;"><img style="max-width:70%;" src="' + v_pic + '" /></td></tr>';
        }
        if (v_par != "") {
            returnstr = "window.location.href=\'" + v_par + "\';";
        }
    }
    else if (v_returntype == 9)
        returnstr = v_par;

    var btn_html = "";
    if (v_returntype == 10)//双按钮，有一个固定为关闭
    {
        returnstr = v_par;
        btn_html = '<TD valign="top" style="text-align: left;height:50px;" onclick="closedialog();' + returnstr + '"><input style="border:0px;background-color:#EA3925;padding:5px 8px;font-size:20px;text-decoration:none;-webkit-box-shadow: 0 3px 0 0px #AD1001;-moz-box-shadow: 0 3px 0 0px #AD1001;box-shadow:0 3px 0 0px #AD1001;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;color: #ffffff;width: 95%;" type="button" value="' + v_btn + '" /></TD><TD valign="top" style="text-align: right;width:50%;" onclick="closedialog();"><input style="border:0px;background-color:#EA3925;padding:5px 8px;font-size:20px;text-decoration:none;-webkit-box-shadow: 0 3px 0 0px #AD1001;-moz-box-shadow: 0 3px 0 0px #AD1001;box-shadow:0 3px 0 0px #AD1001;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;color: #ffffff;width: 95%;" type="button" value="关闭" /></TD>';
    } else if (v_returntype == 11)//双按钮，两个都可自定义
    {
        var btn_arr = v_btn.split("|");
        var return_arr = v_par.split("|");
        btn_html = '<TD valign="top" style="text-align: left;height:50px;" onclick="' + return_arr[0] + '"><input style="border:0px;background-color:#EA3925;padding:5px 8px;font-size:20px;text-decoration:none;-webkit-box-shadow: 0 3px 0 0px #AD1001;-moz-box-shadow: 0 3px 0 0px #AD1001;box-shadow:0 3px 0 0px #AD1001;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;color: #ffffff;width: 95%;" type="button" value="' + btn_arr[0] + '" /></TD><TD valign="top" style="text-align: right;width:50%;" onclick="' + return_arr[1] + '"><input style="border:0px;background-color:#EA3925;padding:5px 8px;font-size:20px;text-decoration:none;-webkit-box-shadow: 0 3px 0 0px #AD1001;-moz-box-shadow: 0 3px 0 0px #AD1001;box-shadow:0 3px 0 0px #AD1001;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;color: #ffffff;width: 95%;" type="button" value="' + btn_arr[1] + '" /></TD>';
    } else {
        btn_html = '<TD valign="top" style="text-align: center;height:50px;" onclick="closedialog();' + returnstr + '"><input style="border:0px;background-color:#EA3925;padding:5px 8px;font-size:20px;text-decoration:none;-webkit-box-shadow: 0 3px 0 0px #AD1001;-moz-box-shadow: 0 3px 0 0px #AD1001;box-shadow:0 3px 0 0px #AD1001;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;color: #ffffff;width: 100%;" type="button" value="' + v_btn + '" /></TD>';
    }

    var sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none;box-shadow: 0 0 10px rgba(0, 0, 0, 1);-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 1);-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 1);" id="dialogbg"></div>\
		';

    var sBox = '';
    if (title_pic == "") {
        sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 20px 20px 20px 20px;background:#F9F59D;" id="dialogbox">\
				<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">';
    } else {
        sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 200px 200px 20px 20px;background:#F9F59D;" id="dialogbox">\
				<TABLE cellSpacing="0" cellPadding="0" width="100%" height="100%" border="0">\
				<tr>\
					<td style="text-align:center;">\
						<img style="width:100%;border-radius: 150px 150px 0 0;" src="' + title_pic + '" />\
					</td>\
				</tr>';
    }

    sBox += '<tr>\
					<td>\
                        <div style="height:10px;line-height:15px;">&nbsp;</div>\
						<div align="center">\
						<div style="WIDTH: 90%;OVERFLOW: auto;HEIGHT:' + (v_height - 50) + 'px;">\
						<table style="WIDTH: 100%; height:' + (v_height - 50) + 'px; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">' + contentPIC + '\
						<tr>\
						<td style="font-size:16px;color:#AD1001;text-align: center;">' + v_str + '</td>\
						</tr>\
						</TABLE>\
						</div>\
						<div style="WIDTH: 90%;">\
						<table style="WIDTH: 100%; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
				        <tr>' + btn_html + '</tr>\
						</TABLE>\
						</div>\
						</div>\
                        <div style="height:10px;line-height:15px;">&nbsp;</div>\
					</td>\
				</tr>\
				</TABLE>\
			</div>\
		';

    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    
    divheight = v_height + 200;
    if (title_pic == "") {
        divheight = v_height;
    }
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";
}
function opencutdownalert(v_height, title_pic, v_str) {
    var v_width = (document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50;
    var sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none;" id="dialogbg"></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 10px;background:#FFF;" id="dialogbox">\
                <div style="position: relative;background:#CF412D;height:45px;border-radius: 10px 10px 0 0;">\
                    <div style="float:right;width:35px;padding-top:5px;cursor:pointer;" onclick="closedialog();"><img src="images/close2.png" style="width:25px;"></div>\
                    <div style="position:absolute;z-index:11;left:50%;top:-15px;"><img src="' + title_pic + '" style="width:190px;margin-left: -80px;" /></div>\
                </div>\
				<div style="OVERFLOW:auto;width:100%;height:' + v_height + 'px;padding:10px;">' + v_str + '</div>\
				<div style=\"height:10px;line-height:10px;\">&nbsp;</div>\
			</div>\
		';

    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;

    divheight = v_height + 45;
    if (title_pic == "") {
        divheight = v_height;
    }
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";

}
function opendefaultcutdownalert(title_pic, v_str) {
    var v_height = document.body.clientHeight - 100;
    opencutdownalert(v_height, title_pic, v_str);
}

function opennoclosecutdowndialog2(v_height, title_pic, v_url) {
    opencutdowndialog((document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50, v_height, title_pic, v_url, false);
}

function opencutdowndialog(v_width, v_height, title_pic, v_url, canclose) {
    var closehtml = '';
    if (canclose) {
        closehtml = '<div style="float:right;width:35px;padding-top:5px;cursor:pointer;" onclick="closedialog();"><img src="images/close2.png" style="width:25px;"></div>';
    }
    var sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none;" id="dialogbg"></div><div style="Z-INDEX:2002;position:fixed;top:50%;left:50%;width:100px;height:100px;margin-left:-50px;margin-top:-50px;" id="loadimg" align="center"><img src="images/ico-loading.gif" /></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 10px;background:#F7BC3E;" id="dialogbox">\
                <div style="position: relative;background:#CF412D;height:45px;border-radius: 10px 10px 0 0;">' + closehtml + '<div style="position:absolute;z-index:11;left:50%;top:-15px;"><img src="' + title_pic + '" style="width:190px;margin-left: -80px;" /></div>\
                </div>\
				<div style="height:' + v_height + 'px;"><iframe width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="no" src="about:blank"></iframe></div>\
				<div style=\"height:10px;line-height:10px;\">&nbsp;</div>\
			</div>\
		';
    var oDiv = document.getElementById("dialogCase");
    if (oDiv == null) {
        oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    divheight = v_height + 40;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";

    var iframe = document.getElementById("iframe_content");
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        });
    } else {
        iframe.onload = function () {
            document.getElementById("loadimg").style.display = "none";
            try {
                window.frames['iframe_content'].load();
            } catch (e) {
            }
        };
    }
    document.getElementById("iframe_content").src = v_url;
}

function openzjdialog_green(v_height, v_title, v_url) {
    var v_width = (document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50;
    sBG = '\
			<div style="Z-INDEX:2000;position:fixed;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div>\
		';
    sBox = '\
			<div style="Z-INDEX:2001;position:fixed;display:none;border-radius: 200px 200px 20px 20px;background:#0093ff;" id="dialogbox">\
						    <div align="center">\
							<table style="WIDTH: 98%; height:' + v_height + 'px; COLOR: #002040; BORDER-COLLAPSE: collapse" cellSpacing="0" cellPadding="0" align="center">\
							<tr>\
							<td style="height:' + v_height + 'px;text-align: center;"><img id="loadimg" src="images/ico-loading.gif" /><iframe style="display:none" width="100%" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" scrolling="auto" src="about:blank"></iframe></td></td>\
							</tr>\
							</TABLE>\
							</div>\
			</div>\
		';
    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "";
    document.getElementById("dialogbox").style.display = "";
    divwidth = v_width;
    divheight = v_height + 40;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 3;

    document.getElementById("dialogbox").style.top = top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";

    var iframe = document.getElementById("iframe_content");
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
            iframe.style.display = "";
            document.getElementById("loadimg").style.display = "none";
        });
    } else {
        iframe.onload = function () {
            iframe.style.display = "";
            document.getElementById("loadimg").style.display = "none";
        };
    }
    document.getElementById("iframe_content").src = v_url;
}

/*opendialogNew 某些情况下Chrome不认document.documentElement.scrollTop则对于Chrome的处理 scrolltop()*/
function opendialog_select(v_width, v_height, v_title, v_url) {
    sBG = '\
			<div style="Z-INDEX:20000;position:absolute;top:0px;left:0px;width:100%;height:100%;background:#000000;filter:alpha(opacity=40);-moz-opacity:.4;opacity:0.4;display:none" id="dialogbg"></div>\
		';
    sBox = '\
			<div style="Z-INDEX:20001;position:absolute;display:none" id="dialogbox">\
					<TABLE cellSpacing="1" cellPadding="0" width="' + v_width + '" height="' + v_height + '" border="0" background="#000000">\
					<tr style="vertical-align:top;">\
						<td bgcolor="#FFFFFF"><iframe width="'+ v_width + '" height="' + v_height + '" name="iframe_content" id="iframe_content" frameborder="0" src="about:blank"></iframe></td>\
					</tr>\
					</TABLE>\
			</div>\
		';
    if (document.getElementById("dialogCase") == null) {
        var oDiv = document.createElement('span');
        oDiv.id = "dialogCase";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("dialogCase");
    }
    oDiv.innerHTML = sBG + sBox;

    var arr = document.getElementsByTagName("select");
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        e.style.display = "none";
    }

    document.getElementById("dialogbg").style.display = "inline";
    document.getElementById("dialogbox").style.display = "inline";
    divwidth = v_width + 2;
    divheight = v_height + 25 + 3;
    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 2;
    var scroll_top = scrolltop();

    document.getElementById("dialogbg").style.top = scroll_top + "px";
    document.getElementById("dialogbox").style.top = scroll_top + top + "px";
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";
    document.getElementById("dialogbox").style.height = divheight + "px";
    //window.onscroll = scroll;
    document.getElementById("iframe_content").src = v_url;
}


function scrolltop() {
    var scroll_top;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;/*某些情况下Chrome不认document.documentElement.scrollTop则对于Chrome的处理。*/
    }
    return scroll_top;
}

function scroll() {
    divheight = parseInt(document.getElementById("dialogbox").style.height);
    var top = (document.getElementById("dialogbg").offsetHeight - divheight) / 2;
    var scroll_top = scrolltop();
    document.getElementById("dialogbg").style.top = scroll_top + "px";
    document.getElementById("dialogbox").style.top = scroll_top + top + "px";

}
var selectflag = 0;
var selectindex = -1;
function openinputselect(inputid, vhtml) {
    var oDiv;
    if (document.getElementById("selectnames") == null) {
        oDiv = document.createElement('div');
        oDiv.id = "selectnames";
        oDiv.className = "selectnames";
        oDiv.onmouseover = function () {
            selectflag = 0;
        };
        oDiv.onmouseout = function () {
            selectflag = 1;
        };
        document.body.appendChild(oDiv);
    }
    else {
        oDiv = document.getElementById("selectnames");
    }
    oDiv.innerHTML = vhtml;
    selectindex = -1;
    document.getElementById("selectnames").style.display = "";
    var top = $('#' + inputid).offset().top + $('#' + inputid).height() + 2;
    var left = $('#' + inputid).offset().left;
    document.getElementById("selectnames").style.top = top + "px";
    document.getElementById("selectnames").style.left = left + "px";
    $('#selectnames').width($('#' + inputid).width());
}

function selectname1(selectstr, inputid, callback) {//通用版
    document.getElementById(inputid).value = selectstr;
    document.getElementById("selectnames").style.display = "none";
    if (callback != "")
        eval(callback);
}
function closeselect() {
    if (selectflag == 1) {
        document.getElementById("selectnames").style.display = "none";
    }
}
function movemenu(vindex) {
    $('.menuList_in').eq(vindex).addClass("menuList_sel");
    if (selectindex != -1)
        $('.menuList_in').eq(selectindex).removeClass("menuList_sel");
    selectindex = vindex;
}
function changeinputselect(inputstr, inputid, tablename, tablezd, callback, RM) {
    var aj = $.ajax({
        url: "ajax.aspx?type=GetName1&inputstr=" + escape(inputstr) + "&inputid=" + inputid + "&tablename=" + tablename + "&tablezd=" + tablezd + "&RM=" + RM + "&callback=" + escape(callback) + "&Rand=" + Math.random(),
        //type:'post',
        //data:'merName='+values,
        async: true,
        dataType: 'json',
        success: function (data) {
            openinputselect(inputid, data.result);
        },
        error: function () {
        }
    });
}
