import '../../styles/fish.scss'
import '../../styles/font.scss'
function memberforget(props) {
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
              個人資訊 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              更改密碼{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic">
              <i class="fas fa-user-edit"> </i> 更改密碼
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <aside class="fish-aside h-100 col-2">
            <h4>會員中心</h4>
            <ul data-toggle="collapse" data-target="*collapse-info">
              <p class="fish-aside-ul-active">個人資訊</p>
              <ul id="collapse-info" class="collapse show">
                <a href="*">
                  <li>編輯個人資訊</li>
                </a>
                <a href="*">
                  <li class="fish-aside-active">更改密碼</li>
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
          <div class="col-9">
            <div class="w-100 d-flex justify-content-center">
              <form
                action=""
                class="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
              >
                <label for="passowrd">請輸入舊密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="passowrd"
                  id="passowrd"
                />
                <br />
                <small></small>
                <label for="newpassword">請輸入新密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="newpassword"
                  id="password"
                />
                <small>密碼需大於六位數</small>

                <label for="newpassowrd2">請再次輸入密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="newpassowrd2"
                  id="newpassowrd2"
                />
                <small>再次輸入密碼不相同</small>

                <button type="button" class="pub-button pub-mb-100 mx-auto">
                  儲存修改
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bgup-img"></div>
      <div class="bgdown-img"></div>
    </>
  )
}

export default memberforget
