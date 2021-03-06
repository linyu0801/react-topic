import React from 'react'

import '../../styles/MainPage.scss'

import '../../styles/font.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

function MainPage() {
  useEffect(() => {
    let curs = document.querySelector('.cursor2')

    document.addEventListener('mousemove', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      curs.style.top = y - 22 + 'px'
      // console.log('123')
    })

    document.addEventListener('mouseleave', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      // curs.style.opacity = 0.5
      curs.style.top = y - 22 + 'px'
    })
  }, [])
  return (
    <>
      <div className="cursor2"></div>
      <div className=" mb-0 masection jumbotron text-white  container-fluid">
        <div className="maherosection">
          <h5 className="masubtitle">甜蜜的幸福滋味</h5>
          <h2 className="matitle">紅酒醋栗黑森林</h2>
          <div className="letsbuy">立即購買</div>
        </div>
      </div>
      <div className="mablock mablockinner">
        <div className="mablockcontent">
          <h3 className="mbtitle">我們是吃起來超有幸福感的甜點店</h3>
          <p className="mablockword">
            將清新的烏龍茶，融入在北海道的中澤鮮奶油中，
          </p>
          <p className="mablockword">
            淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
          </p>
          <p className="mablockword">最後淋上海鹽奶油霜，沉穩而趣味的搭配。</p>
        </div>
      </div>
      <div className="container lemoncontainer">
        <div className="lemonsection">
          <div className="lemonimg"></div>
          <div className="lemoncontent">
            <h2 className="lemoncaketitle">期間限定</h2>
            <hr className="lemonhr" />
            <h4 className="lemoncaketname">
              檸檬白酒蛋糕 <span className="lemoncakeprice"> $350 </span>
            </h4>
            <p>將清新的烏龍茶，融入北海道的中澤鮮奶油中，</p>
            <p>淡淡茶香搭配鬆軟的海綿蛋糕</p>
            <p>加上雙層焦糖腰果，豐富了味蕾，</p>
            <p>最後淋上海鹽奶油霜，沉穩而趣味的搭配。</p>
            <button className="btn maadd">加入購物車</button>
          </div>
        </div>
      </div>

      <div className="macard" style={{ width: 18 + 'em' }}>
        <img
          className="marcard-img-top card-img-top"
          src="http://localhost:3000/MainPage/image/lemoncake.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="lemoncaketitle">期間限定</h2>
          <hr className="lemonhr" />
          <h4 className="lemoncaketname">
            玫瑰紅酒蛋糕 <span className="lemoncakeprice"> $350 </span>
          </h4>
          <p className="card-text">
            將清新的烏龍茶，融入北海道的中澤鮮奶油中，
            淡淡茶香搭配鬆軟的海綿蛋糕 加上雙層焦糖腰果，豐富了味蕾，
            最後淋上海鹽奶油霜，沉穩而趣味的搭配。
          </p>
          <div className="gotocat">進入分類</div>
        </div>
      </div>

      <div className="container popitemtitle">
        <h2 className="popitembigtitle">熱銷商品</h2>
        <div className="row w-100 popitem d-flex">
          <div className="co1-4 popitem1">
            <img
              className="popitemimg"
              src="http://localhost:3000/MainPage/image/popitem.jpeg"
            />
          </div>
          <div className="co1-4 popitem1 ">
            <img
              className="popitemimg"
              src="http://localhost:3000/MainPage/image/popitem2.jpeg
        "
            />
          </div>
          <div className="co1-4 popitem1 ">
            <img
              className="popitemimg"
              src="http://localhost:3000/MainPage/image/popitem3.jpg"
            />
          </div>
        </div>
      </div>

      <div className="popcard" style={{ width: 18 + 'em' }}>
        <h2 className="popitembigtitle">熱銷商品</h2>

        <img
          className="card-img-top"
          src="http://localhost:3000/MainPage/image/popitem3.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h3 className="lemoncaketitle">
            【草莓季】Funsiamox草莓甜點蛋糕DIY 手作
          </h3>

          <h4 className="lemoncaketname">台北市，板橋區</h4>
          <div className="popstar">
            <FontAwesomeIcon icon={fas.faStar} />
            <FontAwesomeIcon icon={fas.faStar} />
            <FontAwesomeIcon icon={fas.faStar} />
            <FontAwesomeIcon icon={fas.faStar} />
            <FontAwesomeIcon icon={fas.faStar} />
          </div>

          <div className="popprice">$350</div>
        </div>
      </div>

      <div className="trytast">
        <div className="tryimg">
          <img src="../MainPage/image/TastingImg.jpg" alt="" />
        </div>
        <div className=" trrow row">
          <div className="trybrown col-lg-6  col-sm-12">
            <h2 className="trytitle">鑑賞試吃</h2>
            <p className="trycontent">
              曾經被櫥窗裡的美麗甜點誘惑過的人，大概沒有不好奇它們是怎麼做出來的。{' '}
            </p>
            <p className="trycontent">
              甜點製作是一門藝術，而藝術品從來不是只有吃下肚一途，
              在那之前藉著了解它的製作過程與細節，在品嘗時能更領略甜點師的用心、也更有樂趣。
              醉糕品味，提供消費者從吃甜點進階到甜點鑑賞，希望能和更多朋友分享甜點藝術的奧妙。
              帶著誠摯且熱情的心歡迎各位參與這場盛宴。
            </p>
            <div className="gotocat">進入分類</div>
          </div>

          <div className="tryyellow col-lg-6 col-sm-12"></div>
        </div>
      </div>

      <div className="container mastudiotitlemargin">
        <h2 className="mastudio">場地租借</h2>
        <div className="row">
          <div className="mastudioimg col-lg-6"></div>
          <div className="mastudiotext col-lg-6">
            <h4 className="mastudiotitle">烘焙教室｜大安館</h4>

            <p className="mastudiocontent">
              我們擁有最時尚、最高級的廚房，
              <br />
              讓喜愛製作甜點的你們
              <br />
              不用再擔心沒有器具抑或是烤箱不夠熱這種麻煩事!
            </p>

            <p className="mastudiocontent">
              Drunked Cake提供最好品質得廚具與設備
              <br />
              以及最高級美麗的烘陪教室
              <br />
              除了製作甜點外還備有下午茶區域
              <br />
              讓顧可以放鬆的享用自己手工製作糕點。
            </p>

            <button className="btn maaddstudio">加入購物車</button>
          </div>
        </div>
      </div>

      <div className="container malastpart col-12">
        <div className="lastpart">
          <h2 className="lastparttext">
            “【彌月蛋糕】知名部落客小貓真誠推薦！吃起來超有幸福感的甜點店“
          </h2>
        </div>
        <div className="mareadmore">read more</div>
      </div>
    </>
  )
}
export default MainPage
