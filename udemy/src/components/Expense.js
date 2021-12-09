import React from "react"
import { ExpenseItem } from "./ExpenseItem"
import "./Expense.css"
import { Card } from "./Card"

export const Expense = () => {
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

  return (
    <Card>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </Card>
  )
}
