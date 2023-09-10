let availableFruit = [
    'Apple',
    'Banana',
    'Pear',
    'Tomato',
    'Mango',
    'Pineapple',
    'Strawberry',
];

const resultsBox = document.querySelector ('.result-box');

const inputBox = document.getElementById ('input-box');

inputBox.onkeyup = function fruitSelection () {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = availableFruit.filter((keyword) => {
          return keyword.toLowerCase().includes (input.toLowerCase)
        });
        console.log (result);
    }
    display(result);
}

function display (result) {
    const content = result.map ((list) => {
        return '<li>' + list + '</li>' ;
    });

    resultsBox.innerHTML = '<ul>' + content + '</ul>' ;
}


var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.execute();
