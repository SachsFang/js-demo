/*let p1 = Promise.resolve('success');
var p5 = p1.then(() => 'success1');
setTimeout(console.log, 0, p5);

let p2 = Promise.reject("error");
p2.then(null, (data) => setTimeout(console.log, 0, data));

let p4 = p1.then(() => {
    throw 'baz'
});
setTimeout(console.log, 0, p4);

function a() {
    var p3 = new Promise(() => {});
    setTimeout(function () {
        p3 = Promise.resolve('foo');
    }, 3000);
    return p3;
}

a.then(function (data) {
    console.log(data);
})*/
/*
async function a() {
    let p = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('success');
        }, 3000);
    });
    return p;
}
async function b() {
    let result = 'fail';
    await a().then(data => result = data);
    console.log(result);
}
b();*/
/*
let p1 = new Promise((resolve, reject) => {
    console.log('p1 executor');
    setTimeout(resolve, 1000);
});
p1.then(() => new Promise((resolve, reject) => {
    console.log('p2 executor');
    setTimeout(resolve, 1000);
}))
    .then(() => new Promise((resolve, reject) => {
        console.log('p3 executor');
        setTimeout(resolve, 1000);
    }))
    .then(() => new Promise((resolve, reject) => {
        console.log('p4 executor');
        setTimeout(resolve, 1000);
    }));*/
let p = new Promise((resolve) => setTimeout(resolve, 3000, 3));
p.then(console.log);
