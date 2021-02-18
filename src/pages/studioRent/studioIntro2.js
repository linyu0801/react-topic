import { React } from 'react'

import '../../styles/studioIntro.scss'

import '../../styles/font.scss'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

function StudioIntro2() {
  return (
    <>
      <div className="container">
        <div className="clbreadbox col-lg-12 col-sm-12">
          <a className="clbread" href="">
            首頁 <span className="clspan">{'>'}</span>
          </a>
          <a className="clbread" href="">
            {' '}
            教室租借{' '}
          </a>
        </div>
      </div>
      <div className="container">
        <Slide easing="ease">
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/2/class2-2.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/2/class2-3.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/2/class2-4.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </Slide>
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall"
          alt="..."
        />
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall4"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <h1 className="studioClassA">東門館教室</h1>
          </div>

          <div className="col-lg-7 d-none d-sm-block">
            <hr className="rightLine w-100" />
          </div>
        </div>
      </div>
      <div className="container  h-100">
        <div classNames="row ">
          <div className="col-12">
            <div className="w-100 clintroForm">
              <form action="" className="clpub-form col-lg-6 col-12">
                <h2 className="IntroTitle">
                  教室預約 <i className="fas fa-wine-glass-alt"></i>
                </h2>
                <div classNames="clborder">
                  <label for="date">日期</label>
                  <br />
                  <input
                    className="w-100 clpub-input"
                    type="text"
                    name="acoount"
                    id="account"
                  />
                  <br />
                  <small></small>
                  <label for="number">人數</label>
                  <br />
                  <input
                    className="w-100 clpub-input"
                    type="text"
                    name="password"
                    id="password"
                  />
                  <small>最多限定20人</small>

                  <label for="timerange">時段</label>
                  <br />
                  <input
                    className="w-100 clpub-input"
                    type="text"
                    name="tel"
                    id="tel"
                  />
                  <div className="orderWrap ">
                    <ul className=" orderDate d-flex justify-content-between">
                      <li className="clcount">日期:</li>
                      <span className="clorder">
                        <i className="fas fa-dollar-sign"></i> 222222
                      </span>
                    </ul>
                    <ul className=" orderNumber d-flex justify-content-between">
                      <li className="clcount">人數:</li>
                      <span className="clorder"> 222222</span>
                    </ul>
                    <ul className=" orderTime d-flex justify-content-between">
                      <li className="clcount">時段:</li>
                      <span className="clorder">
                        <i className="fas fa-dollar-sign"></i> 222222
                      </span>
                    </ul>
                    <hr className="orderHr" />

                    <ul className=" orderTime d-flex justify-content-between">
                      <li className="clcount">金額 :</li>
                      <span className="clorder">
                        <i className="fas fa-dollar-sign"></i> 222222
                      </span>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    className="clbutton pub-button pub-mb-100 mx-auto"
                  >
                    預定
                  </button>
                </div>
              </form>

              <form action="" className="clclpub-form col-lg-6 col-12 ">
                <h2 className="IntroTitle">教室介紹</h2>
                <h3 className="IntroTitleSmall">配備/費用</h3>
                <ul className="equimentfee">
                  <li className="equiment">7組專業烤箱</li>
                  <li className="equiment">7組專業攪拌機</li>
                  <li className="equiment">2台發醱箱</li>
                  <li className="equiment">6台工作台面</li>
                  <li className="equiment">4台洗手槽</li>
                  <li className="equiment">7組考試專業器具(含乙、丙級器具)</li>
                  <li className="equiment">1台壓麵機</li>
                  <li className="equiment">1台冰沙機</li>
                  <li className="equiment">1台丹麥機</li>
                  <li className="equiment">1台急速冷凍櫃</li>
                  <li className="equiment">上午時段收費:6000/3h</li>
                  <li className="equiment">下午時段收費:6000/3h</li>
                </ul>
                <h3 className="IntroTitleSmall">注意事項</h3>
                <div className="wrapatention">
                  <ul className="clatention">
                    {' '}
                    <i className="fas clfa-exclamation-triangle"></i>
                    <li className="atention">
                      借用收費以單位時段三小時為計算單位，借用未足一單位時段者，以一單位時段計算。
                    </li>
                    <i className=" fas clfa-exclamation-triangle"></i>
                    <li className="atention">
                      與教室確認登記租借日期及時段後，需先預付租借總費用 1/2
                      的金額以作訂金（繳費匯款方式在與教
                    </li>
                    <i className="fas clfa-exclamation-triangle"></i>
                    <li className="atention">
                      當天活動開始前繳付押金3000
                      元予教室現場工作人員，待歸還檢查無誤後方可全額退還。
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall2"
          alt="..."
        />
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall3"
          alt="..."
        />
      </div>

      <div className="container studioMap h-50 ">
        <h2>位置</h2>
        <h5>台北市中山區</h5>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.73099184542!2d121.52633634645645!3d25.02673007086659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xffa32aee39ad1fdc!2zSmVsbHlKZWxseSDmhaLlt6Xng5jnhJk!5e0!3m2!1szh-TW!2stw!4v1613531628440!5m2!1szh-TW!2stw"
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        className="w-100"
      />
    </>
  )
}

export default StudioIntro2
