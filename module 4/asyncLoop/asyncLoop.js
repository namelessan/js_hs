function asyncLoop(arr, func, time) {
  arr.forEach((e, i) => {
    setTimeout(() => {
      func(e);
    }, i * time);
  });
}

module.exports = asyncLoop;
