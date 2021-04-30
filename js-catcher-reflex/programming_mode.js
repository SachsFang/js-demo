//跟踪属性访问
const user = {
    name: 'sachs'
}
const proxy1 = new Proxy(user, {
    get(target, p, receiver) {
        console.log(`Getting ${p}`);
        return Reflect.get(...arguments);
    },
    set(target, p, value, receiver) {
        console.log('Setting ' + p);
    }
});
proxy1.name;
proxy1.age = 22;
proxy1.class = 1;

const number = {};
const proxy2 = new Proxy(number, {
    set(target, p, value, receiver) {
        if (typeof value != 'number') {
            return false;
        } else {
            Reflect.set(...arguments);
        }
    }
});
proxy2.age = 35;
proxy2.class = '一';
console.log(number);
console.log(proxy2);

const recordUser = [];

class User {
    constructor(name) {
        this.name = name;
    }
}

const proxy3 = new Proxy(User, {
    construct(target, argArray, newTarget) {
        const newUser = Reflect.construct(...arguments);
        recordUser.push(newUser.name);
        return newUser;
    }
});
new proxy3('fang');
new proxy3('sachs');
new proxy3('he');
console.log(recordUser);

window.color = 'red';
let o = {
    color: 'blue'
};
function sayColor() {
    console.log(this.color);
}
sayColor(); // red
sayColor.call(this); // red
sayColor.call(window); // red
sayColor.call(o); // blue

function f() {
    return function () {
        return 1;
    }
}
let temp = 1;
let aaaaaaalskdjflksdjflksjdlkfj = {
    tem: 1,
    b: 'c',
    c: 'df'
}
console.log(f()());
