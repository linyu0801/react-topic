import { FaRegTimesCircle } from 'react-icons/fa'
import CartActivity from './CartActivity'
import CartNextPrevious from './CartNextPrevious'
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CartContent2(props) {
  const {
    cartStep,
    setCartStep,
    cartCate,
    setCartCate,
    scChange,
    setScChange,
  } = props
  const [cartActivityTotal, setCartActivityTotal] = useState(0)
  return (
    <>
      {cartStep === 'step1' && (
        <>
          <CartActivity
            scChange={scChange}
            setScChange={setScChange}
            cartActivityTotal={cartActivityTotal}
            setCartActivityTotal={setCartActivityTotal}
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

export default withRouter(CartContent2)
