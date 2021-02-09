import '../../styles/fish.scss'
import '../../styles/font.scss'
import { Link ,withRouter } from 'react-router-dom'

function forget(props) {
  return (
    <>
      <div class="fish-forgetbg">
        <div class="container h-100">
          <div class="row justify-content-center">
            <div class="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" class="pub-form w-80">
                <h3>忘記密碼</h3>
                <div class="forget-text">
                  <h6>請輸入註冊時所使用的E-amil信箱地址，</h6>
                  <h6>我們將會產生一組新的密碼並寄至信箱，讓您重新登入。</h6>
                </div>
                <label for="account ">請輸入電子郵件</label>
                <br />
                <input
                  class="w-100 member-input"
                  type="text"
                  name="acoount"
                  id="account"
                />
                <br />
                <small>電子郵件格式錯誤</small>
                <div class="form-border w-100"></div>

                <button type="button" class="pub-button mx-auto">
                  傳送新密碼
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default forget
