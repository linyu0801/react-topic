import '../../styles/fish.scss'
import '../../styles/font.scss'
import $ from 'jquery'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Forget(props) {
  const [email, setEmail] = useState('')
  async function ForgetToSever() {
    $('#email').next().text('')
    const url = 'http://localhost:4000/forget'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ email }),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // console.log('送出的body : ' + JSON.stringify(email))
    const response = await fetch(request, { mode: 'cors' })
    const data = await response.json()
    console.log('伺服器回傳的json資料', data)
    if (data.code === 0) {
      $('#email').next().text(data.update)
    } else
      Swal.fire({
        title: '寄送電子郵件成功',
        icon: 'success',
        type: '寄送電子郵件成功',
        text: '您的新密碼已寄送至電子郵件信箱.',
      })
  }

  return (
    <>
      <div className="fish-forgetbg">
        <div className="container h-100 member-mg">
          <div className="row justify-content-center">
            <div className="fish-mask d-flex justify-content-center col-xl-6 col-lg-8 col-md-10 col-sm-12">
              <form action="" className="pub-form w-80">
                <h3>忘記密碼</h3>
                <div className="forget-text">
                  <h6>請輸入註冊時所使用的E-amil信箱地址，</h6>
                  <h6>我們將會產生一組新的密碼並寄至信箱，讓您重新登入。</h6>
                </div>
                <label htmlFor="email ">請輸入電子郵件</label>
                <br />
                <input
                  className="w-100 member-input"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
                <br />
                <small></small>
                <div className="form-border w-100"></div>

                <button
                  type="button"
                  className="pub-button mx-auto"
                  onClick={() => {
                    ForgetToSever()
                  }}
                >
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
export default Forget
