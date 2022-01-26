import React, { useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context"
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
  const todoTextIputRef = useRef<HTMLInputElement>(null)

  const todosCtx = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    // ! 은 null 일리가 없다
    const enteredText = todoTextIputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextIputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
