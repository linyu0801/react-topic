import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, withRouter } from 'react-router-dom'

function MemberForget(props) {
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
                <label for="passowrd">請輸入舊密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="passowrd"
                  id="passowrd"
                />
                <br />
                <small></small>
                <label for="newpassword">請輸入新密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="newpassword"
                  id="password"
                />
                <small>密碼需大於六位數</small>

                <label for="newpassowrd2">請再次輸入密碼</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="newpassowrd2"
                  id="newpassowrd2"
                />
                <small>再次輸入密碼不相同</small>

                <button type="button" className="pub-button pub-mb-100 mx-auto">
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

export default withRouter(MemberForget)
