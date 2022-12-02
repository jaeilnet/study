import { users } from "./example.js";
import { filter } from "./filter.js";

console.log(filter(users, (user) => user.id === 3));
// [{ id: 3, name: "BJ", age: 32 }];

// break;

let user;

for (let i = 0; i < users.length; i++) {
  if (users[i].id === 3) {
    user = users[i];
    break;
  }
}

console.log(user);
// { id: 3, name: 'BJ', age: 32 }

function findById(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
}

console.log(findById(users, 5)); //{ id: 5, name: 'JE', age: 27 }

function findByName(list, name) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) return list[i];
  }
}

console.log(findByName(users, "JE")); //{ id: 5, name: 'JE', age: 27 }

// key 값 별로 property 를 받을 수 있다.

// 하지만 다음과 같은 상황에서는 적합하지 않다.
// 1. key 가 아닌 메서드를 통해 값을 얻어야할때
// 2. 두가지 이상의 조건이 필요할 때
// 3. ==이 아닌 다른 조건으로 찾고자 할 때

function findBy(key, list, val) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
}

console.log(findBy("name", users, "JE")); // { id: 5, name: 'JE', age: 27 }
console.log(findBy("id", users, 5)); // { id: 5, name: 'JE', age: 27 }

function User(id, name, age) {
  this.getId = function () {
    return id;
  };

  this.getName = function () {
    return name;
  };

  this.getAge = function () {
    return age;
  };
}

let user2 = [
  new User(1, "ID", 32),
  new User(2, "HA", 25),
  new User(3, "BJ", 32),
  new User(4, "PJ", 28),
  new User(5, "JE", 27),
  new User(6, "JM", 32),
  new User(7, "HI", 24),
];

function find(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

find(user2, (user) => console.log(user.getName()));
// HA;
// ID;
// HA;
// BJ;
// PJ;
// JE;
// JM;
// HI;
find(user2, (user) => console.log(user.getAge()));
// 32;
// 25;
// 32;
// 28;
// 27;
// 32;
// 24;
find(user2, (user) => console.log(user.getId()));
// 1
// 2
// 3
// 4
// 5
// 6
// 7

console.log(
  find(user2, function (u) {
    return u.getAge() === 25;
  }).getName()
);

console.log(find(user2, (u) => u.getAge() === 25).getName());
// HA

console.log(
  find(users, function (u) {
    return u.name.indexOf("P") !== -1;
  })
);

// { id: 4, name: 'PJ', age: 28 }

console.log(
  find(users, function (u) {
    return u.age === 32 && u.name === "JM";
  })
);

// { id: 6, name: 'JM', age: 32 }

console.log(
  find(user2, function (u) {
    return u.getAge() < 30;
  }).getName()
);

// HA
