let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

// 함수형으로 개선 후

function filter(list, predicate) {
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
