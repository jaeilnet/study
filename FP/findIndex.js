import { users } from "./example.js";
import { bmatch } from "./HOC.js";

function findIndex(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return i;
  }

  return -1;
}

console.log(findIndex(users, bmatch({ name: "JM", age: 32 })));
// 5

console.log(findIndex(users, bmatch({ age: 36 })));
// -1
