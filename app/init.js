const { InputError } = require("./utils/Error");
const { input } = require("./utils/Input");
const solution = require("./solution");

async function startGame() {
  try {
    var runners = await input("달리기 선수를 입력해주세요.\n> ");
    solution(runners);
  } catch (e) {
    if (e instanceof InputError) {
      console.error(e.message);
      restartGame();
    } else console.error(e);
  }
}

function restartGame() {
  console.log("게임을 재시작합니다.\n");
  startGame();
}

startGame();
