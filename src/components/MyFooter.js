import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Myfooter.scss'

function MyFooter(props) {
  return (
    <>
      <footer className="footerFinn m-0">
        <Container>
          <Row>
            <Col xs={12} className="d-xl-none d-flex justify-content-center">
              <img src="../icons/LOGO.svg" alt="" className="nav-icons-finn" />
            </Col>
          </Row>
          <Row className="bg">
            <Col lg={2} xs={4}>
              <p className="fTitle">SERVICE</p>
              <p className="fContent">線上購物</p>
              <p className="fContent">線下體驗</p>
              <p className="fContent">教室租借</p>
              <p className="fContent">部落格</p>
            </Col>
            <Col lg={2} xs={4}>
              <p className="fTitle">POLICY</p>
              <p className="fContent">購買須知</p>
              <p className="fContent">Q＆A</p>
              <p className="fContent">關於我們</p>
              <p className="fContent">訂閱電子報</p>
            </Col>

            <Col lg={5} className="d-none d-sm-block">
              <img src="../icons/LOGO.svg" alt="" className="nav-icons" />
            </Col>
            <Col lg={3} xs={4}>
              <p className="fTitle">FOLLOW US</p>
              <p className="fContent">FACEBOOK</p>
              <p className="fContent">INSTAGRAM</p>
              <p className="fContent">TWITTER</p>
            </Col>

            <Link to="#navbar" className="align-self-end ml-auto toTop">
              ↑TOP
            </Link>
          </Row>
          <Row>
            <p className="fRight mx-auto">
              ©2021 Drunken Cake All rights reserved.
            </p>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default MyFooter
