import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, withRouter } from 'react-router-dom'
import { FaRegTimesCircle, FaCartPlus } from 'react-icons/fa'

function FavActive(props) {
  return (
    <>
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
              收藏清單 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              收藏活動{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fas fa-bookmark"></i> 活動收藏
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9 desk-fav">
            <div className="campaignCardBig w-100 d-flex position-relative">
              <div className="cardBigImg"></div>
              <div className="cardBigText">
                <div className="cardBigTag">
                  季節限定
                  <div className="d-flex active-card-icons">
                    <i>
                      <FaCartPlus />{' '}
                    </i>
                    <i>
                      <FaRegTimesCircle />
                    </i>
                  </div>
                </div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <i className="fas fa-map-marker-alt"></i> 台北市，板橋區
                  </p>
                  <p className="calendar">
                    <i className="far fa-calendar-check"></i> 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i>
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" className="fish-mt">
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
          <div className="w-100 mob-display">
            <div className="col-9 d-xl-none mx-auto">
              <div className="campaignCardBig w-100 d-xl-none">
                <div className="cardBigImg w-100 position-relative">
                  <div className="d-flex active-card-icons">
                    <i>
                      <FaCartPlus />{' '}
                    </i>
                    <i>
                      <FaRegTimesCircle />
                    </i>
                  </div>
                </div>
                <div className="cardBigText w-100">
                  <div className="cardBigTag">季節限定</div>
                  <div className="cardBigTitle">
                    <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                  </div>
                  <div className="cardBigContent">
                    <p>
                      無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過
                      iPad
                      數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                    </p>
                    <p className="location">
                      <i className="fas fa-map-marker-alt"></i> 台北市，板橋區
                    </p>
                    <p className="calendar">
                      <i className="far fa-calendar-check"></i> 2021-03-05
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <p className="stars mb-0">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                      </p>
                      <p className="price mb-0">350</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example " className="fish-mt">
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

        <div className="bgup-img"></div>
        <div className="bgdown-img"></div>
      </div>
    </>
  )
}
export default withRouter(FavActive)
