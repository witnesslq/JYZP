/**
 * Created by Stardust on 2016/5/23.
 */

var REGISTER = 0;
var CHECK_USERNAME = 1;

var registerUrl = '/ok/RegisterServlet';
var checkUsernameUrl = '/ok/CheckUsernameServlet';
var registerUsername = document.getElementById('register_username');
var registerPassword = document.getElementById('register_password');
var passwordAgain = document.getElementById('password_again');
var registerButton = document.getElementById('register_button');
var xhr = createXhr();

registerButton.onmouseout = function () {
    registerButton.style.background = '#58d1f5';
};

registerButton.onmouseover = function () {
    registerButton.style.background = '#8bdef7';
};

registerButton.onclick = registerRequest;

function registerRequest() {
    if (registerCheckLength()) {
        registerPassword.value = '';
        registerPassword.className = 'login_layout error';
        registerPassword.placeholder = '*密码不能少于6位';
    } else {
        registerPassword.placeholder = '请输入密码';
        if (!registerCheckPassword()) {
            passwordAgain.value = '';
            passwordAgain.className = 'login_layout error';
            passwordAgain.placeholder = '*两次密码不一致';
        } else {
            register(registerUrl, REGISTER);
        }
    }
}

/*
 *拼接数据
 */
function setRegisterPostData(condition) {
    var data;
    if (condition === REGISTER) {
        data = "User={ \"userName\":\"" + registerUsername.value + "\"," + "\"password\":\"" + registerPassword.value + "\"}";
    } else if (condition === CHECK_USERNAME) {
        data = "User={\"userName\":\"" + registerUsername.value + "\"}";
    }
    return data;
}

/*
 *检查用户名和密码长度
 */
function registerCheckLength() {
    return registerPassword.value.length < 6;
}

/*
 *检查密码是否一致
 */
function registerCheckPassword() {
    return registerPassword.value === passwordAgain.value;
}

/*
 *检查该账号是否被注册
 */
function registerCheckUsername() {
    register(checkUsernameUrl, CHECK_USERNAME);
}

/*
 *发送登录请求
 * postUrl:请求的地址
 * condition:请求的条件，注册或者验证账号是否被注册
 */
function register(postUrl, condition) {
    xhr.open('post', postUrl, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send(setRegisterPostData(condition));
    //console.log('register' + setPostData());
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var res = JSON.parse(xhr.responseText);
                if (condition === REGISTER) {
                    if (res.msg = '注册成功'){
                        alert('注册成功！请登录~');
                        window.location.href = 'index.html';
                    }else {
                        alert(res.msg);
                    }

                } else if (condition === CHECK_USERNAME) {

                }
            } else {
                alert('request fail: ' + xhr.status);
            }
        }
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

