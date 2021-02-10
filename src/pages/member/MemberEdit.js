import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link ,withRouter } from 'react-router-dom'

// require('./')
function MemberEdit(props) {
  // console.log(props.match)
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
              編輯個人資訊{' '}
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
                <label for="account ">使用者名稱</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="acoount"
                  id="account"
                />
                <br />
                <small></small>

                <label for="password">電子郵件</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="password"
                  id="password"
                />
                <small>請輸入正確的電子郵件格式</small>

                <label for="birthday">生日</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="date"
                  name="birthday"
                  id="birthday"
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
                />
                <small>請輸入正確的手機格式</small>

                <label for="address">地址</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="address"
                  id="address"
                />
                <small></small>

                <button type="button" className="pub-button pub-mb-100 mx-auto">
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
}

export default withRouter(MemberEdit)
