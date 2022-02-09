const RacerValidator = require("./RacerValidator");
const ErrorThrower = require("../utils/ErrorThrower");
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
    ErrorThrower.throwFunctionRequiredArgumentsError(1, arguments.length);
    ErrorThrower.throwTypeError(racers, "RaceValidator.isRaceOver", isArray);

    const winners = [];
    for (let racer of racers) {
      if (RacerValidator.isArrivedAtFinishLine(racer)) winners.push(racer);
    }

    return !!winners.length;
  },
};

module.exports = RaceValidator;
