import '../../styles/MainProductDetail.scss'
import '../../styles/font.scss'
import { MdFavoriteBorder } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { MdRemove } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'
import { MdLocalBar } from 'react-icons/md'
// import { RiCakeFill } from 'react-icons/ri'
import { GiCakeSlice } from 'react-icons/gi'
import { GiBerriesBowl } from 'react-icons/gi'
// import ProductCarousel from '../../components/ProductCarousel'
// import ProductAccordion from '../../components/ProductAccordion'
import { useState, useEffect } from 'react'
import CarouselShow from '../../components/CarouselShow'
import { Link, withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import { Modal, Button, Accordion, Card } from 'react-bootstrap' //有用到動態效果就要import react-bootstrap
import $ from 'jquery'

function MainProductDetail(props) {
  //測試有無拿到id：console.log('url', props.match.params.id)
  const [product, setProduct] = useState([])
  const [carouselImg, setCarouselImg] = useState([])
  const mid = sessionStorage.getItem('mid')
  const [favstate, setFavstate] = useState(false)
  useEffect(() => {
    const FetchData = async () => {
      // var formData = new FormData()
      // formData.set('productSid', props.match.params.id)
      const url = 'http://localhost:4000/mainproductdetail' //讀取寫在node中的app.get('/mainproduct')
      const request = new Request(url, {
        method: 'POST',
        credentials: 'include',

        // body: formData,
        body: JSON.stringify({
          productSid: props.match.params.id,
          mid: 84,
        }),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const rows = await response.json() //這邊的rows會得到所有資料庫中的資料
      console.log('伺服器回傳', rows) //先在這邊console.log出rows得到的資料
      console.log('props.match.params.id', props.match.params.id) //先在這邊console.log出rows得到的資料
      if (rows[0].fav_id === parseInt(props.match.params.id)) {
        setFavstate(true)
      }
      setProduct(rows) //rows的東西會傳到product中
      setCarouselImg(rows[0].p_carousel_img.split(','))
      //rows[0].p_carousel_img.split(',')的東西會回傳至carouselImg中，即可針對carouselImg進行map傾印資料
    }

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

    FetchData()
  }, [])

  const [total, setTotal] = useState(1)

  //收藏功能
  const addfavproduct = async (p_sid) => {
    //可在此設定點擊後變換愛心圖片
    console.log('234')
    const url = 'http://localhost:4000/addfavproduct'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ p_sid: p_sid, mid: mid }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳資料 : ', data)
    if (data.fav === true) {
      setFavstate(true)
    } else {
      setFavstate(false)
    }
  }
  // 加入購物車
  const addToCart = async (id, quantity) => {
    const response = await fetch('http://localhost:4000/AddToCart1', {
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
      handleShow()
      // alert('已將商品成功加入購物車')
    }
  }

  const [modalShow, setModalShow] = useState(false)
  const handleClose = () => setModalShow(false)
  const handleShow = () => setModalShow(true)
  const messageModal = (
    <Modal
      contentClassName="hy-modal"
      show={modalShow}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      keyboard={false}
      backdrop="static"
      centered
      onClick={() => {
        handleClose()
      }}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>提示訊息</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>您已將該商品加入購物車</h4>
        <p>謝謝!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleClose()
          }}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      {messageModal}
      <div className="content container">
        <div className="row k-mp-upper">
          <div className="col breadcrumbs">
            <Link className="clbread" to="/MainPage">
              首頁{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="/mainproduct">
              商品{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="/mainproduct">
              全部商品{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="">
              烈酒風味
            </Link>
          </div>
        </div>

        <div className="row k-mp-lower">
          <div className="col-lg-6 k-left-col">
            <Carousel>
              {carouselImg.map((v, i) => (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={`http://localhost:3000/k-images/${v}`}
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {product.map((v, i) => (
            <div className="col-lg-6 right-col">
              <div className="d-flex justify-content-between align-items-center">
                <h3 key={i} className="k-product-name">
                  {v.p_name}
                </h3>

                {/* <Link to="" className="a-right-style"> */}
                <i
                  className="k-collection far fa-heart"
                  onClick={() => {
                    addfavproduct(v.p_sid)
                  }}
                >
                  {favstate ? <MdFavorite /> : <MdFavoriteBorder />}
                </i>
                {/* </Link> */}
              </div>

              <h4 className="k-mp-product-price">$ {v.p_price}</h4>

              <div className="row shopping-zone">
                <div className="col-lg-6">
                  <div className="k-counter d-flex justify-content-between align-items-center my-3">
                    <button
                      className="counterBtn"
                      onClick={() => {
                        setTotal(total - 1)
                      }}
                    >
                      <MdRemove />
                    </button>
                    <span className="k-number">{total}</span>
                    <button
                      className="counterBtn"
                      onClick={() => {
                        setTotal(total + 1)
                      }}
                    >
                      <MdAdd />
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <button
                    className="k-style-addToCartBtn addToCartBtn"
                    onClick={() => {
                      addToCart(v.p_sid, total)
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>

              <h5 className="product-description-text">{v.p_desc}</h5>
            </div>
          ))}
        </div>

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="info-head d-flex justify-content-between d-flex align-items-center">
                <h5 className="k-note">產品資訊</h5>
                <MdAdd />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="info-body">
                  <div className="k-xd-icon d-flex justify-content-between">
                    <span className="k-material-icons material-icons">
                      <MdLocalBar />
                    </span>
                    <span className="k-material-icons material-icons">
                      <GiBerriesBowl />
                    </span>
                    <span className="k-material-icons material-icons">
                      <GiCakeSlice />
                    </span>
                  </div>
                  {product.map((v, i) => (
                    <h5 key={i} className="info-body-text text-center">
                      酒精濃度：
                      <span>{v.Alcohol_vol}% </span>
                      <br />
                      內容物：<span>{v.ingredient}</span>
                      <br />
                      蛋糕體：千層蛋糕體
                      <br />
                      葷素：奶蛋素
                      <br />
                      規格： <span>{v.p_size}</span>
                      <br />
                      保存方式：冷藏
                      <br />
                      保存期限：冷藏1~2天內食用完畢，實際保存期限請見包裝標示
                    </h5>
                  ))}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <div className="info-head d-flex justify-content-between d-flex align-items-center">
                <h5 className="k-note">注意事項</h5>
                <MdAdd />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="info-body">
                  <ul className="k-ul-note">
                    <li className="note-list">
                      訂單運費$185元，滿$3,600元免運費。
                    </li>
                    <li className="note-list">
                      商品圖片僅供實物參考，內容物組成以實物及商品規格為主。
                    </li>
                    <li className="note-list">
                      如遇商品瑕疵需辦理退換貨者，請維持商品完整，保留原包裝，並於2日內辦理退換貨，逾期恕不受理。
                    </li>
                    <li className="note-list">
                      販售的蛋糕產品，屬消保法定義之生鮮食品，因此商品出貨後，除非商品本身重大瑕疵，概不接受消費者無條件退貨。
                    </li>
                    <li className="note-list">
                      訂購付款完成後，如因故需取消/變更訂單、或無法前往門市取貨，請在指定到貨日2天前於服務時間內來電通知客服人員取消或變更訂單。
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="more-info">
        <h4 className="more container">更多蛋糕</h4>

        <CarouselShow />

        {/* <div className="container">
          <Carousel cols={3} rows={1} gap={30} loop>
            {product.map((v, i) => (
              <Carousel.Item>
                <Link
                  to={`/mainproductdetail/products/` + v.p_sid}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="campaignCard w-100">
                    <img
                      className="cardImg w-100"
                      src={`http://localhost:3000/k-images/` + v.p_img}
                      alt=""
                    />
                    <div className="cardText">
                      <h4 className="cardTitle">{v.p_name}</h4>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="price">{v.p_price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div> */}
      </div>
      <div class="cursor2"></div>
      {/* <div id="footer" className="temp-footer"></div> */}
    </>
  )
}

export default withRouter(MainProductDetail)
