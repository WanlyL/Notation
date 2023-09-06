/* Object destructing 1
code returns = 8, 1846 */

/* Object destructing 2 
code returns = null */

/* Object destructing 3 
code returns = "Your name is Alejandro and your favorite color is purple"
*/

/*Array Destructing 1
Code returns Maya, Marisa, Chi*/

/* Array Destructing 2 
Code returns "Raindrops on roses"; "Whiskers on kittens"*/

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {a,b} = obj.numbers

[arr[0], arr[1]] = [arr[1], arr[0]]


raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
