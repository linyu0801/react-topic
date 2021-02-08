import '../../styles/fish.scss'
import '../../styles/font.scss'

function fav_active(props) {
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
              收藏清單 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              收藏活動{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic">
              <i class="fas fa-bookmark"></i> 活動收藏
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
                  <li class="fish-aside">商品收藏</li>
                </a>
                <a href="*">
                  <li class="fish-aside-active">活動收藏</li>
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
          <div class="col-9 desk-fav">
            <div class="campaignCardBig w-100 d-flex position-relative">
              <div class="cardBigImg"></div>
              <div class="cardBigText">
                <div class="cardBigTag">
                  季節限定
                  <div class="d-flex active-card-icons">
                    <i class="fas fa-cart-plus"> </i>
                    <i class="far fa-times-circle"></i>
                  </div>
                </div>
                <div class="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div class="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p class="location">
                    <i class="fas fa-map-marker-alt"></i> 台北市，板橋區
                  </p>
                  <p class="calendar">
                    <i class="far fa-calendar-check"></i> 2021-03-05
                  </p>
                  <div class="d-flex justify-content-between align-items-center mb-0">
                    <p class="stars mb-0">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <i class="far fa-star"></i>
                    </p>
                    <p class="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" class="fish-mt">
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
          <div class="w-100 mob-display">
            <div class="col-9 d-xl-none mx-auto">
              <div class="campaignCardBig w-100 d-xl-none">
                <div class="cardBigImg w-100 position-relative">
                  <div class="d-flex active-card-icons">
                    <i class="fas fa-cart-plus"> </i>
                    <i class="far fa-times-circle"></i>
                  </div>
                </div>
                <div class="cardBigText w-100">
                  <div class="cardBigTag">季節限定</div>
                  <div class="cardBigTitle">
                    <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                  </div>
                  <div class="cardBigContent">
                    <p>
                      無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過
                      iPad
                      數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                    </p>
                    <p class="location">
                      <i class="fas fa-map-marker-alt"></i> 台北市，板橋區
                    </p>
                    <p class="calendar">
                      <i class="far fa-calendar-check"></i> 2021-03-05
                    </p>
                    <div class="d-flex justify-content-between align-items-center mb-0">
                      <p class="stars mb-0">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                      </p>
                      <p class="price mb-0">350</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example " class="fish-mt">
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

        <div class="bgup-img"></div>
        <div class="bgdown-img"></div>
      </div>
    </>
  )
}
export default fav_active
