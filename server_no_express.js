const http = require('http');
var colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hola Mundo desde node js</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log(colors.rainbow("Corriendo en el purto 3000...."));
});