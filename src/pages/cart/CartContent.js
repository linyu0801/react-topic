import { FaRegTimesCircle } from 'react-icons/fa'
import Cart1Content1 from './Cart1Content1'
import Cart1Content2 from './Cart1Content2'
import Cart1Content3 from './Cart1Content3'
import CartNextPrevious from './CartNextPrevious'
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CartContent(props) {
  const { cartStep, setCartStep, cartCate, setCartCate } = props
  const [form1, setForm1] = useState('')
  const [cartTotal, setCartTotal] = useState(0)
  const [inputs, setInputs] = useState({
    username: '',
    tel: '',
    receiver: '',
    receiverMobile: '',
    address: '',
    designated_date: '',
    pan_no1: '',
    pan_no2: '',
    pan_no3: '',
    pan_no4: '',
    creditCardBack: '',
    amount: '',
  })

  const [seletedOption, setSeletedOption] = useState('both')
  const [seletedPaymentType, setSeletedPaymentType] = useState('CreditCard')
  const [seletedOptionCardMonth, setSeletedOptionCardMonth] = useState('0')
  const [seletedOptionCardYear, setSeletedOptionCardYear] = useState('2021')
  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  return (
    <>
      {cartStep === 'step1' && (
        <>
          <Cart1Content1
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
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
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
          <Cart1Content2
            cartTotal={cartTotal}
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
            setForm1={setForm1}
            inputs={inputs}
            setInputs={setInputs}
            seletedOption={seletedOption}
            setSeletedOption={setSeletedOption}
            seletedPaymentType={seletedPaymentType}
            setTeletedPaymentType={setSeletedPaymentType}
            seletedOptionCardMonth={seletedOptionCardMonth}
            setSeletedOptionCardMonth={setSeletedOptionCardMonth}
            seletedOptionCardYear={seletedOptionCardYear}
            setSeletedOptionCardYear={setSeletedOptionCardYear}
            onChangeForField={onChangeForField}
          />
          <CartNextPrevious
            form1={form1}
            inputs={inputs}
            setInputs={setInputs}
            seletedOption={seletedOption}
            setSeletedOption={setSeletedOption}
            seletedPaymentType={seletedPaymentType}
            setTeletedPaymentType={setSeletedPaymentType}
            seletedOptionCardMonth={seletedOptionCardMonth}
            setSeletedOptionCardMonth={setSeletedOptionCardMonth}
            seletedOptionCardYear={seletedOptionCardYear}
            setSeletedOptionCardYear={setSeletedOptionCardYear}
            onChangeForField={onChangeForField}
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
            setCartTotal={setCartTotal}
          />
          <Cart1Content3
            cartCate={cartCate}
            setCartCate={setCartCate}
            cartStep={cartStep}
            setCartStep={setCartStep}
          />

          <CartNextPrevious
            form1={form1}
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
