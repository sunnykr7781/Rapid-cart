import ListItem from "./ListItems/Listitem"
const Product = () => {
  let data = [
    {
      price: 499,
      discountedprice: 399,
      thumbnail: "placeholder.png",
      title: "title of the item",
    },
    {
      price: 199,
      discountedprice: 99,
      thumbnail: "placeholder.png",
      title: "title of the item",
    },
  ]
  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        <ListItem data={data[0]}></ListItem>
        <ListItem data={data[1]}></ListItem>
      </div>
    </div>
  )
}

export default Product
