function Racers() {
  let _racers = [];
  return {
    getAll: function () {
      return _racers;
    },
    push: function (racer) {
      _racers.push(racer);
    },
  };
}

module.exports = Racers;
