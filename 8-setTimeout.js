const temporizador = (cb) => {
    setTimeout(() => {
        cb()
    }, 3000)
};

let operacion = () => {
    return console.log('Realizando operación');
};

console.log('Iniciando tarea');
temporizador(operacion);
console.log('Tarea finalizada');

/////////////////// 

setTimeout(function() {
    console.log('Hola, llegas a tiempo')
}, 1000);
console.log('Yo llego primero');