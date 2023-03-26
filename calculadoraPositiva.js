// function suma (num1, num2){
//     return new Promise ((res, rej) => {
//         if (){
//             rej('Operación innecesaria')
//         } if () {
//             rej('La calculadora solo puede devolver resultados positivos');
//         } else {
//             res(`El resultado de la suma es ${num1 + num2}`)
//         }
//     });
// };

// async function calculadora() {
//     try {
//         let resultado = await suma(num1, num2);
//         console.log(resultado)
//     } catch (err) {
//         console.log(err)
//     }
// }

// calculadora(1,2);


//suma

const suma = (num1, num2) => {
    return new Promise ((res, rej) => {
        if (num1 === 0 || num2 === 0){
            return rej('Operación innecesaria')
        } if (num1 + num2 < 0){
            return rej('La calculadora no calcula valores negativos');
        } else {
        return res(`El resultado de la suma es: ${num1 + num2}`);
        };
    });
};

const resultado = async () => {
    try {
        let sumar = await suma(9,2)
        console.log(sumar)
    } catch (err) {
        console.log(err)
    }
}

resultado();

//resta

const resta = (num1, num2) => {
    return new Promise ((res, rej) => {
        if (num1 === 0 || num2 === 0){
            return rej('Operación inválida');
        } if (num1 - num2 < 0){
            return rej('La calculadora solo devuelve valores positivos');
        } else {
            res(`El resultado de la resta es: ${num1 - num2}`)
        }
    });
};

const resultadoResta = async () => {
    try {
        let restar = await resta(5,3);
        console.log(restar);
    } catch (err) {
        console.log(err)
    };
};

resultadoResta();

// multiplicar

const multiplicar = (num1, num2) => {
    return new Promise ((res, rej) => {
        if (num1 === 0 || num2 === 0){
            return rej('Operación invalida');
        } if (num1 * num2 < 0) {
            return rej('La calculadora solo devuelve valores positivos')
        } else {
            return res(`El valor de la multiplicación es: ${num1 * num2}`)
        }
    });
};

const resultadoMultiplicar = async () => {
    try {
        let multiplicacion = await multiplicar(2,9);
        console.log(multiplicacion)
    }
    catch (error) {
        console.log(error)
    }
};

resultadoMultiplicar();
