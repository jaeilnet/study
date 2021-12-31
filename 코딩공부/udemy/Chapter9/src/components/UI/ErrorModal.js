import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import Buttons from "./Button"
import styled from "styled-components"

const Backdrop = (props) => {
  return <BackDrop onClick={props.onConfirm}></BackDrop>
}

const ModalOverlay = (props) => {
  return (
    <Modals>
      <Card>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Buttons onClick={props.onConfirm}>Okay</Buttons>
        </footer>
      </Card>
    </Modals>
  )
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modaloverlay-root")
      )}
    </>
  )
}

ErrorModal.defaultProps = {
  modal: false,
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

const Modals = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & p {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`
export default ErrorModal
