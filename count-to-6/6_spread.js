// let arg = process.argv;
// let spliced = arg.splice(0,2);
// let min = 'The minimum of' + ' ' + arg + ' ' + 'is' + ' ' + Math.min(...arg);
// console.log(min);

var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
