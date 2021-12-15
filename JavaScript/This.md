### THIS
[코어 자바스크립트 this](https://ko.javascript.info/object-methods)  
[MDN this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

> this 란? 호출하는 방법(대상)에 따라 값이 달라진다.

### 1. **엄격모드 / 비엄격모드에서 차이가 있다.**
```js
// 비엄격모드

function test() {
  return this
}

console.log(test()) //  브라우저 :window, 노드 :global

// 엄격모드

"use strict"

function test2() {
  return this
}

console.log(test2())
// undefined


// 엄격모드에서는 this가 전역객체를 참조하고
// 비엄격모드에서는 함수범위를 참조한다. 
```
---
### 2. **화살표 함수와 일반함수의 this 는 다르다.**


```js
let user = {
  name: "jaeil",
  age: 0,

  userInfo() {
    console.log(this.name);
    //jaeil
  }
};

let user = {
  name : "jaeil",
  age: 0,

  userInfo : () => {
    console.log(this.name)
    // ???
  }
}

user.userInfo();
```
### 정리
화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음,  
화살표 함수 내부에서 this를 사욯아면, 그 this는 외부에서 값을 가져옴(전역)  
this 값은 **런타임에 결정** 됨  
