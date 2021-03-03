import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Carousel from 'react-grid-carousel'

function DisplayCampaignCards(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchdata() {
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

  const arrowBtnLeft = (
    <>
      <button class="carousel-control-next-finn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.41"
          height="19.929"
          viewBox="0 0 13.41 19.929"
        >
          <g id="Group_89" data-name="Group 89" transform="translate(0 0.254)">
            <path
              id="Path_20"
              data-name="Path 20"
              d="M4263.009,2996.582s-2.47,9.421-12.443,9.421"
              transform="translate(-4250.566 -2996.582)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M4263.009,3006s-2.47-9.421-12.443-9.421"
              transform="translate(-4250.566 -2986.582)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
    </>
  )

  const arrowBtnRight = (
    <>
      <button class="carousel-control-prev-finn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.41"
          height="19.929"
          viewBox="0 0 13.41 19.929"
        >
          <g id="Group_89" data-name="Group 89" transform="translate(0 0.254)">
            <path
              id="Path_20"
              data-name="Path 20"
              d="M4263.009,2996.582s-2.47,9.421-12.443,9.421"
              transform="translate(-4250.566 -2996.582)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M4263.009,3006s-2.47-9.421-12.443-9.421"
              transform="translate(-4250.566 -2986.582)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
    </>
  )

  return (
    <>
      <Row className="campaignCards mb-5">
        <Col lg={12}>
          <Carousel
            cols={3}
            rows={1}
            gap={30}
            arrowLeft={arrowBtnLeft}
            arrowRight={arrowBtnRight}
          >
            {data.map((v, i) => (
              <Carousel.Item>
                <Link
                  to={`/campaign/products/` + v.sid}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="campaignCard w-100">
                    <div className="cardImgBox">
                      <img
                        className="cardImg w-100"
                        src={`/img/` + v.campaignCover}
                        alt="campaignImg"
                      />
                    </div>
                    <div className="cardText">
                      <h4 className="cardTitle">{v.title}</h4>
                      <p className="campaignSite my-2">
                        <FontAwesomeIcon icon={fas.faMapMarkerAlt} />
                        &ensp;{v.district}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p
                          className="starsFinn"
                          style={{ marginBottom: '0px' }}
                        >
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
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(DisplayCampaignCards)
