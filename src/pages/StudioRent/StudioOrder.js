import React, { useEffect, useState } from 'react'

import '../../styles/studioOrder.scss'

import '../../styles/font.scss'

import { Link, withRouter, Redirect } from 'react-router-dom'

import DaanStudio1 from '../../components/DaanStudio1'
import DonmenStudio2 from '../../components/DonmenStudio2'
import WestStudio3 from '../../components/WestStudio3'
import { propTypes } from 'react-bootstrap/esm/Image'

function StudioOrder(props) {
  const [textSearch, setTextSearch] = useState([
    '大安館教室',
    '東門館教室',
    '西門館教室',
  ])

  const [isClassOrdered, setIsClassOrdered] = useState([0, 0, 0]) //設定教室狀態為0(都還沒被預訂)

  const { textInput, setTextInput } = props

  useEffect(() => {
    console.log('isClassOrdered', isClassOrdered)
  }, [isClassOrdered])

  //console.log教室index[i]

  return (
    <>
      <div className="clsection jumbotron text-white col-lg-12 col-md-6 col-sm-4 container-fluid ">
        <div className="container">
          <h2 className="clheromsg  d-flex justify-content-center">
            現在動手做
          </h2>
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
                    //obj.lengh>0  長度大於0代表有值
                    // console.log(textSearch.indexOf(obj[0].classroom))
                    //用for迴圈來抓取textSearch三間教室的index[i]也可以使用indexOf,效果一樣
                    //k為obj檢查

                    .then((r) => r.json())
                    .then((obj) => {
                      console.log(obj)
                      if (obj.length > 0) {
                        for (let k = 0; k < obj.length; k++) {
                          for (let i = 0; i < textSearch.length; i++) {
                            if (textSearch[i] === obj[k].classroom) {
                              console.log('now i = ', i)
                              let tempArray = isClassOrdered
                              tempArray[i] = 1
                              setIsClassOrdered([...tempArray]) //展開tempArray react才可以感應到變動,直接寫變數react會將 let tempArray = isClassOrdered認知為相同
                            }
                          }
                        }
                      } else {
                        setIsClassOrdered([0, 0, 0])
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
      </div>

      <div className="container">
        <div className="breadbox col-lg-12 col-sm-12">
          <Link to="#" className="clbread">
            首頁 <span className="clspan">{'>'}</span>
          </Link>
          <Link className="clbread"> 教室租借 </Link>
        </div>
      </div>
      {!isClassOrdered[0] ? <DaanStudio1 textSearch={textSearch} /> : ''}

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
      {!isClassOrdered[1] ? <DonmenStudio2 textSearch={textSearch} /> : ''}

      <div className="decor">
        <img
          src="http://localhost:3000/climage/goldenRing.png"
          className="decroBall3"
          alt="..."
        />
      </div>
      {!isClassOrdered[2] ? <WestStudio3 textSearch={textSearch} /> : ''}

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
