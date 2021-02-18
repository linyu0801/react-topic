import '../../styles/MainProduct.scss'
import '../../styles/font.scss'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'
// import { Link, withRouter } from 'react-router-dom'

function MainProduct() {
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
              <li className="k-category">
                <Link to="">全部商品</Link>
              </li>
              <li className="k-category">
                <Link to="">紅酒風味</Link>
              </li>
              <li className="k-category">
                <Link to="">白酒風味</Link>
              </li>
              <li className="k-category">
                <Link to="">烈酒風味</Link>
              </li>
              <li className="k-category">
                <Link to="">利口酒風味</Link>
              </li>
            </ul>
          </div>

          <ul className="k-main-products row">
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="/images/2.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="#"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <Link to="#">
                  <img
                    src="asset 29.jpeg"
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
          </ul>

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
              <li className="page-item">
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

export default MainProduct
