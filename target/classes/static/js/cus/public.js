//��һ���´���
function newwindow(mypage,w,h){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h-40)/2 : 0;
	settings ='height='+h+', width='+w+', top='+TopPosition+', left='+LeftPosition+',toolbar=no, menubar=no, scrollbars=auto, resizable=no, location=no, status=no'
	window.open(mypage,'',settings)
}

//ȫѡ
function CheckAll(form)
  {
  for (var i=0;i<form.elements.length;i++)
    {
		var e = form.elements[i];
		if (e.name != "chkall")
			e.checked = form.chkall.checked;
    }
  } 

  //��ѡ
function ChangeCheckAll(form)
  {
  for (var i=0;i<form.elements.length;i++)
    {
		var e = form.elements[i];
        e.checked = ! e.checked;
    }
  } 

//ɾ��ѡ�еĸ�ѡ��form����Ҫ��һ��hidType������ѡ����Ϣ��
  function deleteData(f)
	{	
		if (isselected(f))
		 {
		   var isdelete;
		   isdelete=confirm('ȷ��ɾ����ѡ��¼?');
		   if(isdelete)
			 {
			   f.hidType.value="delete"
			   f.submit()	  
		     }
		   else
             return false;
		 }
		else
         {
		  alert('��ѡ��Ҫɾ���ļ�¼��');
		  return false;
		 }
   }

function isselected(f)
{
	tempcount=0;
	for (i=0;i<f.elements.length;i++)
		if (f.elements[i].checked) tempcount++;
	return tempcount;
}

//�Ƿ�����ʼ���ַ
function isEmailId(str)
{
	/*****************************************************************
	Input   :  str
	purpose :  To validate for email
	output  :  valid email true/false
	*******************************************************************/
	var objRegExp  = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
	return objRegExp.test(str);
}

function forgetpsw()
				{
						if(form_login.username.value=="")
						{
							alert("��δ�����û���");
							form_login.username.focus();
							return false;
						}
						if(form_login.Company.Checked)
						newwindow("Forgetpsw.asp?username=" + form_login.username.value + "&usertype=Company" ,438,300);
						else
						newwindow("Forgetpsw.asp?username=" + form_login.username.value + "&usertype=Person" ,438,300);
				}

function clickdl()
				{
						if(form_login.username.value=="")
						{
							alert("��δ�����û���");
							username.focus();
							return false;
						}
						if(form_login.password.value=="")
						{
							alert("��δ��������");
							password.focus();
							return false;
						}
						if(form_login.Company.checked==false && form_login.Person.checked==false)
						{
							alert("��δѡ���û�����");
							form_login.Company.focus();
							return false;
						}
						form_login.submit();
				}

function txldl()
				{
						if(form_txl.username_txl.value=="")
						{
							alert("��δ�����û���");
							username_txl.focus();
							return false;
						}
						if(form_txl.password_txl.value=="")
						{
							alert("��δ��������");
							password_txl.focus();
							return false;
						}
						form_txl.submit();
				}
//ȥ�����һ���ַ�
function dellastchar(str)
{
	if(str.length>0)
		str=str.substring(0,str.length-1)
	return str;
}
//ȥ�����һ���ַ�
function dellastsomechar(str,len)
{
	if(str.length>=len)
		str=str.substring(0,str.length-len)
	return str;
}

//�ַ���תΪ����
function strToDate(str)
{
  var arys= new Array();
  arys=str.split('-');
  var newDate=new Date(arys[0],arys[1],arys[2]); 
  return newDate;
} 

//****************************************************************
// Code by Yahao
// Copyright by YAHAO Studio & ��ˮ��ά������ 
// Date: 2000-6-14
// Description: sInputString Ϊ�����ַ�����iTypeΪ���ͣ��ֱ�Ϊ
// 0 - ȥ��ǰ��ո�; 1 - ȥǰ���ո�; 2 - ȥβ���ո�
//****************************************************************
function cTrim(sInputString,iType)
{
var sTmpStr = ' '
var i = -1

if(iType == 0 || iType == 1)
{
while(sTmpStr == ' ')
{
++i
sTmpStr = sInputString.substr(i,1)
}
sInputString = sInputString.substring(i)
}

if(iType == 0 || iType == 2)
{
sTmpStr = ' '
i = sInputString.length
while(sTmpStr == ' ')
{
--i
sTmpStr = sInputString.substr(i,1)
}
sInputString = sInputString.substring(0,i+1)
}
return sInputString
}

