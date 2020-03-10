const propertyChecker = function(obj) {
  return function(prop) {
    res = false;
    if (prop in obj && prop !== null) {
      res = true;
    }
    return res;
  };
};

module.exports = propertyChecker;
