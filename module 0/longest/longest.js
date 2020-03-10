function longest(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sortArr = arr.sort((a, b) => b.length - a.length);
  return sortArr[0].length;
}

module.exports = longest;
