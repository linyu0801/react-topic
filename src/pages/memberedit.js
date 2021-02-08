import '../styles/memberedit.scss'
// require('./')
function memberedit(props) {
  console.log(props)

  //   const { auth, setAuth } = props

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="*navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <a className="navbar-brand" href="*">
            icon
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="*">
                首頁
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                體驗
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                場地租借
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                部落格
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                關於我們
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-l">
            <li className="nav-item">
              <a className="nav-link" href="*">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                <i className="fas fa-user-alt"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="container h-100 fish-mt-50">
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
              個人資訊 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              編輯個人資訊{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fas fa-user-edit"> </i> 編輯個人資訊
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <aside className="fish-aside h-100 col-2">
            <h4>會員中心</h4>
            <ul data-toggle="collapse" data-target="*collapse-info">
              <p className="fish-aside-ul-active">個人資訊</p>
              <ul id="collapse-info" className="collapse show">
                <a href="*">
                  <li className="fish-aside-active">編輯個人資訊</li>
                </a>
                <a href="*">
                  <li className="fish-aside">更改密碼</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapse-fav">
              收藏清單
              <ul id="collapse-fav" className="collapse">
                <a href="*">
                  <li className="fish-aside">商品收藏</li>
                </a>
                <a href="*">
                  <li>活動收藏</li>
                </a>
              </ul>
            </ul>
            <ul data-toggle="collapse" data-target="*collapseorder">
              訂單資訊
              <ul id="collapseorder" className="collapse">
                <a href="*">
                  <li className="fish-aside">商品訂單</li>
                </a>
                <a href="*">
                  <li className="fish-aside">活動訂單</li>
                </a>
                <a href="*">
                  <li className="fish-aside">場地租借</li>
                </a>
              </ul>
            </ul>
          </aside>
          <div className="col-9">
            <div className="w-100 d-flex justify-content-center">
              <form
                action=""
                className="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
              >
                <label for="account ">使用者名稱</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="acoount"
                  id="account"
                />
                <br />
                <small></small>

                <label for="password">電子郵件</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="password"
                  id="password"
                />
                <small>請輸入正確的電子郵件格式</small>

                <label for="birthday">生日</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="date"
                  name="birthday"
                  id="birthday"
                />
                <br />
                <small></small>

                <label for="tel">手機</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="tel"
                  id="tel"
                />
                <small>請輸入正確的手機格式</small>

                <label for="address">地址</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="address"
                  id="address"
                />
                <small></small>

                <button type="button" className="pub-button pub-mb-100 mx-auto">
                  儲存修改
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bgup-img"></div>
        <div className="bgdown-img"></div>
      </div>
    </>
  )
}

export default memberedit
