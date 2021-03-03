import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

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
    if (sessionStorage.getItem('mid')) {
      fetchCartItems()
      fetchCartActivity()
      fetchCartStudio()
    }
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
        <h6>體驗</h6>
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
        <h6>場地租借</h6>
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

  useEffect(() => {
    let last = 0
    $(window).scroll(function () {
      let scrollNow = $(this).scrollTop()
      // if ($(window).scrollTop() >= 0) {
      //   $('.navbar').removeClass('hide')
      // }
      // if ($(window).scrollTop() >= 1) {
      // $('.navbar').addClass('nav-position ')

      if (scrollNow > last) {
        $('.hy-outerSC').addClass('hy-hide')
        $('.hy-outerSC').removeClass('hyanimate')
      } else {
        $('.hy-outerSC').removeClass('hy-hide')
        $('.hy-outerSC').addClass('hyanimate')

        // $('.hy-outerSC').show()
        // $('.hy-outerSC').css({ top: 90 + scrollNow })
      }
      // }
      // else {
      //   $('.navbar').removeClass('nav-position')
      // }

      last = scrollNow
    })
  }, [])

  return <>{sessionStorage.getItem('mid') !== null && smallCartDisplay}</>
}

export default withRouter(SmallCart)
