const { FunctionRequiredArgumentsError } = require("./Error");
/**
 * 인자가 숫자 타입인지 검사한다.
 *
 * @param {*} number
 * @returns {boolean}
 */
function isNumber(value) {
  if (arguments.length !== 1)
    throw new FunctionRequiredArgumentsError(1, arguments.length);
  return typeof value === "number";
}

module.exports = { isNumber };
