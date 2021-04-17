//node js input module
var fs = require('fs');
var http = require('http');
//create files
//can use both fs.writeFile or fs.appendFile
fs.writeFile('myFirstFile.txt', 'Hello from Wangari', (err) => {
   //if there is an error throw err
    if(err) throw err;
    console.log('success');
});