//��֤�Ƿ��������ַ�
function HaveChar(str)
{
	var chars=["'","<",">","\""];
	for(i=0;i<chars.length;i++)
	{
		if(str.indexOf(chars[i])>=0)
		{
			return true;
		}
	}
	return false;
}

//ֻ���������֣���ĸ���»���
function CharOnly()
{
	if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode>= 97 && event.keyCode <= 122) || (event.keyCode == 95)))
		event.returnValue = false;
}

//ֻ���������֣���ĸ���»���
function OnlyHaveChar(str)
{
	for(i=0;i<str.length;i++)
	{
		keycode=str.charCodeAt(i);
		if (!((keycode >= 48 && keycode <= 57) || (keycode >= 65 && keycode <= 90) || (keycode>= 97 && keycode <= 122) || (keycode == 95)))
			return false;
	}
	return true;
}

//ֻ���������ֺ�С����
function OnlyHaveNum(str)
{
	for(vi=0;vi<str.length;vi++)
	{
		keycode=str.charCodeAt(vi);
		if (!((keycode >= 48 && keycode <= 57) || keycode==46))
			return false;
	}
	return true;
}

//ֻ����������
function AllNum(str)
{
	for(i=0;i<str.length;i++)
	{
		keycode=str.charCodeAt(i);
		if (!(keycode >= 48 && keycode <= 57))
			return false;
	}
	return true;
}

//�Ƿ�����ʼ���ַ
function isEmailId(str)
{
	/*****************************************************************
	Input   :  str
	purpose :  To validate for email
	output  :  valid email true/false
	*******************************************************************/
	if(str.length>0)
	{
		var objRegExp  = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
		return objRegExp.test(str);	
	}
	else
	{
		return true;
	}
}

//�Ƿ��ֻ�����
function isMobileNum(str)
{
	if(ischinamobile(str) || isLTmobile(str) || isDXmobile(str))
	    return true;
    return false;
}

    function ischinamobile(str)
    {
        if(str.length==11 && AllNum(str)) {
            var start3 = str.substr(0, 3);
            if (start3 == "134" || start3 == "135" || start3 == "136" || start3 == "137" || start3 == "138" || start3 == "139" || start3 == "150" || start3 == "151" || start3 == "152" || start3 == "157" || start3 == "158" || start3 == "159" || start3 == "178" || start3 == "182" || start3 == "183" || start3 == "184" || start3 == "187" || start3 == "188" || start3 == "147")
            {
                return true
            }
        }
        return false
    }
    function isDXmobile(str)
    {
        if(str.length==11 && AllNum(str)) {
            var start3 = str.substr(0, 3);
            if (start3 == "133" || start3 == "153" || start3 == "180" || start3 == "181" || start3 == "189" || start3 == "177")
            {
                return true
            }
        }
        return false
    }
    function isLTmobile(str)
    {
        if(str.length==11 && AllNum(str))
        {
            var start3=str.substr(0,3)
            if(start3=="130" || start3=="131" || start3=="132" || start3=="156" || start3=="155" || start3=="185" || start3=="186" || start3=="145")
            {
                return true
            }
        }
        return false
    }

//��һ���´���
function newwindow(mypage,w,h){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h-40)/2 : 0;
	settings ='height='+h+', width='+w+', top='+TopPosition+', left='+LeftPosition+',toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no'
	var windowinfo=window.open(mypage,'',settings);
	windowinfo.focus();
}

//Ajax
function ajaxRead(file)
{//alert(file);
  var xmlObj = null;
  if(window.XMLHttpRequest)
  {
      xmlObj = new XMLHttpRequest();
  }
  else if(window.ActiveXObject)
  {
      xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else
  {
      return;
  }
  xmlObj.onreadystatechange = function()
  {
    if(xmlObj.readyState == 4)
    {
       DO(xmlObj.responseText);
    }
  }
  xmlObj.open ('GET', file, true);
  xmlObj.send ('');
}

function takews2(str)
{
	if(str<10)
		return "0"+str;
	else
		return str;
}

//�ַ���תΪ����
function StrToDate(str)
{
	var ymd1=str.split("-");
	var month1=ymd1[1]-1
	var vnowtm = new Date(ymd1[0],month1,ymd1[2]); 
	return vnowtm;
}

//ȡ��·�����ļ���
function getfilename(path)
{
	index=path.lastIndexOf("/");
	if(index>-1)
		return path.substr(index+1,path.length-index-1);
	else
		return path
}

function insertText(obj,str) {
    if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        var startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        obj.selectionStart = obj.selectionEnd = cursorPos;
    } else {
        obj.value += str;
    }
}

