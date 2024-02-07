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
        <div className="cart">
          <span data-items={count}>Cart</span>
          <i class="ri-shopping-cart-2-line"></i>
        </div>
      </div>
    </>
  )
}

export default Header
