import { FaRegTimesCircle } from 'react-icons/fa'
import CartStudio from './CartStudio'
import CartNextPrevious from './CartNextPrevious'
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CartContent3(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props
  const [cartStudioTotal, setCartStudioTotal] = useState(123)
  return (
    <>
      {cartStep === 'step1' && (
        <>
          <CartStudio
            cartStudioTotal={cartStudioTotal}
            setCartStudioTotal={setCartStudioTotal}
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

export default withRouter(CartContent3)
