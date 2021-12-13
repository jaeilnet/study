### 함수 기초

```js
function sum(a, b){
 
  // 1과 3을 a, b 이라는 매개변수로 받음

console.log(x + y)
  // 4
}

// 함수는 연산을 재사용하기 위하여 사용함.

sum(4, 12)
sum(1, 3)
 // sum이 호출 될 때 인수로 1, 3을 넘김

//----------------------------------------------------

// return 사용

 function sum(a, b){
  return x + y
  // return을 사용 함으로써
  // sum이라는 함수 값으로 내보냄
}

const a = sum(4, 12)
console.log(a) // 16
console.log(sum(4, 12)) // 16
const b = sum(1, 3) 
console.log(b) // 4
```

## 함수 선언문

### **지역변수**

함수 내에서 선언한 변수인 지역변수는 함수 안에서만 접근이 가능

```js
function show(){
  let message = "안녕하세요"

  alert(message)
}

show()

alert(message) 
// 내부 변수 외부에서 호출
// 레퍼런스 에러 message is not defined

// 함수 스코프
```

### **외부변수**

함수 내부에서 함수 외부의 변수를 선언 가능

```js

let userName = "John"

function show () {
  let message = "hello" + userName
  alert(message)
  // 내부변수 호출 "안녕하세요"
}

show() // hello John

// 함수 외부 변수인 외부 변수에 접근 할 수 있음
```