function goerror(str,sm)
{
    document.getElementById("sm_"+str).style.display="";
    document.getElementById("sm_"+str).innerHTML=sm;
    document.getElementById(str).focus();
}

function gook(str)
{
    document.getElementById("sm_"+str).style.display="";
    document.getElementById("sm_"+str).innerHTML='<img alt="" src="images/yes_s.png" align=absMiddle />';
}

function picpath(uploadfilesUrl,str)
{
    if(str=="")
	    return "images/nopic_s.jpg";
	else if(str.substring(0,4)=="http")
		return str;
	else
		return uploadfilesUrl + str;
}


//---------------------------------------------------  
// �ж�����  
//---------------------------------------------------  
Date.prototype.isLeapYear = function()   
{   
    return (0==this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0)));   
}   
  
//---------------------------------------------------  
// ���ڸ�ʽ��  
// ��ʽ YYYY/yyyy/YY/yy ��ʾ���  
// MM/M �·�  
// W/w ����  
// dd/DD/d/D ����  
// hh/HH/h/H ʱ��  
// mm/m ����  
// ss/SS/s/S ��  
//---------------------------------------------------  
Date.prototype.Format = function(formatStr)   
{   
    var str = formatStr;   
    var Week = ['��','һ','��','��','��','��','��'];  
  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
  
    str=str.replace(/MM/,(this.getMonth()+1)>9?(this.getMonth()+1).toString():'0' + (this.getMonth()+1));   
    str=str.replace(/M/g,this.getMonth()+1);   
  
    str=str.replace(/w|W/g,Week[this.getDay()]);   
  
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
  
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());   
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());   
    str=str.replace(/m/g,this.getMinutes());   
  
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());   
    str=str.replace(/s|S/g,this.getSeconds());   
  
    return str;   
}   
  
//+---------------------------------------------------  
//| ������ʱ��������� ���ڸ�ʽΪ YYYY-MM-dd   
//+---------------------------------------------------  
function daysBetween(DateOne,DateTwo)  
{   
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));  
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);  
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
  
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);  
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
  
    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
    return Math.abs(cha);  
}  
  
  
//+---------------------------------------------------  
//| ���ڼ���  
//+---------------------------------------------------  
Date.prototype.DateAdd = function(strInterval, Number) {   
    var dtTmp = this;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
}  
  
//+---------------------------------------------------  
//| �Ƚ����ڲ� dtEnd ��ʽΪ�����ͻ��� ��Ч���ڸ�ʽ�ַ���  
//+---------------------------------------------------  
Date.prototype.DateDiff = function(strInterval, dtEnd) {   
    var dtStart = this;  
    if (typeof dtEnd == 'string' )//������ַ���ת��Ϊ������  
    {   
        dtEnd = StringToDate(dtEnd);  
    }  
    switch (strInterval) {   
        case 's' :return parseInt((dtEnd - dtStart) / 1000);  
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
    }  
}  

  
//+---------------------------------------------------  
//| ���ںϷ�����֤  
//| ��ʽΪ��YYYY-MM-DD��YYYY/MM/DD  
//+---------------------------------------------------  
function IsValidDate(DateStr)   
{   
    var sDate=DateStr.replace(/(^\s+|\s+$)/g,''); //ȥ���߿ո�;   
    if(sDate=='') return true;   
    //�����ʽ����YYYY-(/)MM-(/)DD��YYYY-(/)M-(/)DD��YYYY-(/)M-(/)D��YYYY-(/)MM-(/)D���滻Ϊ''   
    //���ݿ��У��Ϸ����ڿ�����:YYYY-MM/DD(2003-3/21),���ݿ���Զ�ת��ΪYYYY-MM-DD��ʽ   
    var s = sDate.replace(/[\d]{ 4,4 }[\-/]{ 1 }[\d]{ 1,2 }[\-/]{ 1 }[\d]{ 1,2 }/g,'');   
    if (s=='') //˵����ʽ����YYYY-MM-DD��YYYY-M-DD��YYYY-M-D��YYYY-MM-D   
    {   
        var t=new Date(sDate.replace(/\-/g,'/'));   
        var ar = sDate.split(/[-/:]/);   
        if(ar[0] != t.getYear() || ar[1] != t.getMonth()+1 || ar[2] != t.getDate())   
        {   
            //alert('��������ڸ�ʽ����ʽΪ��YYYY-MM-DD��YYYY/MM/DD��ע�����ꡣ');   
            return false;   
        }   
    }   
    else   
    {   
        //alert('��������ڸ�ʽ����ʽΪ��YYYY-MM-DD��YYYY/MM/DD��ע�����ꡣ');   
        return false;   
    }   
    return true;   
}   
  
