수정 전 코드

```js
function loginService(isLogin, user) {
  if (!isLogin) {
    if (!checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}
```

분기 점

1. 로그인 여부 확인
2. 토큰 존재여부
3. 가입한 유저인지 확인

## 수정 코드

```js
function loginService(isLogin, user) {
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();

  return "로그인 성공";
}
```
