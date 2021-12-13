import React from "react"
import styled from "styled-components"
import Card from "../UI/Card"

const UserList = (props) => {
  return (
    <User>
      <Ul>
        {props.users.map((user) => (
          <Li key={user.id}>
            {user.name} ({user.age} year old)
          </Li>
        ))}
      </Ul>
    </User>
  )
}

const User = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`
const Ul = styled.ul`
  list-style: none;
  padding: 1rem;
`

const Li = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`

export default UserList
