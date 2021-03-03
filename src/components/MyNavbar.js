import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink, withRouter, Link } from 'react-router-dom'
import '../styles/navbar.scss'
import $ from 'jquery'

function MyNavbar(props) {
  const [test, setTest] = useState(false)
  async function logout() {
    const url = 'http://localhost:4000/logout'
    const request = new Request(url, {
      method: 'POST',
      credentials: 'include',
    })
    const response = await fetch(request)
    const rows = await response.json()
    if (rows.logout === true) {
      sessionStorage.removeItem('mid')
      setScCartShow(false)
      setScCartTotal(0)
      props.history.push('/member/login')
    }
  }
  useEffect(() => {
    let last = 0
    $(window).scroll(function () {
      let scrollNow = $(this).scrollTop()
      if ($(window).scrollTop() >= 0) {
        $('.navbar').removeClass('hide')
      }
      if ($(window).scrollTop() >= 1) {
        $('.navbar').addClass('nav-position ')

        if (scrollNow > last) {
          $('.navbar').addClass('hide')
        } else {
          $('.navbar').removeClass('hide')
        }
      } else {
        $('.navbar').removeClass('nav-position')
      }

      last = scrollNow
    })
  }, [])

  // 小車車

  const {
    scCartTotal,
    setScCartTotal,
    scChange,
    setScChange,
    scCartShow,
    setScCartShow,
  } = props
  const [scCartItems, setScCartItems] = useState([])
  const [scCartItemsQ, setScCartItemsQ] = useState(0)
  const [scCartActivity, setScCartActivity] = useState([])
  const [scCartActivityQ, setScCartActivityQ] = useState(0)
  const [scCartStudio, setScCartStudio] = useState([])
  const [scCartStudioQ, setScCartStudioQ] = useState(0)
  async function fetchCartItems() {
    const res = await fetch('http://localhost:4000/cart1items', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        setScCartItems(res)
      } else {
        setScCartItems(res)
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
        })
        console.log('123')

        setScCartItemsQ(newQuantity)
      }
    })
  }

  async function fetchCartActivity() {
    const res = await fetch('http://localhost:4000/cartActivityItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
        setScCartActivity(res)
      } else {
        console.log('456')

        setScCartActivity(res)
        let newQuantity = 0
        res.map((item, i) => {
          newQuantity += +item.quantity
        })
        setScCartActivityQ(newQuantity)
      }
    })
  }

  async function fetchCartStudio() {
    const res = await fetch('http://localhost:4000/cartStudioItems', {
      credentials: 'include',
    })
    res.json().then((res) => {
      if (res.length === 0) {
      } else {
        setScCartStudio(res)
        let newPrice = 0
        res.map((item, i) => {
          newPrice += +item.price
        })
        setScCartStudioQ(res.length)
        console.log('789')

        // console.log(newPrice)
        // console.log(newQuantity)
      }
    })
  }

  // useEffect(() => {
  //   if (sessionStorage.getItem('mid')) {
  //     fetchCartItems()
  //     fetchCartActivity()
  //     fetchCartStudio()
  //     console.log('商品:', 1, '活動:', 2, '租借:', 3)
  //   }
  // }, [])
  useEffect(() => {
    if (sessionStorage.getItem('mid')) {
      fetchCartItems()
      fetchCartActivity()
      fetchCartStudio()
      console.log('商品:', 4, '活動:', 5, '租借:', 6)
      let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
      setScCartTotal(scTotal)
    }
  }, [scChange])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
    // scCartItemsQ, scCartActivityQ, scCartActivityQ
  }, [scCartItemsQ])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
  }, [scCartActivityQ])

  useEffect(() => {
    let scTotal = scCartItemsQ + scCartActivityQ + scCartStudioQ
    setScCartTotal(scTotal)
  }, [scCartStudioQ])

  return (
    <>
      <Navbar
        className="alex-navbarHeight"
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="navbar"
        // fixed="top"
      >
        <Navbar.Brand as={NavLink} to="/" className="nav-left">
          <img src="../icons/icons-row.svg" alt="" className="nav-icons" />
        </Navbar.Brand>
        <di className="nav-right-icons  ">
          <Nav.Link href="#deets">
            <FaSearch />
          </Nav.Link>
          <Nav.Link eventKey={2} as={NavLink} to="/cart">
            <FaShoppingCart />
          </Nav.Link>
        </di>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-between">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link className="alex-padding" as={NavLink} to="/">
              首頁
            </Nav.Link>
            <Nav.Link className="alex-padding" as={NavLink} to="/mainproduct">
              商品
            </Nav.Link>
            <Nav.Link className="alex-padding" as={NavLink} to="/campaign">
              體驗
            </Nav.Link>

            <Nav.Link
              className="alex-padding"
              as={NavLink}
              to="/studioRent/studioOrder"
            >
              場地租借
            </Nav.Link>
            <Nav.Link className="alex-padding" as={NavLink} to="#">
              部落格
            </Nav.Link>
            <Nav.Link className="alex-padding" as={NavLink} to="#">
              關於我們
            </Nav.Link>
            <Nav className="nav-between nav-member alex-padding">
              <NavDropdown.Divider />

              <NavDropdown title="會員中心" id="nav-member">
                <NavDropdown
                  title="個人資訊"
                  id="nav-member"
                  className="nav-member-link"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/edit"
                    className="nav-ul "
                  >
                    編輯個人資訊
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/editpassword"
                    className="nav-ul"
                  >
                    更改密碼
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="收藏清單"
                  id="nav-member"
                  className="nav-member-link"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/fav-product"
                    className="nav-ul"
                  >
                    商品收藏
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/fav-active"
                    className="nav-ul"
                  >
                    活動收藏
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="訂單資訊"
                  id="nav-member"
                  className="nav-member-link"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/order-product"
                    className="nav-ul"
                  >
                    商品訂單
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/order-active"
                    className="nav-ul"
                  >
                    活動訂單
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/member/order-class"
                    className="nav-ul"
                  >
                    租借訂單
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              {sessionStorage.getItem('mid') ? (
                <NavDropdown.Item
                  id="logout"
                  onClick={() => {
                    logout()
                  }}
                >
                  <NavDropdown.Divider />

                  <p>登出</p>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item as={NavLink} to="/member/login">
                  <NavDropdown.Divider />

                  <p>登入</p>
                </NavDropdown.Item>
              )}
            </Nav>
          </Nav>

          <Nav className="nav-right">
            <Nav.Link href="#deets">
              <FaSearch />
            </Nav.Link>
            <NavDropdown title={<FaUserAlt />}>
              <NavDropdown.Item
                as={NavLink}
                to="/member/edit"
                className="drop-border"
              >
                <p>會員中心</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {sessionStorage.getItem('mid') ? (
                <NavDropdown.Item
                  id="logout"
                  onClick={() => {
                    logout()
                  }}
                >
                  <p>登出</p>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item as={NavLink} to="/member/login">
                  <p>登入</p>
                </NavDropdown.Item>
              )}
            </NavDropdown>

            <Nav.Link
              eventKey={2}
              className="position-relative"
              onClick={() => {
                setScCartShow(!scCartShow)
              }}
            >
              <FaShoppingCart />

              <span className="badge badge-pill badge-info  hy-cart-count ">
                {scCartTotal}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
