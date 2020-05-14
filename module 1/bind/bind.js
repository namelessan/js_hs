function bind(func, context, ...args) {
  // return func.bind(context, ...args);
  context.prototype.func = function () {
    return func(...args);
  };
}

const bound = bind(
  function (arg) {
    console.log(this, arg);
  },
  'hello',
  'world'
);
bound();

function chorus(...words) {
  console.log(this);
  let sentence = words.reduce(function (acc, current) {
    return acc + ' ' + current;
  });
  return sentence + ', ' + sentence;
}

const boundConcat = bind(
  chorus,
  { name: 'The Beatles', year: 1966 },
  'yellow',
  'submarine'
);
boundConcat(); // $> { name: 'The Beatles', year: 1966 }
console.log(boundConcat());

module.exports = bind;
