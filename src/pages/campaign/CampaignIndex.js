import '../../styles/campaignIndex.scss'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DisplayCampaignCards from '../../components/DisplayCampaignCards'
import indexVideo from '../../styles/img/indexVideo.mp4'

function CampaignIndex(props) {
  const { searchCampaign, setSearchCampaign } = props
  const { setCategoryActiveObj } = props

  function enterCategory() {
    props.history.push('/campaign/searchProducts')
  }

  function search() {
    props.history.push('/campaign/searchProducts')
  }

  return (
    <>
      <Container fluid className="heroImg position-relative">
        <div className="box position-absolute">
          <video id="myVideo" autoPlay muted loop>
            <source src={indexVideo} type="video/mp4" />
          </video>
        </div>
        <div className="rowBg position-absolute"></div>
        <Row className="h-100">
          <Col
            lg={6}
            xs={12}
            className="mx-auto  align-self-center searchTitle"
          >
            <h2 className="searchTitleText animate__animated animate__fadeIn animate__slow">
              最有質感的甜點活動
            </h2>

            <p className="animate__animated animate__fadeIn animate__slow">
              體驗獨一無二的活動體驗
            </p>
            <div
              className="searchBar w-100 d-flex
           justify-content-center "
            >
              <input
                type="text"
                name="campaignSearch"
                id="campaignSearch"
                placeholder="立即搜尋你喜歡的活動..."
                value={searchCampaign}
                onChange={(event) => {
                  setSearchCampaign(event.target.value)
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') search()
                }}
              />
              <button
                className="searchBtn"
                type="submit"
                onClick={() => {
                  search()
                  setCategoryActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: false,
                    categoryBtn3: false,
                    categoryBtn4: true,
                  })
                }}
              >
                <i className="fas fa-search" />
                <FontAwesomeIcon icon={fas.faSearch} />
                &ensp;搜尋
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hit">
        <Row>
          <Col lg={3} xs={8}>
            <h2 className="hitTitle">熱門活動</h2>
          </Col>
        </Row>
      </Container>
      <Container className="d-none d-sm-block">
        <DisplayCampaignCards />
      </Container>

      <Container fluid className="d-none d-sm-block">
        <Row>
          <Col lg={12}>
            <div className="bgImg"></div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="tastingIntro d-none d-sm-block position-relative mb-5"
      >
        <Row className="h-100">
          <Col lg={7} className="tastingBg d-flex align-items-center">
            <Col lg={2}></Col>
            <Col lg={5} className="tastingContent">
              <h2 className="tastingTitle mb-4">甜點鑑賞</h2>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p
                className="btn k_btn"
                onClick={() => {
                  enterCategory()
                  setCategoryActiveObj({
                    categoryBtn1: true,
                    categoryBtn2: false,
                    categoryBtn3: false,
                    categoryBtn4: false,
                  })
                }}
              >
                立刻購買
                <span className="btn-style" />
              </p>
            </Col>
          </Col>
          <Col lg={7} className="tastingImg position-absolute"></Col>
        </Row>
      </Container>

      <Container
        fluid
        className="experienceIntro d-none d-sm-block position-relative mb-5"
      >
        <Row className="h-100">
          <Col lg={5}></Col>
          <Col
            lg={7}
            className="experientBg d-flex align-items-center
            "
          >
            <Col lg={5}></Col>
            <Col lg={5} className="tastingContent">
              <h2 className="tastingTitle mb-4">手作體驗</h2>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p
                className="btn k_btn"
                onClick={() => {
                  enterCategory()
                  setCategoryActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: true,
                    categoryBtn3: false,
                    categoryBtn4: false,
                  })
                }}
              >
                立刻購買
                <span className="btn-style" />
              </p>
            </Col>
          </Col>
          <Col lg={7} className="experientImg position-absolute"></Col>
        </Row>
      </Container>
      <Container
        fluid
        className="workshopIntro d-none d-sm-block position-relative mb-5"
      >
        <Row className="h-100">
          <Col lg={7} className="tastingBg d-flex align-items-center">
            <Col lg={2}></Col>
            <Col lg={5} className="tastingContent">
              <h2 className="tastingTitle mb-4">職人講座</h2>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道的鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p className="tastingText">
                將清新的烏龍茶，融入北海道澤鮮奶油中，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，淡淡茶香搭配鬆軟的海綿蛋糕，加上雙層焦糖腰果，豐富了味蕾，最後淋上海鹽奶油霜，沉穩而趣味的搭配。
              </p>
              <p
                className="btn k_btn"
                onClick={() => {
                  enterCategory()
                  setCategoryActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: false,
                    categoryBtn3: true,
                    categoryBtn4: false,
                  })
                }}
              >
                立刻購買
                <span className="btn-style" />
              </p>
            </Col>
          </Col>
          <Col lg={7} className="workshoptImg position-absolute"></Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(CampaignIndex)
