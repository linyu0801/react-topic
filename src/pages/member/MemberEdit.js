import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, Redirect, withRouter } from 'react-router-dom'

function MemberEdit(props) {
  const { logindata } = props
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [tel, setTel] = useState('')
  const [address, setAddress] = useState('')

  if (sessionStorage.getItem('mid') && logindata !== '') {
    return (
      <>
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
                {' '}
                編輯個人資訊
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
            <FishAside />
            <div className="col-9">
              <div className="w-100 d-flex justify-content-center">
                <form
                  action=""
                  className="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
                >
                  <label for="username ">使用者名稱</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder={logindata.body ? logindata.body.username : ''}
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                  />
                  <br />
                  <small></small>

                  <label for="password">電子郵件</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="email"
                    id="email"
                    placeholder={logindata.body ? logindata.body.email : ''}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                  />
                  <small>請輸入正確的電子郵件格式</small>

                  <label for="birthday">生日</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="birthday"
                    id="birthday"
                    placeholder={logindata.body ? logindata.body.birthday : ''}
                    onChange={(event) => {
                      setBirthday(event.target.value)
                    }}
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
                    placeholder={logindata.body ? logindata.body.tel : ''}
                    onChange={(event) => {
                      setTel(event.target.value)
                    }}
                  />
                  <small>請輸入正確的手機格式</small>

                  <label for="address">地址</label>
                  <br />
                  <input
                    className="w-100 pub-input"
                    type="text"
                    name="address"
                    id="address"
                    placeholder={logindata.body ? logindata.body.address : ''}
                    onChange={(event) => {
                      setAddress(event.target.value)
                    }}
                  />
                  <small></small>

                  <button
                    type="button"
                    className="pub-button pub-mb-100 mx-auto"
                  >
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
  } else {
    return <Redirect to="/member/login" />
  }
}

export default withRouter(MemberEdit)
