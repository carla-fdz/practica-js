const escribirArchivo = require('./escriArch.js');

console.log('Inicio del programa');

escribirArchivo('Hola mundo', () => {
    console.log('Terminé de escribir el archivo'); //async. es no bloqueante
});

console.log('Fin del programa');