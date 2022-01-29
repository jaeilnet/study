// parameter 외에 반환 타입에 대한 정의

// 반환 값 number
function add(n1: number, n2: number): number {
  return n1 + n2
}

// 반환 값 void
function addResult(num: number): void {
  console.log("result " + num) // 20
}

addResult(add(5, 15))
