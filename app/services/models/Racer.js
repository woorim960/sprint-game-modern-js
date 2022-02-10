const Racer = {
  _name: "",
  _raceRate: "",
  go: function () {
    this.raceRate += "-";
  },
  getName: function () {
    return this._name;
  },
  setName: function (name) {
    this._name = name;
  },
  getRaceRate: function () {
    return this._raceRate;
  },
};

module.exports = Racer;
