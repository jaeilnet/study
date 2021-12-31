import { useState } from "react"
import "./App.css"
import { Expense } from "./components/Expense/Expense"
import { NewExpense } from "./components/NewExpense/NewExpense"

function App() {
  const DUMMY_EXPENSE = [
    {
      id: 1,
      title: "편의점가기",
      amount: 35000,
      date: new Date(2021, 12, 9),
    },
    {
      id: 2,
      title: "다이소가기",
      amount: 10000,
      date: new Date(),
    },
    {
      id: 3,
      title: "이마트가기",
      amount: 20000,
      date: new Date(),
    },
    {
      id: 4,
      title: "배달음식 먹기",
      amount: 120000,
      date: new Date(),
    },
  ]

  const [expenses, setExpense] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  )
}

export default App
