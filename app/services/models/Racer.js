function Racer() {
  let _name = "";
  let _raceRate = "";
  return {
    go: function () {
      _raceRate += "-";
    },
    getName: function () {
      return _name;
    },
    setName: function (name) {
      _name = name;
    },
    getRaceRate: function () {
      return _raceRate;
    },
  };
}

module.exports = Racer;
