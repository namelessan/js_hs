function isIn(key, arr) {
  const match = arr.filter(e => e === key);
  return match.length > 0;
}

function filterPrimitive(arr) {
  const PRIMITIVE = ['function', 'object'];

  for (i = arr.length; i >= 0; i--) {
    if (arr[i] !== null && isIn(typeof arr[i], PRIMITIVE)) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

module.exports = filterPrimitive;
