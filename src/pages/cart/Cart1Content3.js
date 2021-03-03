import { useState, useEffect } from 'react'
import moment from 'moment'

function Cart1Content3(props) {
  const { scChange, setScChange } = props
  const [orders1, setOrders1] = useState({ 0: '' })
  const [itemList, setItemList] = useState([])
  async function fetchOrder() {
    const res = await fetch('http://localhost:4000/cart1Thanks', {
      credentials: 'include',
    })
    res
      .json()
      .then((res) => {
        setOrders1(res)
        console.log('伺服器回傳', res)
        const result = res.map((item) => item)
        console.log('result', itemList)
        setItemList(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchOrder()
    setScChange(scChange + 1)
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="mt-5 hy-color-gold">
            {/* 購物清單{orders1.map((v, i) => '')} */}
          </h4>
        </div>
        <div className="col-1"></div>
      </div>
      {/* cart1content1  */}
      {/* cart1content1  */}
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
                {itemList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="hy-rwd-d-none"></td>
                      <td className="py-4 hy-rwd-d-none">
                        <div className="hy-img d-flex justify-content-center">
                          <img
                            src={`http://localhost:3000/k-images/` + item.p_img}
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

                      <td className="hy-rwd-d-none"></td>
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
                  <td>{orders1[0].amount}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="py-4"></td>
                  <td></td>
                  <td>配送方式</td>
                  <td>{orders1[0].delivery}</td>

                  <td colSpan="2" className="hy-py-48">
                    運費
                  </td>
                  <td>
                    {orders1[0].delivery === '快遞宅配'
                      ? orders1[0].freight
                      : '-'}
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
                  <td>{orders1[0].amount + orders1[0].freight}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            {/* M-版本 */}
            {/* M-商品清單開始 */}
            {itemList.map((item, i) => {
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
                        {/* <FaRegTimesCircle className="hy-color-gold" /> */}
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
                        <i className="fas fa-minus k-left-icon hy-left-icon">
                          {/* <MdRemove
            onClick={() => {
              decreaseQty(item.p_sid)
            }}
          /> */}
                        </i>
                        <span className="k-number">{item.quantity}</span>
                        <i className="fas fa-plus k-right-icon hy-right-icon">
                          {/* <MdAdd
            onClick={() => {
              increaseQty(item.p_sid)
            }}
          /> */}
                        </i>
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
                  <p className="hy-money">{orders1[0].amount}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-1"></div>
      </div>
      {/* cart1content1  */}
      {/* cart1content1  */}
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
              <td className="pl-2">
                {/* {orders1 !== undefined && orders1[0].username} */}
                {orders1[0].username}
              </td>
            </tr>
            <tr>
              <td className="text-right">訂購人手機</td>
              <td className="pl-2">{orders1[0].tel}</td>
            </tr>
            <tr>
              <td className="text-right">收貨人姓名</td>
              <td className="pl-2">{orders1[0].receiver}</td>
            </tr>
            <tr>
              <td className="text-right">收貨人手機</td>
              <td className="pl-2">{orders1[0].receiverMobile}</td>
            </tr>
            <tr>
              <td className="text-right">收件地址</td>
              <td className="pl-2">{orders1[0].address}</td>
            </tr>
            <tr>
              <td className="text-right">收件日期</td>
              <td className="pl-2">
                {moment(orders1[0].designated_date).format('YYYY-MM-DD')}
              </td>
            </tr>
            <tr>
              <td className="text-right">可收件時段</td>
              <td className="pl-2">{orders1[0].designated_period}</td>
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
              <td className="pl-2">{orders1[0].payment_type}</td>
            </tr>
            <tr>
              <td className="text-right">發卡銀行</td>
              <td className="pl-2">台灣銀行</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Cart1Content3
