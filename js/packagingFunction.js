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
    if (!elem.className) {
        elem.className = className;
    } else {
        elem.classList.add(className);
    }
}

function getHttpObject() {
    if (typeof XMLHttpRequest == "undefined") {
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
        } catch (e) {
        }
        ;
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
        } catch (e) {
        }
        ;
        try {
            return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
        }
        ;
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
        dist = Math.ceil((finalPos - initPos) / 10);
        initPos += dist;
    }
    if (initPos > finalPos) {
        dist = Math.ceil((initPos - finalPos) / 10);
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

/**
 * 检测浏览器范围的能力测试
 */
class BrowserDetector {
    constructor() {
        // 测试条件编译
        // IE6~10 支持
        this.isIE_Gte6Lte10 = /*@cc_on!@*/false;
        // 测试 documentMode
        // IE7~11 支持
        this.isIE_Gte7Lte11 = !!document.documentMode;
        // 测试 StyleMedia 构造函数
        // Edge 20 及以上版本支持
        this.isEdge_Gte20 = !!window.StyleMedia;
        // 测试 Firefox 专有扩展安装 API
        // 所有版本的 Firefox 都支持
        this.isFirefox_Gte1 = typeof InstallTrigger !== 'undefined';
        // 测试 chrome 对象及其 webstore 属性
        // Opera 的某些版本有 window.chrome，但没有 window.chrome.webstore
        // 所有版本的 Chrome 都支持
        this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;
        // Safari 早期版本会给构造函数的标签符追加"Constructor"字样，如：
        // window.Element.toString(); // [object ElementConstructor]
        // Safari 3~9.1 支持
        this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);
        // 推送通知 API 暴露在 window 对象上
        // 使用默认参数值以避免对 undefined 调用 toString()
        // Safari 7.1 及以上版本支持
        this.isSafari_Gte7_1 =
            (({pushNotification = {}} = {}) =>
                    pushNotification.toString() == '[object SafariRemoteNotification]'
            )(window.safari);
        // 测试 addons 属性
        // Opera 20 及以上版本支持
        this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
    }

    isIE() {
        return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11;
    }

    isEdge() {
        return this.isEdge_Gte20 && !this.isIE();
    }

    isFirefox() {
        return this.isFirefox_Gte1;
    }

    isChrome() {
        return this.isChrome_Gte1;
    }

    isSafari() {
        return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1;
    }

    isOpera() {
        return this.isOpera_Gte20;
    }
}

class CookieUtil {
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
                + cookieName.length, cookieEnd));
        }
        return cookieValue;
    }

    static set(name, value, expires, path, domain, secure) {
        let cookieText =
            `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        if (expires instanceof Date) {
            cookieText += `; expires=${expires.toGMTString()}`;
        }
        if (path) {
            cookieText += `; path=${path}`;
        }
        if (domain) {
            cookieText += `; domain=${domain}`;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    }

    static unset(name, path, domain, secure) {
        CookieUtil.set(name, "", new Date(0), path, domain, secure);
    }
};

class SubCookieUtil {
    static get(name, subName) {
        let subCookies = SubCookieUtil.getAll(name);
        return subCookies ? subCookies[subName] : null;
    }

    static getAll(name) {
        let cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            parts,
            result = {};
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart +
                cookieName.length, cookieEnd);
            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&");
                for (let i = 0, len = subCookies.length; i < len; i++) {
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] =
                        decodeURIComponent(parts[1]);
                }
                return result;
            }
        }
        return null;
    }

    static set(name, subName, value, expires, path, domain, secure) {
        let subcookies = SubCookieUtil.getAll(name) || {};
        subcookies[subName] = value;
        SubCookieUtil.setAll(name, subcookies, expires, path, domain, secure);
    }

    static setAll(name, subcookies, expires, path, domain, secure) {
        let cookieText = encodeURIComponent(name) + "=",
            subcookieParts = new Array(),
            subName;
        for (subName in subcookies) {
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)) {
                subcookieParts.push(
                    '${encodeURIComponent(subName)}=${encodeURIComponent(subcookies[subName])}');
            }
        }
        if (cookieParts.length > 0) {
            cookieText += subcookieParts.join("&");
            if (expires instanceof Date) {
                cookieText += `; expires=${expires.toGMTString()}`;
            }
            if (path) {
                cookieText += `; path=${path}`;
            }
            if (domain) {
                cookieText += `; domain=${domain}`;
            }
            if (secure) {
                cookieText += "; secure";
            }
        } else {
            cookieText += `; expires=${(new Date(0)).toGMTString()}`;
        }
        document.cookie = cookieText;
    }

    static unset(name, subName, path, domain, secure) {
        let subcookies = SubCookieUtil.getAll(name);
        if (subcookies) {
            delete subcookies[subName]; // 删除
            SubCookieUtil.setAll(name, subcookies, null, path, domain, secure);
        }
    }

    static unsetAll(name, path, domain, secure) {
        SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure);
    }
}