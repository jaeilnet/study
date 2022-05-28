# Null 병합 연산자

Null 과 undefined 만 거르는 연산자,

OR 연산자로 FALSY 한 값을 거르는 경우가 있는데

falsy 한 값 중
0과 -0 NaN 등 로직 상 falsy로 구분지어 거르기 애매한 값들이 있다.

예시)

```js
function abc(num) {
  return num || b;
}

abc(0);
// 원하는 결과 값은 0인데 0이 falsy한 값으로 판단되어 b 출력
```

이럴 때는 0은 falsy 한 값으로 분류하지 않고 비어있는 값만 체크하는 undefined 와 null만 걸러줄 수 있는 null 병합 연산자가 있음

```js
function abc(num) {
  return num ?? b;
}

abc(0); // 0
```

- a가 null도 아니고 undefined도 아니면 a

- 그 외의 경우는 b

## 단점

Null 병합 연산자 단점

1. 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못함

2. Null 과 undefined에 대해서만 널 병합 연산자를 사용해야하는데 습관성 Null 병합 연산자를 사용 할 경우가 있으므로 생각을 잘 해야함.

3. Early Return 을 해버릴 때는 falsy 한 값을 먼저 거르기 때문에 널 병합 연산자를 굳이 사용 할 필요가 없다.

4. 7번째 우선순위 상당히 낮은 우선순위를 가지고 있다.
