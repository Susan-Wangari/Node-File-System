var fs = require('fs');
var http = require('http');
//rename files
fs.rename('fs.js', 'fs-new.js', (err) => {
    if (err) throw err;
    console.log('file renamed successfully');
});
