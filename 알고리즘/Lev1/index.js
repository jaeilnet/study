function solution(dartResult) {
  let answer = 0;

  let num = [];
  let sum = [];

  const str = dartResult.split("");

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      num.push(+str[i]);
    }
    if (num.length > 1 && num[0] === 1 && num[1] === 0) {
      num = [];
      num.push(10);
    }

    if (str[i] === "S") {
      sum.push(num[0] ** 1);
      num.pop();
    }
    if (str[i] === "D") {
      sum.push(num[0] ** 2);
      num.pop();
    }
    if (str[i] === "T") {
      sum.push(num[0] ** 3);
      num.pop();
    }
    if (str[i] === "*") {
      sum[sum.length - 2] = sum[sum.length - 2] * 2;
      sum[sum.length - 1] = sum[sum.length - 1] * 2;
    }
    if (str[i] === "#") {
      sum[sum.length - 1] = sum[sum.length - 1] * -1;
    }
  }
  return sum.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}
