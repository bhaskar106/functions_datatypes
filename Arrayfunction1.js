var second = require('./function2.js');

function first() {
    return second.test(a,b);
}
var a=['hi','bye'];
var b=['bye','hi'];
console.log(a);
console.log(b);
console.log(first());
