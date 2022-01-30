## unkown

![ts](https://jbee.io/static/f19e5096c6cc5c8682607b9886b66c88/c1b63/type_diagram.png)

any vs unkwon

any는 모든 타입을 할당 받을 수 있는 타입이다.
즉 any 타입으로 선언 된 변수, 인자는 모든 타입의 값이 할당 될 수 있고 전달 되 수 있다.

**unkown 타입도 any와 마찬가지로 모든 타입의 값이 할당 가능**

## any vs unkwon 차이점은?

unknown 타입으로 선언된 변수는 any를 제외한 다른 타입으로 선언된 변수에 할당 될 수 없다.

예시

```typescript
let typeTest : unknown

let booleanType: boolean = typeTest
// Error: Type 'unknown' is not assignable to type 'boolean'.(2322)
let numberType: number = typeTest
//  Error: Type 'unknown' is not assignable to type 'number'.(2322)
let stringType: string = typeTest
//  Error: Type 'unknown' is not assignable to type 'string'.(2322)
let objectType: object = typeTest
//  Error: Type 'unknown' is not assignable to type 'object'.(2322)
```

한가지 더 특징은 unknown 타입으로 선언 된 변수는 프로퍼티에 접근 할 수 없으며, 메소르르 호출 할 수 없고 인스턴스를 생성 할 수도 없다.

```typescript
let typeTest : unknown

typeTest.toString() // error
typeTest.map(()=> {}) // error
typeTest[0]  // error
```
