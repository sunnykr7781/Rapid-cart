import Product from "./components/Products/Product"
import Header from "./components/layout/Header"
import SubHeader from "./components/layout/SubHeader"
import { useState } from "react"
const App = () => {
  let [cartItems, setCartItems] = useState(0)
  const handleAddItems = () => {
    setCartItems(cartItems + 1)
  }
  const handleRemoveItems = () => {
    setCartItems(cartItems + -1)
  }

  return (
    <>
      <Header count={cartItems} />
      <SubHeader />
      <Product onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} />
    </>
  )
}
export default App
