// console.log(sum(3, 4), "1"); // TypeError: sum is not a function

var sum = function (a, b) {
  return a + b;
};

var a = sum(1, 2);

console.log(a, "1"); // 3

var sum = function (x, y) {
  return x + y + y;
};

var c = sum(1, 2);

console.log(c, "2"); // 5
