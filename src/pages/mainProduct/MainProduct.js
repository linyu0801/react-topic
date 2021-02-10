import '../../styles/MainProduct.scss'
import '../../styles/font.scss'

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
              <a className="clbread" href="">
                首頁 <span className="clspan">></span>
              </a>
              <a className="clbread" href="">
                商品 <span className="clspan">></span>
              </a>
              <a className="clbread" href="">
                全部商品
              </a>
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
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="k-product-category">
            <ul className="k-ul d-flex justify-content-between">
              <li className="k-category">
                <a href="">全部商品</a>
              </li>
              <li className="k-category">
                <a href="">紅酒風味</a>
              </li>
              <li className="k-category">
                <a href="">白酒風味</a>
              </li>
              <li className="k-category">
                <a href="">烈酒風味</a>
              </li>
              <li className="k-category">
                <a href="">利口酒風味</a>
              </li>
            </ul>
          </div>

          <ul className="k-main-products row">
            <li className="col-lg-4 col-sm-12 k-product-card card">
              <div className="k-img-box">
                <a href="#">
                  <img
                    src="/images/1.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="/images/2.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="#"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a href="#">
                  <img
                    src="asset 29.jpeg"
                    className="card-img-top product-img"
                    alt="cake29"
                  />
                </a>
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
                <a
                  className="page-link hoyu-page-link hoyu-page-arrow"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-chevron-left "></i>
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link hoyu-page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link hoyu-page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link hoyu-page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link hoyu-page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link hoyu-page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link hoyu-page-link hoyu-page-arrow"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-chevron-right "></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="k-golden-design"></div>
        </div>
      </div>

      <div id="footer" className="temp-footer"></div>
    </>
  )
}

export default MainProduct
