const getPrototype = function getProto(obj) {
  if (!Object.getPrototypeOf(obj)) return [obj];
  return [obj, ...getProto(obj)];
};

function myInstanceOf(obj, constr) {
  return obj instanceof constr;
}

// console.log(myInstanceOf({}, Object)); // $> true

// console.log(myInstanceOf(42, Number)); // $> false

// console.log(Object.prototype);
