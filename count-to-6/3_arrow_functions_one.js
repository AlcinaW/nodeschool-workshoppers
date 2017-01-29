var mydir = process.argv;
var inputs = mydir.slice(2);
// var result = inputs.map(inputs => inputs.charAt(0)).reduce(function(a,b) {
//   return a + b;
// });

var result = inputs.map(sol => sol[0])
                    .reduce((soFar, sol) => soFar + sol);

 console.log(`[${inputs}] becomes "${result}"`);
