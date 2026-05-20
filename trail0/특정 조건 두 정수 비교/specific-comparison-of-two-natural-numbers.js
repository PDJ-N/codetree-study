const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = Number(input[0]);
let b = Number(input[1]);

let rel1;
let rel2;

if (a < b) {
    rel1 = 1;
}
else rel1 = 0;

if (a == b) {
    rel2 = 1;
}
else rel2 = 0;

console.log(rel1, rel2);

