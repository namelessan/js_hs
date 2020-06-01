function where(arr, obj) {
  const seacrchKeys = Object.keys(obj);
  // if (seacrchKeys.length > keys.length) return 'not found';
  const res = arr.filter(e => {
    let match = true;
    seacrchKeys.forEach(k => {
      if (obj[k] !== e[k]) {
        match = false;
      }
    });
    return match;
  });
  return res;
}

module.exports = where;
