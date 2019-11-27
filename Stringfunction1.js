var second = require('./function2.js');

function first() {
    return second.test(a,b);
}
var a="hi ";
var b="how are you";
console.log(a);
console.log(b);
console.log(first());
