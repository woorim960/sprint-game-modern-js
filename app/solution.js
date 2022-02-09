/**
 * 게임 : 100m 단거리 육상
 * 기능 요구사항 :
 * 1. 달리기 선수 이름을 공백으로 구분하여 입력한다.
 * 2. 달리기 선수는 최소 1명 최대 5명까지 허용하며, 이름은 6자 이하만 가능하다.
 * 3. 각 선수는 '달리기' 혹은 '달리지 않기' 두가지 옵션 중 한가지를 랜덤으로 수행한다.
 * 4. '달리기' 옵션이 수행되는 조건은 0-9 사이의 값 중 랜덤으로 구한 값이 6 이상인 경우이며,
 * 그 외는 '달리지 않기'를 수행한다.
 * 5. 게임 화면에는 달리기 선수 이름과 달린 정도를 "-"로 나타내야한다. "-" 하나당 10m다.
 * ex) 철수 선수가 30m를 달린 경우 -> 철수: ---
 * ex) 맹구 선수가 100m를 달린 경우 (완주) -> 맹구: ----------
 * 6. 100m를 먼저 완주한 선수가 승리하며, 이때 "00 선수가 승리하였습니다." 를 출력하면서 게임은 종료된다.
 */

const { randomNum } = require("./utils/Random"); // 랜덤 값 반환하는 함수
const { waitMs } = require("./utils/Timer"); // 인자의 ms 만큼 실행을 잠시 중지하는 함수

function solution(runners) {
  // 여기서 게임을 만들어주세요.
  const racers = getRacers(runners);
  startRace(racers);
}

function startRace(racers) {
  let gameCount = 0;
  while (true) {
    console.log(`\n:: ${++gameCount}번째 달리기 시도 ::`);
    raceEachRacers(racers);

    if (isRaceOver(racers)) overRace(racers);
    waitMs(500);
  }
}

function raceEachRacers(racers) {
  for (let racer of racers) {
    if (isCanGo(randomNum(0, 9))) racer.go();
    printRaceInfo(racer);
  }
}

function isRaceOver(racers) {
  const winners = [];
  for (let racer of racers) {
    if (racer.raceRate === "----------") winners.push(racer);
  }

  return !!winners.length;
}

function overRace(racers) {
  for (let racer of racers) {
    if (racer.raceRate === "----------")
      console.log(`${racer.name} 선수가 승리하였습니다.`);
  }

  process.exit();
}

function printRaceInfo(racer) {
  console.log(`${racer.name}: ${racer.raceRate}`);
}

function isCanGo(number) {
  return number > 5;
}

function getRacers(runners) {
  const racers = [];
  for (let runner of runners) {
    const racer = {
      name: runner,
      raceRate: "",
      conditionNumber: "",
      go: function () {
        this.raceRate += "-";
      },
    };

    racers.push(racer);
  }
  return racers;
}

// ========================================
// 아래 코드는 신경쓰지 않아도 됩니다.
// ========================================

module.exports = solution;
