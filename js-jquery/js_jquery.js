function test() {
    let boxClass = $('.box');
    boxClass.css('background', 'red');
    let boxId = $('#box');
    let boxIdJquery = boxId[0];
    let boxIdJs = document.getElementById('box');
    console.log(boxIdJs === boxIdJquery);
    console.log(boxClass);
}
test();