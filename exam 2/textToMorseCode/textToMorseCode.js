const DICT1 = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  ' ': ' '
};

const DICT2 = {
  '.': '1',
  '-': '111',
  ' ': ' '
};

function textToMorseCode(str) {
  const list = str.split('');
  const translated = list.map(e => DICT1[e]);
  const converted = translated.map(e => e.split(''));
  const converted2 = converted.map((list, i) => {
    let join = '';
    for (let i = 0; i < list.length; i++) {
      join += DICT2[list[i]];
      if (i !== list.length - 1) {
        join += '0';
      }
    }
    return join;
  });

  let res = '';
  for (let i = 0; i < converted2.length; i++) {
    if (converted2[i] === ' ') {
      res += '0000000';
    } else {
      res += converted2[i];
      if (i !== converted2.length - 1 && converted2[i + 1] !== ' ') {
        res += '000';
      }
    }
  }
  console.log(res);
}

module.exports = textToMorseCode;
