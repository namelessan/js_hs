class Animal {
  constructor(species) {
    this.species = species;
  }
}

class Vertebrate extends Animal {}

class Invertebrate extends Animal {}

const farm = {
  vertebrate: {},
  invertebrate: {},
  classify(obj) {
    const family = Object.getPrototypeOf(obj.constructor).name.toLowerCase();
    const className = obj.constructor.name.toLowerCase();
    const species = obj.species;

    if (['vertebrate', 'invertebrate', 'animal'].includes(className)) {
      console.log("ERROR: Generic animal can't be added to the farm.");
      return;
    }
    if (!['vertebrate', 'invertebrate'].includes(family)) {
      console.log('ERROR: Unknown object.');
      return;
    }

    if (!this[family][className]) this[family][className] = {};

    // console.log('The species is', species, this[family][className][species]);

    let count = this[family][className][species]
      ? ++this[family][className][species]
      : 1;

    this[family][className][species] = count;
  },
};

// console.log(farm);
// // $> { vertebrates: {}, invertebrates: {}, classify: [Function: classify] }
class Fish extends Vertebrate {}
class Amphibia extends Vertebrate {}
class Arthropoda extends Invertebrate {}
class Mammal extends Vertebrate {}
farm.classify(new Amphibia('frog'));
farm.classify(new Amphibia('toad'));
console.log(farm);
// // $> {
// //      vertebrates: { Amphibia: { frog: 1, toad: 1 } },
// //      invertebrates: {},
// //      classify: [Function: classify]
// //    }
farm.classify(new Fish('ray'));
farm.classify(new Fish('ray'));
farm.classify(new Arthropoda('butterfly'));
farm.classify(new Mammal('horse'));
console.log(farm);
// // $> {
// //      vertebrates: {
// //        Amphibia: { frog: 1, toad: 1 },
// //        Fish: { ray: 2 },
// //        Mammal: { horse: 1 }
// //      },
// //      invertebrates: { Arthropoda: { butterfly: 1 } },
// //      classify: [Function: classify]
// //    }
farm.classify(new Animal('generic vertebrate'));
// // $> ERROR: Generic animal can't be added to the farm.
farm.classify([]);
// // $> ERROR: Unknown object.
farm.classify({ fish: 1 });
