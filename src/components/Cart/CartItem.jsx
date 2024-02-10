import React from "react"

const CartItem = ({ data }) => {
  return (
    <>
      <div className="checkout-modal_list-item">
        <div className="img-wrap">
          <img
            src={`/assets/${data.thumbnail}`}
            className="img-fluid"
            alt="{data.title}"
          />
        </div>
        <div className="information">
          <div>
            <h4>{data.title}</h4>
            <div className="pricing">
              <span>{data.discountedPrice}</span>
              <small>
                <strike>{data.price}</strike>
              </small>
            </div>
          </div>
          <div className="cartaddon">
            <button>
              <span>-</span>
            </button>
            <span className="white">{data.quantity}</span>
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
