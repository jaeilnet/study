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
