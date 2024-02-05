import { useState } from "react"
import AddToCartIcon from "../../../assets/add_cart.svg"
const ListItem = ({ data }) => {
  console.log(data)
  const [counter, setCounter] = useState(0)
  const addcounter = () => {
    setCounter(counter + 1)
  }
  const subcounter = () => {
    if (counter < 1) {
      return
    }
    setCounter(counter - 1)
  }
  // const addcounterbyone = () =>{

  // }
  return (
    <>
      <div className="item-card">
        <img
          className="img-fluid"
          src={`./assets/${data.thumbnail}`}
          alt={data.title}
        />
        <div className="item-card__information">
          <div className="pricing">
            <span>₹{data.discountedprice}</span>
            <small>
              <strike>₹{data.price}</strike>
            </small>
          </div>
          <div className={data.title}>
            <h4>{data.title}</h4>
          </div>
        </div>
        <div>
          {/* conditional rendering */}
          {counter > 0 ? (
            <div className="cartaddon">
              <button onClick={subcounter}>
                <span>-</span>
              </button>
              <span>{counter}</span>
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
    </>
  )
}
export default ListItem
