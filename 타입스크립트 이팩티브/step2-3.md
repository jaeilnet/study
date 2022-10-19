### Readonly

변경 관련 된 오류 방지를 위해 Readonly 사용하기

readonly 의 특징

- 배열의 요소를 읽을 수 있지만, 쓸수는 없음
- length 를 읽을 수 있지만, 바꿀 수는 없음
- 배열을 변경하는 pop을 비롯한 다른 메서드로 호출 할 수 없음
- 타입스크립트는 `매개변수가 함수 내에서 변경이 일어나는지 체크` 함
- 호출하는 쪽에서 함수가 `매개변수를 변경하지 않는다는 보장`을 받게 됨
- 호출하는 쪽에서 함수에 readonly 배열을 매개변수로 넣을 수도 있습니다.

#### **간단한 예제**

```ts
const dates: readonly Date[] = [new Date()];
// dates.push(new Date()) // error
dates[0].setFullYear(2037); // success
```

#### **오류코드**

```ts
function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const curPara: string[] = [];

  const addParagraph = () => {
    if (curPara.length) {
      paragraphs.push(curPara);
      curPara.length = 0;
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      curPara.push(line);
    }
  }

  addParagraph();
  return paragraphs;
}

console.log(parseTaggedText(["text", "text"]));
// [][]
```

#### **수정코드**

```ts
function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  let curPara: readonly string[] = [];
  // readonly 추가
  // const => let 수정

  const addParagraph = () => {
    if (curPara.length) {
      // 수정
      // curPara.length = 0
      curPara = [];

      // paragraphs.push(curPara)
      // 1. 복사본을 만들어주기
      paragraphs.push([...curPara]);
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      // 수정
      // concat 은 원본을 수정하지 않고 새 배열을 반환 함
      // curPara 자체는 리드온리 타입의 규칙을 거르지 않음
      // curPara.push(line)

      curPara.concat([line]);
    }
  }

  addParagraph();
  return paragraphs;
}

console.log(parseTaggedText(["text", "text"]));
```

### 타입스크립트의 제네릭 Readonly

#### 예제)

```ts
// 1.

interface Outer {
  inner: {
    x: number;
  };
}

const o: Readonly<Outer> = { inner: { x: 0 } };

o.inner = { x: 2 }; // error inner 에 할당 할 수 없습니다.
o.inner.x = 2; // 정상

// ----

// 2.

interface Outer {
  inner: number;
}

const o: Readonly<Outer> = { inner: 0 };

o.inner = 2; //error
```

1과 2의 차이는 interface Outer 의 깊이(Deep)입니다.

readonly 얕게 동작하기 때문에 1번에서 inner 까지 Readonly 타입이 적용 된 것이고 직접적으로 inner 를 변경하고자하면 에러를 발생시킵니다.

마찬가지로 2번에서 interface 의 깊이를 1deps 로 했을 때 inner 자체에 할당 할 수 없습니다.

### 정리

```ts
function adds(a: readonly number[]) {
  return a.reduce((acc, cur) => acc + cur);
  //   return a.push(0, 2);
}

console.log(adds([1, 2, 3]));
```

- 리듀서는 에러가 나지 않는다. 이유는 a를 변화 시킨게 아니라 a는 그대로 존재하고 새 배열을 반환했기 때문이다.
- 하지만 push, pop, splice 등 기존 배열을 바꿔버리는 속성들은 에러가 난다.
- 매개변수를 수정하지 않는다면 readonly 을 선언하는 것이 좋다.

### 매핑 된 타입을 사용하여 값을 동기화 하기

```ts
interface ScatterProps {
  xs: number[];
  ys: number[];

  xRange: [number, number];
  yRange: [number, number];
  color: string;

  onClick: (x: number, y: number, index: number) => void;
}

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps): boolean {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newPorps[k]) {
      if (k !== "onClick") return true;
    }
  }

  return false;
}
```

```ts
const REQUIES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

interface ScatterProps {
  xs: number[];
  ys: number[];

  xRange: [number, number];
  yRange: [number, number];
  color: string;

  onClick: (x: number, y: number, index: number) => void;
}

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps): boolean {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newPorps[k] && REQUIES_UPDATE[k]) {
      return true;
    }
  }

  return false;
}
```
