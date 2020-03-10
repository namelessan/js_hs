const Character = require('../growingCharacter/character');

// class solution
// class magus extends Character {
//   constructor(name, ...spells) {
//     super(name);
//     this.spells = spells;
//     console.log(`A Magus named ${this.name} is born.`);
//   }
//   throwSpell() {
//     const i = Math.floor(Math.random() * this.spells.length);
//     console.log(`${this.name} throws a *${this.spells[i]}*!`);
//   }
// }

//function solution
function magus(name, ...spells) {
  Character.call(this, name);
  this.spells = spells;
  console.log(`A Magus named ${this.name} is born.`);
}

magus.prototype = Object.create(Character.prototype);
magus.prototype.throwSpell = function() {
  const i = Math.floor(Math.random() * this.spells.length);
  console.log(`${this.name} throws a *${this.spells[i]}*!`);
};

module.exports = magus;
