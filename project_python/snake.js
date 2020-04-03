const snakeColor = 'white';
const snakeHeadColor = 'black';
const board = document.getElementsByTagName('tr');
const height = board.length;
const width = board[0].children.length;
const boardScore = document.getElementById('score');
const speed = 300; // ms
const cellSize = 30;
const defaultSnake = [
  {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height)
  }
];

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = 'audio/dead.mp3';
eat.src = 'audio/eat.mp3';
up.src = 'audio/up.mp3';
right.src = 'audio/right.mp3';
left.src = 'audio/left.mp3';
down.src = 'audio/down.mp3';

let snake = defaultSnake;
let food = generateFood(snake);
let score = 0;
let bonus = null;

function generateFood(snake) {
  tmp = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height)
  };
  for (i = 0; i < snake.length; i++) {
    if (tmp.x == snake[i].x && tmp.y == snake[i].y) {
      tmp.x = Math.floor(Math.random() * width);
      tmp.y = Math.floor(Math.random() * height);
    }
  }
  return tmp;
}

function generateBonus() {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height)
  };
}
function drawBoard() {
  for (let i = 0; i < height; i += 2) {
    for (let j = 0; j < width; j++) {
      const cell = getCellByPosition(j, i);
      cell.style.backgroundImage = 'none';
      if (j % 2 === 0) {
        cell.style.backgroundColor = '#1c8a2e';
      } else {
        cell.style.backgroundColor = '#54e36b';
      }
    }
  }

  for (let i = 1; i < height; i += 2) {
    for (let j = 0; j < width; j++) {
      const cell = getCellByPosition(j, i);
      cell.style.backgroundImage = 'none';
      if (j % 2 === 0) {
        cell.style.backgroundColor = '#54e36b';
      } else {
        cell.style.backgroundColor = '#1c8a2e';
      }
    }
  }
}

function eatFood(snake, food) {
  for (part of snake) {
    if (part.x === food.x && part.y === food.y) {
      return true;
    }
  }
  return false;
}

function drawFood(food) {
  const cell = getCellByPosition(food.x, food.y);
  cell.style.backgroundImage = "url('img/food.png')";
}

function drawBonus(bonus) {
  const cell = getCellByPosition(bonus.x, bonus.y);
  cell.style.backgroundImage = "url('img/gold.png')";
  cell.style.backgroundSize = 'contain';
}

function rotateHead(d) {
  trans = '';
  if (d === 'LEFT') {
    trans = 'rotate(180deg)';
  }
  if (d === 'RIGHT') {
    trans = 'rotate(0deg)';
  }
  if (d === 'DOWN') {
    trans = 'rotate(90deg)';
  }
  if (d === 'UP') {
    trans = 'rotate(270deg)';
  }
  return trans;
}

function drawSnake(snake, d) {
  for (i = 0; i < snake.length; i++) {
    const cell = getCellByPosition(snake[i].x, snake[i].y);
    if (i == 0) {
      cell.style.backgroundImage = "url('img/yellowHeadStraight')";
      cell.style.transform = rotateHead(d);
      cell.style.backgroundSize = 'contain';
    } else if (i == snake.length - 1) {
      cell.style.backgroundImage = "url('img/yellowTail')";
    } else {
      cell.style.backgroundImage = "url('img/200.gif')";
    }
  }
}

function getCellByPosition(x, y) {
  return board[y].children[x];
}

function changeDirection(event) {
  if (event.keyCode === 37 && d !== 'RIGHT') {
    d = 'LEFT';
    left.play();
  } else if (event.keyCode === 38 && d !== 'DOWN') {
    d = 'UP';
    up.play();
  } else if (event.keyCode === 39 && d !== 'LEFT') {
    d = 'RIGHT';
    right.play();
  } else if (event.keyCode === 40 && d !== 'UP') {
    d = 'DOWN';
    down.play();
  }
}

function isCollided(newHead, snake) {
  for (part of snake) {
    if (newHead.x === part.x && newHead.y === part.y) {
      return true;
    }
  }
  return false;
}

function hitWall(snakeX, snakeY) {
  if (snakeX < 0 || snakeX >= width || snakeY < 0 || snakeY >= height) {
    return true;
  }
  return false;
}

document.addEventListener('keydown', changeDirection);
let d;
// let count = 0

function draw() {
  // draw everything here
  drawBoard();
  drawSnake(snake, d);
  drawFood(food);
  // count += 1

  // console.log(count)
  // if (bonus == null && score > 0) {
  //   bonus = generateBonus();
  //   count += 1
  // }
  // else if (bonus != null && count > 10) {
  //   console.log(count)
  //   bonus = null
  // }
  boardScore.textContent = score;

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d === 'LEFT') snakeX -= 1;
  if (d === 'RIGHT') snakeX += 1;
  if (d === 'UP') snakeY -= 1;
  if (d === 'DOWN') snakeY += 1;
  if ((snakeX === food.x && snakeY === food.y) || eatFood(snake, food)) {
    score++;
    food = generateFood(snake);
    eat.play();
  } else {
    snake.pop();
  }

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  if (hitWall(snakeX, snakeY) || isCollided(newHead, snake)) {
    clearInterval(game);
    dead.play();
  }

  snake.unshift(newHead);
}

let game = setInterval(draw, speed);
