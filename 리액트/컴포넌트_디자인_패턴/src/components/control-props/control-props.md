# 제어 컴포넌트

## 특징

> 이 패턴은 구성 요소를 제어되는 구성 요소로 바꿉니다 . 외부 상태는 개발자가 기본 구성 요소 동작을 수정하기 위해 고유한 논리를 삽입할 수 있도록 하는 "단일 정보 소스"로 사용됩니다.

compound 컴포너트와 비교했을 때

비지니스 로직은 Counter 컴포넌트에 다 위임했지만 => 외부 상태

리소스(count) 변화는 usage 컴포넌트에서 제어한다. => 기본동작

## 장점

> 더 많은 제어 제공: 개발자가 기본 상태를 제어하므로 Counter 동작에 직접 영향을 미칠 수 있습니다.

```js
// Usage.tsx

const [count, setCount] = useState(0);

// before

// const handleChangeCounter = (newCount: number) => {
//   setCount(newCount);
// };

// after

const handleChangeCounter = (newCount: number) => {
  if (newCount < 6) {
    setCount(newCount);
  }
};
```

여기서 개발자가 기본상태를 제어한다 라는 말은 아까 위에서의 기본동작(count)의 변화에 직접적으로 영향을 미칠수 있다라는 말로 해석할수 있을 것 같다.

## 단점

> 구현 복잡성: 이전에는 단일 통합( JSX)으로 구성 요소를 작동시키기에 충분했습니다. 이제 3곳 JSX ( / useState/ ) handleChange 에 퍼져 있습니다.
> 설명

합성컴포넌트에서도 Usage 컴포넌트에 handleChangeCounter 컴포넌트 내부에서 State를 다루고 있지 않아서 함수가 존재하지만 Counter 함수에 관여하지 않으므로 JSX 만으로 동작 시키기에 충분했으나,

장점에서도 나와있듯이 개발자가 기본상태(`count`)를 제어하기 때문에 Usage 컴포넌트 내에서 `count`(기본상태) 를 다루고 이 값으로 Counter 에서 로직을 수행하기 떄문에 Usage 컴포넌트에서 useState, state에 대한 함수 handleChange, JSX 3곳으로 구현의 복잡성이 증가했다.

## 기준

제어 역전 2/4
구현 복잡성 1/4
