import React, { useState } from "react"
import Card from "../UI/Card"

import styled from "styled-components"
import Buttons from "../UI/Buttons"
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("")
  const [enteredUserAge, setEnteredUserAge] = useState("")
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "잘못된 입력",
        message: "입력을 다시 확인해주세요",
      })
      return
    }

    props.onAddUser(enteredUsername, enteredUserAge)

    setEnteredUserAge("")
    setEnteredUserName("")
  }

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value)
  }

  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <Form onSubmit={addUserHandler}>
          <label htmlFor="userId">UserName</label>
          <input
            id="userId"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="userAge">Age (Years)</label>
          <input
            id="userAge"
            type="number"
            max="99"
            min="1"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Buttons type="submit">Add User</Buttons>
        </Form>
      </Card>
    </>
  )
}

const Form = styled.form`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`

export default AddUser
