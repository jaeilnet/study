import React, { useState } from "react"
import Todo from "../models/todo"

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

// 초기 값 값이 필요함
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
})

export const TodosContextProvider: React.FC = ({ children }) => {
  // useState가 어떤 타입의 배열일지 타입선언
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    // 원본 배열을 유지해야하기 때문에 concat으로 새로운 배열을 반환
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}
