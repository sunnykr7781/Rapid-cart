import AddToCartIcon from "../assets/add_cart.svg"
const ListItem = () => {
  return (
    <>
      <div className="item-card">
        <img
          className="img-fluid"
          src="./assets/placeholder.png"
          alt="product image"
        />
        <div className="item-card__information">
          <div className="pricing">
            <span>₹349</span>
            <small>
              <strike>₹449</strike>
            </small>
          </div>
          <div className="title">
            <h4>product title</h4>
          </div>
        </div>
        <button className="cart">
          <span>add to cart </span>
          <img src={AddToCartIcon} alt="cart icon" />
        </button>
      </div>
    </>
  )
}
export default ListItem
