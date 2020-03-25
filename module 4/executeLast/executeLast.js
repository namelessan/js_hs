function executeLast(func, ...args) {
  setTimeout(() => {
    func(...args);
  }, 0);
}

module.exports = executeLast;
