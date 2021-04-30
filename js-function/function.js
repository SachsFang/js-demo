(function () {
    //私有变量
    let name = 'Sarah';
    let income = '请设置薪资';

    //构造函数
    Girl = function () {}

    //公有共享方法
    Girl.prototype.name = name;
    Girl.prototype.setIncome = function (income) {
        this.income = income;
    }
    Girl.prototype.getIncome = function () {
        return this.income;
    }
})();

let girl = new Girl();
console.log(girl.name);
console.log(girl.income);
console.log(girl.getIncome());
girl.setIncome(50000);
console.log(girl.getIncome());

let worker = function () {//模块模式增强(单例子)
    //私有变量
    let name = '请设置名字';
    let income = '请设置薪资';
    //私有函数
    function setIncome(income) {
        this.income = income;
    }
    function getIncome() {
        return this.income;
    }

    let returnObj = {};
    returnObj.publicName = name;
    returnObj.publicGetIncome = function () {
        return getIncome();
    }
    returnObj.publicSetIncome = function (income) {
        return setIncome(income);
    }
    return returnObj;
}()
let work = worker;
console.log(work.name);
console.log(work.publicName);

worker.publicSetIncome(10000);
console.log(work.publicGetIncome());

function Person(name) {
    this.getName = function() {
        return name;
    };
    this.setName = function (value) {
        name = value;
    };
}
let person = new Person();
person.setName('fang');
console.log(person.name);
console.log(person.getName());