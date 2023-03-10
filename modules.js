
const os = require('os');
const fs = require('fs');

console.log(os.hostname + " " + os.platform + " " + os.release);

fs.writeFile('./texto.txt', 'hola mundo |m|', function(err) {
    if(err){
        console.log(err);
    } else {
        console.log("archivo creado");
        leerArchivo();
    }
});

function leerArchivo(){
    fs.readFile('./texto.txt', function(err, data){
        if (err){
            console.log(err);
        } else {
            console.log(data.toString());
        }
    });
}

