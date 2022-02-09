const ErrorThrower = {
  throwFunctionRequiredArgumentsError: function (
    requiredArgumentsCount,
    deliveredArgumentsCount
  ) {
    if (requiredArgumentsCount !== deliveredArgumentsCount)
      throw new FunctionRequiredArgumentsError(
        requiredArgumentsCount,
        deliveredArgumentsCount
      );
  },
  throwTypeError: function (value, funcName, isType) {
    if (!isType(value))
      throw new TypeError(
        `${funcName} 메서드의 인자 타입은 배열이어야 합니다.`
      );
  },
};

module.exports = ErrorThrower;
