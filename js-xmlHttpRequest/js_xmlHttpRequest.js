function createHttp() {
    let request = new XMLHttpRequest();
    request.open('get', 'example.txt', false);
    request.send(null);
    // addHttpEvent(request);
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        alert(xhr.responseText);
    } else {
        alert("Request was unsuccessful: " + xhr.status);
    }
}

function addHttpEvent(xhr) {
    /*xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    };*/
    xhr.onload = function() {//第二种方法更简便
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    };
}
createHttp();

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

function fetchApi() {
    let p = fetch('/send-me-json', {
        method: 'POST', // 发送请求体时必须使用一种 HTTP 方法
        body: payload,
        headers: jsonHeaders
    });
    p.then();

}