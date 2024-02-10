import CartItem from "./components/Cart/CartItem"
import Product from "./components/Products/Product"
import Header from "./components/layout/Header"
import SubHeader from "./components/layout/SubHeader"
import { useState } from "react"
const App = () => {
  let [cartItems, setCartItems] = useState([])
  const handleAddItems = (item) => {
    // setCartItems(cartItems + 1)
    let items = [...cartItems]
    let index = items.findIndex((i) => i.id === item.id)
    if (index > -1) {
      items[index] = item
    } else {
      items.push(item)
    }
    setCartItems([...items])
  }
  const handleRemoveItems = (item) => {
    // setCartItems(cartItems + -1)
    let items = [...cartItems]
    let index = items.findIndex((i) => i.id === item.id)
    if (items[index].quantity === 0) {
      items.splice(index, 1)
    } else {
      items[index] = item
    }
    setCartItems([...items])
  }

  return (
    <>
      <Header count={cartItems.length} items={cartItems} />
      <SubHeader />
      <Product onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} />
    </>
  )
}
export default App
