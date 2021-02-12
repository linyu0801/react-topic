import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, withRouter } from 'react-router-dom'

function OrderActive(props) {
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
              活動訂單{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fab fa-wpforms"></i> 活動訂單
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9 desk-order">
            <div className="w-100 fish-order fish-order-pd d-flex justify-content-between">
              <div className="col-2">
                <h6>訂單編號</h6>
                <a href="*">
                  <h6 className="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  <h6 className="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  <h6 className="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  <h6 className="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  <h6 className="fish-order-text">123456</h6>{' '}
                </a>
              </div>
              <div className="col-4 lg-none">
                <h6>活動名稱</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
              </div>
              <div className="col-6 md-display">
                <h6>活動名稱</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
                <h6 className="fish-order-text">Funsiamo 甜點蛋糕 DIY 手作</h6>
              </div>
              <div className="col-2 lg-none">
                <h6>訂購日期</h6>
                <h6 className="fish-order-text">2020/12/15</h6>
                <h6 className="fish-order-text">2020/12/15</h6>
                <h6 className="fish-order-text">2020/12/15</h6>
                <h6 className="fish-order-text">2020/12/15</h6>
                <h6 className="fish-order-text">2020/12/15</h6>
              </div>
              <div className="col-2">
                <h6>訂單金額</h6>
                <h6 className="fish-order-text">500</h6>
                <h6 className="fish-order-text">1500</h6>
                <h6 className="fish-order-text">1800</h6>
                <h6 className="fish-order-text">180</h6>
                <h6 className="fish-order-text">180</h6>
              </div>
              <div className="col-2 xl-none">
                <h6>付款方式</h6>
                <h6 className="fish-order-text">信用卡</h6>
                <h6 className="fish-order-text">付款方式</h6>
                <h6 className="fish-order-text">信用卡</h6>
                <h6 className="fish-order-text">信用卡</h6>
                <h6 className="fish-order-text">信用卡</h6>
              </div>
            </div>
            <nav aria-label="Page navigation example" className="fish-order-mt">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-8 mob-order">
            <div className="mob-order-pd">
              <div className="w-100 fish-order fish-order-pd d-flex">
                <div className="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>活動名稱</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                </div>
                <div className="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>甜點蛋糕手作</h6>
                  <h6>2020/02/15</h6>

                  <h6>800</h6>
                </div>
              </div>
            </div>
            <div className="mob-order-pd">
              <div className="w-100 fish-order fish-order-pd d-flex">
                <div className="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>活動名稱</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                </div>
                <div className="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>甜點蛋糕手作</h6>
                  <h6>2020/02/15</h6>

                  <h6>800</h6>
                </div>
              </div>
            </div>
            <div className="mob-order-pd">
              <div className="w-100 fish-order fish-order-pd d-flex">
                <div className="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>活動名稱</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                </div>
                <div className="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>甜點蛋糕手作</h6>
                  <h6>2020/02/15</h6>

                  <h6>800</h6>
                </div>
              </div>
            </div>
            <div className="mob-order-pd">
              <div className="w-100 fish-order fish-order-pd d-flex">
                <div className="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>活動名稱</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                </div>
                <div className="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>甜點蛋糕手作</h6>
                  <h6>2020/02/15</h6>

                  <h6>800</h6>
                </div>
              </div>
            </div>
            <div className="mob-order-pd">
              <div className="w-100 fish-order fish-order-pd d-flex">
                <div className="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>活動名稱</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                </div>
                <div className="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>甜點蛋糕手作</h6>
                  <h6>2020/02/15</h6>

                  <h6>800</h6>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" className="fish-order-mt">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bgup-img"></div>
      <div className="bgdown-img"></div>
    </>
  )
}
export default withRouter(OrderActive)
