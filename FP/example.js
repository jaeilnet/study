//  node FP/example.js

export let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

let temp_users_30 = [];
let len = users.length;
for (let i = 0; i < len; i++) {
  if (users[i].age < 30) temp_users_30.push(users[i]);
}

console.log(temp_users_30.length); //4

let ages = [];

for (let i = 0; i < len; i++) {
  if (temp_users_30[i]) ages.push(temp_users_30[i].age);
}

console.log(ages);
// [25, 28, 27, 24];

let temp_users_20 = [];
let len_20 = users.length;
for (let i = 0; i < len; i++) {
  if (users[i].age >= 30) temp_users_20.push(users[i]);
}

console.log(temp_users_20.length); // 3

let names = [];
for (let i = 0; i < temp_users_20.length; i++) {
  names.push(temp_users_20[i].name);
}

console.log(names); //[ 'ID', 'BJ', 'JM' ]
