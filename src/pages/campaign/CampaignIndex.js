import '../../styles/campaignIndex.scss'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DisplayCampaignCards from '../../components/DisplayCampaignCards'
import indexVideo from '../../styles/img/indexVideo.mp4'
import { useEffect } from 'react'
import '../../styles/fontstyle.scss'
import $ from 'jquery'

function CampaignIndex(props) {
  const { searchCampaign, setSearchCampaign } = props
  const { setCategoryActiveObj } = props

  function enterCategory() {
    props.history.push('/campaign/searchProducts')
  }

  function search() {
    props.history.push('/campaign/searchProducts')
  }

  useEffect(() => {
    let curs = document.querySelector('.cursorFinn')

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

  useEffect(() => {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1000) {
        $('.tastingContent').addClass('animate__fadeInLeft ')
      } else {
      }
    })
  }, [])

  return (
    <>
      <div class="cursorFinn d-none d-sm-block"></div>
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

            <p className="animate__animated animate__fadeIn animate__slow ">
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
            <Col lg={5} className="tastingContent animate__animated ">
              <h2 className="tastingTitle mb-4">甜點鑑賞</h2>
              <p className="tastingText">
                曾經被櫥窗裡的美麗甜點誘惑過的人，大概沒有不好奇它們是怎麼做出來的。
                <br />
                甜點製作是一門藝術，而藝術品從來不是只有吃下肚一途，在那之前藉著了解它的製作過程與細節，在品嘗時能更領略甜點師的用心、也更有樂趣。
                <br />
                醉糕品味，提供消費者從吃甜點進階到甜點鑑賞，希望能和更多朋友分享甜點藝術的奧妙。
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
                手作課程，除了可以挑選自己喜愛的甜點、享受DIY的創作過程、還可以從中獲得滿滿的成就感。
                <br />
                不論是要送給心愛的朋友、家人、或是犒賞自己，都會是一種療癒身心的體驗唷！
                <br />
                醉糕品味提供最有趣甜點手作體驗，就算是完全新手，也能做出屬於自己的作品，滿足每一個喜歡甜點、熱愛手作、享受生活的你！
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
                忙碌的生活總是需要心靈的調劑，創意生活的美學更是貼近人心，只有從心出發才會帶給生活美妙的體驗與經驗。
                <br />
                每個職人背後的人文故事及生活風格，往往才是引人入勝之處。醉糕品味認為成功的秘訣，必須從「專業」為出發點！
                <br />
                將專業與生活風格的結合已成為帶動消費者的行為趨勢，醉糕品味找來最具專業的職人，將體驗與美感成為您營造創意生活的基本元素。
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
