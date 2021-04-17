var fs = require('fs');
var http = require('http');
//update files
//updating or appending the file
//can use either fs.writeFile or fs.appendFile
fs.appendFile('myFirstFile.txt', 'Hello from Wangari \n I am Susan Wangari',(err) => {
    if(err) throw err;

    console.log('file updated successfully');
});
//changed from Hello from Wangari to Hello from Wangari \n I am Susan Wangari
