import React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { FaRegTimesCircle } from 'react-icons/fa'

import '../../styles/hoyu.scss'
import '../../styles/font.scss'

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
              首頁 <span className="clspan">&gt; </span>
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
          <div className="col-1"></div>
          <div className="col-10 mt-5">
            <h4 className="hy-color-gold">購物清單</h4>
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
                  <tr>
                    <td className="hy-rwd-d-none"></td>
                    <td className="py-4 hy-rwd-d-none">
                      <div className="hy-img d-flex justify-content-center">
                        <img src="/images/pd1.jpeg" alt="" />
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
                    <td className="hy-rwd-d-none">
                      <FaRegTimesCircle className="hy-color-gold" />
                    </td>
                  </tr>

                  <tr>
                    <td className="hy-w-5"></td>
                    <td colspan="9" className="hy-form-border"></td>
                    <td className="hy-w-5"></td>
                  </tr>
                  <tr>
                    <td className="py-4"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" className="hy-py-48">
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
              <div className="d-md-none d-block">
                <div className="form-row hy-form-row justify-content-between mb-3">
                  <div className="form-col hy-form-col">
                    <div className="hy-img">
                      <img src="/images/pd1.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="form-col hy-form-col d-flex flex-column justify-content-around">
                    <p className="my-0">巧克力重擊</p>
                    <p className="my-0">7吋</p>
                  </div>
                  <div className="form-col hy-form-col d-flex flex-column justify-content-center">
                    <i className="far fa-times-circle"></i>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>單價</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">1700</p>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>數量</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">2</p>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between mb-5">
                  <div className="form-col hy-form-col">
                    <p>小計</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">3400</p>
                  </div>
                </div>
              </div>
              <div className="d-md-none d-block">
                <div className="form-row hy-form-row justify-content-between mb-3">
                  <div className="form-col hy-form-col">
                    <div className="hy-img">
                      <img src="/images/pd1.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="form-col hy-form-col d-flex flex-column justify-content-around">
                    <p className="my-0">巧克力重擊</p>
                    <p className="my-0">7吋</p>
                  </div>
                  <div className="form-col hy-form-col d-flex flex-column justify-content-center">
                    <i className="far fa-times-circle"></i>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>單價</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">1700</p>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>數量</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">2</p>
                  </div>
                </div>
                <div className="form-row hy-form-row justify-content-between">
                  <div className="form-col hy-form-col">
                    <p>小計</p>
                  </div>
                  <div className="form-col hy-form-col">
                    <p className="hy-money">3400</p>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  )
}

export default withRouter(Cart)
