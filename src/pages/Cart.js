import React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function Cart(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  console.log('props.match.params', props.match.params)

  const [active, setActive] = useState('')

  return (
    <>
      <div className="container">
        <div className="row hhyy-bread">
          <div className="col">
            <a className="clbread" href="*">
              首頁 <span className="clspan">`&gt;`</span>
            </a>
            <a className="clbread" href="*">
              購物清單
            </a>
          </div>
        </div>
        <div className="row hhyy-cate">
          <div className="col text-center mt-5 hy-bg">
            <h4 className="my-3">請按商品分類分別結帳</h4>
            <div className="cart-cate d-flex justify-content-between">
              <div className="btn px-0 hy-bg">
                <h5>甜點商城</h5>
              </div>
              <div className="btn px-0">
                <h5>活動體驗</h5>
              </div>
              <div className="btn px-0">
                <h5>場地預定</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row hhyy-step mt-5">
          <div className="col hy-cart-step d-flex justify-content-between">
            <div
              className={'text-center' + active}
              onClick={() => {
                setActive('hy-step-active ')
              }}
            >
              <h5>Step.1</h5>
              <h5>購物清單</h5>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="text-center">
              <h5>Step.2</h5>
              <h5>配送與付款資訊</h5>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="text-center">
              <h5>Step.3</h5>
              <h5>感謝訂購</h5>
            </div>
          </div>
        </div>
        <div className="row hhyy-list-title">
          <div className="col mt-5">
            <h4 className="hy-color-gold">購物清單</h4>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form action="" className="w-100">
              <table className="w-100">
                <thead>
                  <th>圖片</th>
                  <th>商品</th>
                  <th>規格</th>
                  <th>價格</th>
                  <th>數量</th>
                  <th>小計</th>
                </thead>
                <tbody>
                  <td className="py-4 hy-rwd-d-none">
                    <div className="hy-img d-flex justify-content-center">
                      <img src="localhost:3000/images/pd1.jpeg" alt="" />
                    </div>
                  </td>
                  <td className="hy-rwd-d-none">巧克力重擊</td>
                  <td className="hy-rwd-d-none">7吋</td>
                  <td className="hy-rwd-d-none">400</td>
                  <td className="hy-rwd-d-none">
                    <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </td>
                  <td className="hy-rwd-d-none">400</td>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Cart)
