// 함수형으로 개선 후

import { users } from "./example.js";

export function filter(list, predicate) {
  let new_list = [];

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }

  return new_list;
}

const user_under_30 = filter(users, function (user) {
  //   console.log(user);
  return user.age < 30;
});

console.log(user_under_30.length); // 4;

let filterAges = [];

for (let i = 0; i < user_under_30.length; i++) {
  filterAges.push(user_under_30[i].age);
}

console.log(filterAges); //[ 25, 28, 27, 24 ]

const user_over_30 = filter(users, function (user) {
  return user.age >= 30;
});

console.log(user_over_30.length); // 3;
