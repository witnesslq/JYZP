/**
 * Created by Stardust on 2016/5/14.
 */


/*
 * pages: 请求获得的总页面数;
 * requestPage: 当前请求数据的页面;
 * liTagNumber: li标签的数目;
 * isLogin: 是否登录;
 *
 * loginPagesUrl: 获得登录之后推荐数据的总页数;
 * loginDataUrl: 获取登录后推荐数据的地址;
 * loginUrl: 登录网址;
 * registerUrl: 注册网址;
 * pagesUrl: 未登录获得的推荐数据的总页数;
 * dataUrl: 未登录获得的推荐数据;
 *
 */

var NOLOGIN = 1;
var READY_LOGIN = 2;
var DATA = 3;
var HIDE = 4;
var DISPLAY = 5;
var PAGES = 6;

var pagesUrl = '/ok/ShowPostsPagesServlet';
var dataUrl = '/ok/ShowPostsServlet';
var loginDataUrl = '/ok/ShowRubicPostsServlet';
var loginPagesUrl = '/ok/ShowPostsByLabelNamePagesServlet';

var pages = 0;
var requestPage = 1;
var xhr = createXHR();
var liTagNumber = 0;
var isFirst = true;
var userId = -1;
var isLogin = NOLOGIN;

var nav_login = document.getElementById('login');
var nav_register = document.getElementById('register');
var loginWindow = document.getElementById('login_window');
var registerWindow = document.getElementById('register_window');
var tourist = document.getElementById('tourist');
var toRegister = document.getElementById('to_register');
var loginButton = document.getElementById('login_button');
var ulTag = document.getElementsByClassName("mes_list")[0];
var listLoading = document.getElementById('loading_img_bg');

/*
 *滚动到底部后加载页面
 */
ulTag.onscroll = function () {
    if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        setLoadingImg(DISPLAY);
        request(dataUrl, isLogin, DATA);
    }
};

/*
 *事件处理
 */
tourist.onclick = function () {
    ulTag.style.display = 'block';
    loginWindow.style.display = 'none';
    listLoading.style.display = 'block';
    request(pagesUrl, NOLOGIN, PAGES);
};

nav_login.onclick = function () {
    listLoading.style.display = 'none';
    ulTag.style.display = 'none';
    loginWindow.style.display = 'block';
};

loginButton.onmouseout = function () {
    loginButton.style.background = '#58d1f5';
};

loginButton.onmouseover = function () {
    loginButton.style.background = '#8bdef7';
};



loginButton.onclick = loginRequest;
toRegister.onclick = registerFun;
nav_register.onclick = registerFun;
window.onload = start;

/*
 *显示注册框
 */
function registerFun() {
    registerWindow.style.display = 'block';
    loginWindow.style.display = 'none';
}

/*
 *载入窗口时启动
 */
function start() {
    if (getCookie('userId') != '') {
        ulTag.style.display = 'block';
        loginWindow.style.display = 'none';
        listLoading.style.display = 'block';
        userId = getCookie('userId');
        request(loginPagesUrl, READY_LOGIN, PAGES);
    } else {
        ulTag.style.display = 'none';
        listLoading.style.display = 'none';
        loginWindow.style.display = 'block';
    }
}

/*
 *clone li节点
 */
function cloneTag(data) {
    setLoadingImg(HIDE);
    var liTag = ulTag.children[0];
    var length;
    if (isFirst) {
        length = data.length - 1;
        isFirst = false;
    } else {
        length = data.length;
    }
    for (var i = 0; i < length; i++) {
        var li = liTag.cloneNode(true);
        ulTag.appendChild(li);
    }
    //console.log(ulTag.childNodes.length);
    setHtmlText(data);
}

/*
 * 发送的请求数据
 * isLogin:是否登录;
 * condition:判断请求页数还是数据;
 */
function getData(isLogin, condition) {
    var data;
    if (isLogin === NOLOGIN) {
        if (condition === DATA) {
            data = "Page={\"count\":" + requestPage++ + "}";
        } else if (condition === PAGES) {
            data = null;
        }
    } else if (isLogin === READY_LOGIN) {
        if (condition === DATA) {
            data = "User={\"userId\":" + userId + ",\"page\":" + requestPage++ + "}";
        } else if (condition === PAGES) {
            data = "User={\"userId\":" + userId + "}";
        }
    }
    return data;
}

/*
 *从服务器获取数据
 * requestuRL:请求地址;
 * isLogin:是否登录;
 * condition:判断请求页数,数据,登录，注册，调查问卷;
 */
function request(requestUrl, isLogin, condition) {
    xhr.open('post', requestUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var sendData = getData(isLogin, condition)
    xhr.send(sendData);
    console.log(sendData);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (isLogin === NOLOGIN) {
                    if (condition === PAGES) {
                        pages = JSON.parse(xhr.responseText).pages;
                        request(dataUrl, isLogin, DATA);
                    } else if (condition === DATA) {
                        if (requestPage <= pages) {
                            listLoading.style.display = 'none';
                            cloneTag(JSON.parse(xhr.responseText));
                        }
                    }
                } else if (isLogin === READY_LOGIN) {
                    if (condition === PAGES) {
                        pages = JSON.parse(xhr.responseText).pages;
                        request(loginDataUrl, isLogin, DATA);
                    } else if (condition === DATA) {
                        if (requestPage <= pages) {
                            listLoading.style.display = 'none';
                            cloneTag(JSON.parse(xhr.responseText));
                        }
                    }
                }
            } else {
                //alert('request fail: ' + xhr.status);
            }
        }
    };
}


/*
 *设置加载图片显示和隐藏
 */
function setLoadingImg(display) {
    var load = document.getElementById('loading_img');
    if (display === HIDE) {
        load.style.display = 'none';
    } else if (display === DISPLAY) {
        load.style.display = 'block';
    }
}

/*
 *创建XMLTHttpRequest对象
 * 兼容ie
 */
function createXHR() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ('Microsoft.XMLHTTP');
    }
    return xhr;
}

/*
 *向首页插入数据
 * data:插入的数据;
 */

function setHtmlText(data) {
    for (var i = 0; liTagNumber < ulTag.children.length; liTagNumber++, i++) {
        var job = ulTag.children[liTagNumber].children[0].children[0];
        var company = ulTag.children[liTagNumber].children[0].children[1];
        var ad = ulTag.children[liTagNumber].children[0].children[2];
        if (!!data[i].positionName == false) {
            data[i].positionName = '';
        }
        job.children[0].innerHTML = data[i].positionName + '[' + data[i].city + ']';
        job.children[1].innerHTML = data[i].salary;
        job.children[2].innerHTML = data[i].workYear + '/' + data[i].education;
        company.children[0].innerHTML = data[i].companyName;
        company.children[1].innerHTML = data[i].industryField + '/' + data[i].financeStage;
        ad.innerHTML = data[i].positionAdvantage;
    }
}

/*
 *获取滚动条高度
 */
function getScrollTop() {
    var scrollTop = ulTag.scrollTop;
    return scrollTop;
}

/*
 *获取可见窗口高度
 */
function getWindowHeight() {
    var windowHeight = ulTag.offsetHeight;
    return windowHeight;
}
/*
 *获取整个元素页面的高度
 */
function getScrollHeight() {
    var scrollHeight = ulTag.scrollHeight;
    return scrollHeight;
}



