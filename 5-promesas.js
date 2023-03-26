const dividir = (dividendo, divisor) => {
    return new Promise ((res, rej) => {
        if (divisor === 0){
            rej ('No se puede dividir por 0')
        } else {
            res(dividendo/divisor)
        }
    })
}

// const operacion = dividir(6,2);
// console.log(operacion);

// console.log(dividir(6,2));


//los then devuelven un rtado asincronico
// si agrego llaves pierdo el return implicito


// dividir(4,2)
// .then( resultado => 
//     resultado * 2
// , (err) => console.log(err))
// .then (resultado => console.log(resultado))
// .catch(err => console.log(err))
// .finally(() => console.log('Siempre aparezco'));

//el catch captura errores de todo tipo

//async / await

//la entrega del resultado es asincronico

async function functionAsync(){
    try {
        let resultado = await dividir(4,2);
        // return resultado * 2;
        console.log(resultado*2);
    } catch (err) {
        console.log(err)
    }
};

// console.log(functionAsync());
functionAsync()
// .then( resultado => console.log(resultado));