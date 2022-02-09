const { randomNum } = require("../../utils/Random"); // 랜덤 값 반환하는 함수
const { waitMs } = require("../../utils/Timer"); // 인자의 ms 만큼 실행을 잠시 중지하는 함수

const RaceBroadcaster = require("../views/RaceBroadcaster");
const RaceValidator = require("../utils/RaceValidator");
const RacerValidator = require("../utils/RacerValidator");

const RaceManager = {
  startRace: function (racers) {
    let gameCount = 0;
    while (true) {
      RaceBroadcaster.sayStartMessage(++gameCount);
      this.raceEachRacers(racers);

      if (RaceValidator.isRaceOver(racers)) this.overRace(racers);
      waitMs(500);
    }
  },
  raceEachRacers: function (racers) {
    for (const racer of racers) {
      if (RaceValidator.isGo(randomNum(0, 9))) racer.go();
      RaceBroadcaster.sayRaceInfo(racer);
    }
  },
  overRace: function (racers) {
    for (const racer of racers) {
      if (RacerValidator.isArrivedAtFinishLine(racer))
        RaceBroadcaster.sayWinner(racer.name);
    }

    process.exit();
  },
};

module.exports = RaceManager;
