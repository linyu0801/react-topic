function CartStep(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props
  return (
    <div className="row hhyy-step mt-5">
      <div className="col hy-cart-step d-flex justify-content-between">
        <div
          className={
            'text-center ' + (cartStep === 'step1' ? 'hy-step-active' : '')
          }
        >
          <h5>Step.1</h5>
          <h5>購物清單</h5>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <i className="fas fa-chevron-right"></i>
        </div>
        <div
          className={
            'text-center ' + (cartStep === 'step2' ? 'hy-step-active' : '')
          }
        >
          <h5>Step.2</h5>
          <h5>配送與付款資訊</h5>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <i className="fas fa-chevron-right"></i>
        </div>
        <div
          className={
            'text-center ' + (cartStep === 'step3' ? 'hy-step-active' : '')
          }
        >
          <h5>Step.3</h5>
          <h5>感謝訂購</h5>
        </div>
      </div>
    </div>
  )
}

export default CartStep
