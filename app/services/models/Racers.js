function Racers() {
  let _racers = [];

  this.getAll = function () {
    return _racers;
  };
  this.push = function (racer) {
    _racers.push(racer);
  };
}

module.exports = Racers;
