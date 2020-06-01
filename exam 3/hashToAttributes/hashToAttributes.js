function convert(obj, pre = '') {
  if (Array.isArray(obj)) {
    return pre + '=' + `'${obj.join(' ')}'`;
  }
  if (typeof obj === 'number' || typeof obj === 'string') {
    return pre + '=' + `'${obj}'`;
  }

  const res = Object.keys(obj).map((k) => {
    const key = pre ? pre + '-' + k : k;
    return convert(obj[k], key);
  });
  return res.join(' ');
}

function hashToAttributes(obj) {
  const res = convert(obj);
  return res;
}

module.exports = hashToAttributes;
