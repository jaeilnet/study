// 크레인 인형 뽑기 Lev.1
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

// 1답안
function solution(board, moves) {
  var answer = 0

  let arr = []

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1])

        board[j][moves[i] - 1] = 0

        break
      }
    }
    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        answer += 2
        arr.splice(arr.length - 2, 2)
      }
    }
  }

  console.log(answer)
  return answer
}

// 2답안

function solution(board, moves) {
  var answer = 0

  let poparr = []

  moves.forEach((n) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][n - 1]) {
        if (board[i][n - 1] !== 0) {
          poparr.push(board[i][n - 1])
          if (poparr[poparr.length - 1] === poparr[poparr.length - 2]) {
            answer += 2
            poparr.splice(poparr.length - 2, 2)
          }
          board[i][n - 1] = 0
          break
        }
      }
    }
  })

  console.log(poparr)
  return answer
}
