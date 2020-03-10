function throttle(func, wait) {
  let inThrottle;
  console.log(arguments);
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}

module.exports = throttle;
