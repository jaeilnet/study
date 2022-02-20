// 타입추론 && 타입 할당하기

function adds(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  // number + number = 15

  // boolean
  if (showResult) {
    console.log(phrase + result)
    // string + number error
  } else {
    return result
    // number 15
  }
}

const number1 = 5
const number2 = 10
const printResult = true
const resultPharse = "result is :..."

adds(number1, number2, printResult, resultPharse)
