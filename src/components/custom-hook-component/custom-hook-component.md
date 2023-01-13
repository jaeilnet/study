# 커스텀 훅 컴포넌트

## 특징

> "제어 역전"에서 더 나아가 보겠습니다. 기본 논리가 이제 사용자 지정 후크로 이동되었습니다. 이 후크는 여러 내부 논리( States, Handlers)를 노출하여 개발자에게 많은 제어 권한을 부여합니다.

```js
import { useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
}

export { useCounter };
```

코드를 살펴보면 마운트에 관한 로직은 Counter 컴포넌트에 위임하고

데이터를 다루는 로직은 커스텀훅에 위임했다.

## 장점

> useCounter더 많은 제어 제공: 개발자는 및 사이에 고유한 논리를 삽입 하여 기본 동작 Counter을 수정할 수 있습니다.

## 단점

> 구현 복잡성: 논리적 부분이 렌더링된 부분과 분리되어 있으므로 두 부분을 연결하는 것은 개발자의 몫입니다. Counter 따라서 올바르게 구현하려면 작업이 어떻게 필요한지 잘 이해해야 합니다.

기준

제어역전 2/4
구현 복잡성 2/4
