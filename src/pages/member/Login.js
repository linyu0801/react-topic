import '../../styles/fish.scss'
import '../../styles/font.scss'
import { Link, withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import $ from 'jquery'
function Login(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  // 小車車
  const { scChange, setScChange } = props

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
      // 小車車
      sessionStorage.setItem('mid', data.token)
      props.history.push('/')
      setScChange(scChange + 1)
    }
    if (data.code === 0) {
      $('#account').next().text('帳號錯誤或不存在')
    }
    if (data.code === 1) {
      $('#password').next().text('密碼錯誤')
    }
  }
  useEffect(() => {
    let curs = document.querySelector('.cursor')

    document.addEventListener('mousemove', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      curs.style.top = y - 22 + 'px'
      // console.log('123')
    })

    document.addEventListener('mouseleave', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      // curs.style.opacity = 0.5
      curs.style.top = y - 22 + 'px'
    })

    // document.addEventListener('mousemove', parallax)
    // const elem = document.querySelector('#parallax')
    // // Magic happens here
    // function parallax(e) {
    //   let _w = window.innerWidth / 2
    //   let _h = window.innerHeight / 2
    //   let _mouseX = e.clientX
    //   let _mouseY = e.clientY
    //   let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
    //     50 - (_mouseY - _h) * 0.01
    //   }%`
    //   console.log('_depth1 : ', _depth1)
    //   let x = ` ${_depth1}`
    //   console.log(x)
    //   elem.style.backgroundPosition = x
    // }
  }, [])
  return (
    <>
      <div class="cursor"></div>

      <div className="fish-login-bg ">
        <div className="container h-100 member-mg">
          <div className="row justify-content-center">
            <div className="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12 ">
              <form action="" className="pub-form w-80 ">
                <div className="zindex">
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
                    type="password"
                    name={password}
                    id="password"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                  <small></small>
                </div>
                <button
                  type="button"
                  className="member-button mx-auto"
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
