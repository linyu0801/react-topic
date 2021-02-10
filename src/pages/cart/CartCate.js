function CartCate(props) {
  const { cartCate, setCartCate } = props

  return (
    <>
      <div className="row hhyy-cate hy-bg">
        <div className="col text-center mt-5 ">
          <h4 className="my-3">請按商品分類分別結帳</h4>

          <div className="cart-cate d-flex justify-content-between">
            <div
              className={
                ' px-0 hy-bg ' +
                (cartCate === 'cart1' ? 'hy-cartmode-active' : '')
              }
            >
              <h5>甜點商城</h5>
            </div>

            <div
              className={
                ' px-0 hy-bg ' +
                (cartCate === 'cart2' ? 'hy-cartmode-active' : '')
              }
            >
              <h5>活動體驗</h5>
            </div>
            <div
              className={
                ' px-0 hy-bg ' +
                (cartCate === 'cart3' ? 'hy-cartmode-active' : '')
              }
            >
              <h5>場地預定</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCate
