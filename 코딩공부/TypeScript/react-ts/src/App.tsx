import React, { useState } from "react"
import "./App.css"
import NewTodo from "./components/NewTodo"
import Todos from "./components/Todos"
import Todo from "./models/todo"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const onAddTodo = (enteredText: string) => {
    const newTodos = new Todo(enteredText)

    setTodos((prevTodos) => {
      return prevTodos!.concat(newTodos)
    })
  }

  const removeToHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} onRemoveTodo={removeToHandler} />
    </div>
  )
}

export default App
