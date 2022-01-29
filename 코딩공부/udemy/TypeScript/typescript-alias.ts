// 같은 유니온 타입을 지정

// 타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

type Combine = {
  n1: number
  n2: number
}

type User = { name: string; age: number }
const u1: User = { name: "Max", age: 30 } // this works!

// 예시
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name)
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age
// }

// ----

// type User = { name: string; age: number }

// function greet(user: User) {
//   console.log("Hi, I am " + user.name)
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age
// }
