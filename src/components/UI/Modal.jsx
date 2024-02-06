// import React from "react"
import ReactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({ onclose, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onclose={onclose} />
      <div className="modal">
        <div className="content"> {children}</div>
        <button type="close" onClick={onclose}>
          x
        </button>
      </div>
    </>,
    document.getElementById("modal-loader")
  )
}

export default Modal
