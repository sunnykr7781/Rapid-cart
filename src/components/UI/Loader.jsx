import React from "react"
import ReactDOM from "react-dom"

const Loader = () => {
  // use of portal to create child node 
  return ReactDOM.createPortal(
    <>
      <div className="loader-overlay"></div>
      <div className="loading-dots">
        <div>loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  )
}

export default Loader
