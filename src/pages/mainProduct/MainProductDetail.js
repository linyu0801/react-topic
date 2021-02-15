import '../../styles/MainProductDetail.scss'
import '../../styles/font.scss'
import { MdRemove } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import ProductCarousel from '../../components/ProductCarousel'

function MainProductDetail() {
  return (
    <>
      <div className="content container">
        <div className="row k-mp-upper">
          <div className="col breadcrumbs">
            <a className="clbread" href="">
              首頁{'  '}
              <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="">
              商品{'  '}
              <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="">
              全部商品{'  '}
              <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="">
              烈酒風味
            </a>
          </div>
        </div>

        <div className="row k-mp-lower">
          <div className="col-lg-6 k-left-col">
            <ProductCarousel />
            {/* <div className="carousel-box">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active p-carousel-box">
                    <img
                      src="/images/1.jpeg"
                      className="d-block w-100 k-carousel-img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item p-carousel-box">
                    <img
                      src="/images/1-1.jpeg"
                      className="d-block w-100 k-carousel-img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item p-carousel-box">
                    <img
                      src="/images/1-2.jpeg"
                      className="d-block w-100 k-carousel-img"
                      alt="..."
                    />
                  </div>
                </div>
                <ol className="k-carousel-indicators carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active dot-bar"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    className="dot-bar"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    className="dot-bar"
                  ></li>
                </ol>
              </div>
            </div> */}
          </div>

          <div className="col-lg-6 right-col">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="k-product-name">微醺森林</h3>
              <a href="" className="a-right-style">
                <i className="k-collection far fa-heart">
                  <MdFavoriteBorder />
                </i>
              </a>
            </div>

            <h4 className="k-mp-product-price">$ 450</h4>

            <div className="row shopping-zone">
              <div className="col-lg-6">
                <div className="k-counter my-3">
                  <i className="fas fa-minus k-left-icon">
                    <MdRemove />
                  </i>
                  <span className="k-number">1</span>
                  <i className="fas fa-plus k-right-icon">
                    <MdAdd />
                  </i>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <button className="k-style-addToCartBtn addToCartBtn">
                  加入購物車
                </button>
              </div>
            </div>

            <h5 className="product-description-text">
              以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道，搭配濕潤的蛋糕體有如親臨森林中富帶水氣的土壤，你的嗅覺會否和小白兔一起迷失在黑櫻桃的酒香中呢？
            </h5>
          </div>
        </div>

        <div className="temp-accordion">
          <div className="display-one">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">產品資訊</h5>
              <i className="plus-icon fas fa-plus"></i>
            </div>
            <div className="info-body">
              <div className="k-xd-icon d-flex justify-content-between">
                <span className="k-material-icons material-icons"></span>
                <span className="k-material-icons material-icons"></span>
                <span className="k-material-icons material-icons"></span>
              </div>

              <h5 className="info-body-text text-center">
                酒精濃度：40% <br />
                內容物：君度橙酒/龍眼蜜/檸檬皮/北海道鮮奶油
                <br />
                蛋糕體：千層蛋糕體
                <br />
                葷素：奶蛋素
                <br />
                規格：8吋
                <br />
                保存方式：冷藏
                <br />
                保存期限：冷藏1~2天內食用完畢，實際保存期限請見包裝標示
              </h5>
            </div>
          </div>

          <div className="display-two">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">注意事項</h5>
              <i className="plus-icon fas fa-plus"></i>
            </div>
            <div className="info-body">
              <ul className="k-ul-note">
                <li className="note-list">
                  訂單運費$185元，滿$3,600元免運費。
                </li>
                <li className="note-list">
                  商品圖片僅供實物參考，內容物組成以實物及商品規格為主。
                </li>
                <li className="note-list">
                  如遇商品瑕疵需辦理退換貨者，請維持商品完整，保留原包裝，並於2日內辦理退換貨，逾期恕不受理。
                </li>
                <li className="note-list">
                  販售的蛋糕產品，屬消保法定義之生鮮食品，因此商品出貨後，除非商品本身重大瑕疵，概不接受消費者無條件退貨。
                </li>
                <li className="note-list">
                  訂購付款完成後，如因故需取消/變更訂單、或無法前往門市取貨，請在指定到貨日2天前於服務時間內來電通知客服人員取消或變更訂單。
                </li>
              </ul>
            </div>
          </div>
          <div className="display-three">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">評價</h5>
              <i className="plus-icon fas fa-plus"></i>
            </div>
            <div className="info-body">
              <div className="k-commons">
                <div className="member-common">
                  <div className="member-name">林*文</div>
                  <div className="common-text">
                    君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                  </div>
                </div>
                <div className="member-common">
                  <div className="member-name">林*文</div>
                  <div className="common-text">
                    君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                  </div>
                </div>
                <div className="member-common">
                  <div className="member-name">林*文</div>
                  <div className="common-text">
                    君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                  </div>
                </div>
              </div>

              <div className="add-common">
                <form action="" className="pub-form">
                  <label htmlFor="account ">使用者名稱</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="acoount"
                    id="account"
                  />
                  <br />
                  <small></small>

                  <label htmlFor="password">電子郵件</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="password"
                    id="password"
                  />
                  <small>請輸入正確的電子郵件格式</small>

                  <div className="mb-3">
                    <label htmlFor="validationTextarea">您的評價</label>
                    <textarea
                      className="form-control pub-textarea"
                      id=""
                      placeholder="請留下評價"
                      required
                    ></textarea>
                    <div className="invalid-feedback">請留下評價後再送出</div>
                  </div>

                  <button
                    type="button"
                    className="k-pub-button pub-mb-100 mx-auto"
                  >
                    送出評價
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-info">
        <h4 className="more container">更多蛋糕</h4>
      </div>
      <div id="footer" className="temp-footer"></div>
    </>
  )
}

export default MainProductDetail
