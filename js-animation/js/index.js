var moveElem;
(function () {//<<JavaScrip编程艺术>>
    // testMoveBox();//js移动box动画效果
    // prepareSlideShow();//js图片预览效果
})()
function prepareSlideShow() {
    createSlideShowImg();
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('preview')) return false;
    if (!document.getElementById('linkList')) return false;
    let preview = document.getElementById('preview');
    preview.style.position = 'absolute';
    preview.style.top = '0px';
    preview.style.left = '0px';
    let list = document.getElementById('linkList');
    let links = list.getElementsByTagName('a');
    links[0].onmouseover = function () {
        moveElementPos('preview', -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElementPos('preview', -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElementPos('preview', -300, 0, 10);
    }
    /*var k = -100;
    for (let i = 0; i < 3; i++) {
        links[i].onmouseover = function () {
            moveElementPos('preview', k, 0 ,10);
            return k;
        }
        console.log(links[i].onmouseover());
        k = k - 100;
    }//这里不行为什么?   */
}
function createSlideShowImg() {
    if (!document.getElementById('linkList'));
    let slideshow = document.createElement('div');
    addClass(slideshow, 'slideShow');
    let img = document.createElement('img');
    img.src = 'img/preview.jpg';
    img.alt= '点我!';
    img.style.top = '0px';
    img.style.left = '0px';
    img.id = 'preview';
    slideshow.appendChild(img);
    let linkList = document.getElementById('linkList');
    insertAfter(slideshow, linkList);
}

function testMoveBox() {//p177
    addLoadEvent(initAndMoveBox({
        elementId: 'box',
        initX: 0,
        initY: 0,
        finallyX: 500,
        finallyY: 500,
        interval: 50
    }));
    let box = createElementById('index', 'box2');
    box.className = 'box';
    addLoadEvent(initAndMoveBox({
        elementId: 'box2',
        initX: 200,
        initY: 400,
        finallyX: 0,
        finallyY: 0,
        interval: 50
    }));
}

function initAndMoveBox(obj) {
    let elementId = obj.elementId;
    let initX = obj.initX;
    let initY = obj.initY;
    let finallyX = obj.finallyX;
    let finallyY = obj.finallyY;
    let interval = obj.interval;
    initElementPos(elementId, initX, initY);
    moveElementPos(elementId, finallyX, finallyY, interval);
}