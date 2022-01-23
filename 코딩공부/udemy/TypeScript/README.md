# 타스연습 투두 리스트

## 미리보기

![이미지1](./src/assets/Home.png)

## 사용한 기술
### **TypeScript**
### **useContext**
---
## 컴포넌트 구조

- App.tsx 
- NewTodo
- Todos
- TodoItem

### 1. App.tsx
- NewTodo
- Todos 

### 2. Todos
- TodoItem
---

## 기억해야할 내용 정리

### NewTodo
```typescript
  // Context 를 통해서 addTodo 함수를 가져온다.
  const todosCtx = useContext(TodosContext)

  // event 타입 정의
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

     // ! 은 null 일리가 없다
    const enteredText = todoTextIputRef.current!.value
 
    if (enteredText.trim().length === 0) {
      return
    }

    // Context 로 가져온 add 함수에 enteredText 라는 string 타입의 text를 넘김
    todosCtx.addTodo(enteredText)
  }
```

### useContext

```typeScript
import React, { useState } from "react"
import Todo from "../models/todo"

// 타입 정의
type TodosContextObj = {
  // Todo = id:string, name :string 이다
  items: Todo[]
  // 반환 값이 없을 땐 void
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

// Context의 초기 값 값이 필요함
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
})

export const TodosContextProvider: React.FC = ({ children }) => {
  // useState가 어떤 타입의 배열일지 타입선언
  const [todos, setTodos] = useState<Todo[]>([])

  // add 함수
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

  // 원본 배열을 유지해야하기 때문에 concat으로 새로운 배열을 반환
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  // 제거 함수
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  // 실제 넘길 value 값
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
  // App.tsx 에 Provider 로 감싸줍니다.
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}



```