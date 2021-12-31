## 기록

  - 섹션 6: 스타일 컴포넌트
    - state와 props를 이용해서 2가지의 스타일을 동적으로 보여줌
      ```js
     
      const FormControl = styled.div`
        margin: 0.5rem 0;

        & label {
          font-weight: bold;
          display: block;
          margin-bottom: 0.5rem;
          color: ${(props) => (props.isValid ? "red" : "black")};
        }

        & input {
          display: block;
          width: 100%;
          border: 1px solid ${(props) => (props.isValid ? "red" : "#ccc")};
          background: ${(props) => (props.isValid ? "#ffd7d7" : "transpare")};
          font: inherit;
          line-height: 1.5rem;
          padding: 0 0.25rem;
        }

        & input:focus {
          outline: none;
          background: #fad0ec;
          border-color: #8b005d;
        }
      `

       return(
        <FormControl isValid={!isValid}>
      )
      ```