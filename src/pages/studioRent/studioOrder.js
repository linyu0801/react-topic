import { React } from 'react'

import '../../styles/studioOrder.scss'

import '../../styles/font.scss'
import { Link, withRouter, Redirect } from 'react-router-dom'

function studioOrder() {
  return (
    <>
      <div class="clsection jumbotron text-white col-lg-12 col-md-6 col-sm-4 container-fluid ">
        <div className="container">
          <h2 class="clheromsg  d-flex justify-content-center">現在動手做</h2>
        </div>

        <div class="container justify-content-center">
          <div class="row col-lg-8 col-sm-12 mx-auto d-flex justify-content-center">
            <form class="d-flex justify-content-center">
              <input class="clsearchbar" type="date" placeholder="日期:" />
              <input
                class="clsearchbar"
                type="number"
                min="1"
                placeholder="人數:"
              />
              <button
                class="cl-searchbtn btn search-btn-outline-success"
                type="submit"
              >
                <i class="fas fa-search"></i> <span> </span>搜尋
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="breadbox col-lg-12 col-sm-12">
          <a class="clbread" href="">
            首頁 <span class="clspan">{'>'}</span>
          </a>
          <a class="clbread" href="">
            {' '}
            教室租借{' '}
          </a>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <h2 class="studioClass">大安館教室</h2>
          </div>
          <div class="col-7">
            <hr class="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/studioRent/studioIntro1">
        <div class="container">
          <div class="col-lg-12 col-md-6 col-sm-4">
            <div class="celiacardBig d-flex w-100">
              <div class="cardBigImg1"></div>
              <div class="clcardText">
                <p class="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button class="btn claddCart">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall1"
          alt="..."
        />
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall2"
          alt="..."
        />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-5">
            <h2 class="studioClass">東門館教室</h2>
          </div>
          <div class="col-7">
            <hr class="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/studioRent/studioIntro2">
        <div class="container">
          <div class="col-lg-12 col-md-6 col-sm-4">
            <div class="celiacardBig d-flex w-100">
              <div class="cardBigImg2"></div>
              <div class="clcardText">
                <p class="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button class="btn claddCart">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall3"
          alt="..."
        />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-5">
            <h2 class="studioClass">西門館教室</h2>
          </div>
          <div class="col-7">
            <hr class="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/studioRent/studioIntro3">
        <div class="container">
          <div class="col-lg-12 col-md-6 col-sm-4">
            <div class="celiacardBig d-flex w-100">
              <div class="cardBigImg3"></div>
              <div class="clcardText">
                <p class="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button class="btn claddCart">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall4"
          alt="..."
        />
      </div>
    </>
  )
}

export default studioOrder
