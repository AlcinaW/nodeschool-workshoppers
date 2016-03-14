var fs = require('fs');
var eol = require('os').EOL;

var file = fs.readFileSync(process.argv[2]);
	file = file.toString();

var lines = file.split(eol).length-1; 
	console.log(lines);


