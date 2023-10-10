### 잉여속성 체의 한계 인지하기

```ts
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

// const r: Room = {
//   ceilingHeightFt:1,
//   numDoors:1,
//   elephant : 'present'
// }
// err

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
};

const r: Room = obj;
```

Room 에 정의 된 타입에는 elephant가 없는데 r 이라는 객체에 할당 했을 때는 `속성이 있는지 그리고 그 외의 속성은 없는지` 확인하는데

2번째 코드와 같이 변수를 도입해서 obj 를 할당해보면 에러가 발생하지 않습니다.

이유는 obj 타입은 room 타입의 부분 집합으로 생각하기 때문에 타입체커가 통과되고 r은 room 과 함꼐 elephant 타입도 string 으로 추론 됩니다

첫번째 예제에서 에러를 발생할 때 구조적 타입 시스팀에서 발생할 수 있는 중요한 종류의 오류를 잡을 수 있도록 **`잉여 속성 체크`** 라는 과정이 수행되었습니다.

하지만 두번째 예제와 같이 조`건에 따라 동작하지않는다` 라는 한계가 있습니다.

---

### 함수 표현식에 타입 적용하기

타입표현식을 사용하면 타입을 재사용 할 수 있다.

예제)

```ts
function test(num: number): number;

type testFn = (num: number) => number;

const test: testFn = (num) => {
  num;
};
const test1: testFn = (num) => {
  num;
};
const test2: testFn = (num) => {
  num;
};
const test3: testFn = (num) => {
  num;
};
```

라이브러리는 공통 함수 시그니처를 타입으로 제공하기도 합니다. 예를 들어 MouseEvent 타입 대신에 함수 전체에 적용할 수 있는 MouseEventHandler 타입을 제공합니다.

다른 예제로 http의 fetch 함수 타입입니다.

```ts
// fetch 함수 내부의 공통 함수 시그니처 타입
declare function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response>;

async function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error("request failed" + response.status);
  }

  return response;
}

// 리팩토링 typeof

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error("fail");
  }

  return response;
};
```

throw 대신 return 을 입력하면 Fetch 함수의 시그니처와 의도와 맞지않아서 에러를 발생시킵니다.

- 매개변수나 반환 값에 타입을 명시하기보다는 함수 표현식 전체에 타입을 구문을 적용하는 것이 좋습니다.

- 만약 같은 타입 시그니처를 반복적으로 작성한 코드가 있다면 함수 타입을 분리해 내거나 이미 존재하는 타입을 찾아보도록 합니다.

---

### 타입연산과 제네릭 사용으로 반복 타입 줄이기

```ts
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// 잘못된 방법

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

// 개선 가능 한 코드
// k : state[k] 라는 특징이 보인다.

type TopNavState = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
};

type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

// pick 타입도 사용 가능
type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;

// 최종 타입결과
type TopNavState = {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
};
```

typeof 로 반복코드 줄이기

```ts
const init_options = {
  width: 640,
  height: 480,
  color: "#fff",
  label: "VGA",
};

// interface OPTION {
//   width :number;
//   height : number;
//   color:string;
//   label :string;
// }

type Options = typeof init_options;
```

함수의 리턴 값을 타입으로

```ts
function getUserInfo(userId: string) {
  return {
    userId,
    name,
    age,
  };
}

// 추론 된 타입 { userId : string, name : string, age : string}

// 이런경우에는 ReturnType 을 사용하면 좋다

type UserInfo = ReturnType<typeof getUserInfo>;

// 타입 연산 결과
// type UserInfo = {
//     userId: string;
//     name: void;
//     age: any;
// }

// name 과 age 는 함수내에서 사용하지 않아서 추론 값이 없어서 void, any로 표현
```

### 동적 데이터에 인덱스 시그니처 사용하기

예제)

```ts
const rocket = {
  name: "falcon",
  variant: "black",
  thrust: "7.6",
};

type Rocket = { [p: string]: string };

const test: Rocket = {
  name: "falcon",
  variant: "v1",
  thrust: "41",
};
```

rocket 의 속성이 많아질수록 인덱싱을 사용하는 방법이 간단하고 편해서 좋아보이지만

많은 단점이 있다.

- 잘못된 키를 사용해도 에러가 나지 않음 name 대신 Name
- 특정 키가 필요하지 않습니다.
- 키마다 다른 타입을 가질수 없다. 이미 string 으로 정의가 되어서 number 로 수정불가
- 자동완성이 되지 않습니다.

동적인 데이터일 경우, 런타임때까지 객체의 속성을 알수 없는 경우, 타입을 정의하기 어려울때 사용해야 효과적입니다.
