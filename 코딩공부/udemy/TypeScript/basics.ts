// Primitives : number, string, boolean
// More complex types : arrays, objects
// function types, paarameters

let age: number

age = 12

let userName: string | string[]

userName = "재일"

let isIstructor: boolean

isIstructor = false
isIstructor = true

// More Complex types

// array
let hobbies: string[]

hobbies = ["sports", "cooking"]

type Person = {
  name: string
  age: number
}

let person: Person

person = {
  name: "max",
  age: 32,
}

// person = {
//   isEmployee : true
// }

let people: Person[]

// 타입을 정하지 않아도 이미 값에 stirng이 들어갔기 때문에
// 타입추론에 의하여 string으로 인식하여 숫자 1234는 에러가 남
let course = "React - The Complete Guide"

// 타입추론 number error
// course = 1234

// 타입추론 string
course = "1111"

//  타입추론을 원하지 않는경우 2가지의 타입을 설정하는 경우
let union: string | number = "React Union"

// 숫자만 입력해도 타입에러가 뜨지 않는다.
union = 123123

// function & types

function add(a: number, b: number) {
  return a + b
}

console.log(add(3, 5))

// Generics

// 타입 추론
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

// number[]
const updateArray = insertAtBeginning(demoArray, -1)

// string[]
const stringArray = insertAtBeginning(['a','b','c'], "c")
