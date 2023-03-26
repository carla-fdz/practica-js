const fs = require('fs');

// console.log(fs);
//fs se puede utilizar de forma sincronica, con callbacks y con promesas

//Crea el archivo

// fs.writeFileSync('./data.txt', 'Hola, estoy utilizando fs \n', 'utf-8');


//Verifica si existe el archivo

// console.log(fs.existsSync('./data.txt'));


//Agrega texto

// fs.appendFileSync('./data.txt', 'Estoy agregando texto \n', 'utf-8');


// Leer el archivo

// if(fs.existsSync){
//     const contenidoArchivo = fs.readFileSync('./data.txt', 'utf-8')
//     console.log(contenidoArchivo)
// }

//Elimina el archivo
// fs.unlinkSync('./data.txt');

//////////////////////////////////////////////////////////////////////

// CON CALLBACK

// let texto = 'Este es el contenido \n'
// fs.writeFile('./data.txt', texto, 'utf-8', (err) => {
//     if(err){
//         console.log('Ha ocurrido un error')
//     } 
// });

// fs.readFile('./data.txt', 'utf-8', (err, resultado) => {
//     if(err) return console.log('Error al leer el archivo')
//     console.log(resultado);
// })

// let agregarTexto = 'Estoy agregando texto'
// fs.appendFile('./data.txt', agregarTexto, 'utf-8', (err) => {
//     if(err) return console.log ('Hubo un error')
//     fs.readFile('./data.txt', 'utf-8', (err, resultado) => {
//         if(err) return console.log('Error al leer el contenido agregado')
//         console.log(resultado)
//     })
// })

// fs.unlink('.data/txt', (err) => {
//     if (err) console.log('Error al eliminar el archivo')
//     console.log('Eliminado')
// });


//////////////////////////////////////////////

// Con promesas

fs.promises.writeFile('./data.txt', 'Hola \n', 'utf-8')
    .then(() => {
        return console.log('Se terminó de escribir el archivo')
    })
    .catch((err) => {
        return console.log(err)
    });

const operacionesAsync = async () => {
    try {
        await fs.promises.appendFile('./data.txt', 'Agregando texto', 'utf-8');

        let contenido = await fs.promises.readFile('./data.txt', 'utf-8')
        console.log(contenido)

        await fs.promises.unlink('./data.txt')
        console.log('Archivo eliminado exitosamente')
    }
    catch (err){
        console.log(err)
    }
}

operacionesAsync();





