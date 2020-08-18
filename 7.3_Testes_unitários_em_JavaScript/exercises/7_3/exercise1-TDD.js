const greetPeople = (people) => {
    let greeting = 'Hello ';
    let greetings = [];

    for (const person in people) {
      greetings.push(greeting + people[person])
    }
    return greetings;
};
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  
  const assert = require('assert');
  assert.equal(typeof greetPeople, 'function')
  assert.deepEqual(greetPeople(parameter), result, 'array should be Hello >parameter<')