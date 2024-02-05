import React from "react"

const Loader = () => {
  return (
    <>
      <div className="loader-overlay"></div>
      <div className="loading-dots">
        <div>loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>
  )
}

export default Loader
