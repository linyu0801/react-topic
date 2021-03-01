import { useEffect, useState } from 'react'

function SmallCart(props) {
  const { SCcartQuantityTotal, SCcartSetQuantityTotal } = props
  // 取得購物車內的資料
  const [SCcartItems, SCsetCartItems] = useState([])
  const [SCcartActivity, SCsetCartActivity] = useState([])
  const [SCcartStudio, SCsetCartStudio] = useState([])
  const [SCItemsQuantityTotal, SCItemsSetQuantityTotal] = useState(0)
  const [SCActivityQuantityTotal, SCActivitySetQuantityTotal] = useState(0)
  const [SCStudioQuantityTotal, SCStudioSetQuantityTotal] = useState(0)

  // const [priceTotal, setPriceTotal] = useState(0)
  async function fetchCartItems() {
    const res = await fetch('http://localhost:4000/cart1items', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        console.log('這是空的小購物車', res)
        SCsetCartItems(res)
      } else {
        console.log('小購物車的有進來嗎', res)
        SCsetCartItems(res)
        let newPrice = 0
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
          newPrice += +item.p_price * +item.quantity
        })
        SCItemsSetQuantityTotal(newQuantity)
      }
    })
  }

  async function fetchCartActivity() {
    const res = await fetch('http://localhost:4000/cartActivityItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        SCsetCartActivity(res)
      } else {
        console.log('購物車的有進來嗎', res)
        SCsetCartActivity(res)
        let newPrice = 0
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
          newPrice += +item.price * +item.quantity
        })
        SCActivitySetQuantityTotal(newQuantity)
      }
    })
  }

  useEffect(() => {
    // const SCtotal =
    //   SCItemsQuantityTotal + SCActivityQuantityTotal + SCStudioQuantityTotal
    //   SCcartSetQuantityTotal(SCtotal)

    fetchCartItems()
    fetchCartActivity()
    // SCcartItems, SCcartActivity, SCcartStudio
  }, [])

  return (
    <>
      <div className="hy-SmallCart">
        <p>商品</p>
        <div className="hy-mainprudoct">
          {SCcartItems.map((item, i) => (
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
          {SCcartActivity.map((item, i) => (
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
