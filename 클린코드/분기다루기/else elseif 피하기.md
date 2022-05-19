# else elseif 피하기

else는 반전 된 결과를 기대할 때 쓰는게 좋다

```js
function test(user) {
  if (user.name) {
    return user.name;
  } else {
    return "이름없음";
  }
}

function test(user) {
  if (user.name) {
    return user.name;
  }

  return "이름없음";
}
```
