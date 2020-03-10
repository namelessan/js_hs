function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function toCamelCase(str) {
  const arr = str.split('_');
  const camelCase = arr.map((e, i) => {
    if (i === 0) {
      if (e === '') {
        return '';
      } else if (e[0].toUpperCase() === e[0]) {
        return e;
      } else {
        return e.toLowerCase();
      }
    } else {
      return capitalize(e);
    }
  });
  return camelCase.join('');
}

module.exports = toCamelCase;
