Scope 함수의 유효범위

```js
function scope(){
  if(true){
    console.log(a)
    // 1. undefined
    const a = 123
    console.log(a)
    // 2. 123
  }
  console.log(a)
  // 3. Referecn Eerror
  // a is not defined
}
```

> 함수가 동작 가능한 유효범위를 스코프라고 한다.

-  a는 할당이 scope 함수 중괄호 안에서만 동작한다. 이 것을 블록레벨 스코프라고 한다.
-  const 와 다르게 var는 1.번 2번 3번 어느곳에서도 undefined가 나온다. 
-  var는 전역스코프로써 함수레벨의 유효범위를 가진다고 한다. 
- 의도하지 않는 곳에서 변수가 사용 될 수있고 그 만큼 메모리누수로 발전 할 수도 있다.