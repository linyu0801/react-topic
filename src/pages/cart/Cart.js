import { useState } from 'react'

import CartCate from './CartCate'
import CartStep from './CartStep'
import CartContent from './CartContent'
import CartContent2 from './CartContent2'
import CartContent3 from './CartContent3'
// import Cart2 from './Cart2'
// import Cart3 from './Cart3'
// import Step1 from './Step1'

import '../../styles/hoyu.scss'
import '../../styles/font.scss'

function Cart(props) {
  const { scChange, setScChange } = props
  const [cartCate, setCartCate] = useState('cart1')
  const [cartStep, setCartStep] = useState('step1')
  // const [cartContent, setCartContent] = useState(['123'])
  return (
    <>
      <div className="container">
        <div className="row hhyy-bread">
          <div className="col">
            <a className="clbread" href="*">
              首頁 <span className="clspan">&gt; </span>
            </a>
            <a className="clbread" href="*">
              購物清單
            </a>
          </div>
        </div>
        <CartCate
          cartCate={cartCate}
          setCartCate={setCartCate}
          cartStep={cartStep}
          setCartStep={setCartStep}
        />
        <CartStep
          cartCate={cartCate}
          setCartCate={setCartCate}
          cartStep={cartStep}
          setCartStep={setCartStep}
        />

        {cartCate === 'cart1' && (
          <CartContent
            scChange={scChange}
            setScChange={setScChange}
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        )}
        {cartCate === 'cart2' && (
          <CartContent2
            scChange={scChange}
            setScChange={setScChange}
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        )}
        {cartCate === 'cart3' && (
          <CartContent3
            scChange={scChange}
            setScChange={setScChange}
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />
        )}
      </div>
    </>
  )
}

export default Cart
