# 리팩터링 첫번째 예시

1. ### 예시에서 보여준 리팩터링 기법

- 함수 추출하기

- 변수 인라인하기

- 함수 옮기기

- 조건부 로직을 다양성으로 바꾸기

2. ### 세 단게로 보여준 리팩터링

- 원본 함수를 중첩 함수 여러개로 나눔 (함수 역할 명확, 정확)

- 단계 쪼개기 (계산코드와 출력코드 분리)

- 계산 로직을 다형성으로 표현 (클래스 사용)

> `좋은 코드를 가늠하는 확실한 방법은 얼마나 수정하기 쉬운가 이다.`

---

## 배운점

함수는 기능단위 또는 역할단위 이런 느낌으로 좀 더 명확하게 한 가지 일만 수행하게 나눠야 한다는 건 다른 공부를 하면서 배운 적이 있는데 실 예제로 좀 더 배웠다.

클래스의 추상화에 대해서는 리액트를 사용하면 함수형 컴포넌트를 사용하기 떄문에 클래스를 사용 해 볼 일이 거의 없다.

물론 객체지향에 대해서 implement 등 상속과 부모자식관계? 에 대한 더 복잡한 이론과 쓰임이 있겠지만

기본적인 클래스에 대해 배워본것 같다.

new 로 연산자로 선언하고

constructor 로 초기화하고,

extends 로 클래스를 확장하고

super 로 자식이 부모 메서드를 사용하고

get 메서드로 함수도 사용해보고 무엇이 추상화인지 조금은 이해한것 같다.
