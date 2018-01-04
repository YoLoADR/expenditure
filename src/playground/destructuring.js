//
// Object destructuring
//
const person = {
    name: 'Loic',
    age: 28,
    location: {
        city: 'New York City',
        temp: 92
    }
};

const { name, age } = person;

console.log(`${name} is ${age}`);

//
// Array destructuring
//

const address = ["Ivry sur Sein", "Creteil", "Maison-Alfort", "Cretei", "Lieusaint", "USA"];

const [,school] = address;

console.log("school", school);