const RacerValidator = require("./RacerValidator");
const { FunctionRequiredArgumentsError } = require("../../utils/Error");
const { isNumber, isArray } = require("../../utils/Validator");

const RaceValidator = {
  /**
   * 레이서가 '달리기'를 수행할 수 있는지를 불리언 타입으로 반환한다.
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
   * 육상 경기가 끝났는지를 불리언 타입으로 반환한다.
   *
   * @param {Array} racers
   * @returns {Boolean}
   */
  isRaceOver: function (racers) {
    if (arguments.length !== 1)
      throw new FunctionRequiredArgumentsError(1, arguments.length);
    if (!isArray(racers))
      throw new TypeError(
        "RaceValidator.isRaceOver 메서드의 인자 타입은 배열이어야 합니다."
      );

    const winners = [];
    for (let racer of racers) {
      if (RacerValidator.isArrivedAtFinishLine(racer)) winners.push(racer);
    }

    return !!winners.length;
  },
};

module.exports = RaceValidator;
