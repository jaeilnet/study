function solution(s) {
  const index = Math.floor(s.length / 2);

  return (answer = s.length % 2 === 0 ? s[index - 1] + s[index] : s[index]);
}
