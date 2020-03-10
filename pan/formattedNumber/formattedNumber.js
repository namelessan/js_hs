function formattedNumber(str) {
  const list = str.split('').reverse();
  const res = [];
  for (let i = 0; i < list.length; i++) {
    if (i > 0 && i % 3 === 0) {
      res.push(' ');
    }
    res.push(list[i]);
  }
  return res.reverse().join('');
}

module.exports = formattedNumber;
