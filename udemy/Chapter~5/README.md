#### 기록   

+ 12-09 섹션 ~3 리액트 기초 및 실습 컴포넌트 **완료**

+ 12-10 섹션 4 리액트 State 다루기 **완료**
  - useState 에 데이터 담기 
  - 데이터 끌어올리기 (리프팅)
   
+ 12-11 섹션 5~6 **완료** 
  - 섹션 5: 조건부 렌더링
    
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