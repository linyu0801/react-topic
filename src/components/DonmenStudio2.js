import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import '../styles/studioOrder.scss'

import '../styles/font.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

function DonmenStudio2(props) {
  const { textSearch } = props
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="studioClass" id="donmen" value="donmen">
              {textSearch[1]}<FontAwesomeIcon icon={fas.faGlassMartiniAlt} />
            </h2>
          </div>
          <div className="col-7">
            <hr className="rightLine w-50" />
          </div>
        </div>
      </div>
      <Link to="/StudioRent/StudioIntro2">
        <div className="container">
          <div className="col-lg-12 col-md-6 col-sm-4">
            <div className="celiacardBig d-flex w-100">
              <div className="cardBigImg2"></div>
              <div className="clcardText">
                <p className="studioIntro">
                  無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                  數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                </p>
                <button className="btn claddCart">立即預定</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default DonmenStudio2
