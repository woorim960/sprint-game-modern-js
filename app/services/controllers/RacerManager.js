const Racers = require("../models/Racers");
const Racer = require("../models/Racer");

const RacerManager = {
  registerRacers: function (runners) {
    const racers = new Racers();
    for (const runner of runners) {
      const racer = new Racer();
      racer.setName(runner);

      racers.push(racer);
    }
    return racers.getAll();
  },
};

module.exports = RacerManager;
