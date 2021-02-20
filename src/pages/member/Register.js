import '../../styles/fish.scss'
import '../../styles/font.scss'
import { withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import $ from 'jquery'
import Swal from 'sweetalert2'

function Register(props) {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    account: '',
  })
  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }
  async function RegisterToSever() {
    if (
      inputs.email.match(
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      )
    ) {
      $('#email').next().text('')
      $('#account').next().text('')
      $('#password').next().text('')
      const url = 'http://localhost:4000/register'
      const registerform = new FormData(document.querySelector('#registerform'))
      const request = new Request(url, {
        method: 'POST',
        body: registerform,
      })
      const response = await fetch(request)
      const data = await response.json()
      console.log('伺服器回傳的json資料', data)
      if (data.register === true) {
        Swal.fire({
          title: '註冊成功',
          icon: 'success',
          type: '註冊成功',
          text: '已註冊完成.',
        })
      }
      if (data.code === 1) {
        $('#account').next().text('帳號重複')
      }
      if (data.code === 2) {
        $('#email').next().text('電子郵件重複')
      }
      if (data.code === 3) {
        $('#password').next().text('密碼不足六位數')
      }
    } else {
      $('#email').next().text('請輸入正確電子郵件格式')
    }
  }

  return (
    <>
      <div className="fish-registerbg">
        <div className="container h-100">
          <div className="row justify-content-center">
            <div className="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" className="pub-form w-80" id="registerform">
                <h3>會員註冊</h3>
                <label htmlFor="account ">請輸入帳號</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name="account"
                  id="account"
                  value={inputs.account}
                  onChange={onChangeForField('account')}
                />

                <small></small>

                <label htmlFor="password">請輸入密碼</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name="password"
                  id="password"
                  value={inputs.password}
                  onChange={onChangeForField('password')}
                />
                <small></small>

                <label htmlFor="username">請輸入使用者名稱</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name="username"
                  id="username"
                  value={inputs.username}
                  onChange={onChangeForField('username')}
                />
                <small></small>

                <label htmlFor="email">請輸入電子郵件</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name="email"
                  id="email"
                  value={inputs.email}
                  onChange={onChangeForField('email')}
                />
                <small></small>
                <div className="form-border w-100"></div>
                <button
                  type="button"
                  className="pub-button mx-auto"
                  onClick={() => {
                    RegisterToSever()
                  }}
                >
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
export default withRouter(Register)
