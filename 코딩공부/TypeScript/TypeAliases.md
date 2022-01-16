# Type Aliasees

**중복 되는 타입 정의**에 대해서는 
type aliases로 정의 해놓고 마음대로 꺼내 쓸 수 있다.

## 예제코드
---

### **수정 전**
person의 name과 age가 중복되어 people에도 사용되고 있다.
```typescript
// 타입 할당
let person : {
  name : string,
  age : number
};

// success
person = {
  name : "Max",
  age: 12
}

// error
person = {
  isEmployee : true
}

// 객체 배열
let people : {
  name : string,
  age:numer
}[]

```

### **수정 후**

```typescript

type Person = {
  name : string,
  age : number
}

let person : Person

// success
person = {
  name : "Max",
  age: 12
}

// error
person = {
  isEmployee : true
}

// 객체 배열
let people : Person[]
```