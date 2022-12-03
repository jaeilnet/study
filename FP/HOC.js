// 고차함수

import { users } from "./example.js";
import { find } from "./find.js";

// key val 를 받아서 obj 를 만들어서 반환
function object(key, val) {
  let obj = {};
  obj[key] = val;
  return obj;
}

// obj 과 obj2 를 비교하여 동일하면 한지 비교
function match(obj, obj2) {
  for (let key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }

  return true;
}

// obj2 를받아서
export function bmatch(obj2, val) {
  console.log(arguments, " arguments");
  // [Arguments] { '0': 'id', '1': 3 }
  // [Arguments] { '0': 'name', '1': 'BJ' }
  if (arguments.length == 2) obj2 = object(obj2, val);
  console.log(obj2, "obj2");
  // { id: 3 } obj2
  // { name: 'BJ' } obj2
  return function (obj) {
    return match(obj, obj2);
  };
}

console.log(
  match(find(users, bmatch("id", 3)), find(users, bmatch("name", "BJ")))
);

// true
