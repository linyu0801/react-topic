import { useState } from 'react'

import CartCate from './CartCate'
import Cart1 from './Cart1'
import Step1 from './Step1'

import '../../styles/hoyu.scss'
import '../../styles/font.scss'

function CartTry() {
  const [cartCate, setCart] = useState('cart1')
  const [Step, setStep] = useState('step1')
  return (
    <>
      {cartCate === 'cart1' ? <Cart1 /> : ''}
      {cartCate === 'cart1' ? <Cart1 /> : ''}
      {cartCate === 'cart1' ? <Cart1 /> : ''}
      <CartCate cartCate={cartCate} setCart={setCart} />
      <Step1 />
      <Cart1 />
    </>
  )
}

export default CartTry
