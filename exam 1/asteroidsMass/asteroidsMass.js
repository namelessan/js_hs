function isIn(cordinate, collection) {
  const [i, j] = cordinate;
  for ([x, y] of collection) {
    if (x === i && y === j) {
      return true;
    }
  }

  return false;
}

function total(collection, matrix) {
  let sum = 0;
  for ([i, j] of collection) {
    sum += matrix[i][j];
  }
  return sum;
}

function asteroidsMass(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let visited = [];
  let neighbor = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!isIn([i, j], visited)) {
        visited.push([i, j]);
      }
      if (!isIn([i, j], neighbor)) {
        neighbor.push([i, j]);
      }
      for ([i, j] of neighbor) {
        if (matrix[i][j] !== 0) {
          neighbor.push([i, j]);
        }
      }
    }
  }
}

module.exports = asteroidsMass;
