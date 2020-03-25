const elevator = {
  floor: 0,
  init(num) {
    this.floor = num;
    return this;
  },
  up() {
    this.floor++;
    return this;
  },
  down() {
    this.floor--;
    return this;
  },
  printFloor() {
    console.log(this.floor);
    return this;
  }
};

module.exports = elevator;
