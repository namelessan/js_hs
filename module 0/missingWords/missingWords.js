function notIn(key, arr) {
  const res = arr.filter(e => e.toLowerCase() === key.toLowerCase());
  return res.length === 0;
}

function removePunct(word) {
  const match_end = word.match(/[#.,:!?]$/g);
  const match_start = word.match(/^[.,:!#?]/g);
  if (match_end) {
    return word.slice(0, word.length - 1);
  } else if (match_start) {
    return word.slice(1);
  } else {
    return word;
  }
}

function missingWords(sen, arr) {
  const words = sen.split(' ');
  let missings = [];
  for (word of words) {
    const e = removePunct(word);
    if (notIn(e, arr)) {
      missings.push(e);
    }
  }
  return missings.sort((a, b) => a.length - b.length);
}

module.exports = missingWords;
