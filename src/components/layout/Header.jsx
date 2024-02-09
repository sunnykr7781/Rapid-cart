import Cart from "../Cart"

const Header = ({ count }) => {
  return (
    <>
      <div className="main">
        <div className="logo">
          <h3>rapid cart</h3>
          <i class="ri-shopping-cart-line"></i>
        </div>
        <div className="searchbar">
          <form action="">
            <input type="text" placeholder="enter product name , category" />
          </form>
          <div className="icon">
            <i class="ri-search-line"></i>
          </div>
        </div>
        <Cart count={count} />
      </div>
    </>
  )
}

export default Header
