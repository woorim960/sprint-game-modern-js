const { FunctionRequiredArgumentsError } = require("../../utils/Error");
const { isNumber } = require("../../utils/Validator");

const RaceValidator = {
  /**
   *
   * @param {Number} number
   * @returns {Boolean}
   */
  isGo: function (number) {
    if (arguments.length !== 1)
      throw new FunctionRequiredArgumentsError(1, arguments.length);
    if (!isNumber(number))
      throw TypeError(
        "RaceValidator.isGo 메서드의 인자 타입은 숫자여야 합니다."
      );
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
