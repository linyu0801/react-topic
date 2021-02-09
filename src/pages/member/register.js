import '../../styles/fish.scss'
import '../../styles/font.scss'
import { Link ,withRouter } from 'react-router-dom'

function register(props) {
  return (
    <>
      <div class="fish-registerbg">
        <div class="container h-100">
          <div class="row justify-content-center">
            <div class="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" class="pub-form w-80">
                <h3>會員註冊</h3>
                <label for="account ">請輸入帳號</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="acoount"
                  id="account"
                />
                <br />
                <small>帳號重複</small>

                <label for="password">請輸入密碼</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="password"
                  id="password"
                />
                <small></small>

                <label for="username">請輸入使用者名稱</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="username"
                  id="username"
                />
                <small></small>

                <label for="email">請輸入電子郵件</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="email"
                  id="email"
                />
                <small>請輸入正確電子郵件格式</small>
                <div class="form-border w-100"></div>
                <button type="button" class="pub-button mx-auto">
                  註冊
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(register)
