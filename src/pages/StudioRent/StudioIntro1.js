import React, { useEffect, useState } from 'react'
import '../../styles/studioIntro.scss'
import Iframe from 'react-iframe'

import '../../styles/font.scss'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from 'react-bootstrap'

function StudioIntro1(props) {
  // function handleClick(e) {
  //   e.preventDefault()
  // }
  const { scChange, setScChange } = props
  const mid = sessionStorage.getItem('mid')
  const addToCartStudio = async (studio_id, date, time_period, price) => {
    const response = await fetch('http://localhost:4000/AddToCartStudio', {
      method: 'POST',
      body: JSON.stringify({
        token: mid,
        studio_id,
        date: textInput,
        time_period: selectedTime,
        price,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    let cartresult = await response.json()
    console.log('cartresult', cartresult)
    if (cartresult === 'error') {
      alert('error')
    } else {
      setScChange(scChange + 1)
      handleShow()
    }
  }
  const [textNumber, setTextNumber] = useState('')
  const [selectedTime, setSeletedTime] = useState('')
  const [selectedDate, setSeletedDate] = useState('')
  const [rent, setRent] = useState(0)
  const { textInput } = props

  useEffect(() => {
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
    if (selectedTime === '09:00-12:00AM') {
      $('#cost').text('6000')
      setRent(6000)
    }
    if (selectedTime === '14:00-17:00PM') {
      $('#cost').text('8000')
      setRent(8000)
    }
    if (selectedTime === '全天') {
      $('#cost').text('10000')
      setRent(10000)
    }
    if (selectedTime === ' ') {
      $('#cost').text('0')
    }
  }, [selectedTime])

  // const[data1,setData1]=useState([])

  // async function fetchdata() {
  //   const url = 'http://localhost:4000/studioIntro1'
  //   const request = new Request(url)
  //   const response = await fetch(request)
  //   const data = await response.json()
  //   setData1([...data])
  //   console.log(' 回傳的資料', data)
  // }

  // useEffect(() => {
  //   fetchdata()
  // }, [])

  // {data[].product}用法
  //彈跳視窗
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
        <h4>您已將該時段加入購物車</h4>
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
      <div className="cursor2"></div>
      <div className="container">
        <div className="clbreadbox col-lg-12 col-sm-12">
          <Link to="/localhost:3000" className="clbread">
            首頁 <span className="clspan">{'>'}</span>
          </Link>
          <Link to="/StudioRent/StudioIntro1" className="clbread">
            {' '}
            教室租借{' '}
          </Link>
        </div>
      </div>
      <div className="container">
        <Slide easing="ease">
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/1/class1-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/1/class1-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="each-slide">
            <img
              src="http://localhost:3000/climage/1/class1-4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </Slide>
      </div>

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall"
          alt="..."
        />
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall4"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <h1 className="studioClassA">大安館教室</h1>
          </div>

          <div className="col-lg-7 d-none d-sm-block">
            <hr className="rightLine w-100" />
          </div>
        </div>
      </div>
      <div className="container  h-100">
        <div classNames="row ">
          <div className="col-12">
            <div className="w-100 clintroForm">
              <form action="" className="clpub-form col-lg-6 col-12">
                <h2 className="IntroTitle">
                  教室預約 <FontAwesomeIcon icon={fas.faWineGlassAlt} />
                </h2>
                <div classNames="clborder">
                  <label for="date">日期</label>
                  <br />
                  <input
                    className="w-100 clpub-input"
                    type="date"
                    value={textInput}
                    onChange={(e) => {
                      setSeletedDate(e.target.value)
                    }}
                  />
                  <br />
                  <small></small>
                  <label for="number">人數</label>
                  <br />
                  <input
                    className="w-100 clpub-input"
                    type="number"
                    max="20"
                    min="1"
                    value={textNumber}
                    onChange={(e) => {
                      setTextNumber(e.target.value)
                    }}
                  />
                  <small>最多限定20人</small>

                  <label for="timerange">時段</label>
                  <br />
                  <select
                    id="selecttime"
                    className="timeperiod w-100"
                    value={selectedTime}
                    onChange={(e) => {
                      setSeletedTime(e.target.value)
                    }}
                  >
                    <option value=" "> 請選擇時段</option>
                    <option value="09:00-12:00AM">09:00-12:00AM</option>
                    <option value="14:00-17:00PM">14:00-17:00PM</option>
                    <option value="全天">全天</option>
                  </select>

                  <div className="orderWrap ">
                    <ul className=" orderDate d-flex justify-content-between">
                      <li className="clcount">日期:</li>
                      <span className="clorder">{textInput}</span>
                    </ul>
                    <ul className=" orderNumber d-flex justify-content-between">
                      <li className="clcount">人數:</li>
                      <span className="clorder"> {textNumber}</span>
                    </ul>
                    <ul className=" orderTime d-flex justify-content-between">
                      <li className="clcount">時段:</li>
                      <span className="clorder">
                        <i className="fas fa-dollar-sign"></i> {selectedTime}
                      </span>
                    </ul>
                    <hr className="orderHr" />

                    <ul className=" orderTime d-flex justify-content-between">
                      <li className="clcount">金額 :</li>
                      <span className="clorder" id="cost" type="text">
                        <FontAwesomeIcon icon={fas.faDollarSign} />
                      </span>
                    </ul>
                  </div>

                  {/* <button
                    type="submit"
                    className="clbutton pub-button pub-mb-100 mx-auto"
                  >
                    預定
                  </button> */}
                  <div
                    onClick={() => {
                      addToCartStudio('A01', selectedDate, selectedTime, rent)
                    }}
                    className="clbutton pub-button pub-mb-100 mx-auto hy-btn-studio"
                  >
                    預定
                  </div>
                </div>
              </form>

              <form action="" className="clclpub-form col-lg-6 col-12 ">
                <h2 className="IntroTitle">教室介紹 </h2>
                <div className="wine"></div>
                <h3 className="IntroTitleSmall">配備/費用</h3>
                <ul className="equimentfee">
                  <li className="equiment">7組專業烤箱</li>
                  <li className="equiment">7組專業攪拌機</li>
                  <li className="equiment">2台發醱箱</li>
                  <li className="equiment">6台工作台面</li>
                  <li className="equiment">4台洗手槽</li>
                  <li className="equiment">7組考試專業器具(含乙、丙級器具)</li>
                  <li className="equiment">1台壓麵機</li>
                  <li className="equiment">1台冰沙機</li>
                  <li className="equiment">1台丹麥機</li>
                  <li className="equiment">1台急速冷凍櫃</li>
                  <li className="equiment">上午時段收費:6000/3h</li>
                  <li className="equiment">下午時段收費:6000/3h</li>
                </ul>
                <h3 className="IntroTitleSmall">注意事項</h3>
                <div className="wrapatention">
                  <ul className="clatention">
                    {' '}
                    <div className="clwarning"></div>
                    <li className="atention">
                      借用收費以單位時段三小時為計算單位，借用未足一單位時段者，以一單位時段計算。
                    </li>
                    <div className="clwarning"></div>
                    <li className="atention">
                      與教室確認登記租借日期及時段後，需先預付租借總費用 1/2
                      的金額以作訂金。
                    </li>
                    <div className="clwarning"></div>
                    <li className="atention">
                      當天活動開始前繳付押金3000
                      元予教室現場工作人員，待歸還檢查無誤後方可全額退還。
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall2"
          alt="..."
        />
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall5"
          alt="..."
        />
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall3"
          alt="..."
        />
      </div>

      <div className="container studioMap h-50 ">
        <h2>位置</h2>
        <h5>台北市中山區</h5>
      </div>

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.748837063966!2d121.52633635186135!3d25.026654349312864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97fd43ab8f8df12!2zTWFyb2NvX-mmrOi3r-WPo-eDmOeEmeWwj-iIlg!5e0!3m2!1szh-TW!2stw!4v1613531489632!5m2!1szh-TW!2stw"
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        className="w-100"
      />
    </>
  )
}

export default StudioIntro1
