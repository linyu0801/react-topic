import { React } from 'react'
import '../../styles/campaignIndex.scss'
import '../../styles/font.scss'
import 'react-bootstrap'

function CampaignIndex(props) {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar" />
      </div>
      <div className="container-fluid heroImg ">
        <div className="container h-100">
          <div className="row h-100 ">
            <div className="col-lg-6 col-xs-12 mx-auto  align-self-center searchTitle p-30">
              <h2>最有質感的甜點活動</h2>
              <p>品嚐獨一無二的精緻蛋糕</p>
              <div
                className="searchBar w-100 d-flex
           justify-content-center "
              >
                <input
                  type="text"
                  name="campaignSearch"
                  id="campaignSearch"
                  placeholder="立即搜尋你喜歡的活動..."
                />
                <button className="searchBtn" type="submit">
                  <i className="fas fa-search" /> 搜尋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hit">
        <div className="row ">
          <div className="col-lg-3 col-8 p-30">
            <h2>熱門活動</h2>
          </div>
        </div>
      </div>
      <div className="container d-none d-sm-block">
        <div className="row campaignCards">
          <div className="col-lg-4 col-9">
            <div className="campaignCard w-100">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="far fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-9">
            <div className="campaignCard w-100">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-9">
            <div className="campaignCard w-100">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-xl-none">
        <div className="wrapper campaignCards ">
          <div className="col-lg-4 col-9 pl-30">
            <div className="campaignCard w-100 ">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-9">
            <div className="campaignCard w-100">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-9">
            <div className="campaignCard w-100">
              <div className="cardImg w-100" />
              <div className="cardText">
                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                <p className="campaignSite my-2">
                  <i className="fas fa-map-marker-alt" /> 台北市，板橋區
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="price">350</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid tastingIntro py-5 position-relative d-none d-sm-block">
        <div className="bgImg position-relative" />
        <div className="col-lg-7  py-5  position-absolute tastingBg"></div>
        <div className="container py-5">
          <div className="col-lg-4 py-5">
            <h2 className="tastingTitle mb-4">甜點鑑賞 </h2>
            <p className="tastingText">
              將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>
            <p className="tastingText">
              將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>
            <a className="btn k_btn">
              立刻購買
              <span className="btn-style" />
            </a>
          </div>
        </div>
        <div className="col-7 py-5 position-absolute tastingImg"></div>
      </div>
      <div className="container cardPhone d-xl-none ">
        <div className="row  position-relative">
          <div className="tastingBgImg w-100 position-absolute" />
          <div className="tastingBg w-100 position-absolute" />
          <div className="col-12 p-30">
            <div className="tastingImg"> </div>
            <div className="tastingContent ">
              <div className="spacingPusher" />
              <h2 className="tastingTitle">甜點鑑賞 </h2>
              <p className="tastingText">
                奧維德告訴我們，在我們這個時代裡，單純十分罕見。希望大家實際感受一下這段話。一般來說，若能夠欣賞到紅酒的美，相信我們一定會對紅酒改觀。我們都有個共識，若問題很困難，那就勢必不好解決。經過上述討論，問題的核心究竟是什麼？
              </p>
              <div className="wrapper mx-auto text-center">
                <a className="btn k_btn">
                  立刻購買
                  <span className="btn-style" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container cardPhone d-xl-none ">
        <div className="row  position-relative">
          <div className="tastingBgImg w-100 position-absolute" />
          <div className="tastingBg w-100 position-absolute" />
          <div className="col-12 p-30">
            <div className="tastingImg"> </div>
            <div className="tastingContent ">
              <div className="spacingPusher" />
              <h2 className="tastingTitle">甜點鑑賞 </h2>
              <p className="tastingText">
                奧維德告訴我們，在我們這個時代裡，單純十分罕見。希望大家實際感受一下這段話。一般來說，若能夠欣賞到紅酒的美，相信我們一定會對紅酒改觀。我們都有個共識，若問題很困難，那就勢必不好解決。經過上述討論，問題的核心究竟是什麼？
              </p>
              <div className="wrapper mx-auto text-center">
                <a className="btn k_btn">
                  立刻購買
                  <span className="btn-style" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container cardPhone d-xl-none ">
        <div className="row  position-relative">
          <div className="tastingBgImg w-100 position-absolute" />
          <div className="tastingBg w-100 position-absolute" />
          <div className="col-12 p-30">
            <div className="tastingImg"> </div>
            <div className="tastingContent ">
              <div className="spacingPusher" />
              <h2 className="tastingTitle">甜點鑑賞 </h2>
              <p className="tastingText">
                奧維德告訴我們，在我們這個時代裡，單純十分罕見。希望大家實際感受一下這段話。一般來說，若能夠欣賞到紅酒的美，相信我們一定會對紅酒改觀。我們都有個共識，若問題很困難，那就勢必不好解決。經過上述討論，問題的核心究竟是什麼？
              </p>
              <div className="wrapper mx-auto text-center">
                <a className="btn k_btn">
                  立刻購買
                  <span className="btn-style" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="illustration position-relative"></div>
      <div className="container-fluid experienceIntro py-5 position-relative d-none d-sm-block">
        <div className="bgImg position-relative" />
        <div className="col-7  py-5 position-absolute experientBg" />
        <div className="container d-flex py-5">
          <div className="col-8">
            <div className="w-100"></div>
          </div>
          <div className="col-4 py-5">
            <h2 className="tastingTitle mb-4">甜點鑑賞 </h2>
            <p className="tastingText">
              將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              <br />
              將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>
            <a className="btn k_btn">
              立刻購買
              <span className="btn-style" />
            </a>
          </div>
        </div>
        <div className="col-7 py-5 position-absolute experientImg"></div>
      </div>
      <div className="container-fluid workshopIntro py-5 position-relative mb-5 d-none d-sm-block">
        <div className="col-7  py-5 position-absolute tastingBg"></div>
        <div className="container py-5">
          <div className="col-4 py-5">
            <h2 className="tastingTitle mb-4">甜點鑑賞 </h2>
            <p className="tastingText">
              將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>
            <p className="tastingText">
              將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
            </p>
            <a className="btn k_btn">
              立刻購買
              <span className="btn-style" />
            </a>
          </div>
        </div>
        <div className="col-7 py-5 position-absolute tastingImg"></div>
      </div>
      <div className="container-fluid pt-5">
        <div className="footer" />
      </div>
    </div>
  )
}
export default CampaignIndex
