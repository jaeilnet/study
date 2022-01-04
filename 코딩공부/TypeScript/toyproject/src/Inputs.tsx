import React, { useState } from "react"
import InputEle from "./InputEle"

type MyFormOnSubmit = {
  onSubmit: (form: { name: string; description: string }) => void
}

const Inputs: React.FC = function Inputs({ children }) {
  // const [form, setForm] = useState({
  //   name: "",
  //   description: "",
  // })

  // const { name, description } = form

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log(form)
  // }

  return (
    <form>
      <InputEle width="320" />
      <InputEle width="100" />
      <button type="submit">등록</button>
    </form>
  )
}

export default Inputs
