### 콜백함수  

>함수의 인수로 사용되는 함수

예제
```js
function timeout(callback){
  setTimeout(() => {
    console.log("안녕하세요")
    cb()
  }, 3000)
}

timeout(() => {
  console.log("콜백")
})

// 안녕하세요가 3초 뒤에 출력되고 그 다음에 콜백이 출력 됨 (순서대로 출력)
```

>콜백 정의 [코어자바스크립트 콜백함수](https://ko.javascript.info/function-expressions#ref-36)

 함수 호출 할때 인자로 함수를 넘겨주고, 받은 함수는 조건에 따라 **나중에** 그 함수를 실행한다해서 그 함수를 콜백이라고 한다.




