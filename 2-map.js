let array = [1, 2, 3, 4, 5];

const callback = function(num) {
    if (num % 2 === 0) {
        return num
    } else {
        return 'No es par'
    }
}

//Callback es una función pasada por parámetro
let newArray = array.map(callback);

console.log(newArray)