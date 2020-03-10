function killSheep(part) {
  const i = part.indexOf('W');
  if (i === -1) {
    return part;
  } else {
    return part.replace(/S/gi, '.');
  }
}

// function killSheepOutSide(outside) {
//   let res = [];
//   if (outside.join('').indexOf('W') !== -1) {
//     for (part of outside) {
//       res.push(killSheep(part));
//       return res;
//     }
//   } else {
//     return outside;
//   }
// }

function night(str) {
  let part = '';
  let outside = '';
  let inside = [];
  let field = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      outside += part;
      part = '[';
    } else if (str[i] === ']') {
      part += ']';
      inside.push(killSheep(part));
      part = '';
    } else {
      part += str[i];
    }
  }
  console.log(outside, inside);

  const killOutSide = killSheepOutSide(outside);
  for (let i = 0; i < killOutSide.length; i++) {
    field += killOutSide[i] + inside[i];
  }

  return field;
}

module.exports = night;
