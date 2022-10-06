# 타입스크립트의 타입 시스템

### **편집기를 사용하여 타입 시스템 탐색하기**

- 여기서 편집기는 vscode 와 같은 ide를 이야기하며 보통의 경우에는 `변수에 할당 값에 따라 추론` 되는데 편집기마다 다르지만 보통의 경우 심벌 또는 코드 위에 마우스를 올려보면 어떻게 추론하는지 보여준다.

- 자동완성, 언어의 오타 감지 등 `언어 서비스`를 제공해준다.
- 타입스크립트가 어떤 타입으로 모델링 되어있는지 실제 타입 선언 파일을 살펴 볼수 있다.

### **타입이 값들의 집합이라고 생각하기**

연산에 대해서 유니온은 OR, 인터젝션은 AND 라고 생각하고 이해 하실수도 있는데, 실제로 유니온은 OR 처럼 동작하지만 인터젝션은 공통인 속성에 대해서만 타입체커가 이뤄지기 때문에 AND 와는 조금 다릅니다.

> **집합**  
> 유니온 타입 (`"|"`) 은 `합집합`을 의미하며  
> 인터젝션 (`"&"`) 은 `교집합`을 의미합니다.

```typescript
interface Person {
  name: string;
  //   brith: Date;
}

interface Lifespan {
  brith: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const personSpan: PersonSpan = {
  name: "aaa",
  brith: new Date("1992/10/2"),
  // death: new Date('1998/12/21')
};

type S = keyof PersonSpan;
// keyof Person | keyof Lifespan

type K = keyof (Person | Lifespan);
// never

const c: S = "death";
// const b:K = "death" // never error
```

인터젝션 합집합을 의미하는데 Person 과 LifeSpan 은 공통적인 속성이 없기 때문에 아무것도 할당할 수 없는 never 타입일거라고 생각 하실수도 있는데요

타입을 범위를 이야기 하는 것이기 때문에 PersonSpan 은 인터젝션으로 갖는 타입을 모두 사용 할 수 있습니다.

하지만 하나만 사용하지 못합니다. 예를들어서 name 만 부르게 되면 에러가 발생합니다.

LifeSpan 의 타입도 할당/선언해줘야 합니다.

#### **공통 요소가 있을 때**

```typescript
interface Person {
  name: string;
  age: number;
  brith: Date;
}

interface Lifespan {
  brith: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const personSpan: PersonSpan = {
  name: "aaa",
  age: 123,
  brith: false,
  // death: new Date('1998/12/21')
};

type S = keyof PersonSpan;
// 모든 타입을 key로 가짐

type K = keyof (Person | Lifespan);
// brith

const c: S = "death";
const b: K = "brith";
```

### **Extends**

인터젝션을 보면 extends 를 떠올릴수도 있습니다.
extends 는 제네릭 타입에서 한정자 쓰이며 ~의 부분 집합이라는 의미로 쓰입니다.

### **`K extends string`**

```ts
function getKey<K extends string>(val: any, key: K) {
  console.log(typeof val, typeof key);
}

getKey({}, "123");
// getKey({}, 123) //err number
```

제네릭 타입에 K 는 string을 상속 받아와서 number 타입에서는 에러가 나옵니다.

### **`K extends keyof T`**

```ts
interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

function sortBy<K extends keyof T, T>(val: T[], key: K) {}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
];

sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, "x" || "y");
// sortBy(pts, 'ss') // err
```

## **정리**

- 타입을 값의 집합으로 생각하면 이해하기 편합니다.
- 타입 연산은 집합의 범위에 적용됩니다. A 와 B의 인터젝션은 A 범위와 B 의 범위의 인터섹션입니다. 객체 타입에서는 A & B 인 값이 A 와 B 를 모두 가짐을 의미합니다.
- A는 B를 상속, 'A는 B에 할당가능', 'A는 B의 서브타입 (클래스의 서브클래스)'는 A는 B의 부분 집합과 같은 의미입니다.

### **타입 공간과 공간의 심벌 구분하기?**

```ts
type Test = "Test";

const test: Test = "Test";

// type T = typeof Test  //err
type T = typeof String;
```

typeof 런타임때 동작하는 자바스크립트 코드이고 자바스크립트의 타입을 검사하기 때문에 typescript 의 타입은 검사하지못한다.

또 `obj['field] 와 obj.field 의 값은 같더라도 타입은 다를 수 있어 obj['field'] 을 사용해야합니다. `

### 구조분해

구조분해 경우 값에다가 바로 타입을 대입하면 에러가 납니다. 똑같은 구조로 타입을 정의해주세요

```ts
function email({ person: Pesron, subject: string }) {} //error

function email({ person, subject }: { Pesron; string }) {}
```

### **정리**

- 타입스크립트를 사용할 때 타입인지 값인지 구분하는 방법을 터득해야합니다.
- 모든 값은 타입을 가지지만, 타입은 값을 가지지 않습니다.
- class 나 eunm 은 값으로도 사용될 수 있습니다.

### **`타입 단언`보다 타입 선언 사용하기**

타입 단언이란 as const 와 같이 `as 로 시작해서 타입추론을 무시하고 강제로 사용`하는건데요

강제로 타입 단언을 하게 되면 맞지 않는 타입인데도 오류를 발생시키지 않습니다.

```ts
interface Person {}

const people = ["alice", "bob", "jan"].map((name) => ({ name } as Person));

// const people = ['alice', 'bob', 'jan'].map((name) => ({} as Person)) // 오류 없음
```

### 더 정확한 방법

```ts
const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));
// type Person[]
```

### 타입단언이 필요한 경우

```ts
const onClick = (e: MouseEvent) => {
  e.currentTarget; // MouseEevent

  const button = e.currentTarget as HTMLButtonElement;

  button.click();
};
```

리액트를 하다보면 onChange, onClick 에서 이런식의 코드를 많이 봤을텐데요

타입스크립트는 DOM에 접근 할수 없기 때문에 버튼이라는 걸 알지 못합니다.

또 옵셔녈체이닝과 다르게 null 이나 undefined 가 아니라 무조건 값이 있다는 의미로 `!`을 사용하는 경우가 있는데

이것도 단언문에 속하며 컴파일 과정 중에 제거되므로 에러를 발생시키지않습니다.

타입 단언문으로 임의의 타입 간에 변환을 할 수는 없습니다

HTMLElement 는 HTMLElement | null 의 서브타입이기 때문에 타입단언이 동작하는 것이지

Person 에 as HTMLElement 를 할당할수는 없습니다.
