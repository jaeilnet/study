### 객체
[코어 자바스크립트 객체](https://ko.javascript.info/object)
<br/>
<br/>
데이터를 저장할 때 사용  
{key : value} 형태로 사용

> 선언  
```js
let user = new Object() // 객체 생성자 방식
let use = {} // 객체 리터럴 방식
// 보통 리터럴 방식을 선호
```
> 리터럴과 프로퍼티
```js
let user = {
  name : "jaeil",
  age : 0
}
// {} 리터럴 안에 키 :  value  프로퍼티 구성 됨

// 접근

console.log(user.name) 
console.log(user[name])
// jaeil
console.log(user.age) 
console.log(user[age]) 
// 0

// 삭제

delete user.age

// 수정

user.name = Sweet

console.log(user.name) // Sweet

// const로 선언했더라도 객체 값은 수정 될 수 있음
// -> user의 값은 고정이지만 그 내용의 값은 고정이 아님
```
>for ... in 반복문
### **for..in 반복을 사용하여 객체의 모든 키를 순회**
```js
for (let key in user){
  console.log(key)
  // name, age 등등 key 값이 출력
  console.log(user[key])
  // jaeil, 0 등등 key의 value 값들을 출력
}
```
**번외**  
>객체 정렬 방식(정수 프로퍼티)

객체 프로퍼티에도 순서가 있음
```js
let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  // ..,
  "1": "미국"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// 키가 정수인 경우에만 해당
// str 등등은 해당되지 않음
```