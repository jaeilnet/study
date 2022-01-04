import React from "react"
import styled from "styled-components"

interface InputsProps {
  width: string
}

const InputEle: React.FC<InputsProps> = ({ children, width }) => {
  return <Inputs width={width}>{children}</Inputs>
}

export default InputEle

const Inputs = styled.input`
  width: ${(props) => (props.width ? props.width : "320")}px;
`
