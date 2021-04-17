var fs = require('fs');
var http = require('http');
//read files
http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        // console.log(data);
    });
 }).listen(3000);
