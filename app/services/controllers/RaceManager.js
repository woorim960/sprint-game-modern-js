const { randomNum } = require("../../utils/Random"); // 랜덤 값 반환하는 함수
const { waitMs } = require("../../utils/Timer"); // 인자의 ms 만큼 실행을 잠시 중지하는 함수

const RaceBroadcaster = require("../views/RaceBroadcaster");
const RaceValidator = require("../utils/RaceValidator");

const RaceManager = {
  startRace: function (racers) {
    let gameCount = 0;
    while (true) {
      console.log(`\n:: ${++gameCount}번째 달리기 시도 ::`);
      this.raceEachRacers(racers);

      if (RaceValidator.isRaceOver(racers)) this.overRace(racers);
      waitMs(500);
    }
  },
  raceEachRacers: function (racers) {
    for (let racer of racers) {
      if (RaceValidator.isGo(randomNum(0, 9))) racer.go();
      RaceBroadcaster.sayRaceInfo(racer);
    }
  },
  overRace: function (racers) {
    for (let racer of racers) {
      if (racer.raceRate === "----------")
        RaceBroadcaster.sayWinner(racer.name);
    }

    process.exit();
  },
};

module.exports = RaceManager;
