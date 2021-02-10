import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link ,withRouter } from 'react-router-dom'

function MemberForget(props) {
  return (
    <>
      <div class="container h-100">
        <div class="row">
          <div class="col-12 bread-div">
            <a class="clbread" href="*">
              首頁 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              {' '}
              會員中心 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              {' '}
              個人資訊 <span class="clspan">{'>'}</span>
            </a>
            <a class="clbread" href="*">
              更改密碼{' '}
            </a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2"></div>
          <div class="col-9">
            <h2 class="fish-topic">
              <i class="fas fa-user-edit"> </i> 更改密碼
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <FishAside />
          <div class="col-9">
            <div class="w-100 d-flex justify-content-center">
              <form
                action=""
                class="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
              >
                <label for="passowrd">請輸入舊密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="passowrd"
                  id="passowrd"
                />
                <br />
                <small></small>
                <label for="newpassword">請輸入新密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="newpassword"
                  id="password"
                />
                <small>密碼需大於六位數</small>

                <label for="newpassowrd2">請再次輸入密碼</label>
                <br />
                <input
                  class="w-100 pub-input"
                  type="text"
                  name="newpassowrd2"
                  id="newpassowrd2"
                />
                <small>再次輸入密碼不相同</small>

                <button type="button" class="pub-button pub-mb-100 mx-auto">
                  儲存修改
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bgup-img"></div>
      <div class="bgdown-img"></div>
    </>
  )
}

export default withRouter(MemberForget)
