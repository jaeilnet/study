import { users } from "./example.js";
import { filter } from "./filter";

export function map(list, iteratee) {
  let new_list = [];

  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i]));
  }

  return new_list;
}

let user_under_30 = filter(users, function (user) {
  return user.age < 30;
});

let ages = map(user_under_30, (user) => user.age);

console.log(user_under_30.length); // 4
console.log(ages); // [ 25, 28, 27, 24 ]

// 1. 실행 결과로 바로 실행하기

// 함수의 리턴 값을 바로 다른 함수의 인자로 사용하면 변수 할당을 줄일 수 있다.

// let user_under_30 = filter(users, function (user) {
//   return user.age < 30;
// });

// let ages = map(user_under_30, (user) => user.age);

let newAges = map(
  filter(users, (user) => user.age > 30),
  (user) => user.age
);

console.log(newAges); // [ 32, 32, 32 ]

let newName = map(
  filter(users, (user) => user.age > 30),
  (user) => user.name
);

console.log(newName); // [ 'ID', 'BJ', 'JM' ]

// 2. 작은 함수를 하나 더 만들면 변수 할당을 모두 없앨 수 있다.

function log_length(value) {
  console.log(value.length);

  return value;
}

console.log(
  log_length(
    map(
      filter(users, (user) => user.age > 30),
      (user) => user.name
    )
  )
);
// [ 'ID', 'BJ', 'JM' ]
