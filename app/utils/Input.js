const readline = require("readline");
const { stdin, stdout } = require("process");
const { InputError } = require("./Error");

const rl = readline.createInterface({ input: stdin, output: stdout });

function input(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      const inputDatas = answer.split(" ").filter((el) => el !== "");
      const invalidData = inputDatas.find((el) => el.length > 6);

      if (invalidData)
        return reject(new InputError("선수 이름은 6자 이하여야 합니다."));
      if (inputDatas.length < 1 || inputDatas.length > 5)
        return reject(
          new InputError("달리기 선수는 1명 이상 5명 이하여야 합니다.")
        );
      else {
        resolve(inputDatas);
        rl.close();
      }
    });
  });
}

rl.on("close", () => {
  console.log("\n===== 달리기 시작 =====");
});

module.exports = { input };
