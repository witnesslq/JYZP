/**
 * Created by asus on 2016/5/20.
 */
/*点击添加按钮触发右边竖线动画*/
var desc, desc_sub_btn, que_box, que_lis, rdo, context, war, title, content, back_btn, svy_sub_btn;
var panel, panel_box, res_box, res_lis, rdoChecked, res_confirm_btn, svy_btn, svy_close_btn;

/*修改个人信息的部分*/
var changeMessage = null;
/*保存信息需要传递的URL*/
var saveURL = "http://localhost/ok/AddOrModifyProfileServlet";
/*显示个人信息需要传递的URL*/
var showURL = "http://localhost/ok/ShowProfileByUserId";

/*需要传递的一些参数*/
var userId = null;
var sex = null;
var phoneNumber = null;
var emai = null;
var school = null;
var graduateDate = null;
var major = null;
var degree = null;

window.onload = function () {
    Request(showURL);
    /*鼠标置于个人信息显示编辑状态*/
    var message = document.getElementById("personal_intro");
    var editname = document.getElementById("personal_edit");
    message.onmouseover = function () {
        editname.style.visibility = "visible";
        message.style.backgroundColor = "#FDFDFE";

        /*点击编辑按钮进入信息修改阶段*/
        editname.onclick = function () {
            changeMessage = document.getElementById("personal_change");
            changeMessage.style.display = "block";
            var keep = document.getElementById("keep");
            var cancel = document.getElementById("cancel");


            /*点击保存,将信息保存到后台，并显示在个人信息上面*/
            keep.onclick = function () {
                Request(saveURL);
            }


            /*点击取消，回到初始状态*/
            cancel.onclick = function () {
                changeMessage.style.display = "none";
            }
        }
    }
    /*鼠标移出个人信息处后恢复为页面加载完成状态*/
    message.onmouseout = function () {
        editname.style.visibility = "hidden";
        message.style.backgroundColor = "#F9F8F9";
    }

    /*点击添加按钮触发右边竖线动画*/
    var add = document.getElementsByClassName("personal_content");
    for (var i = 0; i < add.length; i++) {
        add[i].index = i;
        var photo_back = new Array(4);
        photo_back[0] = "../images/process_class_2.gif";
        photo_back[1] = "../images/process_class_3.gif";
        photo_back[2] = "../images/process_class_4.gif";
        photo_back[3] = "../images/process_class_5.gif";
        var photo_change = new Array(4);
        photo_change[0] = "../images/process_class_2_change.png";
        photo_change[1] = "../images/process_class_3_change.png";
        photo_change[2] = "../images/process_class_4_change.png";
        photo_change[3] = "../images/process_class_5_change.png";
        add[i].onmouseover = function () {
            var c = this.index;
            var div1 = document.getElementById("resume_comlete_detail");
            var changge = div1.getElementsByTagName("img");
            changge[c + 1].setAttribute("src", photo_change[c]);
        }
        add[i].onmouseout = function () {
            var d = this.index;
            var div2 = document.getElementById("resume_comlete_detail");
            var changge = div2.getElementsByTagName("img");
            changge[d + 1].setAttribute("src", photo_back[d]);
        }
        add[i].onclick = function () {
            var div = document.getElementById("resume_comlete_detail");
            var but1 = div.getElementsByClassName("process_line1 active_part")[0];
            var but2 = div.getElementsByClassName("process_line1");
            var item1 = 150;
            var item2 = 0;
            var time1 = null;
            var time2 = null;
            var b = this.index;
            if (but1 != but2[b]) /*判断是否点击同一个按钮*/{
                if (but1) {/*将已经点击生成的竖线去掉*/
                    time1 = setInterval(function () {
                        item1 = item1 - 10;
                        but1.style.height = item1 + 'px';
                        if (item1 == 0) {
                            clearInterval(time1);
                        }
                        but1.className = "process_line1";
                    }, 10);
                }
                /*将点击按钮对应的竖线生成*/
                time2 = setInterval(function () {
                    item2 = item2 + 10;
                    but2[b].style.height = item2 + 'px';
                    if (item2 == 150) {
                        clearInterval(time2);
                    }
                    but2[b].className = "process_line1 active_part";
                }, 10);
            }
        }
    }

    /*右边的窗口随滑动按钮滚动而一直固定在可见窗口的上面*/
    document.onscroll = function () {
        var fix = document.getElementById("personal_class");
        var con = document.getElementById("content");
        var scrollTop = document.body.scrollTop;

        if (parseInt(scrollTop) > 129) {
            fix.style.position = "fixed";
            fix.style.top = 0;
            fix.style.left = con.offsetLeft + 712 + 'px';
        }
        else {
            fix.style.position = 'absolute';
            fix.style.left = 712 + 'px';
        }
    }

    /*问卷调查*/
    panel = document.getElementsByClassName('panel')[0];
    panel_box = panel.parentNode;
    desc = document.getElementsByClassName('desc')[0];
    desc_sub_btn = desc.getElementsByTagName('input')[2];
    que_box = document.getElementsByClassName('que_box')[0];
    que_lis = que_box.getElementsByTagName('li');
    res_box = document.getElementsByClassName('res_box')[0];
    res_lis = res_box.getElementsByTagName('li');
    rdo = que_lis[3].getElementsByTagName('input');
    war = desc.getElementsByClassName('warning');
    title = desc.getElementsByTagName('input')[0];
    content = desc.getElementsByTagName('input')[1];
    svy_sub_btn = que_lis[2].getElementsByTagName('input')[0];
    back_btn = que_lis[2].getElementsByTagName('input')[1];
    res_confirm_btn = res_box.parentNode.getElementsByTagName('input')[0];
    svy_btn = document.getElementsByClassName('svy_btn')[0];
    svy_close_btn = document.getElementsByClassName('close')[0];
    rdoChecked = [];

    svy_btn.onclick = function () {
        panel_box.style.display = 'block';
    }

    desc_sub_btn.onclick = function () {
        getContext();
    }
    title.index = 0;
    content.index = 1;

    /*提交问卷按钮*/
    svy_sub_btn.onclick = function () {
        var con = '',
            data,
            xhr = createXHR(),
            url = 'http://localhost/ok/AddResearchFormServlet';
        for (var i = 0, l = context.length; i < l; i++) {
            rdo = que_lis[i + 3].getElementsByTagName('input');
            for (var j = 0; j < 3; j++) {
                if (rdo[j].checked)break;
            }
            if (i) {
                con += ',';
            }
            rdoChecked[i] = rdo[j].value;
            con += (context[i] + ':' + rdo[j].value);
        }
        data = 'ResearchForm={\"title\":\"' + title.value + '\",\"userId\":4,\"content\":\"' + con + '\"}';
        xhr.open('post', url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    showResult();
                } else {
                    alert('request fail:' + xhr.status);
                }
            }
        }
    }

    /*返回修改按钮*/
    back_btn.onclick = function () {
        startMove(que_lis[que_lis.length - 1], {left: 0});
        startMove(que_lis[2], {left: 596});
    }

    /*问卷结果确定按钮*/
    svy_close_btn.onclick = res_confirm_btn.onclick = function () {
        que_box = document.getElementsByClassName('que_box')[0];
        que_lis = que_box.getElementsByTagName('li');
        panel_box.style.display = 'none';
        panel.children[0].style.display = 'block';
        panel.children[1].style.display = 'none';
        for (var i = 4, l = que_lis.length; i < l; i++) {
            if(que_lis[4])que_box.removeChild(que_lis[4]);
            if(res_lis[1])res_box.removeChild(res_lis[1]);
        }
        panel.style.height = 340 + 'px';
        desc.style.left = 0;
        que_lis[2].style.left = 596 + 'px';
        que_lis[3].style.left = 596 + 'px';
        rdo = que_lis[3].getElementsByTagName('input');
        for(var i=0;i<3;i++){
            rdo[i].checked = false;
        }
    }


}
/*创建XMLHttpRequest对象*/
function Request(postURL) {
    var xhr = createXHR();
    xhr.open("post", postURL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    if (postURL == showURL) {
        var person_data = "User={\"userId\":\"4\"}";
    }
    if (postURL == saveURL) {
        var person_data = personal_data();
    }
    xhr.send(person_data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var backData = JSON.parse(xhr.responseText);
                if (postURL == showURL) {
                    show(backData);
                }
                if (postURL == saveURL) {
                    Request(showURL);
                    changeMessage.style.display = "none";
                }
            }
        }
    }
}

