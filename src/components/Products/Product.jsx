import { useState } from "react"
import ListItem from "./ListItems/Listitem"
const Product = () => {
  let [data, setData] = useState([
    {
      price: 499,
      discountedprice: 399,
      thumbnail: "placeholder.png",
      title: "title of the item 1",
      id: 0,
    },
    {
      price: 199,
      discountedprice: 99,
      thumbnail: "placeholder.png",
      title: "title of the item 2",
      id: 1,
    },
    {
      price: 449,
      discountedprice: 249,
      thumbnail: "placeholder.png",
      title: "title of the item 3",
      id: 2,
    },
  ])

  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        {data.map((e) => {
          return <ListItem data={e} key={e.id}></ListItem>
        })}
      </div>
    </div>
  )
}

export default Product
