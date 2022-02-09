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
};

module.exports = RaceBroadcaster;