/*将填入的信息保存成JSON格式*/
function personal_data() {
    var perChange = document.getElementById("form_message");
    var perInput = perChange.getElementsByTagName("input");
    var perSelect = perChange.getElementsByTagName("select");
    var perName = perInput[0].value;
    var perSex = perSelect[0].options[perSelect[0].selectedIndex].value;
    /*性别*/
    sex = "\"" + encodeURI(perSex) + "\"";
    var perTel = perInput[1].value;
    /*电话*/
    phoneNumber = "\"" + encodeURI(perTel) + "\"";
    var perEmail = perInput[2].value;
    var perschool = perInput[3].value;
    /*学校名称*/
    school = "\"" + encodeURI(perschool) + "\"";
    var perdate = perInput[4].value;
    /*毕业年份*/
    graduateDate = "\"" + encodeURI(perdate) + "\"";
    var permajor = perInput[5].value;
    /*所学专业*/
    major = "\"" + encodeURI(permajor) + "\"";
    var perDegree = perSelect[1].options[perSelect[1].selectedIndex].value;
    /*学历*/
    degree = "\"" + encodeURI(perDegree) + "\"";
    /*用户ID*/
    userId = 4;
    /*转换 为json格式 */
    var postData = "Profile={\"userId\":" + userId + ",\"sex\":" + sex + ",\"phoneNumber\":" + phoneNumber + ",\"school\":" + school + ",\"major\":" + major + ",\"graduateDate\":" + graduateDate + ",\"degree\":" + degree + "}";
    return postData;
}

/*将从后台获取的个人信息显示到个人中心处*/
function show(data) {
    document.getElementById("personal_name").innerHTML = data.userId;
    document.getElementById("personal_character").innerHTML = data.school;
    document.getElementById("personal_four").children[0].innerHTML = data.sex;
    document.getElementById("personal_four").children[1].innerHTML = data.graduateDate;
    document.getElementById("personal_four").children[2].innerHTML = data.major;
    document.getElementById("personal_four").children[3].innerHTML = data.degree;
    document.getElementById("personal_phone").innerHTML = data.phoneNumber;
    document.getElementById("personal_email").innerHTML = data;
}
