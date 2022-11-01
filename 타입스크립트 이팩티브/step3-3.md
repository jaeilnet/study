# 객체 한꺼번에 생성하기

객체 전개 연산자를 사용하여 큰 객체를 한꺼번에 만들어낼 수 있습니다.

```ts
const pt = { x: 3, y: 4 };
const id = { name: "jaeil" };

const namePoint = { ...pt, ...id };

// type
//  namePoint : {
//   name:string;
//   x: number;
//   y:number
// }
```

타입에 안전한 방식으로 조건부 속성을 추가하려면, 속성을 추가하지 않는 null 또는 {} 으로 객체 전개를 사용하면 됩니다.

```ts
declare let hasMiddle: boolean;

const firstLast = { first: "joo", last: "jaeil" };
const president = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };

// type
//  president: {
//     middle?: string | undefined;
//     first: string;
//     last: string;
// }
```

더 많은 객체 속성을 추가하고 헬퍼함수를 사용하기

```ts
declare let hasDate: boolean;
const nametitle = { name: "jaeil", title: "front" };
const stack = {
  ...nametitle,
  ...(hasDate ? { start: -2589, end: -2568 } : {}),
};

function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}

const stacks = addOptional(
  nametitle,
  hasDate ? { start: -2589, end: -2568 } : null
);
```
