const Racers = [];
const Racer = {
  name: "",
  raceRate: "",
  conditionNumber: "",
  go: function () {
    this.raceRate += "-";
  },
};

const RacerManager = {
  registerRacers: function (runners) {
    for (let runner of runners) {
      const racer = { ...Racer };
      racer.name = runner;

      Racers.push(racer);
    }
    return Racers;
  },
};

module.exports = RacerManager;
