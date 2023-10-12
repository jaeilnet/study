# 조건부 타입

```ts
T extends U ? X :Y
```

extends 왼쪽에 있는 타입을 오른쪽에 있는 타입에 할당 할 수 있으면 첫번째 분기('true')에 해당되는 타입을 얻고 그렇지 않다면 후자 분기 ('false')에 해당하는 타입을 얻게 됩니다.

자바스크립트의 삼항연산자와 같은 형태를 취합니다.

```ts
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

const test_T0: TypeName<string> = "string";
const test_T1: TypeName<number> = "number";
const test_T2: TypeName<boolean> = "boolean";
const test_T3: TypeName<undefined> = "undefined";
const test_T4: TypeName<() => void> = "function";
const test_T5: TypeName<""> = "string";
const test_T6: TypeName<123> = "number";
```

조건분기를 어떤 경우 사용하면 좋은지 예시를 살펴보겠습니다

---

### 조건분기의 활용 예제

### `분기전`

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

createLabel 이라는 함수는 id number 를 받을 땐 IdLabel 타입을, name 의 string 타입을 받을 땐 NameLabel 의 타입을 가져야합니다.

### `분기 후`

```ts
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```

제네릭 T 는 number 또는 string 타입으로 좁혀지고 T 가 number 면 IdLabel 타입을 number 가 아니면 NameLabel 타입을 갖습니다.

````ts
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// 제네릭 T 가 number 면 IdLabel type string 이면 NameLabel type을 가진다.

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
a.name;
// error
// a.id

let b = createLabel(2.8);
b.id;

// error
// b.name

let c = createLabel(Math.random() ? "hello" : 42);
// NameOrId | IdLabel```;
````

---

### 조건부 타입 제약

조건부 타입의 검사는 종종 새로운 정보를 제공합니다. 타입가드를 사용하여 범위를 좁히면 보다 구체적인 타입을 얻을 수 있는 것처럼, 조건부 타입의 실제 분기는 우리가 확인하는 타입별로 제네릭을 더욱 제한합니다.

```ts
type MessageOf<T> = T["message"];
// Type '"message"' cannot be used to index type 'T'.
```

```ts
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;
```

### 조건부 타입 내에서 추론

```ts
type Flattens<Type> = Type extends Array<infer Item> ? Item : Type;
type Item = ["a", "c", "dd"];

const FlattensTypeA: Flattens<Item> = "a";
const FlattensTypeB: Flattens<Item> = "c";
const FlattensTypeC: Flattens<Item> = "dd";

const FlattensTypeD: Item[number] = "a";
const FlattensTypeE: Item[number] = "c";
const FlattensTypeF: Item[number] = "dd";
```

조건부 타입은 키워드를 사용하여 실제 분기에서 비교하는 타입에서 추론하는 방법을 제공합니다. 예를들어 infer 키워드를 사용하여 Item 들의 타입을 추론할 수 있습니다.

여기서는 실제 분기 내에서 요소 타입을 검색하는 방법을 지정하는 대신 infer 키워드를 사용하여 망명 된 새로운 일반 타입 변수를 선언적으로 도입했습니다. 이를 통해 우리가 관심있는 타입의 구조를 파헤치고 조사하는 방법에 대해 생각할 필요가 없습니다.

### 다른 예제

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type GetReturnNum = GetReturnType<() => number>;
type GetReturnStr = GetReturnType<(x: string) => string>;
type GetReturnBool = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

function handleReturnNum(): GetReturnNum {
  return 123;
}
function handleReturnStr(x): GetReturnStr {
  return x;
}
function handleReturnBool(a, b): GetReturnBool {
  return [a, b];
}
```
