// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import MemberEdit from './pages/member/MemberEdit'
import MemberForget from './pages/member/MemberForget'
import OrderProduct from './pages/member/OrderProduct'
import OrderActive from './pages/member/OrderActive'
import OrderClass from './pages/member/OrderClass'
import Login from './pages/member/Login'
import Forget from './pages/member/Forget'
import Register from './pages/member/Register'
import FavProduct from './pages/member/FavProduct'
import FavActive from './pages/member/FavActive'
import Cart from './pages/cart/Cart'
import MainProduct from './pages/mainProduct/MainProduct'
import MainProductDetail from './pages/mainProduct/MainProductDetail'
import NotFoundPage from './pages/NotFoundPage'
import CampaignIndex from './pages/campaign/CampaignIndex'
import CampaignProductInfo from './pages/campaign/CampaignProductInfo'
import StudioOrder from './pages/studioRent/studioOrder'
import StudioIntro1 from './pages/studioRent/studioIntro1'
import StudioIntro2 from './pages/studioRent/studioIntro2'
import StudioIntro3 from './pages/studioRent/studioIntro3'
import HomePage from './pages/homePage/HomePage'

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
  // const [login, setLogin] = useState(false)
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
              <Route path="/homepage">
                <HomePage />
              </Route>
              <Route path="/mainproduct">
                <MainProduct />
              </Route>
              <Route path="/mainproductdetail/products/:id?">
                <MainProductDetail />
              </Route>
              <Route path="/campaign/products/:id?">
                <CampaignProductInfo />
              </Route>
              <Route path="/campaign">
                <CampaignIndex />
              </Route>
              <Route path="/member/edit">
                <MemberEdit />
              </Route>
              <Route path="/member/editpassword">
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
              <Route path="/studioRent/studioOrder">
                <StudioOrder />
              </Route>
              <Route path="/studioRent/studioIntro1">
                <StudioIntro1 />
              </Route>
              <Route path="/studioRent/studioIntro2">
                <StudioIntro2 />
              </Route>
              <Route path="/studioRent/studioIntro3">
                <StudioIntro3 />
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
