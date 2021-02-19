import React, { useState } from 'react'

import '../../styles/studioOrder.scss'

import '../../styles/font.scss'

import { Link, withRouter, Redirect } from 'react-router-dom'

import DaanStudio1 from '../../components/DaanStudio1'
import DonmenStudio2 from '../../components/DonmenStudio2'
import WestStudio3 from '../../components/WestStudio3'
function StudioOrder() {
  const [textSearch, setTextSearch] = useState([
    '大安館教室',
    '東門館教室',
    '西門館教室',
  ])
  const [textInput, setTextInput] = useState([])

  return (
    <>
      <div className="clsection jumbotron text-white col-lg-12 col-md-6 col-sm-4 container-fluid ">
        <div className="container">
          <h2 className="clheromsg  d-flex justify-content-center">
            現在動手做
          </h2>
        </div>

        <div className="container justify-content-center">
          <div className="row col-lg-8 col-sm-12 mx-auto d-flex justify-content-center">
            <input
              className="clsearchbar"
              id="dateChose"
              type="date"
              placeholder="日期:"
              value={textInput}
              onChange={(e) => {
                setTextInput(e.target.value)
              }}
            />

            <button
              className="cl-searchbtn btn search-btn-outline-success"
              type="submit"
              onClick={() => {
                fetch('http://localhost:4000/studiorent', {
                  method: 'POST',
                  body: JSON.stringify({ textInput }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                })
                  .then((r) => r.json())
                  .then((obj) => {
                    console.log(obj)
                    if (obj.success) {
                    } else {
                    }
                  })
                console.log(textInput)
              }}
            >
              <i className="fas fa-search"></i> <span> </span>搜尋
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadbox col-lg-12 col-sm-12">
          <Link to="#" className="clbread">
            首頁 <span className="clspan">{'>'}</span>
          </Link>
          <Link className="clbread"> 教室租借 </Link>
        </div>
      </div>
      <DaanStudio1 textSearch={textSearch} />

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall1"
          alt="..."
        />
      </div>
      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall2"
          alt="..."
        />
      </div>
      <DonmenStudio2 textSearch={textSearch} />

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall3"
          alt="..."
        />
      </div>

      <WestStudio3 textSearch={textSearch} />

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall4"
          alt="..."
        />
      </div>
    </>
  )
}

export default StudioOrder
