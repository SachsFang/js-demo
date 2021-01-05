/*class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }
    async *[Symbol.asyncIterator]() {
        while(this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++));
        }
    }
}
async function asyncCount() {
    let emitter = new Emitter(100);
    for await(const x of emitter) {
        console.log(x);
    }
}
asyncCount();*/

/*class Emitter {
    constructor(max) {
        this.max = max;
        this.idx = 0;
    }
    *[Symbol.iterator]() {
        while(this.idx < this.max) {
            yield this.idx++;
        }
    }
}
function count() {
    let emitter = new Emitter(5);
    for (const x of emitter) {
        console.log(x);
    }
}
count();*/

/*
class FooMatcher {
    static [Symbol.match](target) {
        return target.includes('foo');
    }
}
console.log('foobar'.match(FooMatcher)); // true
console.log('barbaz'.match(FooMatcher)); // false

class StringMatcher {
    constructor(str) {
        this.str = str;
    }
    [Symbol.match](target) {
        return target.includes(this.str);
    }
}
console.log('foobar'.match(new StringMatcher('foo'))); // true
console.log('barbaz'.match(new StringMatcher('qux'))); // false*/


