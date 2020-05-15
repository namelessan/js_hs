const findFamily = function getfamily(person) {
  if (!person.parent) return [person.name];
  family = getfamily(person.parent);
  return [person.name, ...family];
};

const areSameFamily = function (person1, person2) {
  family1 = findFamily(person1);
  family2 = findFamily(person2);
  for (let a of family1) {
    for (let b of family2) {
      if (a === b) {
        console.log('ancestor', a, b);
        return true;
      }
    }
  }

  return false;
};

// const paul = {
//   name: Symbol('Paul Walker'),
//   parent: undefined,
// };

// const jeremy = {
//   name: Symbol('Jeremy Walker'),
//   parent: paul,
// };

// const adam = {
//   name: Symbol('Adam Walker'),
//   parent: paul,
// };

// const lucy = {
//   name: Symbol('Lucy Walker'),
//   parent: jeremy,
// };

// const ana = {
//   name: Symbol('Ana Strazt'),
//   parent: undefined,
// };

// const ludwig = {
//   name: Symbol('Ludwig Strazt'),
//   parent: ana,
// };

// console.log(areSameFamily(paul, adam)); // true
// console.log(areSameFamily(paul, lucy)); // true
// console.log(areSameFamily(adam, lucy)); // true
// console.log(areSameFamily(ana, paul)); // false

module.exports = areSameFamily;
