'use strict';

const person = {
  name: 'Paul',
  surname: 'Dupont'
};

const neighbour = {
  name: 'Georges',
  surname: 'Bulot'
};

function sayHello() {
  console.log(`Hello, my name is ${this.name} ${this.surname}`);
}

sayHello(); // $> Cannot read property 'name' of undefined

person.sayHello = sayHello;
neighbour.sayHello = sayHello;

person.sayHello(); // $> Hello, my name is Paul Dupont
neighbour.sayHello(); // $> Hello, my name is Georges Bulot
