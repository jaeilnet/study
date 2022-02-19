// never 절대 타입

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError("An error occurred!", 500)

// never는 일반적으로 함수의 리턴 타입으로 사용됩니다. 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다. 이는 무한 루프(loop)에 빠지는 것과 같습니다.

// 다시

// 절대 발생 할 수 없는 타입을 나타낸다.
// 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.
// 모든 타입에 할당 가능한 하위 타입
// 함수의 마지막에 도달 할 수 없다.
