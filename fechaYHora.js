// import fs from 'fs';
const fs = require ('fs')

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

fs.writeFile('./fyh.txt', `Fecha: ${fecha} \n Hora: ${hora}`,'utf-8', (error) => {
    if(error) return console.log(error);
    fs.readFile('./fyh.txt', 'utf-8', (err, resultado) => {
        if(err) return console.log(err);
        console.log(resultado)
    });
})