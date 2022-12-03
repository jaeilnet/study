// find

import { users } from "./example.js";
import { filter } from "./filter.js";

export function find(list, predicate) {
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

console.log(filter(users, match("age", 32)));
// [
//   { id: 1, name: "ID", age: 32 },
//   { id: 3, name: "BJ", age: 32 },
//   { id: 6, name: "JM", age: 32 },
// ];
