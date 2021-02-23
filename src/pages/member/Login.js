import '../../styles/fish.scss'
import '../../styles/font.scss'
import { Link, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import $ from 'jquery'
function Login(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  async function LoginToSever() {
    $('#account').next().text('')
    $('#password').next().text('')

    const newData = { account, password }
    const url = 'http://localhost:4000/login'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('送出的body : ' + JSON.stringify(newData))
    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料', data)
    if (data.success === true) {
      sessionStorage.setItem('mid', data.token)
      props.history.push('/')
    }
    if (data.code === 0) {
      $('#account').next().text('帳號錯誤或不存在')
    }
    if (data.code === 1) {
      $('#password').next().text('密碼錯誤')
    }
  }
  return (
    <>
      <div className="fish-login-bg ">
        <div className="container h-100 member-mg">
          <div className="row justify-content-center">
            <div className="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" className="pub-form w-80">
                <h3>會員登入</h3>
                <label htmlFor="account ">請輸入帳號</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name={account}
                  id="account"
                  onChange={(event) => {
                    setAccount(event.target.value)
                  }}
                />

                <small></small>
                <label htmlFor="password">請輸入密碼</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name={password}
                  id="password"
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
                <small></small>
                <button
                  type="button"
                  className="pub-button mx-auto"
                  onClick={() => {
                    LoginToSever()
                  }}
                >
                  登入
                </button>
                <Link to="/member/register">註冊新帳號</Link>

                <div className="form-border w-100"></div>
                <div className="fish-icons d-flex justify-content-between">
                  <a href="*" className="col-4">
                    <div className="googlelogin">
                      <div className="google mx-auto"></div>
                      <p>Google登入</p>
                    </div>
                  </a>
                  <a href="*" className="col-4">
                    <div className="facebooklogin">
                      <div className="facebook mx-auto"></div>
                      <p>Facebook登入</p>
                    </div>
                  </a>
                  <Link to="/member/forget" className="col-4">
                    <div className="forgetpassword ">
                      <div className="lock mx-auto"></div>
                      <p>忘記密碼</p>
                    </div>
                  </Link>

                  {/* <a href="*" className="col-4">
                    <div className="forgetpassword ">
                      <div className="lock mx-auto"></div>
                      <p>忘記密碼</p>
                    </div>
                  </a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(Login)
