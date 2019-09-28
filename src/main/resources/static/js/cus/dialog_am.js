function am_picalert(v_str, pictype) {
    if (pictype == 0) //正确信息
        am_alert('系统提示', v_str, 0, '', '确定', 'images/HD/yes.png', true);
    else if (pictype == 1)//错误信息
        am_alert('系统提示', v_str, 0, '', '确定', 'images/HD/no.png', true);
    else if (pictype == 2)//警告信息
        am_alert('系统提示', v_str, 0, '', '确定', 'images/HD/waring.png', true);
    else if (pictype == 3)//开心信息
        am_alert('系统提示', v_str, 0, '', '确定', 'images/HD/happy.png', true);
    else if (pictype == 4)//伤心信息
        am_alert('系统提示', v_str, 0, '', '确定', 'images/HD/sad.png', true);
}
function am_defaultalert(v_str) {
    am_alert('系统提示', v_str, 0, '', '确定', '', true);
}

function am_alertandback(v_str) {
    am_alert('系统提示', v_str, 1, '', '确定', '', true);
}

function am_alertandclose(v_str) {
    am_alert('系统提示', v_str, 2, '', '确定', '', true);
}

function am_alertandfocus(v_str, v_par) {
    am_alert('系统提示', v_str, 3, v_par, '确定', '', true);
}

function am_alertandreload(v_str) {
    am_alert('系统提示', v_str, 4, '', '确定', '', true);
}

function am_alertandreplace(v_str, v_par) {
    am_alert('系统提示', v_str, 5, v_par, '确定', '', true);
}
function ppam_alertandreload(v_str) {
    am_alert('系统提示', v_str, 6, '', '确定', '', true);
}
function am_alertandselfreload(v_str) {
    am_alert('系统提示', v_str, 7, '', '确定', '', true);
}

function am_alert(v_title, v_str, v_returntype, v_par, v_btn, v_pic, canclose) {
    var returnstr = "";
    var contentPIC = "";
    if (v_pic != "") {
        contentPIC = '<div style="text-align:center;padding:15px 0;">' + v_pic + '</div>';
    }
    if (v_returntype == 1)
        returnstr = "history.back();";
    else if (v_returntype == 2)
        returnstr = "parent.closedialog();";
    else if (v_returntype == 3)//定位焦点
        returnstr = "document.getElementById(\'" + v_par + "\').focus();";
    else if (v_returntype == 4)
        returnstr = "openwewaitting();parent.location.reload();";
    else if (v_returntype == 5)
        returnstr = "openwewaitting();window.location.href=\'" + v_par + "\';";
    else if (v_returntype == 6)
        returnstr = "openwewaitting();parent.parent.location.reload();";
    else if (v_returntype == 7)
        returnstr = "openwewaitting();location.reload();";
    
    var closehtml = '';
    if (canclose) {
        closehtml = '<a href="javascript: void(0)" class="am-close am-close-spin" onclick="$(\'#am_dialog\').modal(\'close\');' + returnstr + '">&times;</a>';
    }
    var btnhtml = '';
    if (v_btn!='') {
        btnhtml = '<div class="am-modal-footer" onclick="$(\'#am_dialog\').modal(\'close\');' + returnstr + '"><span class="am-modal-btn">' + v_btn + '</span></div>';
    }
    var sBG = '\
          <div class="am-modal-dialog">\
            <div class="am-modal-hd">' + v_title + closehtml + '</div>\
            <div class="am-modal-bd">' + contentPIC + v_str + '</div>' + btnhtml + '</div>\
		            ';

    if (document.getElementById("am_dialog") == null) {
        var oDiv = document.createElement('div');
        oDiv.id = "am_dialog";
        oDiv.className = "am-modal am-modal-alert";
        oDiv.tabindex = "-1";
        document.body.appendChild(oDiv);
    }
    else {
        var oDiv = document.getElementById("am_dialog");
    }
    oDiv.innerHTML = sBG;
    $('#am_dialog').modal();
}

function we_picalert(v_str, pictype) {
    if (pictype == 0) //正确信息
        we_alert('系统提示', v_str, 0, '', '确定', 'images/HD/yes.png');
    else if (pictype == 1)//错误信息
        we_alert('系统提示', v_str, 0, '', '确定', 'images/HD/no.png');
    else if (pictype == 2)//警告信息
        we_alert('系统提示', v_str, 0, '', '确定', 'images/HD/waring.png');
    else if (pictype == 3)//开心信息
        we_alert('系统提示', v_str, 0, '', '确定', 'images/HD/happy.png');
    else if (pictype == 4)//伤心信息
        we_alert('系统提示', v_str, 0, '', '确定', 'images/HD/sad.png');
}
function we_defaultalert(v_str) {
    we_alert('系统提示', v_str, 0, '', '确定', '');
}

