import '../../styles/fish.scss'
import '../../styles/font.scss'

function fav_product(props) {
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
              收藏清單 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              商品收藏{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic md-fs">
              <i class="fas fa-bookmark"></i> 商品收藏
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <aside class="fish-aside h-100 col-2">
            <h4>會員中心</h4>
            <ul data-toggle="collapse" data-target="*collapse-info">
              個人資訊
              <ul id="collapse-info" class="collapse">
                <a href="*">
                  <li class="fish-aside">編輯個人資訊</li>
                </a>
                <a href="*">
                  <li class="fish-aside">更改密碼</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapse-fav">
              <p class="fish-aside-ul-active">收藏清單</p>
              <ul id="collapse-fav" class="collapse show">
                <a href="*">
                  <li class="fish-aside-active">商品收藏</li>
                </a>
                <a href="*">
                  <li>活動收藏</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapseorder">
              訂單資訊
              <ul id="collapseorder" class="collapse">
                <a href="*">
                  <li class="fish-aside">商品訂單</li>
                </a>
                <a href="*">
                  <li class="fish-aside">活動訂單</li>
                </a>
                <a href="*">
                  <li class="fish-aside">場地租借</li>
                </a>
              </ul>
            </ul>
          </aside>
          <div class="col-9 d-flex flex-wrap">
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>{' '}
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="product card fish-card w-100 position-relative">
                <div class="fish-img-box w-100">
                  <a href="*123">
                    <i class="far fa-times-circle close-icons"></i>
                  </a>
                  <a href="*">
                    <img
                      src="http://localhost:3000/images/pd1.jpeg"
                      class="fish-product-img"
                      alt="cake29"
                    />
                  </a>
                </div>
                <div class="fish-card-body w-100">
                  <h5 class="fish-card-title">微醺森林</h5>
                  <p class="fish-card-text">
                    以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道,
                    鮮奶油與酒漬櫻桃的巧妙搭配讓整體風味更溫柔、更迷人
                  </p>
                  <hr class="fish-product-hr" />
                  <div class="fish-product-price mb-1">$ 450</div>
                  <button class="addToCartBtn">加入購物車</button>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" class="fish-fav-mt w-100">
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
export default fav_product
