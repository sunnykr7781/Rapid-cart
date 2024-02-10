import React, { useState } from "react"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"

const Cart = ({ count, items }) => {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal((previousstate) => !previousstate)
  }
  return (
    <>
      <div onClick={handleModal} className="cart">
        <span data-items={count}>Cart</span>
        <i class="ri-shopping-cart-2-line"></i>
      </div>
      {showModal && (
        <Modal onclose={handleModal}>
          {" "}
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal_list">
              {count > 0 ? (
                items.map((item) => {
                  return <CartItem data={item} key={item.id} />
                })
              ) : (
                <div className="empty-cart">
                  Please add something in your cart!
                </div>
              )}
            </div>
            {count > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount:</h4>
                  <h4>
                    {items.reduce((previous, current) => {
                      return (
                        previous + current.discountedPrice * current.quantity
                      )
                    }, 0)}
                    <span style={{ marginLeft: "3px" }}> INR</span>
                  </h4>
                </div>
                <button>Order Now</button>
              </div>
            )}
          </div>{" "}
        </Modal>
      )}
    </>
  )
}

export default Cart
