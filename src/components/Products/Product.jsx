import { useEffect, useState } from "react"
import ListItem from "./ListItems/Listitem"
import axios from "axios"
const Product = () => {
  let [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://rapid-cart-ded02-default-rtdb.firebaseio.com/data.json")
      .then((response) => {
        const result = response.data
        const transformedresult = result.map((data, index) => {
          return {
            ...data,
            id: index,
          }
        })
        setData(transformedresult)
        // console.log(transformedresult)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const updatetitle = async (itemid) => {
    try {
      const response = await axios.patch(
        `https://rapid-cart-ded02-default-rtdb.firebaseio.com/data/${itemid}.json`,
        {
          title: "new title",
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        {data.map((e) => {
          return (
            <ListItem data={e} key={e.id} updatetitle={updatetitle}></ListItem>
          )
        })}
        Console.log(response)
      </div>
    </div>
  )
}

export default Product
