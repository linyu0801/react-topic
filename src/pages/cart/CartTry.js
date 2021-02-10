import { useState } from 'react'

import CartCate from './CartCate'
import Cart1 from './Cart1'
// import Cart2 from './Cart2'
// import Cart3 from './Cart3'
// import Step1 from './Step1'

import '../../styles/hoyu.scss'
import '../../styles/font.scss'

function CartTry() {
  const [cartCate, setCartCate] = useState('cart1')
  const [Step, setStep] = useState('step1')
  return (
    <>
      <CartCate cartCate={cartCate} setCartCate={setCartCate} />
      {cartCate === 'cart1' ? <Cart1 /> : ''}
      {/* {cartCate === 'cart2' ? <Cart2 /> : ''} */}
      {/* {cartCate === 'cart3' ? <Cart3 /> : ''} */}
    </>
  )
}

export default CartTry
