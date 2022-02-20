// 조합 타입

function combine(n1: number | string, n2: number | string) {
  // const result = n1 + n2 // error

  let result
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2
  }
  return result
}

const combineAges = combine(30, 26)

console.log(combineAges) // 56

const combineNames = combine("max", "anna")

console.log(combineNames) // max, anna
