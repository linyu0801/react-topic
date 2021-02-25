import { FaRegTimesCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { MdRemove } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'
import { withRouter, Redirect } from 'react-router-dom'
import moment from 'moment'

function CartStudio(props) {
  const { cartStep, cartStudioTotal, setCartStudioTotal } = props
  // 取得購物車內的資料
  const [cartStudio, setCartStudio] = useState([])
  //   const [dataIsReady, setDataIsReady] = useState(false)
  async function fetchCart() {
    const res = await fetch('http://localhost:4000/cartStudioItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        console.log('這是空的購物車', res)
      } else {
        console.log('購物車的有進來嗎', res)
        setCartStudio(res)
        let newPrice = 0
        res.map((item, i) => {
          newPrice += +item.price
        })
        setCartStudioTotal(newPrice)
        // console.log(newPrice)
        // console.log(newQuantity)
      }
    })
  }
  useEffect(() => {
    if (sessionStorage.getItem('mid') === null) {
    } else {
      fetchCart()
    }
    // setTimeout(setDataIsReady(true), 1000)
  }, [])

  async function increaseQty(p_sid) {
    try {
      const res = await fetch(
        'http://localhost:4000/Cart1Content1IncreaseQty',
        {
          method: 'POST',
          body: JSON.stringify({
            p_sid: p_sid,
            quantity: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      fetchCart()
      // alert('Item increamented')
    } catch (err) {
      console.log(err)
    }
  }
  async function deleteItem(p_sid) {
    try {
      const res = await fetch('http://localhost:4000/cart1items', {
        method: 'DELETE',
        body: JSON.stringify({
          p_sid: p_sid,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      // console.log(res)
      fetchCart()
    } catch (err) {
      console.log(err)
    }
  }
  async function decreaseQty(p_sid) {
    try {
      const res = await fetch(
        'http://localhost:4000/Cart1Content1IncreaseQty',
        {
          method: 'POST',
          body: JSON.stringify({
            p_sid: p_sid,
            quantity: -1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      fetchCart()
      // alert('Item increamented')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
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
                  <th className=" hy-rwd-d-none">教室</th>
                  <th className=" hy-rwd-d-none">日期</th>
                  <th className=" hy-rwd-d-none">時段</th>
                  <th className=" hy-rwd-d-none">租金</th>
                  <th className=" hy-rwd-d-none"></th>
                  <th className=" hy-rwd-d-none"></th>
                </tr>
              </thead>
              <tbody>
                {cartStudio.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="hy-rwd-d-none"></td>
                      <td className="py-4 hy-rwd-d-none">
                        <div className="hy-img d-flex justify-content-center">
                          <img
                            src={
                              `http://localhost:3000/k-images/` +
                              item.campaignCover
                            }
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="hy-rwd-d-none">{item.studio_name}</td>
                      <td className="hy-rwd-d-none">
                        {moment(item.date).format('YYYY-MM-DD')}
                      </td>
                      <td className="hy-rwd-d-none">{item.time_period}</td>

                      <td className="hy-rwd-d-none">
                        <span className="k-number">{item.price}</span>
                      </td>

                      <td className="hy-rwd-d-none"></td>

                      {cartStep === 'step1' && (
                        <td className="hy-rwd-d-none">
                          <FaRegTimesCircle
                            className="hy-color-gold"
                            onClick={() => {
                              deleteItem(item.p_sid)
                            }}
                          />
                        </td>
                      )}
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
                  <td colSpan="" className="hy-py-48">
                    購物清單小計
                  </td>
                  <td>{cartStudioTotal}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* {cartStep === 'step2' && (
                  <>
                    <tr>
                      <td className="py-4"></td>
                      <td></td>
                      <td>配送方式</td>
                      <td>
                        <select
                          className="w-100 pub-input pr-2 hoyu-select"
                          name="delivery"
                          id="delivery"
                          value={seletedDelivery}
                          onChange={(e) => {
                            setSeletedDelivery(e.target.value)
                          }}
                        >
                          <option value="快遞宅配">快遞宅配</option>
                          <option value="門市取貨">門市取貨</option>
                        </select>
                      </td>

                      <td colSpan="2" className="hy-py-48">
                        運費
                      </td>
                      <td>
                        {seletedDelivery === '快遞宅配'
                          ? 200 * activityQuantityTotal
                          : '-'}
                        {seletedDelivery === '快遞宅配' &&
                          setFreightTotal(200 * activityQuantityTotal)}
                        {seletedDelivery === '快遞宅配' &&
                          console.log(freightTotal)}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="py-4"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan="2" className="hy-py-48">
                        總計
                      </td>
                      <td>
                        {seletedDelivery === '快遞宅配'
                          ? cartStudioTotal + 200 * activityQuantityTotal
                          : cartStudioTotal}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </>
                )} */}
              </tbody>
            </table>
            {/* M-版本 */}
            {/* M-商品清單開始 */}
            {cartStudio.map((item, i) => {
              return (
                <>
                  <div key={i} className="d-md-none d-block">
                    <div className="form-row hy-form-row justify-content-between mb-3">
                      <div className="form-col hy-form-col">
                        <div className="hy-img">
                          <img
                            src={`http://localhost:3000/k-images/` + item.p_img}
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
                        <p className="hy-money">{item.price}</p>
                      </div>
                    </div>
                    <div className="form-row hy-form-row justify-content-between">
                      <div className="form-col hy-form-col">
                        <p>數量</p>
                      </div>
                      <div className="form-col hy-form-col">
                        <i className="fas fa-minus k-left-icon hy-left-icon">
                          <MdRemove
                            onClick={() => {
                              decreaseQty(item.p_sid)
                            }}
                          />
                        </i>
                        <span className="k-number">{item.quantity}</span>
                        <i className="fas fa-plus k-right-icon hy-right-icon">
                          <MdAdd
                            onClick={() => {
                              increaseQty(item.p_sid)
                            }}
                          />
                        </i>
                      </div>
                    </div>
                    <div className="form-row hy-form-row justify-content-between mb-4">
                      <div className="form-col hy-form-col">
                        <p>小計</p>
                      </div>
                      <div className="form-col hy-form-col">
                        <p className="hy-money">
                          {+item.quantity * +item.price}
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
                  <p className="hy-money">{cartStudioTotal}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default withRouter(CartStudio)
