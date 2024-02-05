// import React from "react"
import ReactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({ onclose }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onclose={onclose} />
      <div className="modal">
        modal
        <button onClick={onclose}>x</button>
      </div>
    </>,
    document.getElementById("modal-loader")
  )
}

export default Modal
