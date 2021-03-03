import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState, useEffect } from 'react'
import FishAside from '../../components/FishAside'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'
moment.locale('zh-tw')

function OrderProduct(props) {
  const [rows, setRows] = useState([
    {
      sid: '',
      order_date: '',
      amount: '',
      payment_type: '',
      deliver_state: '',
    },
  ])
  const mid = sessionStorage.getItem('mid')
  const FetchData = async () => {
    const url = 'http://localhost:4000/getorderproduct'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ mid }),

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳', data)
    if (data.fav !== 'none') {
      data.map((value, i) => {
        data[i].order_date = moment(data[i].order_date).format('YYYY-MM-DD')
      })
      setRows(data)
    }
  }
  useEffect(() => {
    FetchData()
  }, [])
  const productDisplay = <>{/* {rows.map((value, i) => (
        
      ))} */}</>

  return (
    <>
      {' '}
      <div className="container h-100">
        <div className="row">
          <div className="col-12 bread-div">
            <a className="clbread" href="*">
              首頁 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              會員中心 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              訂單資訊 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              商品訂單{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fab fa-wpforms"></i> 商品訂單
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9 desk-order">
            <div className="w-100 fish-order fish-order-pd d-flex justify-content-between">
              <div className="d-flex justify-content-between w-100">
                <div className="col-2">
                  <h6>訂單編號</h6>
                  {rows.map((value, i) => (
                    <Link to={`/member/order/order-details/${value.sid}?`}>
                      <h6 key={i} className="fish-order-text">
                        {value.sid}
                      </h6>
                    </Link>
                  ))}
                </div>
                <div className="col-3">
                  <h6>訂購日期</h6>
                  {rows.map((value, i) => (
                    <h6 key={i} className="fish-order-text">
                      {value.order_date}
                    </h6>
                  ))}
                </div>
                <div className="col-2">
                  <h6>訂單金額</h6>
                  {rows.map((value, i) => (
                    <h6 key={i} className="fish-order-text">
                      {value.amount}
                    </h6>
                  ))}
                </div>
                <div className="col-3">
                  <h6>付款方式</h6>
                  {rows.map((value, i) => (
                    <h6 key={i} className="fish-order-text">
                      {value.payment_type}
                    </h6>
                  ))}
                </div>
                <div className="col-2">
                  <h6>訂單狀態</h6>
                  {rows.map((value, i) => (
                    <h6 key={i} className="fish-order-text">
                      {value.deliver_state}
                    </h6>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-bmg"></div>
          </div>
          <div className="col-8 mob-order">
            {rows.map((value, i) => (
              <>
                <div className="mob-order-pd">
                  <div className="w-100 fish-order fish-order-pd d-flex">
                    <div className="col-6 mob-pd mob-topic">
                      <h6>訂單編號</h6>
                      <h6>訂購日期</h6>
                      <h6>訂單金額</h6>
                      <h6>付款方式</h6>
                      <h6>訂單狀態</h6>
                    </div>
                    <div className="col-6 mob-pd">
                      <a href="*">
                        {' '}
                        <h6>{value.sid}</h6>{' '}
                      </a>
                      <h6>{value.order_date}</h6>
                      <h6>{value.amount}</h6>
                      <h6>{value.payment_type}</h6>
                      <h6>{value.deliver_state}</h6>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="order-bmg"></div>
          </div>
        </div>
      </div>
      <div className="bgup-img"></div>
      <div className="bgdown-img"></div>
    </>
  )
}
export default withRouter(OrderProduct)
