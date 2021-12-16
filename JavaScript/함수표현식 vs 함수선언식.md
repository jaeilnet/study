### 함수 표현식 vs 함수 선언식

```js 
// 함수 선언식 
// 이름여부에 따라 익명함수/기명함수로 불림
function sum(x, y){
  return x + y
}

sum(1, 3) // 4

// 함수 표현식
const sum = function(x, y) {
  return x + y
}

// 화살표 함수
const sum = (x, y) => {
  return x + y
}

// 화살표 함수 축약형
const sum = (x,y) => x+y
```

- 화살표 함수가 일반 함수와 다른 점은 축약형이 가능하다는 점이다. 

>호이스팅

- 함수 선언부가 유효범위 최 상단으로 끌어올려지는 현상

```js
// 함수 표현식

const a = 7

console.log(sum())
// type Error sum is not a function

const sum = function (){
  console.log(a * 2)
  // 14
}

// 함수 선언식

const a = 7

console.log(sum())
// 14
// 타입에러는 뜨지 않고 잘 출력 된다.

function sum(){
  console.log(a * 2)
  // 14
}
```
---
## 정리

함수 표현식 vs 함수 선언식 차이점
>[코어 자바스크립트 함수(함수표현식 vs 함수선언식)](https://ko.javascript.info/arrow-functions-basics)

1. **호이스팅** : 함수 선언문은 호이스팅 현상으로 최상단으로 끌어올려지기 때문에 어디서든 접근이 가능하다.
2. **스코프** : 함수 선언문이 코드 블록내에서만 유효하다. 외부에서 접근하지 못한다.
```js
let age = 16; // 16을 저장했다 가정합시다.

if (age < 18) {
  welcome();               // \   (실행)
                           //  |
  function welcome() {     //  |
    alert("안녕!");        //  |  함수 선언문은 함수가 선언된 블록 내
  }                        //  |  어디에서든 유효합니다
                           //  |
  welcome();               // /   (실행)

} else {

  function welcome() {
    alert("안녕하세요!");
  }
}

// 여기는 중괄호 밖이기 때문에
// 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.

welcome(); // Error: welcome is not defined
```
> 함수 표현식을 사용하면 if문 밖에서도 사용 가능
```js
let age = prompt("나이를 알려주세요.", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("안녕!");
  };

} else {

  welcome = function() {
    alert("안녕하세요!");
  };

}

welcome(); // 제대로 동작합니다.
```