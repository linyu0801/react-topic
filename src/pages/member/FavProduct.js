import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaRegTimesCircle } from 'react-icons/fa'
import FishAside from '../../components/FishAside'
function FavProduct(props) {
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
              {' '}
              收藏清單 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              商品收藏{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic md-fs">
              <i className="fas fa-bookmark"></i> 商品收藏
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9 d-flex flex-wrap">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="product  fish-card w-100 position-relative">
                <div className="fish-img-box w-100">
                  <Link to="#123">
                    <i>
                      <FaRegTimesCircle />
                    </i>
                  </Link>
                  <Link to="#456">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      className="fish-product-img"
                      alt="cake29"
                    />
                  </Link>
                </div>
                <div className="fish-card-body w-100">
                  <h5 className="fish-card-title">微醺森林</h5>
                  <p className="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr className="fish-product-hr" />
                  <div className="fish-product-price mb-1">$ 450</div>
                  <button className="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>

            <nav
              aria-label="Page navigation example"
              className="fish-fav-mt w-100"
            >
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
export default withRouter(FavProduct)
