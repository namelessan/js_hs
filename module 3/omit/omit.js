function omit(obj, arr) {
  const res = {};
  for (const prop in obj) {
    if (!arr.includes(prop)) {
      res[prop] = obj[prop];
    }
  }
  return res;
}
module.exports = omit;
