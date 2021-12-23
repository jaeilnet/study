### **함수형 vs 클래스형 차이**

1. 선언방식

```js

// 클래스형

class App extends Components {
  render(){
    const name = "react";
    return <div className = "react">{name}</div>
  }

}

// 함수형

function App() {
  const name = "react"
  return <div className = "react"> {name} </div>
}

```

2. 특징

>클래스형
* **state, lifeCycle 관련 기능 사용 가능하다.**
* 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다.
* 임의의 메서드를 정의 할 수 있다.
> 함수형

* **state, lifeCycle 관련 기능 사용 불가능 (Hook으로 해결가능)**
* 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
* 컴포넌트 선언이 편하다.

> state
* 컴포넌트 내부에서 바뀔 수 있는 값

> 클래스형 state
```js

  // constructor 안에서 this.state 초기 값 설정 가능

  constructor (props){
    super(props);

    this.state ={ 
      monsters: [],
      userInput : "",
    }
  }

  // constructor 없이도 사용 가능

  class Monsters extends Components {
    state ={
      monsters : [],
      userInput: "",
    }
  }

  // 클래스형 컴포넌트의 state 는 객체 형식

  this.state = {monster : [], userInput : "",}

  //  this.setState 함수로 state의 값을 변경 할 수 있다.

  onClick ={() => {
    this.setState({number:number+1})
  }}
```

>함수형 state

1. 함수형 컴포넌트에서는 useState 훅으로 state를 사용한다.

2. useState 함수를 호출하면 배열이 반환되는데 첫번째 원소는 현재상태 두번째는 상태를 바꾸어주는 함수이다.
```js
    const [name, setName] = useState("초기값")
```

> **props** 란?

* 컴포넌트의 속성을 설정 할 때 사용하는 요소
* 읽기 전용
* 컴포넌트 자체 **props**를 수정해서는 안된다.
* 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다.
* 수정 되는 것은 state 이다.

> LifeCycle 이란?

* Life Cycle은 컴포넌트가 DOM 위에 생성되기 전 후 몇 데이터가 변경되어 상태를 업데이트하기 전 후로 실행되느 메소드들을 의미

* 컴포넌트의 생명주기를 의미
  * 수명은 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다.

* 라이프 사이클은 9개가 존재하지만 크게 3분류로 나눈다. **Mount, Update, Unmount**

![이미지](https://kyun2da.dev/static/69e54fe57da139eabae168b5e8304af4/01645/lifecycle.png)

> Mount

컴포넌트가 처음 실행 될 때 그것을 Mount 라고 표현,

* constructor
* componentDidMount

>Updating

* 업데이트 부분은 4가지의 상황에서 발생함
  * props 가 바뀔 때
  * state 가 바뀔 때
  * 부모 컴포넌트가 리렌더링 될 때
  * this.forceUpdatae로 강제로 렌더링을 트리거할 때

>Unmount

>DidMount 
* 컴포넌트가 제거 되는 것을 말함
