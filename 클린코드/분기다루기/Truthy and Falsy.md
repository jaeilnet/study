# Truthy && Falsy

### Truthy

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### falsy

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

빈 배열과 빈 객체도 truhy이 였다.

리스트를 뿌릴 때 조건을 list && 가 아니라 list.length > 0 을 걸어야 했다.

그래야 비어 있는 리스트를 반환 하지 않을테니까..

### 다른 예제

```js
function printName(name) {
  if (name === undefined || name === null) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}
```

위의 코드는 잘못 된 코드

이유?

예외처리?

```js
function printName(name) {
  if (name === undefined || name === null) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}

console.log(printName("재일")); // 안녕하세요 재일님

------------------------------------------------------------

function printName(name) {
  if (name === undefined || name === null) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}

console.log(printName("")); // 안녕하세요 님
```

빈 문자를 넣으면 빈 상태로 님이 반환 된다.

### 수정된 코드

```js
function printName(name) {
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}

console.log(printName("재일"));

-------------------------------------------------------------

function printName(name) {
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}

console.log(printName("")); // 사람이 없어요
```

아에 undefined 와 null 이외에도 name 값이 없을 때  
즉, false 한 경우를 정리를 해버린다.
