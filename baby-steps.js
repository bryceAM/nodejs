// const fs = require('fs');
// const stream = require('stream');
// process.stdin.pipe(process.stdout);
// console.log(process.argv)
let num = 0;
for (let i = 2; i < process.argv.length; i++) {
    num += parseInt(process.argv[i])
}


console.log(num)

/**
 process.argv is an array of string values
 it has a number of elements
 */