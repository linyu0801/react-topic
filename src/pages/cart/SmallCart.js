import { useEffect, useState } from 'react'

function SmallCart(props) {
  const { scCartTotal, setScCartTotal } = props
  const [scCartItems, setScCartItems] = useState([])
  const [scCartItemsQ, setScCartItemsQ] = useState(0)
  const [scCartActivity, setScCartActivity] = useState([])
  const [scCartActivityQ, setScCartActivityQ] = useState(0)
  const [scCartStudio, setScCartStudio] = useState([])
  const [scCartStudioQ, setScCartStudioQ] = useState(0)

  async function fetchCartItems() {
    const res = await fetch('http://localhost:4000/cart1items', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        console.log('這是空的小購物車', res)
        setScCartItems(res)
      } else {
        console.log('小購物車的有進來嗎', res)
        setScCartItems(res)
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
        })
        setScCartItemsQ(newQuantity)
      }
    })
  }

  async function fetchCartActivity() {
    const res = await fetch('http://localhost:4000/cartActivityItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        setScCartActivity(res)
      } else {
        console.log('購物車的有進來嗎', res)
        setScCartActivity(res)
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
        })
        setScCartActivityQ(newQuantity)
      }
    })
  }

  useEffect(() => {
    fetchCartItems()
    fetchCartActivity()
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
    console.log('scTotal:', scTotal)
    console.log('scCartTotal:', scCartTotal)

    // SCcartItems, SCcartActivity, SCcartStudio
  }, [])

  return (
    <>
      <div className="hy-SmallCart ">
        <p>商品</p>
        <div className="hy-mainprudoct">
          {scCartItems.map((item, i) => (
            <>
              <div key={i} className="hy-smallcart-content d-flex mt-3">
                <div className="hy-img mr-3">
                  <img
                    src={`http://localhost:3000/k-images/` + item.p_img}
                    alt=""
                    style={{ width: '64px' }}
                  />
                </div>
                <div className="hy-item d-flex flex-column justify-content-center">
                  <div className="hy-name">
                    {item.p_name} &nbsp;&nbsp;&nbsp;&nbsp;
                    {item.p_size}
                  </div>
                  <div className="hy-pandq">
                    {item.quantity} x {item.p_price}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <p>體驗</p>
        <div className="hy-activity">
          {scCartActivity.map((item, i) => (
            <>
              <div key={i} className="hy-smallcart-content d-flex mt-3">
                <div className="hy-img mr-3">
                  <img src={`/img/${item.campaignCover}`} alt="" />
                </div>
                <div className="hy-item d-flex flex-column justify-content-center">
                  <div className="hy-name">
                    {item.title} &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="hy-pandq">
                    {item.quantity} x {item.price}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <p>場地租借</p>
        <div className="hy-studio">
          <div className="hy-img-wrap"></div>
          <div className="hy-item"></div>
        </div>
      </div>
    </>
  )
}

export default SmallCart