//+---------------------------------------------------  
//| ����ʱ����  
//| ��ʽΪ��YYYY-MM-DD HH:MM:SS  
//+---------------------------------------------------  
function CheckDateTime(str)  
{   
    var reg = /^(\d+)-(\d{ 1,2 })-(\d{ 1,2 }) (\d{ 1,2 }):(\d{ 1,2 }):(\d{ 1,2 })$/;   
    var r = str.match(reg);   
    if(r==null)return false;   
    r[2]=r[2]-1;   
    var d= new Date(r[1],r[2],r[3],r[4],r[5],r[6]);   
    if(d.getFullYear()!=r[1])return false;   
    if(d.getMonth()!=r[2])return false;   
    if(d.getDate()!=r[3])return false;   
    if(d.getHours()!=r[4])return false;   
    if(d.getMinutes()!=r[5])return false;   
    if(d.getSeconds()!=r[6])return false;   
    return true;   
}   
  
//+---------------------------------------------------  
//| �����ڷָ������  
//+---------------------------------------------------  
Date.prototype.toArray = function()  
{   
    var myDate = this;  
    var myArray = Array();  
    myArray[0] = myDate.getFullYear();  
    myArray[1] = myDate.getMonth();  
    myArray[2] = myDate.getDate();  
    myArray[3] = myDate.getHours();  
    myArray[4] = myDate.getMinutes();  
    myArray[5] = myDate.getSeconds();  
    return myArray;  
}  
  
//+---------------------------------------------------  
//| ȡ������������Ϣ  
//| ���� interval ��ʾ��������  
//| y �� m�� d�� w���� ww�� hʱ n�� s��  
//+---------------------------------------------------  
Date.prototype.DatePart = function(interval)  
{   
    var myDate = this;  
    var partStr='';  
    var Week = ['��','һ','��','��','��','��','��'];  
    switch (interval)  
    {   
        case 'y' :partStr = myDate.getFullYear();break;  
        case 'm' :partStr = myDate.getMonth()+1;break;  
        case 'd' :partStr = myDate.getDate();break;  
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'n' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}  
  
//+---------------------------------------------------  
//| ȡ�õ�ǰ���������µ��������  
//+---------------------------------------------------  
Date.prototype.MaxDayOfDate = function()  
{   
    var myDate = this;  
    var ary = myDate.toArray();  
    var date1 = (new Date(ary[0],ary[1]+1,1));  
    var date2 = date1.dateAdd(1,'m',1);  
    var result = dateDiff(date1.Format('yyyy-MM-dd'),date2.Format('yyyy-MM-dd'));  
    return result;  
}  
  
//+---------------------------------------------------  
//| �ַ���ת����������   
//| ��ʽ MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
//+---------------------------------------------------  
function StringToDate(DateStr)  
{   
  
    var converted = Date.parse(DateStr);  
    var myDate = new Date(converted);  
    if (isNaN(myDate))  
    {   
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
        var arys= DateStr.split('-');  
        myDate = new Date(arys[0],--arys[1],arys[2]);  
    }  
    return myDate;  
}

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
function DateAdd(interval, number, date) {
    switch (interval.toLowerCase()) {
        case "y": return new Date(date.setFullYear(date.getFullYear() + number));
        case "m": return new Date(date.setMonth(date.getMonth() + number));
        case "d": return new Date(date.setDate(date.getDate() + number));
        case "w": return new Date(date.setDate(date.getDate() + 7 * number));
        case "h": return new Date(date.setHours(date.getHours() + number));
        case "n": return new Date(date.setMinutes(date.getMinutes() + number));
        case "s": return new Date(date.setSeconds(date.getSeconds() + number));
        case "l": return new Date(date.setMilliseconds(date.getMilliseconds() + number));
    }
}