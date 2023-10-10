# 플레그먼트 && portals && useRef

- 플레그먼트 외에 portals 라는 것을 처음 알게 되었음,
- [Portal 리액트 공식페이지](https://ko.reactjs.org/docs/portals.html)
- Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공합니다. **주로 모달에 사용**
- 사용 방법(예제)

```js
//index.html

// 루트경로를 만들어줌
<div id="backdrop-root"></div>
<div id="modaloverlay-root"></div>

// 컴포넌트

const Backdrop = (props) => {
  return <BackDrop onClick={props.onConfirm}></BackDrop>
}


const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modaloverlay-root")
      )}
    </>
  )
}

// 같은 컴포넌트 안에서 여러개를 지정해준다.
// 그리고 ReactDom.createPortal로 인자를 2개 받는다.
// 첫번째는 실제 JSX, 하나는 document.getID로 연결해준다.
```
