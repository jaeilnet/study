import React from "react"
import "./TodoList.css"

interface TodoListProps {
  item: { id: string; text: string }[]
  onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  children,
  item,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {item.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
