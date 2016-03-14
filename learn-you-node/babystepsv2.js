var args = process.argv;
var result = 0;

for (i=0; i<args.length; i++) {
	if (!isNaN (args[i])) {
		result += parseInt(args[i]);
	}
}
console.log(result); 