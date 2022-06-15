function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();

console.log(`${(t2 - t1) / 1000}초 소요`);

//0.10303895902633667초 소요
