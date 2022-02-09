const RaceValidator = {
  /**
   *
   * @param {Number} number
   * @returns {Boolean}
   */
  isGo: function (number) {
    return number > 5;
  },
  /**
   *
   * @param {Array} racers
   * @returns {Boolean}
   */
  isRaceOver: function (racers) {
    const winners = [];
    for (let racer of racers) {
      if (racer.isArrivedAtFinishLine()) winners.push(racer);
    }

    return !!winners.length;
  },
};

module.exports = RaceValidator;
