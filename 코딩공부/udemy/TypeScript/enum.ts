// 열거형

// const ADMINS = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMINS,
  RED_ONLY,
  AUTHOR,
  // 다른 숫자를 기입 가능
  ETC = 5,
  USER = 100,
}

// 숫자로 반환 됨

const auth = {
  role: Role.ADMINS,
}

console.log(auth)
// 0

// 자바스크립트로 컴파일 된 코드를 보면 if문으로 구현 된 걸 확인 가능
