function isFit(coors) {
  const size = 3;

  if (coors.length === 0) return true;

  let [minX, minY] = coors[0];
  let [maxX, maxY] = [minX, minY];
  coors.forEach((coor) => {
    if (coor[0] < minX) minX = coor[0];
    if (coor[1] < minY) minY = coor[1];

    if (coor[0] > maxX) maxX = coor[0];
    if (coor[1] > maxY) maxY = coor[1];
  });

  return maxX - minX <= size && maxY - minY <= size;
}

module.exports = isFit;

// console.log(isFit([])); // $> true

// console.log(isFit([[1, 3]])); // $> true

// console.log(
//   isFit([
//     [1, 3],
//     [3, 3],
//   ])
// ); // $> true

// console.log(
//   isFit([
//     [1, 3],
//     [3, 3],
//     [3, 7],
//   ])
// ); // $> false

// console.log(
//   isFit([
//     [1, 3],
//     [3, 3],
//     [3, 5],
//   ])
// ); // $> true

// console.log(
//   isFit([
//     [1, 3],
//     [3, 3],
//     [3, 6],
//   ])
// ); // $> true

// console.log(
//   isFit([
//     [1, 3],
//     [3, 3],
//     [3, 6],
//     [3, 2],
//   ])
// ); // $> false
