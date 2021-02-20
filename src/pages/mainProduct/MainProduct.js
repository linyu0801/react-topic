import '../../styles/MainProduct.scss'
import '../../styles/font.scss'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

function MainProduct(props) {
  const [product, setProduct] = useState([])

  //分類用onClick function：按了li啟動onClick後呼叫這支function，使代入的參數p_cate做改變
  // const doCate = async (p_cate, nowPage) => {
  const doCate = async (p_cate) => {
    //再set一筆抓到的p_cate
    const url = 'http://localhost:4000/mainproductcate'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ productCate: p_cate }),
      // body: JSON.stringify({ productCate: p_cate, page: nowPage }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳資料 : ', data)
    setProduct(data)
  }

  //和node串連取得資料庫資料：生命周期概念
  useEffect(() => {
    const FetchData = async () => {
      const url = 'http://localhost:4000/mainproductcate' //讀取寫在node中的app.get('/mainproduct')
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({ productCate: 1 }), //設定一進來畫面為全部商品的畫面
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const rows = await response.json() //這邊的rows會得到所有資料庫中的資料
      console.log('伺服器回傳', rows) //先在這邊console.log出rows得到的資料

      setProduct(rows) //rows的東西會傳到product中，用setXXX的方式啟動整個畫面的更新
    }

    FetchData()
  }, [])

  const productDisplay = (
    <>
      <ul className="k-main-products row">
        {product.map((v, i) => (
          <li key={i} className="col-lg-4 col-sm-12 k-product-card card">
            <div className="k-img-box">
              <Link to={`/mainproductdetail/products/` + v.p_sid}>
                <img
                  src={`http://localhost:3000/k-images/` + v.p_img}
                  className="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>

            <div className="card-body">
              <h5 className="card-title">{v.p_name}</h5>
              <p className="card-text">{v.p_intro}</p>
              <hr className="product-hr" />
              <div className="k-product-price">$ {v.p_price}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
  return (
    <>
      <div className="content">
        <div className="k-hero-img">
          <div className="k-product-desc">
            <h3 className="subtitle">讓我們寵壞你的味蕾吧</h3>
            <h2 className="k-title">門市商品</h2>
            <p className="k-description">專屬大人的美好</p>
          </div>
        </div>

        <div className="k-main container">
          <div className="row k-upper">
            <div className="col-lg-6 col-sm-12 k-breadcrumbs">
              <Link className="clbread" to="">
                首頁{'  '}
                <span className="clspan">{'>'}</span>
              </Link>
              <Link className="clbread" to="">
                商品{'  '}
                <span className="clspan">{'>'}</span>
              </Link>
              <Link className="clbread" to="">
                全部商品
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12 search-input">
              <form className="form-inline my-2 d-flex justify-content-end">
                <input
                  className="form-control"
                  type="search"
                  placeholder="搜尋"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success product-search-btn my-2 my-sm-0"
                  type="submit"
                >
                  <MdSearch />
                </button>
              </form>
            </div>
          </div>
          <div className="k-product-category">
            <ul className="k-ul d-flex justify-content-between">
              <li
                className="k-category"
                onClick={() => {
                  doCate(1)
                  // console.log('kll')
                }}
              >
                <span>全部商品</span>
              </li>
              <li
                className="k-category"
                onClick={() => {
                  doCate(2, 1)
                }}
              >
                <span>紅酒風味</span>
              </li>
              <li
                className="k-category"
                onClick={() => {
                  doCate(3, 1)
                }}
              >
                <span>白酒風味</span>
              </li>
              <li
                className="k-category"
                onClick={() => {
                  doCate(4, 1)
                }}
              >
                <span>烈酒風味</span>
              </li>
              <li
                className="k-category"
                onClick={() => {
                  doCate(5, 1)
                }}
              >
                <span>利口酒風味</span>
              </li>
            </ul>
          </div>
          {productDisplay}
          {/* <ul className="k-main-products row">  留一組li作範本
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="http://localhost:3000/k-images/1.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </Link>
              </div>

              <div className="card-body">
                <h5 className="card-title">微醺森林</h5>
                
                <p className="card-text">
                  以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                  鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                </p>
                <hr className="product-hr" />
                <div className="k-product-price">$ 450</div>
              </div>
            </li>
            
          </ul> */}

          <nav
            aria-label="Page navigation example"
            className="hoyu-mt d-flex justify-content-end"
          >
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link
                  className="page-link hoyu-page-link hoyu-page-arrow"
                  to="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <MdKeyboardArrowLeft />
                  </span>
                </Link>
              </li>
              <li className="page-item" onClick={() => {}}>
                <Link className="page-link hoyu-page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hoyu-page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hoyu-page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hoyu-page-link" to="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hoyu-page-link" to="#">
                  5
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link hoyu-page-link hoyu-page-arrow"
                  to="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <MdKeyboardArrowRight />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="k-golden-design"></div>
        </div>
      </div>

      {/* <div id="footer" className="temp-footer"></div> */}
    </>
  )
}

export default withRouter(MainProduct)
