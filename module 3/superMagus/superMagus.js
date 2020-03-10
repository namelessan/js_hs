const Magus = require('../magus/magus');

class superMagus extends Magus {
  constructor(name, battleCry, spells) {
    super(name, ...spells);
    this.battleCry = battleCry;
    console.log(`A SuperMagus named ${this.name} is born.`);
  }

  throwSpell() {
    console.log(`${this.battleCry.toUpperCase()}!!!`);
    const i = Math.floor(Math.random() * this.spells.length);
    console.log(`${this.name} throws a *${this.spells[i]}*!`);
  }
}

module.exports = superMagus;
