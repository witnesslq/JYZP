/**
 * Created by Dell on 2016/5/17.
 */
var page_num = 15,page_now = 1;
var industryField=null, city=null, salary=null, workYear=null, positionFirstType=null;
var opt_box, dus, page_box, page,ul,lis;

window.onload = function () {
    opt_box = getElementsByClass('option_box')[0],
    dus = opt_box.getElementsByTagName('li'),
    page_box = getElementsByClass('page')[0],
    page = page_box.getElementsByTagName('a'),
    ul = getElementsByClass('work_list')[0],
    lis = ul.getElementsByTagName('li');
    /*取得页数*/
    getPage();
    /*绑定选项点击事件*/
    for(var i = 0, l1 = dus.length ; i < l1; i++){
        var as = dus[i].getElementsByTagName('a');
        for(var j = 0,l2 = as.length; j<l2; j++){
            if(as[j].className != 'more'){
                as[j].index = i;
         bind(as[j], 'click', function (event) {
                    event =event || window.event;         
                    var lasta = getElementsByClass('active_opt',dus[this.index])[0];         lasta.className = '';          this.className = 'active_opt';
             for(var k = 0; k < 11 ; k++){
               lis[k].style.display = 'none';
                    page_box.style.display = 'none';
                    getPage();
                    page_now = 1;
                }
            });
            }
        }
    }
    /*绑定页码切换事件*/
    bind(page[0], 'click', function (event) {
        event = event || window.event;
        if(page_now != 1){
            page_now--;
            for(var i = 0; i < 11 ;i++){
                lis[i].style.display = 'none';
            }
            page_box.style.display = 'none';
            getContext();
        }
    })
    bind(page[10], 'click', function (event) {
        event = event || window.event;
        if(page_now != page_num)
        page_now++;
        for(var i = 0; i < 11 ;i++){
            lis[i].style.display = 'none';
        }
        page_box.style.display = 'none';
        getContext();
    })
    for(var i = 1, l = page.length; i < l-1; i++){
        bind(page[i], 'click', function (event) {
            event = event || window.event;
            if(this.innerHTML != '...'){
                page_now = parseInt(this.innerHTML);
                for(var i = 0; i < 11 ;i++){
                    lis[i].style.display = 'none';
                }
                page_box.style.display = 'none';
                getContext();
            }
        });
    }
}

/*ajax获取页数*/
function getPage() {
    lis[11].style.display = 'block';
    getOption();
    var xhr = createXHR(),
        url = 'http://localhost/ok/ShowPostsByCombineConditionPagesServlet',
        data = "Post={\"positionFirstType\":"+positionFirstType+",\"city\":"+city+",\"workYear\":"+workYear+",\"salary\":"+salary+"}";
    xhr.open('post', url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                page_num = JSON.parse(xhr.responseText).pages;
               // alert('getPage'+ page_num);
                if(page_num > 9999)page_num = 9999;
                if(page_num == 0){
                    lis[10].style.display = "block";
                    page_num = 1;
                }else{
                    getContext();
                }
                display_page();
            }else{
                alert('request fail: ' + xhr.status);
            }
            lis[11].style.display = 'none';
        }
    }
}

/*根据页数获得信息列表*/
function getContext() {
    lis[11].style.display = 'block';
    var xhr = createXHR(),
        url = 'http://localhost/ok/ShowPostsByCombineConditionServlet',
        data = "Post={\"positionFirstType\":"+positionFirstType+",\"salary\":"+salary+",\"workYear\":"+workYear+",\"city\":"+city+",\"page\":"+page_now+"}";
    xhr.open('post', url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                //alert(xhr.responseText);
                showContext(JSON.parse(xhr.responseText));
            }else{
                alert('request fail: ' + xhr.status);
            }
            lis[11].style.display = 'none';
        }
    }
}

