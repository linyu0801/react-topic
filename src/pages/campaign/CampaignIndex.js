import React, { useState, useEffect } from 'react'
import '../../styles/campaignIndex.scss'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function CampaignIndex(props) {
  const [data, setData] = useState([])
  const { searchCampaign, setSearchCampaign } = props
  const { setCategoryActiveObj } = props

  function enterCategory() {
    props.history.push('/campaign/searchProducts')
  }

  function search() {
    props.history.push('/campaign/searchProducts')
  }
  useEffect(() => {
    async function fetchdata() {
      // const editform = new FormData(document.editform)

      const url = 'http://localhost:4000/campaignlist'
      const request = new Request(url, {
        method: 'GET',
      })
      const response = await fetch(request)
      const rows = await response.json()
      setData(rows)
    }
    fetchdata()
  }, [])
  const displayCampaignCards = (
    <>
      <Row className="campaignCards">
        {data.map((v, i) => (
          <Col lg={4} xs={9}>
            <Link
              to={`/campaign/products/` + v.sid}
              style={{ textDecoration: 'none' }}
            >
              <div className="campaignCard w-100">
                <div className="cardImg w-100" />
                <div className="cardText">
                  <h4 className="cardTitle">{v.title}</h4>
                  <p className="campaignSite my-2">
                    <FontAwesomeIcon icon={fas.faMapMarkerAlt} />
                    &ensp;{v.district}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="starsFinn" style={{ marginBottom: '0px' }}>
                      {v.rating === 5 ? (
                        <>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </>
                      ) : (
                        ''
                      )}
                      {v.rating > 4 && v.rating < 5 ? (
                        <>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStarHalfAlt} />
                        </>
                      ) : (
                        ''
                      )}

                      {v.rating === 4 ? (
                        <>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={far.faStar} />
                        </>
                      ) : (
                        ''
                      )}
                      <span>{v.rating}</span>
                    </p>
                    <p className="price">{v.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )

  return (
    <>
      <Container fluid className="heroImg">
        <Row className="h-100">
          <Col
            lg={6}
            xs={12}
            className="mx-auto  align-self-center searchTitle"
          >
            <h2 className="searchTitleText">最有質感的甜點活動</h2>
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
        {displayCampaignCards}
      </Container>

      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="bgImg"></div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="tastingIntro d-none d-sm-block position-relative"
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
        className="experienceIntro d-none d-sm-block position-relative"
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
        className="workshopIntro d-none d-sm-block position-relative"
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
