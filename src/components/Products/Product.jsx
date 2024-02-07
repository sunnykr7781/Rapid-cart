import { useEffect, useState } from "react"
import ListItem from "./ListItems/Listitem"
import axios from "axios"
import Loader from "../UI/Loader"
const Product = ({ onAddItems, onRemoveItems }) => {
  let [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
  const [presentItems, setPresentItems] = useState([])
  const handleadditems = (id) => {
    if (presentItems.indexOf(id) < 0) {
      setPresentItems([...presentItems, id])
      onAddItems()
    }
    return
  }
  const handleremoveitems = (id) => {
    let index = presentItems.indexOf(id)
    if (index > -1) {
      let items = [...presentItems]
      items.splice(index, 1)
      setPresentItems([items])
      onRemoveItems()
    }
  }

  useEffect(() => {
    axios
      .get("https://rapid-cart-ded02-default-rtdb.firebaseio.com/data.json")
      .then((response) => {
        const result = response.data
        setLoader(false)
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
        setLoader(false)
        console.log(error)
      })
  }, [])
  // const updatetitle = async (itemid) => {
  //   try {
  //     await axios.patch(
  //       `https://rapid-cart-ded02-default-rtdb.firebaseio.com/data/${itemid}.json`,
  //       {
  //         title: "new title",
  //       }
  //     )
  //     let newdata = [...data]
  //     let index = newdata.findIndex((e) => e.id === itemid)
  //     newdata[index]["title"] = "newtitle"
  //     setData(newdata)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      {loader && <Loader />}
      <div className="product-list">
        <div className="product-list--wrapper">
          {data.map((e) => {
            return (
              <ListItem
                data={e}
                key={e.id}
                onadd={handleadditems}
                onremove={handleremoveitems}
                // updatetitle={updatetitle}
              ></ListItem>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Product
