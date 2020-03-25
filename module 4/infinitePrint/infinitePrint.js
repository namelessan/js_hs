function infinitePrint(arg, time) {
  setInterval(() => {
    console.log(arg);
  }, time);
}

module.exports = infinitePrint;
