var exec = require('child_process').exec;

// Checking for Visual C++ 2010 / 2012 / 2013

// Checking for Python 2.7
fs.exists('python.exe', function(is_exists) {
	if (is_exists) {
		console.log('Checking for python 2.7: OK');
		return;
	}
	console.log('Checking for python 2.7: NG');
});

// Checking for GTK 2
fs.exists('%GTK_Root%bin¥zlib1.dll', function(is_exists) {
	if (!is_exists) {

	}
});

// Checking for libjpeg-turbo
