function printValues(promise) {
  promise.then(res => res.forEach(e => console.log(e)));
}

module.exports = printValues;
