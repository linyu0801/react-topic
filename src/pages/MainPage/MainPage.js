import React from 'react'

import '../../styles/MainPage.scss'

import '../../styles/font.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

function MainPage() {
  return (
    <>
      <div className=" mb-0 masection jumbotron text-white  container-fluid">
        <div className="maherosection">
          <h5 className="masubtitle">甜蜜的幸福滋味</h5>
          <h2 className="matitle">紅酒醋栗黑森林</h2>
          <div className="letsbuy">buy it now</div>
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
              玫瑰紅酒蛋糕 <span className="lemoncakeprice"> $350 </span>
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
          <div className="co1-4 popitem1">
            <img
              className="popitemimg"
              src="http://localhost:3000/MainPage/image/popitem2.jpeg
        "
            />
          </div>
          <div className="co1-4 popitem1">
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
          src="http://localhost:3000/MainPage/image/popitem.jpg"
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
              將清新的烏龍茶，融入北海道的中澤鮮奶油中，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              最後淋上海鹽奶油霜，沉穩而趣味的搭配。{' '}
            </p>
            <p className="trycontent">
              將清新的烏龍茶，融入北海道的中澤鮮奶油中，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              最後淋上海鹽奶油霜，沉穩而趣味的搭配。
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
              將清新的烏龍茶，融入北海道的中澤鮮奶油中，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>

            <p className="mastudiocontent">
              將清新的烏龍茶，融入北海道的中澤鮮奶油中，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              淡淡茶香搭配鬆軟的海綿蛋糕， 加上雙層焦糖腰果，豐富了味蕾，
              最後淋上海鹽奶油霜，沉穩而趣味的搭配。
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
