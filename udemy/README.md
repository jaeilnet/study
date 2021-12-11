# 유데미 강의

## 강의내용 리액트 + 리덕스 + Next.js + 타스 종합강의

<br/>

[강의주소](https://www.udemy.com/course/best-react/)

---

#### 기록   

<br/>

+ 12-09 섹션 ~3 리액트 기초 및 실습 컴포넌트 **완료**

+ 12-09 섹션 4 리액트 State 다루기 **완료**
  - useState 에 데이터 담기 
  - 데이터 끌어올리기 (리프팅)
   
+ 12-09 섹션 4~6 **완료** 
  - 섹션 4: 조건부 렌더링
    - 함수를 걸어서 사용 하는 방법
        ```js
        const ExpenseList = (props) => {
        if (props.items.length === 0) {
          return <h2 className="expense-list__fallback">No Expense</h2>
        }

        return (
          <ul className="expenses-list">
            {props.items.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
          </ul>
          )
        }
       ```

  - 섹션 5: 스타일 컴포넌트
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

      // div 2개를 만들어서 각각 만들어줬는데 리팩토링해야한다고 느낌..
      ```