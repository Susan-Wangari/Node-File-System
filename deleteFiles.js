var fs = require('fs');
var http = require('http');
//delete files
fs.unlink('demo.txt',(err) => {
    if (err) throw err;
    console.log('File deleted');
});
