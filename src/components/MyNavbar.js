import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink, Link, withRouter } from 'react-router-dom'
import '../styles/navbar.scss'
function MyNavbar(props) {
  const [logindata, setLoginData] = useState('')
  const { login, setLogin } = props

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
  useEffect(() => {
    const FetchData = async () => {
      const url = 'http://localhost:4000/verify'
      const request = new Request(url, {
        method: 'POST',
        credentials: 'include',
      })
      const response = await fetch(request)
      const rows = await response.json()
    }
    FetchData()
  }, [])
  return (
    <>
      <Navbar
        className=" justify-content-between"
        collapseOnSelect
        expand="lg"
        variant="dark"
        // fixed="top"
      >
        <Navbar.Brand href="#home" className="nav-left">
          Icons
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-between">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="#">
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mainproduct">
              商品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/campaign">
              體驗
            </Nav.Link>

            <Nav.Link as={NavLink} to="/studioRent/studioOrder">
              場地租借
            </Nav.Link>
            <Nav.Link as={NavLink} to="#">
              部落格
            </Nav.Link>
            <Nav.Link as={NavLink} to="#">
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
