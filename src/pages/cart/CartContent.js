import { FaRegTimesCircle } from 'react-icons/fa'
import Cart1Content1 from './Cart1Content1'
import Cart1Content2 from './Cart1Content2'
import Cart1Content3 from './Cart1Content3'
import CartNextPrevious from './CartNextPrevious'
import { withRouter } from 'react-router-dom'

function CartContent(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props
  return (
    <>
      {cartStep === 'step1' && (
        <>
          <Cart1Content1
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
          <CartNextPrevious
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        </>
      )}
      {cartStep === 'step2' && (
        <>
          <Cart1Content1
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
          <Cart1Content2
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
          <CartNextPrevious
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        </>
      )}
      {cartStep === 'step3' && (
        <>
          <Cart1Content1
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
          <Cart1Content2
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
          <CartNextPrevious
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        </>
      )}
    </>
  )
}

export default withRouter(CartContent)
