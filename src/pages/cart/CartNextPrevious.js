import { withRouter } from 'react-router-dom'
function CartNextPrevious(props) {
  const {
    form1,
    inputs,
    seletedOption,
    seletedPaymentType,
    seletedOptionCardMonth,
    seletedOptionCardYear,
    cartStep,
    setCartStep,
    cartCate,
    setCartCate,
  } = props

  const data = {
    ...form1,
    payment_type: seletedPaymentType,
    designated_period: seletedOption,
    creditCardExpireMonth: seletedOptionCardMonth,
    creditCardExpireYear: seletedOptionCardYear,
  }

  console.log(JSON.stringify(data.username))

  return (
    <>
      {cartStep === 'step1' && (
        <>
          <div className="row my-5">
            <div className="col-1"></div>
            <div className="col-4">
              <button
                className="addToCartBtn"
                onClick={() => {
                  props.history.push('/mainproduct')
                }}
              >
                &lt; 繼續挑選
              </button>
            </div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-4">
              <button
                className="addToCartBtn"
                onClick={() => {
                  window.scrollTo(0, 0)
                  setCartStep('step2')
                }}
              >
                下一步 &gt;
              </button>
            </div>
            <div className="col-1"></div>
          </div>
        </>
      )}
      {cartStep === 'step2' && (
        <>
          <div className="row my-5">
            <div className="col-1"></div>
            <div className="col-4">
              <button
                className="addToCartBtn"
                onClick={() => {
                  window.scrollTo(0, 0)
                  setCartStep('step1')
                }}
              >
                &lt; 返回清單
              </button>
            </div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-4">
              <button
                className="addToCartBtn"
                onClick={() => {
                  // const newObj ={...inputs}
                  window.scrollTo(0, 0)
                  setCartStep('step3')
                  fetch('http://localhost:4000/Cart1Content2', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    credentials: 'include',
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  })
                    .then(console.log('送出' + JSON.stringify(data)))
                    .then((r) => r.json())
                    .then((obj) => {
                      console.log(obj)

                      // if (obj.success) {
                      //   console.log('success')
                      // } else {
                      //   console.log('error')
                      // }
                    })
                }}
              >
                確定結帳 &gt;
              </button>
            </div>
            <div className="col-1"></div>
          </div>
        </>
      )}
      {cartStep === 'step3' && (
        <>
          <div className="row my-5">
            <div className="col-4"></div>
            <div className="col-4">
              <button
                className="addToCartBtn"
                onClick={() => {
                  props.history.push('/')
                  window.scrollTo(0, 0)
                }}
              >
                返回首頁
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </>
      )}
    </>
  )
}
export default withRouter(CartNextPrevious)
