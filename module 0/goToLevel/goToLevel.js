function goToLevel(a, b) {
  if (a >= 0 && a < 20 && b >= 0 && b < 20) {
    return b - a;
  } else {
    return 0;
  }
}

module.exports = goToLevel;
