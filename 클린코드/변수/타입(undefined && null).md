# 타입(undefined && null)

undefined && null

- 값이 없거나 정의되지 않는 상태

![img](https://velog.velcdn.com/images%2F1sonjm%2Fpost%2F65f36e8a-4e6f-48ee-bf44-d154274b0dd0%2FT9M2J.png)

### 혼란스러운 udeinfed 와 null

```js
console.log(!null); // true
console.log(!!null); // false

console.log(null === false); // false
console.log(!null === true); // true
console.log(null === 0); // false
```

```js
let und;

typeof und; // undefined
console.log(undefined + 10); // NaN (not a number)

console.log(typeof null); //Obejct
```

`undefined` type undefined  
`undefined` NaN

`null` type Object
`null` 0

- tpye 이 undefined는 undefined지만 null은 Object // 자바스크립트에서도 인정하는 오류 프로퍼티타입을 추적하면 Null의 타입도 추적 가능하지만 그렇게까진 하지않아도 되고 안할수있는 상황을 만들자.. 헷갈린다.
