const { FunctionRequiredArgumentsError } = require("./Error");
const { isNumber } = require("./Validator");

/**
 * 첫 번째 인자 이상 두 번째 인자 이하의 값을 랜덤으로 반환한다.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNum(min = 0, max = 9) {
  if (arguments.length !== 2)
    throw new FunctionRequiredArgumentsError(2, arguments.length);
  if (!isNumber(min) || !isNumber(max))
    throw new TypeError("randomNum의 인자는 숫자 타입이어야 합니다.");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { randomNum };
