import { useState } from "react"
import AddToCartIcon from "../../../assets/add_cart.svg"
import Modal from "../../UI/Modal"
const ListItem = ({ data, updatetitle }) => {
  // console.log(data)

  const [showmodal, setShowmodal] = useState(false)
  const [counter, setCounter] = useState(0)
  const addcounter = (event) => {
    event.stopPropagation()
    setCounter(counter + 1)
  }
  const subcounter = (event) => {
    if (counter < 1) {
      return
    }
    event.stopPropagation()
    setCounter(counter - 1)
  }
  const handleModal = () => {
    setShowmodal((e) => !e)
  }
  return (
    <>
      <div onClick={handleModal} className="item-card">
        <img
          className="img-fluid"
          src={`./assets/${data.thumbnail}`}
          alt={data.title}
        />
        <div className="item-card__information">
          <div className="pricing">
            <span>₹{data.discountedPrice}</span>
            <small>
              <strike>₹{data.price}</strike>
            </small>
          </div>
          <div className="title">
            <h4>{data.title}</h4>
          </div>
        </div>
        <div>
          <button
            className="buttonn"
            onClick={() => {
              updatetitle(data.id)
            }}
          >
            <span>update title</span>
          </button>
          {/* conditional rendering */}
          {counter > 0 ? (
            <div className="cartaddon">
              <button onClick={subcounter}>
                <span>-</span>
              </button>
              <span className="white">{counter}</span>
              <button>
                <span onClick={addcounter}>+</span>
              </button>
            </div>
          ) : (
            <button className="cart" onClick={addcounter}>
              <span>add to cart </span>
              <img src={AddToCartIcon} alt="cart icon" />
            </button>
          )}
        </div>
      </div>
      {showmodal && (
        <Modal onclose={handleModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className={"img-fluid"}
                src={`/assets/${data.thumbnail}`}
                alt={data.title}
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className={"pricing"}>
                <span>₹{data.discountedPrice}</span>
                <small>
                  <strike>₹{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>
              {counter < 1 ? (
                <button
                  className={"cart cart-add card-add__modal"}
                  onClick={addcounter}
                >
                  <span>Add to Cart</span>
                  <img src={AddToCartIcon} alt="Cart Icon" />
                </button>
              ) : (
                <div className="cartaddon">
                  <button onClick={subcounter}>
                    <span>-</span>
                  </button>
                  <span className="white">{counter}</span>
                  <button>
                    <span onClick={addcounter}>+</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
export default ListItem
