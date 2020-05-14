function executeAll(funcs) {
  return function () {
    const _this = this;
    funcs.forEach((f) => {
      f.call(_this);
    });
  };
}

// const fn = executeAll([
//   function () {
//     console.log(this.x);
//   },

//   function () {
//     console.log(this.x / 2);
//   },
// ]);

// fn.call({ x: 42 });

module.exports = executeAll;
