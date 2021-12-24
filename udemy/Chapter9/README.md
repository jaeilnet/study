## 기록


+ 12-12 섹션 7~9  **완료**
  - 섹션 7: 앱 디버깅하기 
    - 디버깅을 통해 오류를 좀 더 효율적으로 찾는 방법
    - react dev tool 간단히 훑어보기
  - 섹션 8: 지금까지 배운 내용 연습 프로젝트
    - 체크해야할 부분 **모달 데이터 리프팅?** 사용
      - ```js
          const errorHandler = () => {
            setError(null)
          }

          return (
            <>
              {error && (
                <ErrorModal
                  title={error.title}
                  message={error.message}
                  onConfirm={errorHandler}
                />
              )}
          // 에러 모달 부분만 따로 옮김
          // 현재 실전프로젝트에서도 모달을 사용 할때 이런식으로
          // 모달 안의 내용을 채워줬는데 그때 당시에도 이렇게 하는게 맞나 싶었는데 
          // 강의를 통해서 좀 더 개념이 잡힌 느낌임
        ```
  - 섹션 9: 플레그먼트 && portals && useRef
    - 플레그먼트 외에 portals 라는 것을 처음 알게 되었음,
    - [Portal 리액트 공식페이지](https://ko.reactjs.org/docs/portals.html)
    - Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공합니다. **주로 모달에 사용**
    - 사용 방법(예제)
      - ```js
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