import React, { useState } from "react"
import Modal from "../UI/Modal"

const Cart = ({ count }) => {
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
                <div className="checkout-modal_list-item">
                  <div className="img-wrap">
                    <img
                      src={"/assets/placeholder.png"}
                      className="img-fluid"
                      alt="Placeholder"
                    />
                  </div>
                  <div className="information">
                    <div>
                      <h4>Title of the Product</h4>
                      <div className="pricing">
                        <span>2000</span>
                        <small>
                          <strike>2500</strike>
                        </small>
                      </div>
                    </div>
                    <div className="cartaddon">
                      <button>
                        <span>-</span>
                      </button>
                      <span className="white">{0}</span>
                      <button>
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="empty-cart">
                  Please add something in your cart!
                </div>
              )}
            </div>
            {count > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount: </h4>
                  <h4>2000 INR</h4>
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
