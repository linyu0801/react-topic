import '../../styles/fish.scss'
import '../../styles/font.scss'
import { Link ,withRouter } from 'react-router-dom'

function login(props) {
  return (
    <>
      <div className="fish-loginbg">
        <div class="container h-100">
          <div class="row justify-content-center">
            <div class="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" class="pub-form w-80">
                <h3>會員登入</h3>
                <label for="account ">請輸入帳號</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="acoount"
                  id="account"
                />
                <br />
                <small>帳號錯誤或不存在</small>

                <label for="password">請輸入密碼</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="password"
                  id="password"
                />
                <small>密碼輸入錯誤</small>
                <button type="button" class="pub-button mx-auto">
                  登入
                </button>
                <a href="*">註冊新帳號</a>
                <div class="form-border w-100"></div>
                <div class="fish-icons d-flex justify-content-between">
                  <a href="*" class="col-4">
                    <div class="googlelogin">
                      <div class="google mx-auto"></div>
                      <p>Google登入</p>
                    </div>
                  </a>
                  <a href="*" class="col-4">
                    <div class="facebooklogin">
                      <div class="facebook mx-auto"></div>
                      <p>Facebook登入</p>
                    </div>
                  </a>

                  <a href="*" class="col-4">
                    <div class="forgetpassword ">
                      <div class="lock mx-auto"></div>
                      <p>忘記密碼</p>
                    </div>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default login
