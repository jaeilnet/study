# 복합(합성) 컴포넌트

## 특징

> 이 패턴을 사용하면 prop 드릴링 을 피하면서 표현적이고 선언적인 구성 요소를 만들 수 있습니다 . 관심사를 더 잘 분리하고 이해할 수 있는 API를 사용하여 사용자 지정 가능한 구성 요소를 원하는 경우 이 패턴을 사용하는 것이 좋습니다.

```js
// before

<Counter
  label="Counter"
  max="10"
  iconDecrement={"miuns"}
  iconIncrement={"plus"}
  onChange={onChange}
/>
```

```js
// after

<Counter onChange={handleChangeCounter} initialValue={0}>
  <Counter.Decrement icon="minus" />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Count max={10} />
  <Counter.Increment icon="plus" />
</Counter>
```

**props 드릴링을 피할수 있다.**

보통 가장 많이 사용하는 패턴은 before 와 같이 Counter 컴포넌트 내부에 Props 로 필요한 데이터를 내려주고 Counter 내부에서 label, decrement, increment 하위 컴포넌트들을 다시 props 로 내려서 제어하지만 합성컴포넌트는 서브컴포넌트들을 조합하여 하나의 합성 컴포넌트에서 props 를 바로 전달 하는 패턴을 소개하고 있다.

**유연한 마크업 UI 를 제공한다.**

> 유연한 마크업 구조: 다양한 케이스 생성이 가능하여 뛰어난 UI 유연성을 제공합니다.
> 예를 들어 개발자는 Counter의 하위 항목 순서를 쉽게 변경하거나 표시할 항목을 정의할 수 있습니다.

```js
<Counter onChange={handleChangeCounter} initialValue={0}>
  <Counter.Label>Counter</Counter.Label>
  <Counter.Decrement icon="minus" />
  <Counter.Count max={10} />
  <Counter.Increment icon="plus" />
</Counter>
```

서브 컴포넌트 하나가 곧 UI 마크업 요소이기 때문에 순서를 바꿔서 마크업 구조를 유연하게 다룰 수 있다.

UI 구조가 자주 바뀔 만한 엘리먼트들은 복합성 컴포넌트로 다루면 좋을 것 같다.

[카카오합성컴포넌트](https://fe-developers.kakaoent.com/2022/220731-composition-component/)

카카오에서 합성컴포넌트에 대한 기술블로그가 있어서 두 세번 읽어보면 좋을 것 같다.

사실 카카오 이외에도 어느정도 규모가 있는 회사들은 이런 컴포넌트 패턴에 대한 이론을 이미 적용을 하고 있는 것 같다.

~~리디북스 개발자 유튜브에서도 지나가는 말로 책 하나를 보여주기 위해 40개정도의 컴포넌트가 필요했다라고 했다..~~

**관심사의 분리**

> 관심사 분리: 대부분의 논리는 Counter. 컨텍스트( CounterProvider+ )는 의 하위 간에 상태( ) 및 핸들러( , ) useCounterContext를 공유하는 데 사용됩니다 . 이것은 우리에게 명확한 책임 분배를 제공합니다.counterhandleIncrement()handleDecrement()Counter

대부분의 로직은 Counter 에서 이뤄지고 서브 컴포넌트들은 Counter 컴포넌트의 로직의 결과를 그려주기만 한다.

## 단점

과도한 UI 의 유연성이 오히려 사이드 이팩트를 발생시킬 수 있다.

## 기준

제어 역전 1/4
구현 복잡성 1/4
