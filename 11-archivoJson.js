const fs = require('fs');

const probando = async () => {
    try {
        let contenido = await fs.promises.readFile('./package.json', 'utf-8')
        // console.log(contenido)
        const respuestaParseada = JSON.parse(contenido)
        respuestaParseada.apellido = 'Fernandez'
        respuestaParseada.size = contenido.length
        console.log(respuestaParseada)
        const resParseadaJson = JSON.stringify(respuestaParseada, 'null', 2)
        console.log(resParseadaJson)
        await fs.promises.writeFile('./data.json', resParseadaJson, 'utf-8')

    }
    catch (err){
        console.log(err)
    }
}

probando();

///////////////////////////////////////////////////




