### **async await**
[코어 자바스크립트 async await](https://ko.javascript.info/async-await)

>async 과 await 이란?

Promise 를 좀 더 편리하게 사용 할 수 있는 문법

예시

```js
async function f() {
  return 1;
}

// async 을 붙이게 되면 항상 promise 를 반환 합니다.

// promise를 반환하기 때문에 then과 catch 메서드를 사용 할 수 있습니다.

f().then();
```

### **await**

 await 을 만나게 되면 promise 가 fullfiled 상태가 될 때 까지 기다립니다. 결과는 그 이후에 반환됩니다.

 ```js
  async function f(){
    let promise = new Promise((resolve, reject) => setTimeout(()=> {
      resolve("완료")
    }, 1000))

    let result = await promise
    // 프로미스가 처리 될 떄 까지 함수 시행을 기다림 처리가 되면 그 결과와 함께 실행이 재개

    alert(result) // 완료
  }

f()
 ```

 > await 은 최상위 레벨 코드에서는 작동하지 않는다.
 ```js
  let response = await fetch() // error
  let user = await response.json() // error
 ```

 하지만 async 익명함수로 코드를 감싸면 최상위 레벨 코드에도 await 사용 가능
 ```js
 (async(() => {
   let response = await fetch()
   let user = await response.json()
 }))
 ```
> 에러 핸들링

promise가 정상적으로 이행되면 await promise는 프로미스 객체의 result 값을 반환, 반면 거부되면 마치 throw 문을 작성한 것 처럼 에러가 발생

```js
async function f(){
  await Promise.reject(new Error("에러발생"))
}

// 위 코드는 아래와 동일

async function f() {
  throw new Error("에러발생")
}
```


>요약

>function 앞에 async 키워드를 추가하면?
1. 함수는 언제나 promise를 반환
2. 함수안에서 await을 사용가능
> await 키워드를 사용하면 promise가 처리 될 때 까지 대기, 처리가 완료되면 조건에 따라 아래와 같은 동작이 이어짐
1. 에러발생 - 예외가 생성 됨(에러가 발생한 장소에서 throw error 호출 한것과 동일함)
2. 에러 미발생 - promise 객체의 result 값을 반환


### **연습해보기**
> .then .catch 대신 async/await 사용해보기

#### **then. catch**
```js
function loadJson (url){
  return fetch(url)
  .then(response => {
    if(response.status === 200) {
      return response.json()
    } else{
      throw new Error(response.status)
    }
  })
}

loadJson("no-such-user.json").catch(alert) // 404 error
```
-> async await 변환

```js
  async function loadJson (url){
    let response = await fetch(url)

    if(response.status === 200){
      return response.json()
    }

    throw new Error(response.status)
  }

  loadJson('no-such-user-json').catch(alert)
```