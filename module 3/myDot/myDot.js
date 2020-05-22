// Solution 1
// function myDot(obj, key) {
//   return obj[key];
// }

// Solution 2
const getPrototype = function getProto(obj) {
  if (!Object.getPrototypeOf(obj)) return [obj];
  return [obj, ...getProto(obj)];
};

function myDot(obj, key) {
  const objs = getPrototype(obj);
  objs.forEach((obj) => {
    if (obj.hasOwnProperty(key)) return obj[key];
  });

  return undefined;
}

module.exports = myDot;

// const animal = {
//   type: 'Adult',
//   legs: 4,
// };
// console.log(myDot(animal, 'type')); // $> Adult
// console.log(myDot(animal, 'age')); // $> undefined
// const dog = Object.create(animal);
// dog.maxAge = 15;
// const puppy = Object.create(dog);
// puppy.type = 'Baby';
// console.log(myDot(dog, 'type')); // $> Adult
// console.log(myDot(puppy, 'type')); // $> Baby
// console.log(myDot(puppy, 'maxAge')); // $> 15

const animal = {
  type: 'Adult',
  legs: 4,
};
Object.defineProperty(animal, 'legs', {
  enumerable: false,
});
Object.defineProperty(animal, 'tails', {
  value: 'long',
});
console.log(Object.getOwnPropertyNames(animal));
console.log(animal['legs']);
