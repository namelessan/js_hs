function isIn(e, iter) {
  for (let i = 0; i < iter.length; i++) {
    if (e === iter[i]) {
      return true;
    }
  }
  return false;
}

function convert(e) {
  const NATO = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu'
  };

  return NATO[e.toUpperCase()];
}

function toNato(str) {
  const punct = '[.,/#!$%^&*;:{}=-_`~()] "';
  const arr = str.split(' ');
  let splited = [];
  for (e of arr) {
    if (isIn(e[e.length - 1], punct)) {
      splited.push(e.slice(0, e.length - 1));
      splited.push(e[e.length - 1]);
    } else {
      splited.push(e);
    }
  }
  const encoded = splited.map(e => {
    if (isIn(e, punct)) {
      return e;
    } else {
      let temp = '';
      for (let i = 0; i < e.length; i++) {
        temp += convert(e[i]);
      }
      return temp;
    }
  });

  return encoded.join('');
}

module.exports = toNato;
