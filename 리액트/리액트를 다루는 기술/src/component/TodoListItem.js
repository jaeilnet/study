import React from "react"
import {
  MdCheck,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md"
import "./TodoListItem.scss"

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo

  return (
    <div className="TodoListItem">
      <div className="checkbox" onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem
