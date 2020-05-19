document.addEventListener('DOMContentLoaded', main);

function main() {
  const kitty = getKitty();
  kitty.onclick = changePosition;
}

function randomPosition() {
  const x = Math.floor(Math.random() * 3);
  const y = Math.floor(Math.random() * 3);

  return { x, y };
}

function getPosition({ x, y }) {
  const cell = document.querySelectorAll('table tr')[y].children[x];
  return cell;
}

function getKitty() {
  const kitty = document.querySelector('table tr td img');
  return kitty;
}

function changePosition(e) {
  const currentPosition = {
    x: e.target.parentNode.cellIndex,
    y: e.target.parentNode.parentNode.rowIndex,
  };
  const kitty = getKitty();
  clearKitty();

  const newPosition = getNewPosition(currentPosition);
  newPosition.appendChild(kitty);
}

function getNewPosition(currentPosition) {
  let position = randomPosition();
  while (position.x === currentPosition.x && position.y === currentPosition.y) {
    position = randomPosition();
  }
  return getPosition(position);
}

function clearKitty() {
  const kitty = getKitty();
  const parentKitty = kitty.parentNode;
  parentKitty.removeChild(kitty);
}
