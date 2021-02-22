import { useState, useEffect } from 'react'

function Cart1Content3(props) {
  const [orders1, setOrders1] = useState('')
  async function fetchOrder() {
    const res = await fetch('http://localhost:4000/cart1Thanks', {
      credentials: 'include',
    })
    res
      .json()
      .then((res) => {
        setOrders1(res)

        console.log(orders1)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchOrder()
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="mt-5 hy-color-gold">配送資訊</h4>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <table className="hy-table">
            <tr>
              <td className="text-right">訂購人姓名</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">訂購人手機</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">收貨人姓名</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">收貨人手機</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">收件地址</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">收件日期</td>
              <td className="pl-2">123</td>
            </tr>
            <tr>
              <td className="text-right">可收件時段</td>
              <td className="pl-2">123</td>
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
      <div className="row">
        <div className="col d-flex justify-content-center">
          <table className="hy-table">
            <tr>
              <td className="text-right">付款方式</td>
              <td className="pl-2">信用卡一次付清</td>
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
