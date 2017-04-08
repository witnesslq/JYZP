/**
 * Created by Dell on 2016/5/28.
 */

/*显示问卷结果*/
function showResult() {
    var target, newnode, spans;
    for (var i = 0; i < context.length; i++) {
        newnode = i ? res_lis[0].cloneNode(true) : res_lis[0];
        spans = newnode.getElementsByTagName('span');
        spans[0].innerHTML = context[i];
        spans[1].innerHTML = rdoChecked[i];
        if (i) res_box.appendChild(newnode);
    }
    target = 110 + context.length * 67;
    panel.children[0].style.display = 'none';
    panel.children[1].style.display = 'block';
    startMove(panel, {height: target});
}

/*获取问题列表*/
function getContext() {
    if (title.value && content.value) {
        var xhr = createXHR(),
            url = 'http://localhost/ok/RubicSeperateWordsServlet',
            data = 'ResearchForm={\"title\":\"' + title.value + '\",\"content\":\"' + content.value + '\"}';
        xhr.open('post', url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    context = JSON.parse(xhr.responseText).content.split(',');
                    if (context.length) {
                        que_lis[3].children[0].children[0].innerHTML = context[0];
                        que_lis[3].index = 0;
                        bindclick(rdo);
                        que_lis[0].timer = null;
                        que_lis[3].timer = null;
                        startMove(que_lis[0], {left: -596});
                        startMove(que_lis[3], {left: 0});
                    } else {
                        alert('未查到问题！');
                    }
                } else {
                    alert('request fail:' + xhr.status);
                }
            }
        }
    } else {

    }
}
function createXHR() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}

/*radio绑定事件：动态生成下一个问题*/
function bindclick(rdo) {
    var lastNode = rdo[0].parentNode.parentNode.parentNode,
        last_btn = lastNode.getElementsByClassName('last_page')[0];
    /*返回按钮*/
    if (lastNode.index != 0) {
        last_btn.onclick = function () {
            startMove(que_lis[lastNode.index + 2], {left: 0});
            startMove(que_lis[lastNode.index + 3], {left: 596}, function () {
                que_box.removeChild(que_lis[lastNode.index + 3]);
            });
        }
    }
    for (var i = 0; i < 3; i++) {
        rdo[i].name = 'q' + lastNode.index;
        rdo[i].checked = false;
        rdo[i].onclick = function () {
            if (lastNode.index === que_lis.length - 4) {
                if (context[que_lis.length - 3]) {
                    var newnode = que_lis[1].cloneNode(true)
                    newnode.index = que_lis.length - 3;
                    newnode.children[0].children[0].innerHTML = context[newnode.index];
                    que_box.appendChild(newnode);
                    newnode.timer = null;
                    startMove(lastNode, {left: -596});
                    startMove(newnode, {left: 0});
                    rdo = newnode.getElementsByTagName('input');
                    bindclick(rdo);
                } else {
                    startMove(lastNode, {left: -596});
                    startMove(que_lis[2], {left: 0});
                }
            }
        }
    }
}

/*弹性滑入*/
function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    var flag, speed = 0;
    obj.timer = setInterval(function () {
        flag = true;
        for (var attr in json) {
            var curr = 0;
            if (attr == 'opacity') {
                curr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                curr = parseInt(getStyle(obj, attr));
            }
            speed += (json[attr] - curr) / 3;
            speed *= 0.5;
            if (!(Math.abs(speed) <= 1 && Math.abs(json[attr] - curr) <= 1)) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (curr + speed) + ")";
                obj.style.opacity = (curr + speed) / 100;
            } else {
                obj.style[attr] = curr + speed + 'px';
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 50);
}

/*获取元素样式*/
function getStyle(element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr];
    }
}
