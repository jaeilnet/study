// 조건부 타입

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

// ts-korea
// https://typescript-kr.github.io/pages/advanced-types.html#%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85-conditional-types

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
// NameOrId | IdLabel

// -----
// 조건부 유형 제약

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

type EmailDomain = "naver" | "daum" | "google";

type Eee = "dom";

interface EmailTest {
  message: EmailDomain;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<{ message: "asidfasjdiflasfd" }>;
type EmailMessageContents2 = MessageOf<Email>;
type EmailMessageContents3 = MessageOf<EmailTest>;
type EmailMessageContents4 = MessageOf<Dog>;

const email: EmailMessageContents = "asidfasjdiflasfd";
const email2: EmailMessageContents2 = "email";
const email3: EmailMessageContents3 = "naver";
// const email4: EmailMessageContents4 = "string";
// ----

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;
// string
type Num = Flatten<number>;
// number

// ---
// 조건부 유형 내에서 추론

type Flattens<Type> = Type extends Array<infer Item> ? Item : Type;
type Item = ["a", "c", "dd"];

const FlattensTypeA: Flattens<Item> = "a";
const FlattensTypeB: Flattens<Item> = "c";
const FlattensTypeC: Flattens<Item> = "dd";
const FlattensTypeD: Item[number] = "a";
const FlattensTypeE: Item[number] = "c";
const FlattensTypeF: Item[number] = "dd";

// type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
//   ? Return
//   : never;

// type GetReturnNum = GetReturnType<() => number>;
// type GetReturnStr = GetReturnType<(x: string) => string>;
// type GetReturnBool = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// const testNum: GetReturnNum = 123123;
// const testStr: GetReturnStr = "123";
// const testBool: GetReturnBool = [true, false, false, true];

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type GetReturnNum = GetReturnType<() => number>;
type GetReturnStr = GetReturnType<(x: string) => string>;
type GetReturnBool = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

const handleReturnNu = (): GetReturnNum => {
  return 12313;
};
function handleReturnStr(): GetReturnStr {
  return "123123";
}
function handleReturnBool(): GetReturnBool {
  return [false, true];
}

declare function stringOrNum(x: string): number;
// declare function stringOrNum(x: number): string;
// declare function stringOrNum(x: string | number): string | number;

type Return_T1 = ReturnType<typeof stringOrNum>;

const return_t1: Return_T1 = 123;
const test_t1: typeof stringOrNum = (x) => +x;

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

interface Foo {
  propsA: boolean;
  propsB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
  let a = f(x);
}
