import { filter, map } from "./map.js";

let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

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
