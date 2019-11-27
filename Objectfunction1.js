var second = require('./function2.js');

function first() {
    return second.test(a,b);
}
var a = {name :"test"};
var b = {name :"testing"};
console.log(a);
console.log(b);
console.log(first());
