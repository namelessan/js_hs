function extendsArray() {
  Array.prototype.sum = function() {
    let sum = 0;
    for (e of this) {
      if (typeof e === 'number') {
        sum += e;
      }
    }
    return sum;
  };

  Array.prototype.first = function() {
    return this[0];
  };

  Array.prototype.last = function() {
    return this[this.length - 1];
  };
}

module.exports = extendsArray;
