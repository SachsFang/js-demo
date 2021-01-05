/*function date() {
    //输出当前时间
    let nowDate = new Date();
    let nowMillisecond = Date.now();

    //输出指定时间
    let p1 = Date.parse('January 1, 2020');
    let u1 = Date.UTC(2020, 0);//这种情况输出的是GMT格林尼治的毫秒数
    let p2 = new Date(p1);
    let u2 = new Date(u1);

    // 跟上述输出指定效果一样
    // 如果不指定Date.parse()方法还是Date.UTC后台根据字符串或数值自动调用相应方法
    let t1 = new Date('January 1, 2020');
    let t2 = new Date(2020, 0);

    return {
        nowDate: nowDate,
        nowMillisecond: nowMillisecond,
        p1: p1,
        u1: u1,
        p2: p2,
        u2: u2,
        t1: t1,
        t2, t2
    }
}
console.log(date());*/

class Person {
    constructor(name) {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.name = name;
    }
    // 在类块中定义的所有内容都会定义在类的原型上
    locate() {
        console.log(this.name);
    }
}
let p1 = new Person('fang');
let p2 = new Person('bin');
console.log(Person.prototype.locate());
console.log(p2.name);
