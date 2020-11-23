(function () {
    ajaxTest();
})()
function ajaxTest() {
    let request = getHttpObject();
    if (request) {
        request.open('GET', "example.txt", true);
        request.onreadystatechange = function () {
            console.log(request.readyState);
            if (request.readyState === 4) {
                console.log(request.responseText);
            } else {
                console.log('fail');
            }
        }
        request.send(null);
    }
}