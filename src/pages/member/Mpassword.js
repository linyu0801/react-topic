import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useEffect, useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
function Mpassword(props) {
  const [password, setPassword] = useState('')
  const [newpassword, setNewPassword] = useState('')
  const [newpassword2, setNewPassword2] = useState('')
  const token = sessionStorage.getItem('mid')
  useEffect(() => {
    if (sessionStorage.getItem('mid') === null) {
      props.history.push('/member/login')
    }
  }, [])

  async function Editpassword() {
    if (newpassword.length >= 6) {
      if (newpassword === newpassword2) {
        const url = 'http://localhost:4000/editpassword'
        const request = new Request(url, {
          method: 'PUT',
          // body: editform,
          body: JSON.stringify({ password, newpassword, token }),

          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(' 回傳的資料', data)
        if (data.update === false) {
          console.log('123')

          $('#passwordsmall').text('密碼錯誤')
        }
        if (data.update === true) {
          $('#passwordsmall').text('')
        }
        $('#newpassword2').next().text('')
      } else {
        $('#newpassword2').next().text('再次輸入密碼不相同')
      }
      $('#newpassword').next().text('')
    } else {
      $('#newpassword').next().text('密碼需大於六位數')
    }
  }
  return (
    <>
      <div className="container h-100">
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
              更改密碼{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fas fa-user-edit"> </i> 更改密碼
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
                <label htmlFor="passowrd">請輸入舊密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="passowrd"
                  id="passowrd"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />

                <small id="passwordsmall"></small>
                <label htmlFor="newpassword">請輸入新密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="newpassword"
                  id="newpassword"
                  value={newpassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value)
                  }}
                />
                <small></small>

                <label htmlFor="newpassword2">請再次輸入密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="newpassword2"
                  id="newpassword2"
                  value={newpassword2}
                  onChange={(event) => {
                    setNewPassword2(event.target.value)
                  }}
                />
                <small></small>

                <button
                  type="button"
                  className="pub-button pub-mb-100 mx-auto"
                  onClick={() => {
                    Editpassword()
                  }}
                >
                  儲存修改
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bgup-img"></div>
      <div className="bgdown-img"></div>
    </>
  )
}

export default withRouter(Mpassword)
