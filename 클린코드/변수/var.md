# var를 지양하자

`var`

- 함수 스코프

`let & const`

- 블록스코프
- TDZ (템프럴 데드 존)

---

### 변수 사용

```js
var name = "이름";
var name = "이름2";

// 같은 변수에 재할당/ 재선언이 가능

// 잠재적 오류를 발생가능
```

```js
let name = "이름";
let name = "이름2";

const name = "이름";
const name = "이름2";

// SyntaxError 에러

// 재선언이 불가능
```

let과 const 의 차이점?  
`재할당`

let 은 변수, 변할 수 있는 수  
const 는 상수, 변하지 않는 수

```js
let name = "";

name = "jaeil";
name = "jaeilnet";

// 재할당 가능

const name = "";

name = "jaeil";
name = "jaeilnet";

// 재할당 불가능
```
