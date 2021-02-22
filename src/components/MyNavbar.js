import React, { useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink, withRouter } from 'react-router-dom'
import '../styles/navbar.scss'
// alex edit
function MyNavbar(props) {
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-between">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link className="alex-padding" as={NavLink} to="/homepage">
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
