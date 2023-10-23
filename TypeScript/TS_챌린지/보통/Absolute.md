[문제](https://www.typescriptlang.org/play?#code/PQKgUABBCsBMCcEC0ECCAjAzgewDYFcAXAU0mSQsrPQE80A7AEwCdi6BpZgQxwDdMA1nQAUAAXSsAzAAYB3AGzwAxpgCUEAMSAXnsCti5oC2XQgAtNJfQAdcR4klwBLEt1xgyG9xEATk4A5u11Hr4+ujEzAA0EJiEzPb0AObhgJxrgALjEOj2sTGEgCLjEIDYPYApTRAABhg4BCRFEIADC4Ch4zmAM52AOy2AHIOAKWMAdGSAObOApB0pgImjgBhDEN6ACeOAL6OALuOALaOAPqMQgJargBNNgCdNnWSAEGOAO0MAXH7FRUWEmGSENBbEEAAqxJEQALzIAIzS0qfnlwBKt-i4hA9oLB4IjEAA8N0iAD4IMBgBBiAAPC5KEiMCCEbCpS4AIhe0mxZEORX20IA4o4ABL4dCABdHADiDEC0gAY6nYQYyEQgWTA7WHHJTGdoAK0w7WwzFiwDg8GAAmwYBAwFcoAgAH01eqNeqIIAb0aZNIggBV5xoQGo9VWai0qiAK1xnC6Asog8HwhEkJiYCABIIhCAAHwiURisT9qXSmWhjyKABIAN5XAC+lURbsYHqKSFjMQAZj6AHKJiAAfgguagrOjccTSpA5stGoggBlFwAlQ4AOpYggAB5yZN2t1tXWxX2Sxi-52y4xiAAUQAjvguLhwhOkcQURB4xAs8xsPoIAByUSjpD8ue4YhxW7AIj2XCYHe2j4QJQ8W4AgDaZEXyMIoOns9woNKwIkKC0iQuEO7SDukKge+S4ot+M5zv+QLlGCSAgWBEFQaEMGfvBv5IY6QEvKBu4vJB0FQB+y5fj+iEAShoJINAJE7tA5HYZRsE0Qhf70U64GQRh7E4dReF0ch-FoYJu6YRRk5cWJvESUBO5kSxalyVRcG0UphFgjuTHSaxwmcbhOkEYBqFPCqrzSDZrz0Optm2SZ8lmTxFkMfAKrwL5jlgb5vnCQAutWPa9hAKyADLjECABdNgAjNeFdb9mAoBkNCgCoE4Ar00QIArzWAATjgAaqyybIclyPLAHyArCqK4qSggwBcPQmAAO4hDKcpQJlOXMqy7KctyvKYPyQoimKEpSsAhH2NgzXpZFgAenSMgA4E4AJy19WVg2VcN1VjXVsryoqQA)

- number, string, 혹은 bigint을 받는 Absolute 타입을 만드세요. 출력은 양수 문자열이어야 합니다.

---

```ts
// 예시)
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```

> 문제 풀이

수의 절대값을 구하는 가장 쉬운 방법은 수를 문자열로 변환하고 "-" 부호를 제거해주는 것입니다.

"-100" -> "100"

"-"를 제거하는 방법은 template literal type 으로 만들어보는 방법입니다.

타입스크립트 4.1부터 제공된 템플릿 리터럴 문자 타입은 JS의 템플릿 리터럴 문자와 같습니다.

[예시](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gGzgJygXigcmRAJpqAHywCMEBXCTYzAcxwgDtMAoUSKARXIENHgAlqHRY4jKkSzAA7nAI1gACwas24aPCTJufQcIwADACQBvTSkk7+QkAF8oAMwEBnRQZYsA9J6jsNiFCs9EBEAIhxcRxdFUMlQskoo11jiUPoIJiSYuLFoJ2S4mTgslKhQpQYSoA)

```ts
// 예시)

type Color = "red" | "blue" | "green";
type Quantity = "one" | "two" | "three";

type ColorQuantity = `${Color | Quantity} fish`;

// type ColorQuantity = "red fish" | "blue fish" | "green fish" | "one fish" | "two fish" | "three fish"
```

실제 문제

```ts
type Absolute<T extends number | string | bigint> = T extends `-${infer N}`
  ? N
  : T;
```

리터럴 방식을 이용해서 문자열 "-100" 을 100으로 바꿔줄 수 있습니다.

하지만 반환 타입도 항상 string 이여야 하기 때문에 리터럴 방식을 반환하는 제네릭 T 에도 작성해야합니다.

```ts
type Absolute<T extends number | string | bigint> = T extends `-${infer N}`
  ? N
  : `${T};
```

이제 남은건 음수입니다. 아까 문자열 -100을 -만 제거했듯이 -100 의 숫자 음수도 문자열 100이 되어야합니다. 그러기 위해서 제네릭 T 에도 리터럴 문자를 작성해야합니다.

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
  ? N
  : `${T}`;
```
