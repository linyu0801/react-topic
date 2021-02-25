import React, { useState, useEffect } from 'react'
import '../../styles/campaignIndex.scss'
import '../../styles/campaignProducts.scss'
import '../../styles/campaignProductInfo.scss'
import '../../styles/font.scss'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faStar,
  faStarHalfAlt,
  faHeart,
  faClock,
  faCalendarCheck,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import Iframe from 'react-iframe'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Link } from 'react-router-dom'
import Scrollspy from 'react-scrollspy'
import DisplayCampaignCards from '../../components/DisplayCampaignCards'

function CampaignProductsInfo(props) {
  const [campaignProduct, setCampaignProduct] = useState([])
  const [data, setData] = useState([])
  const [carouselImg, setCarouselImg] = useState([])

  useEffect(() => {
    const FetchData = async () => {
      var formData = new FormData()
      formData.set('campaignProductSid', props.match.params.id)
      const url = 'http://localhost:4000/campaignProductInfo' //讀取寫在node中的app.get('/mainproduct')
      const request = new Request(url, {
        method: 'POST',
        body: formData,
      })
      const response = await fetch(request)
      const rows = await response.json() //這邊的rows會得到所有資料庫中的資料
      console.log('伺服器回傳', rows) //先在這邊console.log出rows得到的資料

      setCampaignProduct(rows) //rows的東西會傳到product中
      setCarouselImg(rows[0].campaignImg.split(','))
    }

    FetchData()
  }, [props.match.params.id])

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

  const carouselFinn = (
    <Carousel className="carouselFinn mb-4">
      {carouselImg.map((v, i) => (
        <Carousel.Item key={i} className="carousel-item-finn">
          <img src={`/img/${v}`} className="d-block w-100" alt="..." />
        </Carousel.Item>
      ))}
    </Carousel>
  )

  // 加入購物車
  const [total, setTotal] = useState(1)
  const mid = sessionStorage.getItem('mid')
  const addToCartActivity = async (id, quantity) => {
    const response = await fetch('http://localhost:4000/AddToCartActivity', {
      method: 'POST',
      body: JSON.stringify({
        p_sid: id,
        quantity: quantity,
        token: mid,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    let cartresult = await response.json()
    console.log('cartresult', cartresult)
    if (cartresult === 'error') {
      alert('Something Went Wrong')
    } else {
      alert('商品已加入購物車')
    }
  }
  return (
    <>
      {campaignProduct.map((v, i) => (
        <>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="*">首頁</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="*">體驗</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>{v.title}</span>
                </li>
              </ol>
            </nav>
          </div>
          <div className="container" key={i}>
            <div className="row">
              <div className="carouselRow col-xl-12 col-12">{carouselFinn}</div>
            </div>
          </div>
          <div className="productInfoContent container">
            <div className="row">
              <div className="col-xl-8 col-12">
                <h3 className="productTitle">{v.title}</h3>
                <div className="productReviews d-flex align-baseline">
                  <p
                    className="stars align-self-center"
                    style={{ marginBottom: '20px' }}
                  >
                    {v.rating === 5 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                      </>
                    ) : (
                      ''
                    )}
                    {v.rating > 4 && v.rating < 5 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon
                          icon={faStarHalfAlt}
                          className="star"
                        />
                      </>
                    ) : (
                      ''
                    )}

                    {v.rating === 4 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={far.faStar} className="star" />
                      </>
                    ) : (
                      ''
                    )}
                  </p>
                  <p className="reviews align-self-center">
                    （ <span className="reviewsNum">{v.rating}</span> ）
                  </p>
                  <p className="heart ml-auto">
                    <FontAwesomeIcon icon={faHeart} className="heart " />
                  </p>
                </div>
                <div className="productTimeLocation">
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      &ensp;{v.district}
                    </span>
                    <span className="ml-3">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    &ensp;全程{v.time}分鐘
                  </p>
                </div>
                <div className="porductContent">
                  <h4 id="list-item-1">商品說明</h4>
                  <p>{v.content}</p>
                  <h4>購買須知</h4>
                  <p className="noticed" id="list-item-3">
                    ・{v.notice}
                  </p>
                  <h4>體驗地點</h4>
                  <div className="locationContent" id="list-item-4">
                    <h5>醉糕品味 大安店</h5>
                    <p>{v.address}</p>
                    <hr />
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7974968723406!2d121.54369831437482!3d25.04094544416838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd07c0f0709%3A0x6546de69c86a8bcf!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5aSn5a6J6Lev5LiA5q61ODTlt7c06Jmf!5e0!3m2!1szh-TW!2stw!4v1614065363089!5m2!1szh-TW!2stw"
                      width={600}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                      className="w-100"
                    />
                  </div>
                  <h4 id="list-item-5">如何取消</h4>
                  <p>・所選日期 1 天（含）之前取消，收取手續費 0%</p>
                  <p>・所選日期 0 ~ 0 天之間取消，收取手續費 100%</p>
                  <p className="caption">
                    {' '}
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    &ensp;
                    注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需
                    2-5
                    個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14
                    個工作天內退款。
                  </p>
                </div>
              </div>
              <div className="col-xl-4 d-none d-sm-block">
                <div className="sticky-top">
                  <div className="addToCartCard ">
                    <p>價格</p>
                    <h5>$ {v.price}</h5>
                    <p className="calendar faCalendarCheck">
                      <FontAwesomeIcon icon={faCalendarCheck} />
                      &ensp;{v.date.slice(0, 10)}
                    </p>
                    <button
                      className="addToCartBtn"
                      onClick={() => {
                        addToCartActivity(v.sid, total)
                      }}
                    >
                      加入購物車
                    </button>
                  </div>
                  <Scrollspy
                    className=" porductContentList list-group d-none d-sm-block"
                    items={[
                      'list-item-1',
                      'list-item-2',
                      'list-item-3',
                      'list-item-4',
                      'list-item-5',
                    ]}
                    currentClassName="active"
                  >
                    <li>
                      <a
                        className="porductContentListItem list-group-item list-group-item-action"
                        href="#list-item-1"
                      >
                        商品說明
                      </a>
                    </li>

                    <li>
                      <a
                        className="porductContentListItem list-group-item list-group-item-action"
                        href="#list-item-3"
                      >
                        購買須知
                      </a>
                    </li>
                    <li>
                      <a
                        className="porductContentListItem list-group-item list-group-item-action"
                        href="#list-item-4"
                      >
                        體驗地點
                      </a>
                    </li>
                    <li>
                      <a
                        className="porductContentListItem list-group-item list-group-item-action"
                        href="#list-item-5"
                      >
                        如何取消
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 mb-3">
            <div className="row ">
              <div className="col-lg-3 col-8 p-30">
                <h3 className="more_finn">更多推薦活動</h3>
              </div>
            </div>
          </div>
          <div className="container mb-5">
            <DisplayCampaignCards />
          </div>

          <Container fluid className=" d-xl-none fixed-bottom">
            <div className="row">
              <div className="col-12">
                <div className="addToCartCardPhone ">
                  <div className="d-flex align-self-baseline">
                    <p>價格</p>
                    <h4 className="ml-2">350</h4>
                    <p className="calendar ml-auto">
                      <i className="far fa-calendar-check" /> 2021-03-05
                    </p>
                  </div>
                </div>
                <button className="addToCartBtn">加入購物車</button>
              </div>
            </div>
          </Container>
        </>
      ))}
    </>
  )
}

export default withRouter(CampaignProductsInfo)
