import React, { useState } from 'react'
import { Collapse } from 'reactstrap'
import { Link } from 'react-router-dom'

function FishAside(props) {
  const [MemberOpen, setMemberOpen] = useState(false)
  const [OrderOpen, setOrderOpen] = useState(false)
  const [FavOpen, setFavOpen] = useState(false)
  const toggle1 = () => setMemberOpen(!MemberOpen)
  const toggle2 = () => setFavOpen(!FavOpen)
  const toggle3 = () => setOrderOpen(!OrderOpen)
  return (
    <>
      <aside className="fish-aside h-100 col-2">
        <h4>會員中心</h4>

        <div onClick={toggle1}>
          個人資訊
          <ul>
            <Collapse isOpen={!MemberOpen}>
              <Link to="edit">
                <li className="fish-aside">編輯個人資訊</li>
              </Link>
              <Link to="forget">
                <li className="fish-aside">更改密碼</li>
              </Link>
            </Collapse>
          </ul>
        </div>
        <ul onClick={toggle2}>
          <span className="fish-aside-ul-active">收藏清單</span>
          <Collapse isOpen={FavOpen}>
            <ul>
              <Link to="fav-product">
                <li className="fish-aside-active">商品收藏</li>
              </Link>
              <Link to="fav-active">
                <li className="fish-aside">活動收藏</li>
              </Link>
            </ul>
          </Collapse>
        </ul>
        <ul onClick={toggle3}>
          訂單資訊
          <Collapse isOpen={OrderOpen}>
            <ul>
              <Link to="order-product">
                <li className="fish-aside">商品訂單</li>
              </Link>
              <Link to="order-active">
                <li className="fish-aside">活動訂單</li>
              </Link>
              <Link to="order-class">
                <li className="fish-aside">場地租借</li>
              </Link>
            </ul>
          </Collapse>
        </ul>
      </aside>
    </>
  )
}
export default FishAside
