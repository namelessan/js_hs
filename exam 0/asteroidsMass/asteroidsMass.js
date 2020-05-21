function asteroidsMass(params) {
  const matrix = Array.from(params);
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) continue;
      const { sum, visited } = getMass(matrix, i, j);
      visited.forEach((pos) => {
        const [x, y] = pos.split(':');
        matrix[parseInt(x)][parseInt(y)] = 0;
      });
      res.push(sum);
    }
  }

  return res.sort((a, b) => a - b);
}

function getMass(matrix, i, j) {
  const height = matrix.length;
  const width = matrix[0].length;

  const queue = [[i, j]];
  const visited = [];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    const current = `${x}:${y}`;

    if (visited.includes(current)) continue;

    if (x < height - 1 && matrix[x + 1][y]) {
      queue.push([x + 1, y]);
    }
    if (x < height && x > 0 && matrix[x - 1][y]) {
      queue.push([x - 1, y]);
    }
    if (y < width - 1 && matrix[x][y + 1]) {
      queue.push([x, y + 1]);
    }
    if (y < width && y > 0 && matrix[x][y - 1]) {
      queue.push([x, y - 1]);
    }

    visited.push(current);
  }

  const sum = visited.reduce((sum, pos) => {
    const [x, y] = pos.split(':');
    return sum + matrix[parseInt(x)][parseInt(y)];
  }, 0);

  return { sum, visited };
}

module.exports = asteroidsMass;

const space = [
  [10, 5, 0, 0, 0, 0, 1],

  [5, 0, 0, 0, 0, 0, 1],

  [10, 0, 0, 0, 0, 0, 1],

  [0, 0, 0, 0, 0, 0, 0],

  [23, 0, 0, 0, 0, 0, 0],
];

console.log(asteroidsMass(space)); // $> [ 30, 3, 23 ]

const massSpace = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 5, 5, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 7, 9, 0, 0, 0],
  [0, 0, 4, 7, 7, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(asteroidsMass(massSpace));

const massSpace2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 9, 4],
  [0, 0, 0, 6, 0, 0, 0, 9, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(asteroidsMass(massSpace2));
