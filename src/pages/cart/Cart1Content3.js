import { useState, useEffect } from 'react'

function Cart1Content3(props) {
  const [orders1, setOrders1] = useState({ 0: '' })
  async function fetchOrder() {
    const res = await fetch('http://localhost:4000/cart1Thanks', {
      credentials: 'include',
    })
    res
      .json()
      .then((res) => {
        setOrders1(res)

        console.log('伺服器回傳', res)
        console.log('伺服器回傳[0]', res[0])
        console.log('伺服器回傳[1]', res[1])
        console.log('orders1', orders1)
        console.log('orders1[0]', orders1[0].username)
        console.log('orders1[1]', orders1[1])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    setTimeout(() => {
      fetchOrder()
    }, 1000)

    fetchOrder()
  }, [])
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
              <td className="pl-2">{orders1[0].username}</td>
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
              <td className="pl-2">{orders1.designated_date}</td>
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
