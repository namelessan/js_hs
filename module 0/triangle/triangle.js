function printTri(n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    let row;
    if (i === 1) {
      row = ' '.repeat(n - i) + i.toString() + '\n';
    } else {
      row =
        ' '.repeat(n - i) +
        i.toString() +
        '*'.repeat(i * 2 - 1 - i.toString().length * 2) +
        i.toString() +
        '\n';
    }

    res += row;
  }
  return res;
}

function triangle(n) {
  if (typeof n === 'number' && n > 0) {
    return printTri(n);
  } else {
    return '';
  }
}

module.exports = triangle;
