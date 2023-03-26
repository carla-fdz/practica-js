let array = [1, 2, 3, 4, 5];


//creando nuestro map
function myMap(arreglo, callback) {
    let newArray = []

    for (let i = 0; i < arreglo.length; i++){
        let newValue = callback(array[i])
        newArray.push(newValue);
    }

    return newArray;
}

let newArray = myMap(array, (x) => { return x * 2});

console.log(newArray)