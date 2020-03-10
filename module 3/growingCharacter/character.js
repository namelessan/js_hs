// class solution
// class Character {
//   constructor(name) {
//     this.name = name;
//     this.age = 0;
//     console.log(`A Character named ${this.name} is born.`);
//   }
//   growUp() {
//     this.age++;
//   }
//   sayHello() {
//     const years = this.age > 1 ? 'years' : 'year';
//     console.log(`Hello, I am ${this.name} and I am ${this.age} ${years} old.`);
//   }
// }

//function solution
function Character(name) {
  this.name = name;
  this.age = 0;
  console.log(`A Character named ${this.name} is born.`);
}
Character.prototype.growUp = function() {
  this.age++;
};

Character.prototype.sayHello = function() {
  const years = this.age > 1 ? 'years' : 'year';
  console.log(`Hello, I am ${this.name} and I am ${this.age} ${years} old.`);
};

module.exports = Character;
