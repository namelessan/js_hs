function addCumulative(obj) {
  obj.cumulative = function() {
    const res = {};
    for (key in this) {
      if (typeof this[key] !== 'function') {
        res[key] = this[key];
      }
      for (key2 in this) {
        if (typeof this[key2] !== 'function') {
          if (key < key2) {
            res[key] += this[key2];
            console.log(key2, key);
          }
        }
      }
    }
    return res;
  };
}

module.exports = addCumulative;
