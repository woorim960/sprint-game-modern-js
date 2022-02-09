const Racers = require("../models/Racers");
const Racer = require("../models/Racer");

const RacerManager = {
  registerRacers: function (runners) {
    for (const runner of runners) {
      const racer = { ...Racer };
      racer.name = runner;

      Racers.push(racer);
    }
    return Racers.getAll();
  },
};

module.exports = RacerManager;
