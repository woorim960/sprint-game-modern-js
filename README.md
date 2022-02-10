# 100m 단거리 육상 게임
자바스크립트를 실제 프로그램 개발에 적용해보기 위한 응용 문제입니다.  

## 🖍 게임 설명
100m 단거리 육상 대회를 프로그램으로 초간단하게 구현한다.  
육상 대회에 참여하는 선수들의 이름을 입력하면, 선수들이 달리고 있는 장면을 실시간으로 볼 수 있다.  
가장 먼저 완주한 선수가 누군지 가려보자.

## 🙋🏻‍♂️ 들어가며
해답 코드는 [answer 브랜치](https://github.com/woorim960/sprint-game-modern-js/blob/answer-v1.0.0/app/solution.js)에 있으나, 이것만이 정답은 아니며 아래의 <a href="-기능-요구-사항">기능 요구 사항</a>을 만족하는 모든 경우가 정답입니다.  
필히 본인 스스로 먼저 풀어본 뒤 [해답 코드](https://github.com/woorim960/sprint-game-modern-js/tree/answer/app)와 [풀이 강의]()를 참고하길 바랍니다.  
아마추어편의 **해답 코드**와 **풀이 강의**에서는 [모자아프](https://github.com/woorim960/modern-javascript-from-amateur-to-pro)의 아마추어편에서 배운 내용을 기반으로 한 풀이를 최대한 응용하여 어떻게하면 깔끔하고 좋은 코드를 구현할 수 있는지를 다룹니다.    

### 해답 코드
* [아마추어용 - 구조화 버전](https://github.com/woorim960/sprint-game-modern-js/tree/for-amateur.structured)
* [아마추어용 - MVC 패턴을 이용한 객체지향 프로그래밍 버전: 객체만 이용](https://github.com/woorim960/sprint-game-modern-js/tree/for-amateur.oop)
* [주니어용 - MVC 패턴을 이용한 객체지향 프로그래밍 버전: 생성자 함수 이용(미완)](https://github.com/woorim960/sprint-game-modern-js/blob/answer-v1.0.0/app/solution.js)

## 📍 문제 풀이 방법
> 문제를 풀기 위해서는 [Node](https://nodejs.org/ko/)가 설치되어 있어야한다.
1. 내 컴퓨터에 [100m 단거리 육상 게임](https://github.com/woorim960/sprint-game-modern-js) 코드 저장소 다운받기
   * [다운받기](https://github.com/woorim960/sprint-game-modern-js/archive/refs/heads/master.zip)
2. **sprint-game-modern-js-master** 압축 파일을 해제하고 **sprint-game-modern-js-master** 폴더 안에 **app** 폴더를 연다.
3. **app** 폴더 안에 **solution.js** 파일을 코드 편집기로 열어 문제를 푼다.
   * 코드 편집기는 [Visual Studio Code](https://code.visualstudio.com/)를 추천한다.

### 코드 실행
1. **solution.js** 파일을 실행할 터미널을 열고, **solution.js** 파일이 존재하는 app 폴더 위치로 이동한다.
```sh
# /sprint-game-modern-js-master/app 폴더로 이동
$ cd /sprint-game-modern-js-master/app
```
2. ```npm start``` 명령어를 이용하여 코드를 실행한다.
   * ```node init.js``` 명령으로도 코드를 실행할 수 있다.
   * ```node solution.js```를 실행하면 안된다는 것에 주의하자.
```sh
# init.js 파일 실행
$ npm start
```

## 👨🏻‍🏫 기능 요구 사항
 1. 달리기 선수 이름을 공백으로 구분하여 입력한다.
 2. 달리기 선수는 최소 1명 최대 5명까지 허용하며, 이름은 6자 이하만 가능하다.
 3. 각 선수는 '달리기' 혹은 '달리지 않기' 두가지 옵션 중 한가지를 랜덤으로 수행한다.
 4. '달리기' 옵션이 수행되는 조건은 0-9 사이의 값 중 랜덤으로 구한 값이 6 이상인 경우이며, 그 외는 '달리지 않기'를 수행한다.
 5. 게임 화면에는 달리기 선수 이름과 달린 정도를 "-"로 나타내야한다. "-" 하나당 10m다.  
 ex) 철수 선수가 30m를 달린 경우  
 ```철수: ---```  
 ex) 맹구 선수가 100m를 달린 경우 (완주)  
 ```맹구: ----------```
 6. 100m를 먼저 완주한 선수가 승리하며, 이때 "00 선수가 승리하였습니다." 를 출력하면서 게임은 종료된다.

## 💻 구현 화면
<img width="150" alt="스크린샷 2022-02-09 오전 2 21 54" src="https://user-images.githubusercontent.com/56839474/153041188-91a36726-6620-40c9-816b-7305ba911ba6.png">
<img width="150" alt="스크린샷 2022-02-09 오전 2 22 13" src="https://user-images.githubusercontent.com/56839474/153041235-2624163d-2b4d-4a08-b12f-fba74673c651.png">

## 🎬 데모
* [데모 바로가기](https://youtu.be/8SQkPIyiato)

## ⌨️ 입력
* 100m 육상 경기에 참여할 사람 이름 (공백을 기준으로 구분)
  * ```>``` 이후부터 입력하면 된다.
  * 입력 폼은 기본 제공되므로 별도 구현할 필요없다. 
```sh
달리기 선수를 입력해주세요.
> 철수 유리 맹구 훈이 짱구
```
* 기능 요구사항에 어긋난 입력이 들어오면, 재입력해야한다.
```sh
달리기 선수를 입력해주세요.
> 철수 유리 맹구 훈이 짱구 우리밋
달리기 선수는 1명 이상 5명 이하여야 합니다.
게임을 재시작합니다.

달리기 선수를 입력해주세요.
> 
```

## 🖥 출력
* 달리기를 시도한 횟수와 각 선수가 달리는 정도가 매번 출력돼야 한다.
```sh
:: 1번째 달리기 시도 ::
철수: -
유리:
맹구: -
훈이: -
짱구: 

:: 2번째 달리기 시도 ::
철수: --
유리:
맹구: -
훈이: --
짱구: -
```

* 100m 완주가 먼저 끝난 선수는 승리 메세지를 출력한다.
```sh
짱구 선수가 승리하였습니다.
```

* 공동 우승의 경우, 공동 우승자도 출력한다.
```sh
철수 선수가 승리하였습니다.
짱구 선수가 승리하였습니다.
```

## 👨🏻‍💻 프로그래밍 요구사항
* 문제 풀이는 ```/app/solution.js``` 파일의 ```solution()``` 함수 안에서 하도록 한다.
  * 그래야만 기본 제공되는 입력폼을 이용할 수 있다.
  * ```solution()```의 매개변수인 ```runner```가 사용자가 입력한 값이다.
  * ```runner```는 사용자의 입력 값을 공백을 기준으로 구분하여 배열로 만들어진 값이다.
```js
// /app/solution.js

function solution(runner) {
  // 여기서 게임을 만들어주세요.
}
```

### 기본적인 유틸 제공
1. ```randomNum()```
   * 랜덤 값을 반환해주는 함수를 기본적으로 제공한다.
   * 단, ```/app/solution.js``` 파일 안에서 프로그래밍할 경우에만 이용할 수 있다.
   * 첫 번째 인자로는 최소값, 두 번째 인자로는 최대 값을 전달하면 두 개의 인자 사이의 값 중 랜덤으로 반환한다.
    ```js
    // 사용법

    const { randomNum } = require("./utils/Random"); // 랜덤 값 반환하는 함수

    function solution(runner) {
      // 여기서 게임을 만들어주세요.
      const number = randomNum(0, 9); // 0 - 9 사이의 값이 랜덤으로 반환된다. 
      console.log(number); // 0 - 9 사이의 임의 값 출력
    }
    ```
    * [randomNum()의 구조 살펴보러가기](https://github.com/woorim960/sprint-game-modern-js/blob/master/app/utils/Random.js)



2. ```waitMs()```
   * 원하는 시간 만큼 프로그램을 중지하는 함수를 기본적으로 제공한다.
   * 단, ```/app/solution.js``` 파일 안에서 프로그래밍할 경우에만 이용할 수 있다.
   * 첫 번째 인자로 지연 시키고 싶은 시간을 ```ms``` 밀리초 단위로 전달한다.
    ```js
    // 사용법

    const { waitMs } = require("./utils/Timer"); // 인자의 ms 만큼 실행을 잠시 중지하는 함수

    function solution(runner) {
      // 여기서 게임을 만들어주세요.
      while (true) {
        console.log(":: 1번째 달리기 시도 ::");
        waitMs(500); // 0.5초 만큼 지연이 생긴다.
      }
    }
    ```
    * [waitMs()의 구조 살펴보러가기](https://github.com/woorim960/sprint-game-modern-js/blob/master/app/utils/Timer.js)

## 💁🏻‍♂️ 출제자
우리밋_woorimIT
* [깃허브](https://github.com/woorim960)
* [기술 블로그](https://blog.naver.com/dnfla420)
* [유튜브](https://www.youtube.com/channel/UCS0F25vig_sPIQXMiK8IdSg)