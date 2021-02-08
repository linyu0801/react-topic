import '../../styles/fish.scss'
import '../../styles/font.scss'

function order_product(props) {
  return (
    <>
      {' '}
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
              商品訂單{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic">
              <i class="fab fa-wpforms"></i> 商品訂單
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
                  <li>編輯個人資訊</li>
                </a>
                <a href="*">
                  <li class="fish-aside-">更改密碼</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapse-fav">
              收藏清單
              <ul id="collapse-fav" class="collapse">
                <a href="*">
                  <li class="fish-aside">商品收藏</li>
                </a>
                <a href="*">
                  <li>活動收藏</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapseorder">
              <p class="fish-aside-ul-active">訂單資訊</p>

              <ul id="collapseorder" class="collapse show">
                <a href="*">
                  <li class="fish-aside-active">商品訂單</li>
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
          <div class="col-9 desk-order">
            <div class="w-100 fish-order fish-order-pd d-flex justify-content-between">
              <div class="col-3">
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
              <div class="col-3">
                <h6>訂購日期</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
                <h6 class="fish-order-text">2020/12/15</h6>
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
              <div class="col-2">
                <h6>訂單狀態</h6>
                <h6 class="fish-order-text">已送達</h6>
                <h6 class="fish-order-text">已取貨</h6>
                <h6 class="fish-order-text">已取貨</h6>
                <h6 class="fish-order-text">已送達</h6>
                <h6 class="fish-order-text">已取貨</h6>
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
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                  <h6>訂單狀態</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>2020/02/15</h6>
                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                  <h6>已送達</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                  <h6>訂單狀態</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>2020/02/15</h6>
                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                  <h6>已送達</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                  <h6>訂單狀態</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>2020/02/15</h6>
                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                  <h6>已送達</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                  <h6>訂單狀態</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>2020/02/15</h6>
                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                  <h6>已送達</h6>
                </div>
              </div>
            </div>
            <div class="mob-order-pd">
              <div class="w-100 fish-order fish-order-pd d-flex">
                <div class="col-6 mob-pd mob-topic">
                  <h6>訂單編號</h6>
                  <h6>訂購日期</h6>
                  <h6>訂單金額</h6>
                  <h6>付款方式</h6>
                  <h6>訂單狀態</h6>
                </div>
                <div class="col-6 mob-pd">
                  <a href="*">
                    {' '}
                    <h6>123456</h6>{' '}
                  </a>
                  <h6>2020/02/15</h6>
                  <h6>800</h6>
                  <h6>銀行轉帳</h6>
                  <h6>已送達</h6>
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
export default order_product
