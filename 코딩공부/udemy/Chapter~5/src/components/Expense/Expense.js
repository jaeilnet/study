import React, { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import { Card } from "../UI/Card"

import "./Expense.css"
import ExpensesChart from "./ExpensesChart"

export const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear)
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div className="expense">
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  )
}
