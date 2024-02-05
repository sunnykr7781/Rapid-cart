import React from "react"
import ReactDOM from "react-dom"
export const Backdrop = (props) => {
  const handleclick = () => {
    if (props.onclose) {
      props.onclose()
    }
  }
  return (
    <>
      <div onClick={handleclick} className="loader-overlay"></div>
    </>
  )
}

const Loader = () => {
  // use of portal to create child node
  return ReactDOM.createPortal(
    <>
      <Backdrop />
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
// export {Backdrop}
