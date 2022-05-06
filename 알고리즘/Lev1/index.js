function solution(n, arr1, arr2) {
  var answer = [];

  const num = arr1.map((e) => e.toString(2).padStart(n, 0));
  const num2 = arr2.map((e) => e.toString(2).padStart(n, 0));

  let sum = 0;
  let ary = [];
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    arr = [];
    ary = [];
    for (let j = 0; j < num.length; j++) {
      sum = Number(num[i][j]) + Number(num2[i][j]);
      arr.push(sum);
      ary.push(arr[j] > 0 ? "#" : " ");
    }
    answer.push(ary.join("").split(",").join(""));
  }

  return answer;
}
