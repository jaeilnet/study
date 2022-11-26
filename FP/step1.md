# 함수형 자바스크립트 소개

## **함수형을 알아보기전에**

### **`순수함수`**

순수함수란 말 그대로 순수하기 때문에 외부의 영향을 받지도 주지도 않아야한다.

외부의 영향을 받는 함수는 순수하지 않는 함수다.

언제 어디서 호출하더라도 인풋이 같으면 리턴하는 결과 값도 같아야한다.

외부의 영향을 주는 함수는 순수함수가 아니다.

순수함수는 언제 호출해도 결과 값이 같아서 평가시점이 중요하지 않다.

순수함수가 아닌 함수는 파라미터 값이 언제 어떻게 바꼈는지가 중요하기 때문에 평가시점에 따라 로직이 변경 될 수도 있어서 평가시점이 중요하다.

### **`간단한 예제)`**

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

### **`객체`**

객체를 다룰 때도 중요한데,

객체는 복사하지 않는 이상 변수에 할당한다고해도 원본의 주소값을 그대로 가져오기 떄문에(참조)

변수에 할당 한 객체를 바꿔도 원본도 같이 바뀌어버린다.

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

### **`일급함수`**

함수가 다른 일급객체와 동일하게 다루어 질때 일급함수라고 한다.
일급객체란?

일급객체는 OOP(객체 지향 프로그래밍) 의 그 객체이다.

1. 변수에 할당 할 수 있어야하고,
2. 객체의 인자로 넘길 수 있어야하고,
3. 객체를 리턴 값으로 리턴 할 수 있어야한다.

다시, 첫번쨰 문장을 인용해보면 일급함수란 일급객체와 동일하게 다루어질때라고 할 수 있다.

일급함수란?

1. 변수에 할당 할 수 있어야하고 ( 표현식 )
2. 객체의 인자로 넘길 수 있어야하고 ( 콜백 )
3. 함수 리턴 값으로 리턴 할 수 있어야한다. ( 클로저 )

자바스크립트의 함수는 `일급함수` 입니다.

다시, 자바스크립트에 함수는 `함수표현식`이 있고 `함수선언식`의 2가지 함수가 있다.
생성자 함수 or 화살표 함수는 함수표현식의 함축형이니 제외 하겠습니다.

```js
// 함수 표현식
const foo = function () {
  console.log("foo");
};
foo();

// 함수 선언식

function abc() {
  console.log("나 선언");
}

abc();
```

함수표현식과 함수선언식의 차이는 `호이스팅, 클로저, 콜백함수, 익명`의 특징이 있다.

다시, 특징을 하나씩 살펴보면,

### `1. 호이스팅`

```js
// 1. 호이스팅

foo(); // error
abc(); // 나선언

// 함수 표현식
const foo = function () {
  console.log("foo");
};

// 함수 선언식

function abc() {
  console.log("나 선언");
}
```

위와 같이 함수를 변수에 할당하여 변수처럼 사용하는 `표현식`은 일반적으로 알고있는 변수 선언할때 쓰이는 let const 와 같이 `호이스팅에 영향을 받지 않는다`.

다시, 호이스팅이란?
변수와 선언부를 분리하여 선언부만 최상단으로 끌어올려진것 처럼 동작하는 것을 말한다.

```js
console.log(a); // 1
console.log(b); // 레퍼런스 에러
console.log(c); // b 때문에 에러러 보이지도 않는다 하지만 레퍼런스 에러

var a = 1;
let b = 2;
const c = 3;
```

### `2. 클로저`

```js
const abc = function fff(a) {
  return function ddd(b) {
    return a + b;
  };
};

// 1번 호출 방법
abc(10)(5); // 15

//2 번 호출 방법
const result = abc(10);
result(5); // 15
```

클로저의 개념은 실행컨텍스트의 렉시컬 환경 / 환경변수를 이야기하면 어렵게만 느껴질수 있으므로 쉽게 풀어서 이야기를 하자면, 클로저의 개념을 딱 이거다! 라고 정의하기 어렵지만 위의 예제에서 사용한 abc 함수의 a 값(`10`)을 가비지컬렉터(메모리회수) 하지않고 기억하고 있다가 abc 를 담은 변수 result 에 파라미터 값(`b`)을 넘김으로써 10 + `5` 또는 10 + `10` 이런식의 동작이라고 이야기 할 수 있다.

동작원리는 먼저 최하단 스코프의 ddd 함수 실행환경에서는 a + b 를 해야하는데 b 는 찾을수 있어도 a 는 찾을 수가 없다.

그래서 스코프체인을 통해서 a 를 찾기위해 바로 위의 실행환경으로 가본다. 함수 fff 의 파라미터 값 a 를 참조한다.

그러고 a + b 를 연산하고 ddd 함수 역할이 끝났으니 실행환경이 종료되어서 없어져야하는데 외부함수의 a 값을 계속 참조하고 있으니 사라지지 않는다.

결국 return 값으로 내부함수의 결과 값(15)을 리턴했고 fff 함수도 종료 되어야하는데 함수 ddd 는 여전히 a 를 바라보고있기 때문에 스코프의 연결을 끊지 못해서 가비지컬렉팅이 되지 않는다.

### **클로저의 특징**

1. 정보은닉(프라이빗 변수)과 함수를 캡슐화 할수있다는 라는 장점이 있고, 아까 살펴본 것과 같이 단점으로는 가비지컬렉팅을 하지 않으므로 메모리의 누수가 있을 수 있습니다.

위 예제에서는 인자 a 를 넘겨서 a 를 기억하게 했지만 캡슐화 은닉화의 목적으로는 내부에서 변수를 만들수 있습니다.

```js
const abc = function fff() {
  let a = 10;
  return function ddd(b) {
    return a + b;
  };
};

// 1번 호출 방법
abc()(5); // 15
//2 번 호출 방법

a = 20;

const result = abc(10);
result(5); // 여전히 15
```

여기서 변수 a 를 변경 할 방법이 없어보이네요 이런 의미로 a 를 `프라이빗 변수 또는 은닉`했다고 볼 수 있습니다.
다른 예제로 리액트의 useState 가 클로저로 이루어져있습니다.

```js
function useState(initVal) {
  let currentState = initVal;
  const state = () => currentState;
  const setState = (newVal) => {
    currentState = newVal;
  };
  return [state, setState];
}

const [count, setCount] = useState(20);

console.log(count()); // 20
console.log(count()); // 20
console.log(count()); // 20
setCount(30); // 30
console.log(count()); // 30
console.log(count()); // 30
setCount(count() + 20);
console.log(count()); // 50
setCount(count() + 20);
console.log(count())``; // 70
```

### `3. 콜백함수`

콜백 함수는 비동기함수에서 순서를 보장하기 위해 동기적으로 사용하는 함수를 말하는데

비동기 함수란 setTimeout 과 같은 함수가 있을 수 있다.

3초 뒤에 실행해야 할 함수를 정의 할때

```js
// 함수 선언식
setTimeout(function () {
  console.log("나 3초뒤에 나옴");
}, 3000);

// 진짜 3초뒤에 나온다
```

```js
// 함수 표현식
const test = function () {
  console.log("3초 뒤에 나옴");
};

setTimeout(test, 3000);
```

### 결론

함수의 선언식도 변수에 담으면 그게 함수 표현식이 되는거고,
그 함수를 선언식으로 사용하던 표현식으로 사용하던 특징만 있을 뿐
일급함수다 라고 볼 수 있다.
