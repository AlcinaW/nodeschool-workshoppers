var args = process.argv;
var result=0; 

for (var i=2; i<args.length; i++){
	var x = Number(args[i]);
	result += x;
}
	console.log(result);