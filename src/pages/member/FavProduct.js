import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaRegTimesCircle } from 'react-icons/fa'
import FishAside from '../../components/FishAside'
import $ from 'jquery'
import { Modal, Button } from 'react-bootstrap' //有用到動態效果就要import react-bootstrap

function FavProduct(props) {
  const mid = sessionStorage.getItem('mid')

  const [rows, setRows] = useState([])
  const [display, setDisplay] = useState('')
  const [none, setNone] = useState(false)
  // const [favindex, setFavIndex] = useState(0)
  // const [nowindex, setNowIndex] = useState(0)

  const deletefavproduct = async (p_sid, i, fl) => {
    // console.log('click nowindex', nowindex)
    // if (nowindex === 0) {
    //   setNowIndex(fl - 1)
    // }
    // if (nowindex !== 0) {
    //   setNowIndex(nowindex - 1)
    // }
    $(`#pid${p_sid}`).addClass('zoomout')
    $(`#pid${p_sid}`).removeClass(`zoomer delay-${i * 3}`)
    setTimeout(() => {
      $(`#pid${p_sid}`).hide()
    }, 900)
    const url = 'http://localhost:4000/deletefavproduct'
    const request = new Request(url, {
      method: 'DELETE',
      body: JSON.stringify({ p_sid: p_sid, mid: mid }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('刪除', data)
    // if (data.code === 1) {
    //   FetchData()
    // }
  }

  const FetchData = async () => {
    const url = 'http://localhost:4000/getfavproduct'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ mid: mid }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳', data)
    if (data.fav !== 'none') {
      setRows(data)
      // setNowIndex(data.length)
    } else {
      setNone(true)
    }
  }
  const addToCart = async (id) => {
    const response = await fetch('http://localhost:4000/AddToCart1', {
      method: 'POST',
      body: JSON.stringify({
        p_sid: id,
        quantity: 1,
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
  let i = 0
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
  useEffect(() => {
    FetchData()
  }, [])
  useEffect(() => {
    let productDisplay = (
      <>
        {rows.map((value, i) => (
          <div
            key={i}
            className={`col-xl-4 col-lg-5 col-md-6 zoomer delay-${i * 3}`}
            id={`pid${value.p_sid}`}
          >
            {/* {value.p_name} */}
            <div className="product  fish-card w-100 position-relative">
              <div className="fish-img-box w-100">
                {/* <Link to="#123"> */}
                <i>
                  <FaRegTimesCircle
                    onClick={() => {
                      deletefavproduct(value.p_sid, i, rows.length)
                    }}
                  />
                </i>
                {/* </Link> */}
                <Link to="#456">
                  <img
                    src={`http://localhost:3000/k-images/` + value.p_img}
                    className="fish-product-img"
                    alt={`cake` + value.p_img}
                  />
                </Link>
              </div>
              <div className="fish-card-body w-100">
                <h5 className="fish-card-title">{value.p_name}</h5>
                <p className="fish-card-text">{value.p_desc}</p>
                <hr className="fish-product-hr" />
                <div className="fish-product-price mb-1">{value.p_price}</div>
                <button
                  className="addToCartBtn"
                  onClick={() => {
                    addToCart(value.p_sid)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    )
    setDisplay(productDisplay)
    //   // let favlen = rows.length
    //   // setFavIndex(favlen)
    //   // rows.fav === 'none' ? console.log('123456') :
  }, [rows])
  // useEffect(() => {
  //   console.log('nowindex變化 :', nowindex)
  // }, [nowindex])
  const NoneDisPlay = (
    <>
      <div className="d-flex">
        {' '}
        <div className="d-flex  ">
          <img src="/images/icons-column.png" alt="" className="mr-5" />{' '}
        </div>
        <h3 className="fav-nontext  ">尚未收藏商品</h3>
      </div>
    </>
  )
  return (
    <>
      {messageModal}
      <div className="container h-100">
        <div className="row">
          <div className="col-12 bread-div">
            <a className="clbread" href="*">
              首頁 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              會員中心 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              收藏清單 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              商品收藏{' '}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic md-fs">
              <i className="fas fa-bookmark"></i> 商品收藏
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9 d-flex flex-wrap" id="favbox">
            {none === true ? NoneDisPlay : display}

            {/* 
            <nav
              aria-label="Page navigation example"
              className="fish-fav-mt w-100"
            >
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link hoyu-page-link" href="*">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link hoyu-page-link hoyu-page-arrow"
                    href="*"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 fish-bottom"></div>
        <div className="col-9"></div>
      </div>
      <div className="bgup-img"></div>
      <div className="bgdown-img"></div>
    </>
  )
}
export default withRouter(FavProduct)