function we_alertandback(v_str) {
    we_alert('系统提示', v_str, 1, '', '确定', '');
}

function we_alertandclose(v_str) {
    we_alert('系统提示', v_str, 2, '', '确定', '');
}

function we_alertandfocus(v_str, v_par) {
    we_alert('系统提示', v_str, 3, v_par, '确定', '');
}

function we_alertandreload(v_str) {
    we_alert('系统提示', v_str, 4, '', '确定', '');
}

function we_alertandreplace(v_str, v_par) {
    we_alert('系统提示', v_str, 5, v_par, '确定', '');
}
function ppwe_alertandreload(v_str) {
    we_alert('系统提示', v_str, 6, '', '确定', '');
}
function we_alertandselfreload(v_str) {
    we_alert('系统提示', v_str, 7, '', '确定', '');
}

function we_alert(v_title, v_str, v_returntype, v_par, v_btn, v_pic) {
    var returnstr = "$('#we_dialog').hide();";
    var contentPIC = "";
    if (v_pic != "") {
        contentPIC = '<div style="text-align:center;padding:15px 0;">' + v_pic + '</div>';
    }
    if (v_returntype == 1)
        returnstr += "history.back();";
    else if (v_returntype == 2)
        returnstr += "parent.closedialog();";
    else if (v_returntype == 3)//定位焦点
        returnstr += "document.getElementById(\'" + v_par + "\').focus();";
    else if (v_returntype == 4)
        returnstr += "openwewaitting();parent.location.reload();";
    else if (v_returntype == 5)
        returnstr += "openwewaitting();window.location.href=\'" + v_par + "\';";
    else if (v_returntype == 6)
        returnstr += "openwewaitting();parent.parent.location.reload();";
    else if (v_returntype == 7)
        returnstr += "openwewaitting();location.reload();";

    var sBG = '\
            <div class="weui_mask"></div>\
            <div class="weui_dialog">\
                <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + v_title + '</strong></div>\
                <div class="weui_dialog_bd">' + contentPIC + v_str + '</div>\
                <div class="weui_dialog_ft">\
                    <a href="javascript:;' + returnstr + '" class="weui_btn_dialog primary">' + v_btn + '</a>\
                </div>\
            </div>\
		            ';

    var oDiv = document.getElementById("we_dialog");
    if (oDiv == null) {
        oDiv = document.createElement('div');
        oDiv.id = "we_dialog";
        oDiv.className = "weui_dialog_alert";
        document.body.appendChild(oDiv);
    }
    oDiv.innerHTML = sBG;
    $('#we_dialog').show();
}

function opendialog(v_title, v_html, v_btn) {
    var returnstr = "$('#we_dialog').hide();";
    var sBG = '\
            <div class="weui_mask"></div>\
            <div class="weui_dialog">\
                <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + v_title + '</strong></div>\
                <div class="weui_dialog_bd">' + v_html + '</div>\
                <div class="weui_dialog_ft">\
                    <a href="javascript:;' + returnstr + '" class="weui_btn_dialog primary">' + v_btn + '</a>\
                </div>\
            </div>\
		            ';

    var oDiv = document.getElementById("we_dialog");
    if (oDiv == null) {
        oDiv = document.createElement('div');
        oDiv.id = "we_dialog";
        oDiv.className = "weui_dialog_alert";
        document.body.appendChild(oDiv);
    }
    oDiv.innerHTML = sBG;
    $('#we_dialog').show();
}

function openwewaitting() {
    sBG = '\
                <div class="weui_mask_transparent"></div>\
                <div class="weui_toast">\
                    <div class="weui_loading">\
                        <div class="weui_loading_leaf weui_loading_leaf_0"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_1"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_2"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_3"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_4"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_5"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_6"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_7"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_8"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_9"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_10"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_11"></div>\
                    </div>\
                    <p class="weui_toast_content">数据加载中</p>\
                </div>\
            ';

    var oDiv = document.getElementById("loadingToast");
    if (oDiv == null) {
        oDiv = document.createElement('div');
        oDiv.id = "loadingToast";
        oDiv.className = "weui_loading_toast";
        document.body.appendChild(oDiv);
    }
    oDiv.innerHTML = sBG;
    var $loadingToast = $('#loadingToast');
    if ($loadingToast.css('display') != 'none') {
        return;
    }
    $loadingToast.show();
}

