const RaceBroadcaster = {
  /**
   *
   * @param {Object} racer
   */
  sayRaceInfo: function (racer) {
    console.log(`${racer.name}: ${racer.raceRate}`);
  },
  /**
   *
   * @param {String} winner
   */
  sayWinner: function (winner) {
    console.log(`${winner} 선수가 승리하였습니다.`);
  },
  /**
   *
   * @param {number} gameCount
   */
  sayStartMessage: function (gameCount) {
    console.log(`\n:: ${gameCount}번째 달리기 시도 ::`);
  },
};

module.exports = RaceBroadcaster;
