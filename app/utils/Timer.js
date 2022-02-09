const { FunctionRequiredArgumentsError } = require("./Error");
const { isNumber } = require("./Validator");

/**
 * 첫 번째 인자의 시간 만큼 프로그램의 실행을 중지한다.
 * 단위: 밀리초
 *
 * @param {number} ms
 */
function waitMs(ms) {
  if (arguments.length !== 1)
    throw new FunctionRequiredArgumentsError(1, arguments.length);
  if (!isNumber(ms)) {
    console.log(typeof ms);
    throw new TypeError("waitMs의 인자는 숫자 타입이어야 합니다.");
  }

  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

module.exports = { waitMs };
