// sincronica bloqueante

// console.log('Iniciando tarea');
// console.log('Realizando operación');
// for(let cont = 0; cont < 5; cont++){
//     console.log(cont);
// };
// console.log('Tarea finalizada');


// SET INTERVAL no bloqueante

let contador = ()  => {
    let count = 0 
    let timer = setInterval(() => {
        console.log(count ++)
        if (count > 4) {
            clearInterval(timer)
        }
    }, 1000);
};

console.log('Iniciando tarea');
contador();
console.log('Finalizando tarea');


