# isNaN

isNaN은 숫자인가? 라는 걸 묻는 함수이다.

함수안의 인자가 숫자이면 false 숫자가 아니면 true를 반환한다.

우리가 평소 아는 숫자야? 어(true) 숫자 아니야(false) 의 반대 개념으로

숫자면 false 숫자가 아니면 true를 반환하기 때문에 굉장히 헷갈릴수 있다.

헷갈림도 헷갈림이지만 더 헷갈리는 문제는 문자열 '1'을 인자로 넣어도 숫자로 인지한다는 점이다.

하지만 문자열 가나다라 abc는 숫자로 생각하지 않는다.

```js
console.log(isNaN(1)); //false -> 숫자다..
console.log(isNaN("가나다")); // true => 숫자가 아니다..
console.log(isNaN("1" + 123)); // false => 숫자다..
console.log(Number.isNaN("1" + 123)); // false => 숫자다..
console.log(Number.isNaN(1)); // false => 숫자다..
console.log(Number.isNaN("가나다" + 123)); // false => 숫자다..
```

```js
//정수 판별
Number.isInteger();
```
