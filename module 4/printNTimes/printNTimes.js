function printNTimes(str, time, num) {
  const timeId = setInterval(() => {
    console.log(str);
  }, time);

  setTimeout(() => {
    clearTimeout(timeId);
  }, time * (num + 1));
}

module.exports = printNTimes;
