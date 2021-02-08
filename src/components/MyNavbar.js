import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import '../styles/memberedit.scss'
// 要使用能有active css效果的NavLink元件
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props

  return (
    <>
      <Navbar
        className="bg-dark justify-content-between"
        bg="dark"
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        // fixed="top"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/about">
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              商品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              體驗
            </Nav.Link>

            <Nav.Link as={NavLink} to="/product-category">
              場地租借
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student">
              部落格
            </Nav.Link>
            <Nav.Link as={NavLink} to="/counter">
              關於我們
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FaUserAlt />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
