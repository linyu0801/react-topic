import { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

function CartContent(props) {
  const cartItems = [
    { id: 1, size: '7吋', price: 400, qty: 10, subtotal: 4000 },
  ]
  const [cartContent, setCartContent] = useState(cartItems)
  //   const [payload, setPayloader] = useState({})
  //   const [hasError, setError] = useState(false)
  //   取得購物車內的資料
  //   async function fetchCart() {
  //     const res = await fetch('http://localhost:4000/cart')
  //     res
  //       .json()
  //       .then((res) => {
  //         console.log(res.data.items)
  //         setCarts(res.data.items)
  //         setPayloader(res.data)
  //       })
  //       .catch((error) => {
  //         setError(error)
  //       })
  //     useEffect(() => {
  //       fetchCart()
  //     }, [])

  //   }

  // 先用這個測試

  //   setCartContent(cartItems)

  console.log(cartContent)

  return <></>
}

export default CartContent
