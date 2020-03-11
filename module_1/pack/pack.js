function pack(...arg) {
  const res = {};
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === 'undefined') {
      continue;
    } else if (typeof arg[i] === 'function' && arg[i].name) {
      res[arg[i].name] = arg[i];
    } else if (typeof arg[i] === 'string') {
      res[arg[i]] = arg[i];
    } else {
      res[i] = arg[i];
    }
  }
  return res;
}

module.exports = pack;
