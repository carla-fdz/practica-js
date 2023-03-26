let array = [1, 2, 3, 4, 5]

let newArray = array.map((x)=> { return x ** 2} );

console.log(newArray);

// Es lo mismo que:
// const callback = function(x) {return x**2}
// let newArray = array.map(callback)

