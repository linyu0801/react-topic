import { React } from 'react'

import '../../styles/studioOrder.scss'

import '../../styles/font.scss'

import { Link } from 'react-router-dom'

function StudioOrder() {
  return (
    <>
      <div className="clsection jumbotron text-white col-lg-12 col-md-6 col-sm-4 container-fluid ">
        <div className="container">
          <h2 className="clheromsg  d-flex justify-content-center">
            現在動手做
          </h2>
        </div>

        <div className="container justify-content-center">
          <div className="row col-lg-12 col-sm-12 mx-auto d-flex justify-content-center">
            <input
              className="clsearchbar d-flex justify-content-center"
              type="date"
              placeholder="日期:"
            />

            <button
              className="cl-searchbtn btn search-btn-outline-success"
              type="submit"
            >
              <i className="fas fa-search"></i> <span> </span>搜尋
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadbox col-lg-12 col-sm-12">
          <Link to="#" className="clbread">
            首頁 <span className="clspan">{'>'}</span>
          </Link>
          <Link className="clbread"> 教室租借 </Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="studioClass">大安館教室</h2>
          </div>
          <div className="col-7">
            <hr className="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/StudioRent/StudioIntro1">
        <div className="container">
          <div className="col-lg-12 col-md-6 col-sm-4">
            <div className="celiacardBig d-flex w-100">
              <div className="cardBigImg1"></div>
              <div className="clcardText">
                <p className="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button class="btn claddCart">立即預定</button>
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

      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="studioClass">東門館教室</h2>
          </div>
          <div className="col-7">
            <hr className="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/StudioRent/StudioIntro2">
        <div className="container">
          <div className="col-lg-12 col-md-6 col-sm-4">
            <div className="celiacardBig d-flex w-100">
              <div className="cardBigImg2"></div>
              <div className="clcardText">
                <p className="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button className="btn claddCart">立即預定</button>
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

      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="studioClass">西門館教室</h2>
          </div>
          <div className="col-7">
            <hr className="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/StudioRent/StudioIntro3">
        <div className="container">
          <div className="col-lg-12 col-md-6 col-sm-4">
            <div className="celiacardBig d-flex w-100">
              <div className="cardBigImg3"></div>
              <div className="clcardText">
                <p className="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button className="btn claddCart">立即預定</button>
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

export default StudioOrder
