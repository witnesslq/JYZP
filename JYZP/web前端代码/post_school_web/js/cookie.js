/**
 * Created by Stardust on 2016/5/26.
 * 操作cookie的JavaScript文件
 */

/*
 * 设置cookie
 * cname:cookie名
 * cvalue:cookie值
 * exdays:cookie过期时间
 */
function setCookie(cname, cvalue, exdays) {
    var time = new Date();
    time.setTime(time.getTime() + exdays * 24 * 60 * 60 * 1000);
    var c = cname + '=' + cvalue + ';expires=' + time.toUTCString() + ';path=/';
    document.cookie = cname + '=' + cvalue + ';expires=' + time.toUTCString() + ';path=/';
}

/*
 *获得cookie值
 * cname:cookie名
 */
function getCookie(cname) {
    var name = cname + '=';
    var str = document.cookie.split(';');
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
