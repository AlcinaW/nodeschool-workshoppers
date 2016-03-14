var fs = require('fs');
var eol = require('os').EOL;
var args = process.argv[2];

fs.readFile(args, 'utf8',
	function(err, logData) {
		if (err) throw err; 
		var text = logData.toString();
		var lines = text.split(eol);
		var lineLength = lines.length-1;
		console.log(lineLength);
	});



