function isFit(mattrix) {
  let minX = Infinity;
  let maxX = 0;
  let minY = Infinity;
  let maxY = 0;
  for (cordinate of mattrix) {
    const [x, y] = cordinate;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (maxX - minX > 3 || maxY - minY > 3) {
    return false;
  }

  return true;
}

module.exports = isFit;
