### **DOM(document object model)**
> DOM 이란

1. DOM 이란 HTML 문서를 프로그래밍적으로 접근하게 해주는 인터페이스 이다.
2. HTML 은 브라우저에 의해 해석되어 실제문서를 나타내는 노드 개체들의 트리구조로 변환됩니다. (브라우저 동작원리)

3. DOM node에 접근하여 편집을 하면 DOM이 업데이트 되면서 **랜더링**이 이루어진다.

> 가상 돔 [유튜브 가상돔 설명](https://www.youtube.com/watch?v=BYbgopx44vo&t=193s)

1. real 돔을 추상화한 DOM -> real DOM 에 사본 정도로 이해 DOM 조작 및 업데이트에 대해 성능 최적화를 하고자 등장
2. 가상 돔은 업데이트 할 요소의 목록을 만들기 위해 기존의 DOM 모델에서 변경되는 사항을 비교합니다.

3. DOM 전체를 다시 렌더링 할 필요 없이 실제 DOM에 필요한 최소한만 변경하여 효율성이 높다는 것이 큰 장점입니다.

