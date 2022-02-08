class BasicError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends BasicError {}

class FunctionRequiredArgumentsError extends ValidationError {
  constructor(requiredNumber, invalidNumber) {
    super(
      `필수 인자 개수: ${requiredNumber}, 요청된 인자 개수: ${invalidNumber}`
    );
  }
}

class InputError extends ValidationError {
  constructor(message) {
    super(message);
  }
}

module.exports = { FunctionRequiredArgumentsError, InputError };
