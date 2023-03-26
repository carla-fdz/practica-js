const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// const suma = () => {}

const realizarOperacion = (num1, num2, callback) => {
    console.log('Voy a realizar una operación, no sé cuál, pero lo haré!');
    let resultado = callback(num1, num2);
    console.log(`El resultado de la operación que no supe cuál fue es: ${resultado}`);
};

// realizarOperacion (num1, num2, callback)
realizarOperacion(2,5,sumar);
realizarOperacion(2,5,restar);
realizarOperacion(2,5,multiplicar);
realizarOperacion(2,5,dividir);

console.log(realizarOperacion);

