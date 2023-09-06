let sum2 = (a,b) => {
    return a + b
}

/* Example of two functions 
function randomNumber (){
    return Math.random
}

let randomNumber2 = () => {
    return Math.random 
} */

const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);

