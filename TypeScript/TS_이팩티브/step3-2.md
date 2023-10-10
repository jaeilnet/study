# 타입좁히기

타입 넓히기의 반대로 범위를 점차 좁혀나가는 방식입니다.

가장 일반적인 예시는 null 체크 입니다.

```ts
const el = document.getElementById("foo"); // type HTMLelement | null

if (el) {
  el.innerHTML = "im not null";
} else {
  el;
  alert("no element #foo");
}

// or

const el = document.getElementById("foo"); // type HTMLelement | null
if (!el) throw new Error("Unable to find #foo");
el;
el.innerHTML = "im not null";
```

### 다른 방법

1. typeof 리터럴 방식

```ts
function sum(a: number | string, b: number) {
  if (typeof a === "number") {
    a + b;
  } else {
    alert("a is not a number");
  }
}
```

2. instanceof 를 사용하는 방법 (클래스)

```ts
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return search; // RegExP
  }

  return search; //string
}
```

3. in 속성 체크로 타입을 좁히는 방법 (객체)

```ts
interface A {
  a: number;
}
interface B {
  b: number;
}

function pickAB(ab: A | B) {
  if ("a" in ab) {
    ab; // type A
  } else {
    ab; // type B
  }
  ab; // type A|B
}
```

4. x is type 커스텀(사용자 정의) 타입가드

타입 드를 사용하여 배열과 객체의 타입 좁히기를 할 수 있습니다.
예를들어 어떤 배열에서 탐색을 수행할 때 undefined 가 될 수 있는 타입을 사용 할 수 있습니다.

```ts
const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Micheal"];
const members = ["Janet", "Micheal"].map((who) =>
  jackson5.find((n) => n === who)
);
//  members: (string | undefined)[]
```

filter 함수로 undefined 를 걸러내려고해도 안됩니다.

```ts
// undefined filter 추가

const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Micheal"];
const members = ["Janet", "Micheal"]
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => who !== undefined);
//  members: (string | undefined)[]
```

타입 가드를 사용하면 타입을 좁힐 수 있습니다.

```ts
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Micheal"];
const members = ["Janet", "Micheal"]
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined);

// string[]
```
