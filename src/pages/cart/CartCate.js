import { Link } from 'react-router-dom'

function CartCate(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props

  return (
    <>
      <div className="row hhyy-cate hy-bg mt-5 p-3">
        <div className="col-12 text-center pb-3">請按商品分類分別結帳</div>
        <div
          className={
            'col-4 text-center hy-bg-opacity hoyu-a ' +
            (cartCate === 'cart1' ? 'hy-cartmode-active' : '')
          }
        >
          <Link
            className={'hoyu-a w-100 d-block p-2'}
            to="/carttry"
            onClick={() => {
              setCartCate('cart1')
              setCartStep('step1')
            }}
          >
            甜點商城
          </Link>
        </div>
        <div
          className={
            'col-4 text-center hy-bg-opacity hoyu-a ' +
            (cartCate === 'cart2' ? 'hy-cartmode-active' : '')
          }
        >
          <Link
            className="hoyu-a w-100 d-block p-2"
            to="/carttry"
            onClick={() => {
              setCartCate('cart2')
              setCartStep('step1')
            }}
          >
            活動體驗
          </Link>
        </div>
        <div
          className={
            'col-4 text-center hy-bg-opacity hoyu-a ' +
            (cartCate === 'cart3' ? 'hy-cartmode-active' : '')
          }
        >
          <Link
            className="hoyu-a w-100 d-block p-2"
            to="/carttry"
            onClick={() => {
              setCartCate('cart3')
              setCartStep('step1')
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
    </>
  )
}

export default CartCate
