import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row } from 'react-bootstrap'
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

  return (
    <>
      <Row className="campaignCards mb-5">
        <Carousel cols={3} rows={1} gap={30} loop>
          {data.map((v, i) => (
            <Carousel.Item>
              <Link
                to={`/campaign/products/` + v.sid}
                style={{ textDecoration: 'none' }}
              >
                <div className="campaignCard w-100">
                  <img
                    className="cardImg w-100"
                    src={`/img/` + v.campaignCover}
                    alt="campaignImg"
                  />
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
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </>
  )
}

export default withRouter(DisplayCampaignCards)
