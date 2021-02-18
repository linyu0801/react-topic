import { FaRegTimesCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { MdRemove } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'

function Cart1Content1(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props
  // 取得購物車內的資料
  const [cartItems, setCartItems] = useState([])
  const [payload, setPayloader] = useState({})
  const [hasError, setError] = useState(false)
  async function fetchCart() {
    const res = await fetch('http://localhost:4000/cart1items')
    res
      .json()
      .then((res) => {
        setCartItems(res)
        // setPayloader(res.data)
      })
      .catch((error) => {
        setError(error)
      })
  }
  useEffect(() => {
    fetchCart()
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
      console.log(res)
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
      console.log(res)
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
      console.log(res)
      fetchCart()
      // alert('Item increamented')
    } catch (err) {
      console.log(err)
    }
  }

  // 先用這個測試
  // const cartItems = [
  //   {
  //     img: 'http://localhost:3000/images/pd1.jpeg',
  //     id: 1,
  //     name: '最多五個字',
  //     size: '30cm',
  //     price: 999,
  //     qty: 10,
  //     subtotal: 4000,
  //   },
  //   {
  //     img: 'http://localhost:3000/images/login.jpg',
  //     id: 1,
  //     name: '最多五個字',
  //     size: '30cm',
  //     price: 666,
  //     qty: 50,
  //     subtotal: 4000,
  //   },
  // ]
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
                          <img src={item.img} alt="" />
                        </div>
                      </td>
                      <td className="hy-rwd-d-none">{item.p_name}</td>
                      <td className="hy-rwd-d-none">{item.p_size}</td>
                      <td className="hy-rwd-d-none">{item.p_price}</td>
                      {cartStep === 'step1' && (
                        <td className="hy-rwd-d-none">
                          <i className="fas fa-minus k-left-icon">
                            <MdRemove
                              onClick={() => {
                                decreaseQty(item.p_sid)
                              }}
                            />
                          </i>
                          <span className="k-number">{item.quantity}</span>
                          <i className="fas fa-plus k-right-icon">
                            <MdAdd
                              onClick={() => {
                                increaseQty(item.p_sid)
                              }}
                            />
                          </i>
                        </td>
                      )}
                      {cartStep === 'step2' && (
                        <td className="hy-rwd-d-none">{item.quantity}</td>
                      )}
                      {cartStep === 'step3' && (
                        <td className="hy-rwd-d-none">{item.quantity}</td>
                      )}

                      <td className="hy-rwd-d-none">
                        {+item.quantity * +item.p_price}
                      </td>

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
                  <td colSpan="2" className="hy-py-48">
                    購物清單小計
                  </td>
                  <td>800</td>
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
                          <img src={item.img} alt="" />
                        </div>
                      </div>
                      <div className="form-col hy-form-col d-flex flex-column justify-content-around">
                        <p className="my-0">{item.name}</p>
                        <p className="my-0">{item.size}</p>
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
                        <select name="" id="">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row hy-form-row justify-content-between mb-4">
                      <div className="form-col hy-form-col">
                        <p>小計</p>
                      </div>
                      <div className="form-col hy-form-col">
                        <p className="hy-money">3400</p>
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
                  <p className="hy-money">6800</p>
                </div>
              </div>
            </div>

            <input type="hidden" name="subtotal" value="800" />
          </form>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default Cart1Content1
