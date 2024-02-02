import AddToCartIcon from "../../../assets/add_cart.svg"
const ListItem = ({ data }) => {
//   console.log(data)
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
