import "./App.css"
import { Expense } from "./components/Expense/Expense"
import { NewExpense } from "./components/NewExpense/NewExpense"

function App() {
  const expense = [
    {
      id: 1,
      title: "편의점가기",
      amount: "35,000",
      date: new Date(2021, 12, 9),
    },
    {
      id: 2,
      title: "다이소가기",
      amount: "10,000",
      date: new Date(),
    },
    {
      id: 3,
      title: "이마트가기",
      amount: "20,000",
      date: new Date(),
    },
    {
      id: 4,
      title: "배달음식 먹기",
      amount: "120,000",
      date: new Date(),
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log("In App.js")
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expense} />
    </div>
  )
}

export default App
