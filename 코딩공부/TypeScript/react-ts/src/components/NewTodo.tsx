import React, { useRef } from "react"

const NewTodo = () => {
  const todoTextIputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    // ! 은 null 일리가 없다
    const enteredText = todoTextIputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">todo Text</label>
      <input type="text" id="text" ref={todoTextIputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
