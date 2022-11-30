import { filter, map } from "./map.js";
import { users } from "./example";

// 클로저 예제
function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

const value = bvalue("a");

const b = value({
  a: "hi",
  b: "hello",
});

// console.log(b); // hi

let under_30 = (user) => user.age < 30;

console.log(map(filter(users, under_30), (u) => u.age));
// key 활용

// let useKey = (key) => (list) => map(list, (v) => v[key]);
// useKey("age");

function useKey(key) {
  return function (list) {
    return map(list, function (v) {
      return v[key];
    });
  };
}

let ages = useKey("age");

let newUnder_30 = function (u) {
  return u.age < 30;
};

console.log(ages(filter(users, newUnder_30)));
