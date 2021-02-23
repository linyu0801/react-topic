import Cart1Content1 from '../cart/Cart1Content1'
import Cart1Content3 from '../cart/Cart1Content3'
import { withRouter, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { MdRemove } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'
import moment from 'moment'
import '../../styles/fish.scss'
moment.locale('zh-tw')

function OrderDetail(props) {
  const [cartItems, setCartItems] = useState([])
  let { sid } = useParams()
  console.log('sid' + sid)
  // const [priceTotal, setPriceTotal] = useState(0)
  const [hasError, setError] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)
  const [order, setOrder] = useState([])

  async function fetchCart() {
    const url = 'http://localhost:4000/member-order'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ sid }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳 :', data)

    setCartItems(data)

    console.log('data[0]', data[0])
    console.log('Date', moment(data[0].designated_date).format('YYYY-MM-DD'))
    data[0].designated_date = moment(data[0].designated_date).format(
      'YYYY-MM-DD'
    )
    setOrder(data[0])
    let newPrice = 0
    data.map((item, i) => {
      newPrice += +item.p_price * +item.quantity
    })
    setCartTotal(newPrice)
    // setPriceTotal(newPrice)
    console.log(newPrice)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 bread-div">
            <a className="clbread" href="*">
              首頁 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              會員中心 <span className="clspan">{'>'}</span>
            </a>
            <Link to="/member/order-product" className="clbread">
              {' '}
              商品訂單 <span className="clspan">{'>'}</span>
            </Link>

            <a className="clbread" href="*">
              {' '}
              歷史訂單
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            {' '}
            <h2>訂單明細</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h4 className="mt-5 hy-color-gold">購物清單</h4>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 hy-rwd">
            <form className="w-100 text-center hy-form" action="">
              <table className="w-100 hy-rwd-d-none">
                <thead className="w-100">
                  <tr className="w-100">
                    <th className=" hy-rwd-d-none"></th>
                    <th className=" hy-rwd-d-none"></th>
                    <th className=" hy-rwd-d-none">商品</th>
                    <th className=" hy-rwd-d-none">規格</th>
                    <th className=" hy-rwd-d-none">價格</th>
                    <th className=" hy-rwd-d-none">數量</th>
                    <th className=" hy-rwd-d-none">小計</th>
                    <th className=" hy-rwd-d-none"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="hy-rwd-d-none"></td>
                        <td className="py-4 hy-rwd-d-none">
                          <div className="hy-img d-flex justify-content-center">
                            <img
                              src={
                                `http://localhost:3000/k-images/` + item.p_img
                              }
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="hy-rwd-d-none">{item.p_name}</td>
                        <td className="hy-rwd-d-none">{item.p_size}</td>
                        <td className="hy-rwd-d-none">{item.p_price}</td>
                        <td className="hy-rwd-d-none">
                          <span className="k-number">{item.quantity}</span>
                        </td>

                        <td className="hy-rwd-d-none">
                          {+item.quantity * +item.p_price}
                        </td>
                      </tr>
                    )
                  })}

                  <tr>
                    <td className="hy-w-5"></td>
                    <td colSpan="9" className="hy-form-border"></td>
                    <td className="hy-w-5"></td>
                  </tr>
                  <tr>
                    <td className="py-4"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan="2" className="hy-py-48">
                      購物清單小計
                    </td>
                    <td>{cartTotal}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {/* M-版本 */}
              {/* M-商品清單開始 */}
              {cartItems.map((item, i) => {
                return (
                  <>
                    <div key={i} className="d-md-none d-block">
                      <div className="form-row hy-form-row justify-content-between mb-3">
                        <div className="form-col hy-form-col">
                          <div className="hy-img">
                            <img
                              src={
                                `http://localhost:3000/k-images/` + item.p_img
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-col hy-form-col d-flex flex-column justify-content-around">
                          <p className="my-0 k-left-icon hy-left-icon">
                            {item.p_name}
                          </p>
                          <p className="my-0">{item.p_size}</p>
                        </div>
                        <div className="form-col hy-form-col d-flex flex-column justify-content-center">
                          <FaRegTimesCircle className="hy-color-gold" />
                        </div>
                      </div>
                      <div className="form-row hy-form-row justify-content-between">
                        <div className="form-col hy-form-col">
                          <p>單價</p>
                        </div>
                        <div className="form-col hy-form-col">
                          <p className="hy-money">{item.p_price}</p>
                        </div>
                      </div>
                      <div className="form-row hy-form-row justify-content-between">
                        <div className="form-col hy-form-col">
                          <p>數量</p>
                        </div>
                        <div className="form-col hy-form-col">
                          <i className="fas fa-minus k-left-icon hy-left-icon"></i>
                          <span className="k-number">{item.quantity}</span>
                          <i className="fas fa-plus k-right-icon hy-right-icon"></i>
                        </div>
                      </div>
                      <div className="form-row hy-form-row justify-content-between mb-4">
                        <div className="form-col hy-form-col">
                          <p>小計</p>
                        </div>
                        <div className="form-col hy-form-col">
                          <p className="hy-money">
                            {+item.quantity * +item.p_price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

              <div className="d-md-none d-block"></div>
              {/* M-商品清單結束 */}
              {/* 中間的裝飾線 */}
              <div className="d-md-none d-block hy-form-border">
                <div className="form-row hy-form-row justify-content-between">
                  <div className="col"></div>
                </div>
              </div>
              {/* 中間的裝飾線 */}
              {/* M-商品清單小計開始 */}

              <div className="d-md-none d-block mt-3">
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>購物清單小計</p>
                  </div>
                  <div className="form-col hy-form-col">
                    {/* <p className="hy-money">{cartTotal}</p> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h4 className="mt-5 hy-color-gold">配送資訊</h4>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <table className="hy-table">
              <tr>
                <td className="text-right">訂購人姓名</td>
                <td className="pl-2">{order.username}</td>
              </tr>
              <tr>
                <td className="text-right">訂購人手機</td>
                <td className="pl-2">{order.tel}</td>
              </tr>
              <tr>
                <td className="text-right">收貨人姓名</td>
                <td className="pl-2">{order.receiver}</td>
              </tr>
              <tr>
                <td className="text-right">收貨人手機</td>
                <td className="pl-2">{order.receiverMobile}</td>
              </tr>
              <tr>
                <td className="text-right">收件地址</td>
                <td className="pl-2">{order.address}</td>
              </tr>
              <tr>
                <td className="text-right">收件日期</td>
                <td className="pl-2">{order.designated_date}</td>
              </tr>
              <tr>
                <td className="text-right">可收件時段</td>
                <td className="pl-2">{order.designated_period}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h4 className="mt-5 hy-color-gold">付款資訊</h4>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row  mt-5">
          <div className="col d-flex justify-content-center">
            <table className="hy-table">
              <tr>
                <td className="text-right">付款方式</td>
                <td className="pl-2">{order.payment_type}</td>
              </tr>
              <tr>
                <td className="text-right">發卡銀行</td>
                <td className="pl-2">台灣銀行</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="row">
          <button
            type="button"
            className="order-button pub-mb-100 mx-auto"
            onClick={() => {
              props.history.push('/')
            }}
          >
            返回首頁
          </button>
          {/* <button
            className="addToCartBtn"
            onClick={() => {
              props.history.push('/')
              window.scrollTo(0, 0)
            }}
          >
            返回首頁
          </button> */}
        </div>
        <div className="bgup-img"></div>
        <div className="bgdown-img"></div>
      </div>
    </>
  )
}
export default withRouter(OrderDetail)
