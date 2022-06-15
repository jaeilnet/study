문자열을 뒤집는데도 10가지 그 이상의 해결책이 있다.
하지만 그 중에서 가장 좋은 해결책이 무엇일까?

예시가 코드가 있다.

ex)

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log(addUpTo(6)); // 21
```

ex2)

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(6)); // 21
```

더 나은 코드는 무엇인가요?

1. 빨라야한다?
2. 메모리 소비량?
3. 가독성?

상황마다 틀리겠지만 일반적으로는 1,2 가 될 것이다.

두 코드를 비교해보자

### Test

```js
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();

console.log(`${(t2 - t1) / 1000}초 소요`);

//0.10303895902633667초 소요
```

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();

console.log(`${(t2 - t1) / 1000}초 소요`);

// 0.000013000011444091798초 소요
```

비교해보면 1억을 연산할때 아래 코드가 10000배는 더 빠르다.

하지만 매 순간 매 코드를 이런식으로 비교할 순 없다.

그럼 어떻게 비교할까?

### 연산

코드 실행을 초로 측정하기 보다는 컴퓨터가 처리해야하는 연산 갯수를 세면 된다.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;

  // * 1번 + 1번 / 1번 총 3번의 연산
}
```

```js
function addUpTo(n) {
  let total = 0;
  // 1번의 연산(할당)

  // i = 1 1번의 연산(할당)
  for (let i = 1; i <= n; i++) {
    // i<=n , i ++, i== 3번의 연산이지만 n 갯수만큼 늘어난다.

    total += i;

    // + 과 = 2번의 연산이지만 n 갯수만큼 늘어난다.
  }

  return total;
}
```

첫번째 코드는 3번의 연산으로 `3` 으로 표기 할 수 있다.
두번쨰 코드는 `5n + 2` 으로 표기 할 수 있다.

두번째 코드 `5n + 2` 이유

### `5n`

1. i<=n; `1번`
2. i++ 증감과 할당 `2번`
3. - total += i 증감과 할당 `2번`

### `2`

1. let total = 0 `1번`
2. let i = 1 `1번`

첫번째 코드는 n 이 10이라도 3번의 연산을,
두번째 코드는 n 이 10이라면 5 '\*' 10 + 2 로 52번의 연산을 거친다.

이렇게 비교하는 것을 Big O 표기라고 한다.
