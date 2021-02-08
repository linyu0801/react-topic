// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import MemberEdit from './pages/member/memberedit'
import Login from './pages/member/login'
import Forget from './pages/member/forget'
import Cart from './pages/cart/Cart'
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
              <Route path="/member/login">
                <Login />
              </Route>
              <Route path="/member/forget">
                <Forget />
              </Route>
              <Route path="/cart">
                <Cart />
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
