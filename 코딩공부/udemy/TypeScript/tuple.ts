// 튜플은 항상 2개의 요소만 지녀야합니다.

const tuple: { role: roles } = {
  role: [2, "author"],
}

tuple.role.push("admins")
// tuple.role[1] = 10

// type

type roles = [number, string]
