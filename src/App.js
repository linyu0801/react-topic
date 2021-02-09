// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import MemberEdit from './pages/member/memberedit'
import MemberForget from './pages/member/memberforget'
import OrderProduct from './pages/member/order_product'
import OrderActive from './pages/member/order_active'
import OrderClass from './pages/member/order_class'
import Login from './pages/member/login'
import Forget from './pages/member/forget'
import Register from './pages/member/register'
import FavProduct from './pages/member/fav_product'
import FavActive from './pages/member/fav_active'
import Cart from './pages/cart/Cart'
import CartTry from './pages/cart/CartTry'
import NotFoundPage from './pages/NotFoundPage'

// 組合用元件

import MainContent from './components/MainContent'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
// 定義樣式
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

// 建立樣版context也可以獨立出去一個檔案
export const ThemeContext = React.createContext(themes.light)

function App() {
  // const [auth, setAuth] = useState(false)
  // const [themeNow, setThemeNow] = useState(themes.light)

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <ScrollToTop>
            {/* 套用全站樣式 */}
            {/* <ThemeContext.Provider value={themeNow}> */}

            <Switch>
              <Route path="/member/edit">
                <MemberEdit />
              </Route>
              <Route path="/member/forget">
                <MemberForget />
              </Route>
              <Route path="/member/login">
                <Login />
              </Route>
              <Route path="/member/forget">
                <Forget />
              </Route>
              <Route path="/member/register">
                <Register />
              </Route>
              <Route path="/member/fav-product">
                <FavProduct />
              </Route>
              <Route path="/member/fav-active">
                <FavActive />
              </Route>
              <Route path="/member/order-product">
                <OrderProduct />
              </Route>
              <Route path="/member/order-class">
                <OrderClass />
              </Route>
              <Route path="/member/order-active">
                <OrderActive />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/carttry">
                <CartTry />
              </Route>

              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            {/* </ThemeContext.Provider> */}
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
