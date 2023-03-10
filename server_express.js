const colors = require('colors');

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo con Express y node</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000".green);
});
