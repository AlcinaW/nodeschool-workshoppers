var fs = require('fs');
	path = require('path');
/* Directory to read */
var mydir = process.argv[2];
var myExt = "." + "md";
	
fs.readdir(mydir, function (err, list) {
	list.forEach(function (file) {
		var ext = path.extname(file);
		if (ext === myExt) {
			console.log(file);
		}
	})
});





