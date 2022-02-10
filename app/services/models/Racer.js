function Racer() {
  let _name = "";
  let _raceRate = "";

  this.go = function () {
    _raceRate += "-";
  };
  this.getName = function () {
    return _name;
  };
  this.setName = function (name) {
    _name = name;
  };
  this.getRaceRate = function () {
    return _raceRate;
  };
}

module.exports = Racer;
