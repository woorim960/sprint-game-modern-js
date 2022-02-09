const Racer = {
  name: "",
  raceRate: "",
  conditionNumber: "",
  go: function () {
    this.raceRate += "-";
  },
  isArrivedAtFinishLine: function () {
    return this.raceRate === "----------";
  },
};

module.exports = Racer;
