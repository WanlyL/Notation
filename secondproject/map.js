//double values 
function doubleValues(arr) {
    let doubled = [];
    arr.forEach(function(val) {
        doubled.push(val * 2);
    });
    return doubled;
}

// Testing the function
let numbers = [1, 2, 3, 4, 5];
console.log(doubleValues(numbers));

//even values 
function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            evens.push(val);
        }
    });
    return evens;
}

// Testing the function
let numbers = [1, 2, 3, 4, 5, 6];
console.log(onlyEvenValues(numbers)); 

//first and last characters 
function showFirstAndLast(arr) {
    let result = [];
    arr.forEach(function(str) {
        if (str.length > 0) {
            result.push(str[0] + str[str.length - 1]);
        }
    });
    return result;
}

// Testing the function
let strings = ['hello', 'world', 'yes', 'no'];
console.log(showFirstAndLast(strings));


//double values with map 
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// Testing the function
let numbers = [1, 2, 3, 4, 5];
console.log(doubleValuesWithMap(numbers));

//using filter method 
function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
    });
}

// Testing the function
let objects = [
    {name: 'Alice', age: 25},
    {name: 'Bob'},
    {name: 'Charlie', age: 30},
    {name: 'David'}
];

console.log(filterByValue(objects, 'age'));


