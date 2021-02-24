import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink, withRouter, Link } from 'react-router-dom'
import '../styles/navbar.scss'
import { Collapse } from 'reactstrap'
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

      props.history.push('/member/login')
    }
  }

  return (
    <>
      <Navbar
        className="  alex-navbarHeight"
        collapseOnSelect
        expand="lg"
        variant="dark"
        // fixed="top"
      >
        <Navbar.Brand href="#home" className="nav-left">
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
            <Nav.Link className="alex-padding" as={NavLink} to="/MainPage">
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

            <Nav.Link eventKey={2} as={NavLink} to="/cart">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
