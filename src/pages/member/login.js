import '../../styles/fish.scss'
import '../../styles/font.scss'
// import { Link, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
// const [dataLoading, setDataLoading] = useState(false)

function Login(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  async function LoginToSever() {
    // 開啟載入指示
    // setDataLoading(true)

    const newData = { account, password }

    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/dcake/login'
    // const url = 'http://localhost:6005/users/'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料', data)
    await (() => {
      console.log('成功與否', data)
      if (data.success == true) {
        window.location.href('/member/edit')
      } else {
        console.log('帳號密碼錯誤')
      }
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    // setTimeout(() => {
    //   setDataLoading(false)
    //   alert('儲存完成')
    //   props.history.push('/')
    // }, 500)
  }
  // const loading = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // )
  return (
    <>
      <div classNameName="fish-loginbg">
        <div className="container h-100">
          <div className="row justify-content-center">
            <div className="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" className="pub-form w-80">
                <h3>會員登入</h3>
                <label for="account ">請輸入帳號</label>
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
                <br />
                <small>帳號錯誤或不存在</small>

                <label for="password">請輸入密碼</label>
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
                <small>密碼輸入錯誤</small>
                <button
                  type="button"
                  className="pub-button mx-auto"
                  onClick={() => {
                    LoginToSever()
                  }}
                >
                  登入
                </button>
                <a href="*">註冊新帳號</a>
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

                  <a href="*" className="col-4">
                    <div className="forgetpassword ">
                      <div className="lock mx-auto"></div>
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
export default Login
