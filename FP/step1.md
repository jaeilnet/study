# 함수형 자바스크립트 소개

## 순수함수

순수함수란 말 그대로 순수하기 때문에 외부의 영향을 받지도 주지도 않아야한다.

외부의 영향을 받는 함수는 순수하지 않는 함수다.

언제 어디서 호출하더라도 인풋이 같으면 리턴하는 결과 값도 같아야한다.

외부의 영향을 주는 함수는 순수함수가 아니다.

순수함수는 언제 호출해도 결과 값이 같아서 평가시점이 중요하지 않다.

순수함수가 아닌 함수는 파라미터 값이 언제 어떻게 바꼈는지가 중요하기 때문에 평가시점에 따라 로직이 변경 될 수도 있어서 평가시점이 중요하다.

**간단한 예제)**

```js
// 순수함수
function add(a, b) {
  return a + b;
}

add(10, 5); // 15
add(10, 5); // 15
add(10, 5); // 15
add(10, 5); // 15

let c = 20;
// 비순수함수
function add2(a, b) {
  return a + b + c;
}

add(10, 5); // 35
add(10, 5); // 35
add(10, 5); // 35
add(10, 5); // 35

c = 40;

add(10, 5); // 55
```

add 함수는 언제 어디서든 10과 5만 있으면 15를 리턴하는 대표적인 순수함수이다.

하지만 add2는 언제 바뀔지 모르는 c 의 영향을 받기 때문에 비순수함수이다.

### 객체

객체를 다룰 때도 중요한데,
객체는 복사하지 않는 이상 변수에 할당한다고해도 원본의 주소값을 그대로 가져오기 떄문에 변수에 할당 한 객체를 바꿔도 원본도 같이 바뀌어버린다.

```js
// 원본배열 훼손
const obj = { a: 1 };
const b = obj;
b.a = 3;

console.log(obj, b);
// { a: 3 } { a: 3 }

function add(obj, c) {
  return (obj.a += c);
}

console.log(add(obj, b.a)); // 6
console.log(obj); // { a : 6 }
console.log(add(obj, b.a)); // 12
console.log(obj); // { a : 12 }
console.log(add(obj, b.a)); // 24
console.log(obj); // { a : 24}
```

```js
// 원본배열 유지
const obj = { a: 1 };
// 얕은 복사
const b = { ...obj };
b.a = 3;

console.log(obj, b);
// { a: 1 } { a: 3 }

function add(obj, c) {
  const abc = { ...obj };

  return (abc.a += c);
}

console.log(obj); // { a : 1}
console.log(add(obj, 10)); // 11
console.log(obj); // { a : 1}
console.log(add(obj, 10)); // 11
console.log(obj); // { a : 1}
console.log(add(obj, 10)); // 11
console.log(obj); // { a : 1}
console.log(add(obj, 10)); // 11
console.log(obj); // { a : 1}
console.log(add(obj, 10)); // 11
```
