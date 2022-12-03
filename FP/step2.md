다형성

```js
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

console.log(find(user2, (u) => u.getAge() === 25).getName());
// HA

console.log(find(users, (u) => u.name.indexOf("P") !== -1));
// { id: 4, name: 'PJ', age: 28 }

console.log(find(users, (u) => u.age === 32 && u.name === "JM"));
// { id: 6, name: 'JM', age: 32 }

console.log(find(user2, (u) => u.getAge() < 30).getName());
// HA
```

함수를 만든 함수와 find, filter 조합하기

```js
// find

import { users } from "./example.js";

function find(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function match(key, val) {
  return (obj) => obj[key] === val;
}

console.log(find(users, match("id", 1)));
// { id: 1, name: 'ID', age: 32 }
console.log(find(users, match("name", "HI")));
// { id: 7, name: 'HI', age: 24 }
console.log(find(users, match("age", 27)));
// { id: 5, name: 'JE', age: 27 }
```

익명함수를 클로저를 만들어서 리턴한다.
기존 predicate 3개를 만들어서 find에 넘겼다. 짧고 간결하다.
match는 함수를 리턴하기 때문에 filter 나 map 과도 조합이 가능하다.

## 고차함수와 조합하기

### 고차함수란?

함수를 인자로 받거나 함수를 리턴하는 함수를 `고차함수`라고 합니다.
이때 함수를 인자로 넘겨받는다면 그건 `콜백함수`가 되는 것입니다.
함수안에서 내부함수가 외부함수의 참조값을 가지고 함수를 리턴한다면 그건 `클로저`입니다.

내장함수로써 array 의 map, filter 등이 있습니다.

```js
// filter 함수가 고차함수

console.log(filter(users, match("age", 32)));
// [
//   { id: 1, name: "ID", age: 32 },
//   { id: 3, name: "BJ", age: 32 },
//   { id: 6, name: "JM", age: 32 },
// ];
```
