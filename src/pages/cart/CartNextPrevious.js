import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import CheckOut from '../../components/CheckOut'
function CartNextPrevious(props) {
  const {
    form1,
    freightTotal,
    inputs,
    seletedOption,
    seletedPaymentType,
    seletedOptionCardMonth,
    seletedOptionCardYear,
    seletedDelivery,
    cartStep,
    setCartStep,
    cartCate,
    setCartCate,
  } = props

  const data = {
    ...form1,
    freight: freightTotal,
    delivery: seletedDelivery,
    payment_type: seletedPaymentType,
    designated_period: seletedOption,
    creditCardExpireMonth: seletedOptionCardMonth,
    creditCardExpireYear: seletedOptionCardYear,
  }

  const [isLoading, setIsLoading] = useState(true)
  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  const [modalShow, setModalShow] = useState(false)
  const handleClose = () => setModalShow(false)
  const handleShow = () => setModalShow(true)
  const messageModal = (
    <Modal
      contentClassName="hy-modal"
      show={modalShow}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      keyboard={false}
      backdrop="static"
      centered
      onClick={() => {
        handleClose()
      }}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>提示訊息</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {isLoading ? spinner : null} */}
        <div className="hy-checkout d-flex justify-content-center mb-3">
          <CheckOut />
        </div>

        <h4 className="text-center">付款授權驗證中...</h4>
        <p className="text-center">請勿關閉此視窗，以免發生錯誤!</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )

  return (
    <>
      {messageModal}
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
                  // spinner

                  handleShow()
                  setTimeout(() => {
                    handleClose()
                    window.scrollTo(0, 0)

                    fetch('http://localhost:4000/Cart1Content2', {
                      method: 'POST',
                      body: JSON.stringify(data),
                      credentials: 'include',
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                    })
                      // .then(console.log('送出' + JSON.stringify(data)))
                      .then((r) => r.json())
                      .then((obj) => {
                        console.log(obj)
                        setCartStep('step3')
                        // if (obj.success) {
                        //   console.log('success')
                        // } else {
                        //   console.log('error')
                        // }
                      })
                  }, 5000)
                  // 抓第三步的頁面，然後
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
