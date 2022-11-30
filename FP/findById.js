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