/*将获取的内容显示在列表*/
function showContext(data) {
    ul = getElementsByClass('work_list')[0];
    lis = ul.getElementsByTagName('li');
    for(var i = 0, l = data.length;i<l&&i<10;i++){
        lis[i].children[0].children[0].innerHTML = data[i].positionName + ' [' + data[i].city +']';
        lis[i].children[0].children[1].innerHTML = data[i].createTime;
        lis[i].children[0].children[2].children[0].innerHTML = data[i].salary;
        lis[i].children[0].children[2].children[1].innerHTML = data[i].workYear + '/' + data[i].education;
        lis[i].children[0].children[3].innerHTML = data[i].positionAdvantage;
        lis[i].children[1].children[0].innerHTML = data[i].companyName;
        lis[i].children[1].children[1].innerHTML = data[i].industryField + '/' + data[i].financeStage;
        lis[i].children[1].children[3].src = data[i].companyLogo;
        lis[i].style.display = 'block';
    }
    display_page();
}

/*获取选项信息*/
function getOption() {
    positionFirstType = "\"" + encodeURI(getElementsByClass('active_opt',dus[0])[0].innerHTML) + "\"";
    city = "\"" + encodeURI(getElementsByClass('active_opt',dus[1])[0].innerHTML) + "\"";
    salary = "\"" + encodeURI(getElementsByClass('active_opt',dus[2])[0].innerHTML) + "\"";
    workYear = "\"" + encodeURI(getElementsByClass('active_opt',dus[3])[0].innerHTML) + "\"";
    if(positionFirstType === "\"" + encodeURI("不限") + "\"")positionFirstType = null;
    if(city === "\"" + encodeURI("全国") + "\"")city = null;
    if(salary === "\"" + encodeURI("不限") + "\"")salary = null;
    if(workYear === "\"" + encodeURI("不限") + "\"")workYear = null;
}

/*页码确定*/
function display_page(){
    var page_box = getElementsByClass('page')[0],
        page = page_box.getElementsByTagName('a');
    page[1].innerHTML = 1;
    page[9].innerHTML = page_num;
    page[8].innerHTML = '...';
    page[2].innerHTML = '...';
    page_box.style.display = 'block';
    for(var i = 1;i < 10 ;i++){
        page[i].parentNode.style.display = 'block';
    }
    getElementsByClass('page_now')[0].className= '';
    if(page_num <= 9){
        var i = 1;
        for(; i < page_num; i++){
            page[i+1].innerHTML = i+1;
        }
        page_box.style.width = (i+2) * 40 + 'px';
        for(; i < 9; i++){
            page[i+1].parentNode.style.display = 'none';
        }
        page[page_now].className = 'page_now';
    }
    else{
        if(page_now < 5){
            var i = 1;
            for(var l = page_now+2; i < l; i++){
                page[i+1].innerHTML = i+1;
            }
            page_box.style.width = (i+4) * 40 + 'px';
            for(; i < 7; i++){
                page[i+1].parentNode.style.display = 'none';
            }
            page[page_now].className = 'page_now';
        }
        else if(page_now < page_num-3){
            for(var i = 2; i < 7; i++){
                page[i+1].innerHTML = page_now+i-4;
            }
            page[5].className = 'page_now';
            page_box.style.width = 440 + 'px';
        }
        else{
            for(var i = 2; page_now+i-4 < page_num; i++){
                page[i+1].innerHTML = page_now+i-4;
            }
            page_box.style.width = (i+3) * 40 + 'px';
            for(; i < 8; i++){
                page[i+1].parentNode.style.display = 'none';
            }
            if(page_now===page_num) page[9].className = 'page_now';
            else page[5].className = 'page_now';
        }
    }
}

function getElementsByClass(clsName,parent){
    var oParent=parent?parent:document,
        result=[],
        elements=oParent.getElementsByTagName('*');

    for(var i=0,l=elements.length;i<l;i++){
        if(elements[i].className==clsName){
            result.push(elements[i]);
        }
    }
    return result;
}

function bind(element, type, handler) {
    if(element.addEventListener){
        element.addEventListener(type, handler, false);
    }else if(element.attachEvent){
        attachEvent('on' + type, handler);
    }
    else{
        element['on'+type] = handler;
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