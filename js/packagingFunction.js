function addLoadEvent(func) {
    let oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}

function insertAfter(newElem, targetElem) {
    let parentElem = targetElem.parentNode;
    if (parentElem.lastChild === targetElem) {
        parentElem.appendChild(newElem);
    } else {
        parentElem.insertBefore(newElem, targetElem.nextSibling);
    }
}

function addClass(elem, className) {
    if (!elem.className){
        elem.className = className;
    } else {
        elem.classList.add(className);
    }
}

function getHttpObject() {
    if (typeof XMLHttpRequest == "undefined") {
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
        } catch (e) {};
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
        } catch (e) {};
        try {
            return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {};
    }
    return new XMLHttpRequest();
}

function initElementPos(elementId, initX, initY) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    let elem = document.getElementById(elementId);
    elem.style.top = initX + 'px';
    elem.style.left = initY + 'px';
}

function createElementById(parentElementId, elementId) {
    if (!document.createElement) return false;
    let elem = document.createElement('div');
    elem.id = elementId;
    if (!document.getElementById) return false;
    if (!document.getElementById(parentElementId)) return false;
    let parentElem = document.getElementById(parentElementId);
    parentElem.appendChild(elem);
    return elem;
}

function moveElementPos(elementId, finalX, finalY, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    let elem = document.getElementById(elementId);
    if (elem.movement) clearTimeout(elem.movement);
    if (!elem.style.left) elem.style.left = '0px';
    if (!elem.style.top) elem.style.top = '0px';
    let xPos = parseInt(elem.style.left);
    let yPos = parseInt(elem.style.top);
    let dist = 0;
    if (xPos == finalX && yPos == finalY) return true;
    xPos = calculateChangePos(xPos, finalX);
    yPos = calculateChangePos(yPos, finalY);
    elem.style.left = xPos + 'px';
    elem.style.top = yPos + 'px';
    elem.movement = setTimeout(function () {
        moveElementPos(elementId, finalX, finalY, interval);
    }, interval);
}
function calculateChangePos(initPos, finalPos) {
    let dist;
    if (initPos < finalPos) {
        dist = Math.ceil((finalPos - initPos)/10);
        initPos += dist;
    }
    if (initPos > finalPos) {
        dist = Math.ceil((initPos - finalPos)/10);
        initPos -= dist;
    }
    return initPos;
}

/**
 * 创建随机数
 * @param lowerValue
 * @param upperValue
 * lowerValue-upperValue表示创建随机数的范围
 * @returns {number}
 */
function createRandomNumber(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

/**
 * 比较函数(正序)
 * 由sort()进行调用
 * @param value1
 * @param value2
 * @returns {number}
 */
function compareAsc(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * 比较函数(反序)
 * 由sort()进行调用
 * @param value1
 * @param value2
 * @returns {number}
 */
function compareDesc(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
