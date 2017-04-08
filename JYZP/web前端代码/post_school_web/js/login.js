/**
 * Created by Stardust on 2016/5/23.
 */

var username = document.getElementById('username');
var password = document.getElementById('password');
var wrongNotice = document.getElementById('wrong_notice');
var loginUrl = '/ok/LoginServlet';
var xhr = createXhr();

/*
 *设置错误提示
 */
function setNotice() {
    if (!login_checkLength()) {
        wrongNotice.style.visibility = 'hidden';
    } else {
        wrongNotice.children[0].innerHTML = '*账号和密码不能空';
        wrongNotice.style.visibility = 'visible';
    }
}

/*
 *拼接数据
 */
function setPostData() {
    return "User={ \"userName\":\"" + username.value + "\"," + "\"password\":\"" + password.value + "\"}"
}

/*
 *检查用户名和密码长度
 */
function login_checkLength() {
    return username.value.length == 0 || password.value.length == 0;
}

/*
 *发送登录请求
 */
function loginRequest() {
    if (!login_checkLength()) {
        xhr.open('post', loginUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(setPostData());
        console.log('login' + setPostData());
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    //alert('request success');
                    var res = JSON.parse(xhr.responseText);
                    if (false) {
                        wrongNotice.children[0].innerHTML = '*账号或密码错误';
                        wrongNotice.style.visibility = 'visible';
                    } else {
                        alert(xhr.responseText);
                        //setCookie('userId', res.userId, 60);
                        //alert('cookie:'+ getCookie('userId') + getCookie('path') + getCookie('expires'));
                        window.location.href = 'index.html';
                    }
                } else {
                    alert('request fail: ' + xhr.status);
                }
            }
        }
    } else {
        setNotice();
    }
}

/*
 *创建xhr
 */
function createXhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return ActiveXObject('Microsoft.XMLHTTP');
    }
}




