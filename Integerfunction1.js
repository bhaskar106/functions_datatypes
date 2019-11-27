var second = require('./function2.js');

function first() {
    return second.test(a,b);
}
var a=10;
var b=20;
console.log(a);
console.log(b);
console.log(first());
