import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link ,withRouter } from 'react-router-dom'

function OrderClass(props) {
  return (
    <>
      <div class="container h-100">
        <div class="row">
          <div class="col-12 bread-div">
            <a class="clbread" href="*">
              首頁 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              {' '}
              會員中心 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              {' '}
              訂單資訊 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              場地租借{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic">
              <i class="fab fa-wpforms"></i> 場地租借
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <FishAside />

          <div class="col-9 desk-order">
            <div class="w-100 fish-order fish-order-pd d-flex justify-content-between">
              <div class="col-2">
                <h6>訂單編號</h6>
                <a href="*">
                  {' '}
                  <h6 class="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  {' '}
                  <h6 class="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  {' '}
                  <h6 class="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  {' '}
                  <h6 class="fish-order-text">123456</h6>{' '}
                </a>
                <a href="*">
                  {' '}
                  <h6 class="fish-order-text">123456</h6>{' '}
                </a>
              </div>
              <div class="col-2">
                <h6>租借館別</h6>
                <h6 class="fish-order-text">大安館</h6>
                <h6 class="fish-order-text">大安館</h6>
                <h6 class="fish-order-text">大安館</h6>
                <h6 class="fish-order-text">大安館</h6>
                <h6 class="fish-order-text">大安館</h6>
              </div>
              <div class="col-2 dis-none">
                <h6>租借日期</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
              </div>
              <div class="col-2">
                <h6>租借時數</h6>
                <h6 class="fish-order-text">2 hr</h6>
                <h6 class="fish-order-text">2.5 hr</h6>
                <h6 class="fish-order-text">3 hr</h6>
                <h6 class="fish-order-text">2 hr</h6>
                <h6 class="fish-order-text">2 hr</h6>
              </div>

              <div class="col-2">
                <h6>訂單金額</h6>
                <h6 class="fish-order-text">500</h6>
                <h6 class="fish-order-text">1500</h6>
                <h6 class="fish-order-text">1800</h6>
                <h6 class="fish-order-text">180</h6>
                <h6 class="fish-order-text">180</h6>
              </div>
              <div class="col-2">
                <h6>付款方式</h6>
                <h6 class="fish-order-text">信用卡</h6>
                <h6 class="fish-order-text">信用卡</h6>
                <h6 class="fish-order-text">銀行轉帳</h6>
                <h6 class="fish-order-text">銀行轉帳</h6>
                <h6 class="fish-order-text">銀行轉帳</h6>
              </div>
            </div>
            <nav aria-label="Page navigation example" class="fish-order-mt">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i class="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i class="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-8 mob-order">
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>租借館別</h6>
                  <h6>租借日期</h6>
                  <h6>租借時數</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>大安館</h6>
                  <h6>2020/02/15</h6>
                  <h6>2hr</h6>

                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>租借館別</h6>
                  <h6>租借日期</h6>
                  <h6>租借時數</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>大安館</h6>
                  <h6>2020/02/15</h6>
                  <h6>2hr</h6>

                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>租借館別</h6>
                  <h6>租借日期</h6>
                  <h6>租借時數</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>大安館</h6>
                  <h6>2020/02/15</h6>
                  <h6>2hr</h6>

                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>租借館別</h6>
                  <h6>租借日期</h6>
                  <h6>租借時數</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>大安館</h6>
                  <h6>2020/02/15</h6>
                  <h6>2hr</h6>

                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>租借館別</h6>
                  <h6>租借日期</h6>
                  <h6>租借時數</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>大安館</h6>
                  <h6>2020/02/15</h6>
                  <h6>2hr</h6>

                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" class="fish-order-mt">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i class="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link hoyu-page-link" href="*">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i class="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="bgup-img"></div>
      <div class="bgdown-img"></div>
    </>
  )
}
export default withRouter(OrderClass)
