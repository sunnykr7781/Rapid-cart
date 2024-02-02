import ListItem from "./ListItems/Listitem"
const Product = () => {
  return (
    <div className="product-list">
        <div className="product-list--wrapper"><ListItem
        data={{
          price: 499,
          discountedprice: 399,
          thumbnail: "placeholder.png",
          title: "title of the item",
        }}
      ></ListItem>
      <ListItem
        data={{
          price: 199,
          discountedprice: 99,
          thumbnail: "placeholder.png",
          title: "title of the item",
        }}
      ></ListItem>
      <ListItem
        data={{
          price: 2499,
          discountedprice: 1399,
          thumbnail: "placeholder.png",
          title: "title of the item",
        }}
      ></ListItem>
      <ListItem
        data={{
          price: 1900,
          discountedprice: 1699,
          thumbnail: "placeholder.png",
          title: "title of the item",
        }}
      ></ListItem></div>
    </div>
  )
}

export default Product
