function addCumulative(obj) {
  const marks = { ...obj };
  obj.cumulative = function() {
    let cum = {};

    for (item in obj) {
      if (item !== 'cumulative') {
        cum[item] = Object.keys(marks).reduce((sum, i) => {
          if (parseInt(i) >= parseInt(item)) {
            return sum + marks[i];
          }
          return sum;
        }, 0);
      }
    }

    return cum;
  };
}

module.exports = addCumulative;
