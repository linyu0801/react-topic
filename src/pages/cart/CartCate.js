import { Link } from 'react-router-dom'

function CartCate(props) {
  const { cartCate, setCartCate } = props

  return (
    <>
      <div className="container">
        <div className="row hhyy-cate hy-bg mt-5">
          <div className="col-12 text-center p-3">請按商品分類分別結帳</div>
          <div
            className={
              'col-4 text-center ' +
              (cartCate === 'cart1' ? 'hy-cartmode-active' : '')
            }
          >
            <Link
              className="hoyu-a"
              to="/carttry"
              onClick={() => {
                setCartCate('cart1')
              }}
            >
              甜點商城
            </Link>
          </div>
          <div
            className={
              'col-4 text-center ' +
              (cartCate === 'cart2' ? 'hy-cartmode-active' : '')
            }
          >
            <Link
              className="hoyu-a"
              to="/carttry"
              onClick={() => {
                setCartCate('cart2')
              }}
            >
              活動體驗
            </Link>
          </div>
          <div
            className={
              'col-4 text-center ' +
              (cartCate === 'cart3' ? 'hy-cartmode-active' : '')
            }
          >
            <Link
              className="hoyu-a"
              to="/carttry"
              onClick={() => {
                setCartCate('cart3')
              }}
            >
              場地預定
            </Link>
          </div>

          {/* <ul className="list-unstyled d-flex">
            <li className="p-3">甜點商城</li>
            <li className="p-3">活動體驗</li>
            <li className="p-3">場地預定</li>
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default CartCate
