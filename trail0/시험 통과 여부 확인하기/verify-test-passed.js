const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let x = 80 - input;

if(input>=80){
    console.log('pass');
}
else{
    console.log(`${x} more score`)
}