function closewedialog() {
    var $loadingToast = $('#loadingToast');
    $loadingToast.hide();
}
function closemydialog() {
    $("#dialogbox").addClass('animated bounceOutRight');
    $('#dialogbox').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        if (document.getElementById("dialogbox").style.display == "") {
            document.getElementById("dialogbox").style.display = "none";
            if (document.getElementById("dialogbg"))
                document.getElementById("dialogbg").style.display = "none";
        }
    });
}


function closecolor() {
    $("#dialogbox").addClass('animated bounceOutRight');
    $('#dialogbox').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        if (document.getElementById("dialogbox").style.display == "") {
            var arr = document.getElementsByTagName("select");
            for (var i = 0; i < arr.length; i++) {
                var e = arr[i];
                e.style.display = "";
            }
            document.getElementById("dialogbg").style.display = "none";
            document.getElementById("dialogbox").style.display = "none";
            document.onscroll = "";
        }
    });
}

var layerindex = -1;
function closedialog_layer() {
    layer.close(layerindex);
}
function opendefaultdialog(v_title, v_url) {
    layer.open({
        type: 2,
        title: v_title,
        shadeClose: true,
        shade: [0.2, '#000'],
        maxmin: true, //开启最大化最小化按钮
        area: ['90%', '90%'],
        content: v_url,
        close: function (index) {
            layer.close(index);
        }
    });
}

function opendialog(v_width, v_height, v_title, v_url) {
    layer.open({
        type: 2,
        title: v_title,
        shadeClose: true,
        shade: [0.2, '#000'],
        maxmin: true, //开启最大化最小化按钮
        area: [v_width, v_height],
        content: v_url,
        close: function (index) {
            layer.close(index);
        }
    });
}

function openwaitting() {
    layerindex = layer.load(1, { shade: [0.1, '#000'] });
}

function opendefault(v_str, icon) {
    openalert('系统提示', v_str, icon, 0, '');
}

function openandback(v_str, icon) {
    openalert('系统提示', v_str, icon, 1, '');
}

function openandclose(v_str, icon) {
    openalert('系统提示', v_str, icon, 2, '');
}

function openandfocus(v_str, v_par, icon) {
    openalert('系统提示', v_str, icon, 3, v_par);
}

function openandreload(v_str, icon) {
    openalert('系统提示', v_str, icon, 4, '');
}

function openandreplace(v_str, v_par, icon) {
    openalert('系统提示', v_str, icon, 5, v_par);
}
function ppopenandreload(v_str, icon) {
    openalert('系统提示', v_str, icon, 6, '');
}

function selfopenandreload(v_str, icon) {
    openalert('系统提示', v_str, icon, 7, '');
}

function ppopenandreplace(v_str, v_par, icon) {
    openalert('系统提示', v_str, icon, 8, v_par);
}

function opendefaultalert(v_str) {
    openalert('系统提示', v_str, -1, 0, '');
}

function openalertandback(v_str) {
    openalert('系统提示', v_str, -1, 1, '');
}

function openalertandclose(v_str) {
    openalert('系统提示', v_str, -1, 2, '');
}

function openalertandfocus(v_str, v_par) {
    openalert('系统提示', v_str, -1, 3, v_par);
}

function openalertandreload(v_str) {
    openalert('系统提示', v_str, -1, 4, '');
}

function openalertandreplace(v_str, v_par) {
    openalert('系统提示', v_str, -1, 5, v_par);
}
function ppopenalertandreload(v_str) {
    openalert('系统提示', v_str, -1, 6, '');
}

function selfopenalertandreload(v_str) {
    openalert('系统提示', v_str, -1, 7, '');
}

function ppopenalertandreplace(v_str, v_par) {
    openalert('系统提示', v_str, -1, 8, v_par);
}
function openalert(v_title, v_str, vicon, v_returntype, v_par) {
    var returnstr = "";
    if (v_returntype == 1)
        returnstr = "history.back();";
    else if (v_returntype == 2)
        returnstr = "closelayer();";
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
    else if (v_returntype == 8)
        returnstr = "parent.location.href=\'" + v_par + "\';";

    var tempindex = layer.alert(v_str, {
        title: v_title
  		, icon: vicon
    }, function () {
        eval(returnstr);
        layer.close(tempindex);
    });
}

function dialogshow(sBG, sBox, vtop) {
    var v_width = (document.body.clientWidth > 640 ? 640 : document.body.clientWidth) - 50;
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

    var left = (document.getElementById("dialogbg").offsetWidth - divwidth) / 2;
    document.getElementById("dialogbox").style.top = vtop;
    document.getElementById("dialogbox").style.left = left + "px";
    document.getElementById("dialogbox").style.width = divwidth + "px";
    $("#dialogbox").addClass('animated bounceInLeft');
}