import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

function SmallCart(props) {
  const {
    scCartTotal,
    setScCartTotal,
    scChange,
    setScChange,
    scCartShow,
    setScCartShow,
  } = props
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
        console.log('實體商品的有進來嗎', res)
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
        console.log('活動的購物車的有進來嗎', res)
        setScCartActivity(res)
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
        })
        setScCartActivityQ(newQuantity)
      }
    })
  }

  async function fetchCartStudio() {
    const res = await fetch('http://localhost:4000/cartStudioItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        console.log('這是空的購物車', res)
      } else {
        console.log('購物車的有進來嗎', res)
        setScCartStudio(res)
        let newPrice = 0
        res.map((item, i) => {
          newPrice += +item.price
        })
        setScCartStudioQ(res.length)
        // console.log(newPrice)
        // console.log(newQuantity)
      }
    })
  }

  useEffect(() => {
    fetchCartItems()
    fetchCartActivity()
    fetchCartStudio()
  }, [scChange])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
    // scCartItemsQ, scCartActivityQ, scCartActivityQ
  }, [scCartItemsQ])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
  }, [scCartActivityQ])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
  }, [scCartStudioQ])

  const smallCartDisplay = (
    <div className="hy-outerSC">
      <div
        className="hy-SmallCart "
        style={scCartShow ? { display: 'block' } : { display: 'none' }}
      >
        <h6 className="pb-1">商品</h6>
        <div className="hy-mainprudoct mb-4">
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
                    <p>
                      {item.p_name} &nbsp;&nbsp;&nbsp;&nbsp;
                      {item.p_size}
                    </p>
                  </div>
                  <div className="hy-pandq">
                    <p>
                      {item.quantity} &nbsp;x &nbsp;$ {item.p_price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <p>體驗</p>
        <div className="hy-activity mb-4">
          {scCartActivity.map((item, i) => (
            <>
              <div key={i} className="hy-smallcart-content d-flex mt-3">
                <div className="hy-img mr-3">
                  <img src={`/img/${item.campaignCover}`} alt="" />
                </div>
                <div className="hy-item d-flex flex-column justify-content-center">
                  <div className="hy-name">
                    <p>{item.title}</p>
                  </div>
                  <div className="hy-pandq">
                    <p>
                      {item.quantity} &nbsp;x &nbsp;$ {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <p>場地租借</p>
        <div className="hy-studio mb-4">
          {scCartStudio.map((item, i) => (
            <>
              <div key={i} className="hy-smallcart-content d-flex mt-3">
                <div className="hy-img mr-3">
                  <img
                    src={`http://localhost:3000/climage/1/` + item.img + `.jpg`}
                    alt=""
                  />
                </div>
                <div className="hy-item d-flex flex-column justify-content-center">
                  <div className="hy-name">
                    <p>{item.studio_name}</p>
                  </div>
                  <div className="hy-pandq">
                    <p>
                      {item.time_period} <br />$ {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <button
          className="k-style-addToCartBtn addToCartBtn"
          onClick={() => {
            props.history.push('/cart')
          }}
        >
          前往購物車
        </button>
      </div>
    </div>
  )

  return <>{sessionStorage.getItem('mid') !== null && smallCartDisplay}</>
}

export default withRouter(SmallCart)
