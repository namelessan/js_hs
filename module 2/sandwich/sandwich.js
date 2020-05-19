document.addEventListener('DOMContentLoaded', main);

function main() {
  const costs = {};
  document.querySelectorAll('table tr').forEach((row) => {
    const key = row.firstElementChild.textContent.trim();
    const price = row.lastElementChild.textContent.slice(1).trim();
    costs[key] = price ? parseFloat(price) : 0;
  });

  document
    .querySelectorAll('table tr td input')
    .forEach((box) => (box.onclick = (e) => updatePrice(e, costs)));
}

function updatePrice(e, costs) {
  const baseTotal = 2;
  const total = document.getElementById('total');

  const checkboxes = {};
  document.querySelectorAll('table tr').forEach((row) => {
    const key = row.firstElementChild.textContent.trim();
    const checked = row.querySelector('input').checked;
    checkboxes[key] = checked;
  });

  const checked = Object.keys(costs).filter((key) => {
    return checkboxes[key];
  });

  const sum = checked.reduce((currentSum, currentKey) => {
    return currentSum + costs[currentKey];
  }, baseTotal);

  total.textContent = sum;
}
