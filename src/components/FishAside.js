import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

function FishAside(props) {
  console.log(window.location.pathname)
  const [MemberOpen, setMemberOpen] = useState(false)
  const [OrderOpen, setOrderOpen] = useState(false)
  const [FavOpen, setFavOpen] = useState(false)
  const toggle1 = () => setMemberOpen(!MemberOpen)
  const toggle2 = () => setFavOpen(!FavOpen)
  const toggle3 = () => setOrderOpen(!OrderOpen)
  let page1 = ['/member/edit', '/member/forget']
  let page2 = ['/member/fav-product', '/member/fav-active']
  let page3 = [
    '/member/order-product',
    '/member/order-active',
    '/member/order-class',
  ]

  return (
    <>
      <aside className="fish-aside h-100 col-2">
        <h4>會員中心</h4>

        <ul onClick={toggle1}>
          <span
            className={
              page1.indexOf(window.location.pathname) > -1
                ? 'fish-aside-ul-active'
                : ''
            }
          >
            個人資訊
          </span>
          <Collapse isOpen={!MemberOpen}>
            <ul>
              <Link to="edit">
                <li
                  className={
                    window.location.pathname == '/member/edit'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  編輯個人資訊
                </li>
              </Link>
              <Link to="forget">
                <li
                  className={
                    window.location.pathname == '/member/forget'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  更改密碼
                </li>
              </Link>
            </ul>
          </Collapse>
        </ul>
        <ul onClick={toggle2}>
          <span
            className={
              page2.indexOf(window.location.pathname) > -1
                ? 'fish-aside-ul-active'
                : null
            }
          >
            收藏清單
          </span>
          <Collapse isOpen={FavOpen}>
            <ul>
              <Link to="fav-product">
                <li
                  className={
                    window.location.pathname == '/member/fav-product'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  商品收藏
                </li>
              </Link>
              <Link to="fav-active">
                <li
                  className={
                    window.location.pathname == '/member/fav-active'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  活動收藏
                </li>
              </Link>
            </ul>
          </Collapse>
        </ul>
        <ul onClick={toggle3}>
          <span
            className={
              page3.indexOf(window.location.pathname) > -1
                ? 'fish-aside-ul-active'
                : null
            }
          >
            訂單資訊
          </span>
          <Collapse isOpen={OrderOpen}>
            <ul>
              <Link to="order-product">
                <li
                  className={
                    window.location.pathname == '/member/order-product'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  商品訂單
                </li>
              </Link>
              <Link to="order-active">
                <li
                  className={
                    window.location.pathname == '/member/order-active'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  活動訂單
                </li>
              </Link>
              <Link to="order-class">
                <li
                  className={
                    window.location.pathname == '/member/order-class'
                      ? 'fish-aside-active'
                      : 'fish-aside'
                  }
                >
                  場地租借
                </li>
              </Link>
            </ul>
          </Collapse>
        </ul>
      </aside>
    </>
  )
}
export default FishAside
