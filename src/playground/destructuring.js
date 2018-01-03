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