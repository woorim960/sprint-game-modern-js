const RacerValidator = {
  /**
   * 레이서가 결승선에 도착했는지를 불리언 타입으로 반환한다.
   *
   * @returns {Boolean}
   */
  isArrivedAtFinishLine: function (racer) {
    return racer.raceRate === "----------";
  },
};

module.exports = RacerValidator;
