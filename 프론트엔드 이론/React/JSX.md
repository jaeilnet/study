### **JSX 란?**

JSX 는 HTML 처럼 보이는 코드를 작성 할 수 있게 해주는 자바스크립트 문법의 확장입니다. JSX는 자바스크립트 함수 호출 방식으로 컴파일 되어 컴포넌트에 대한 마크업을 만들 수 있는 더 좋은 방법을 제공합니다.

```js
  <div className="example" />

// ->

  React.createElement( 'div', {className : 'example'})
```