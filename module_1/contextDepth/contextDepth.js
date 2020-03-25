const contextDepth = function findDepth() {
  console.log(this);
  let level = 0;
  for (const key in this) {
    if (!this.hasOwnProperty(key)) continue;
    if (typeof this[key] === 'object') {
      const depth = findDepth(this[key]) + 1;
      level = Math.max(level, depth);
    }
  }
  return level;
};

module.exports = contextDepth;
