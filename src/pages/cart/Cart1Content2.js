import React, { useState, useEffect, useRef } from 'react'
import { FcSimCardChip } from 'react-icons/fc'
import $ from 'jquery'

function Cart1Content2(props) {
  const {
    freightTotal,
    cartTotal,
    setForm1,
    inputs,
    setInputs,
    onChangeForField,
    seletedOption,
    setSeletedOption,
    seletedOptionCardMonth,
    setSeletedOptionCardMonth,
    seletedOptionCardYear,
    setSeletedOptionCardYear,
    seletedPaymentType,
    setSeletedPaymentType,
  } = props

  // 訂購人與收貨人相同
  const [equal, setEqual] = useState(false)

  // 信用卡翻轉
  const [isFlip, setIsFlip] = useState(false)

  // 信用卡focus
  // const [focusSection, setFocusSection] = useState('')
  // const [focusBoxStyle, setFocusBoxStyle] = useState({
  //   width: '100%',
  //   height: '100%',
  //   transform: 'null',
  // })

  useEffect(() => {
    equal === true
      ? setInputs({
          ...inputs,
          receiver: inputs.username,
          receiverMobile: inputs.tel,
        })
      : setInputs({ ...inputs, receiver: '', receiverMobile: '' })
  }, [equal])

  useEffect(() => {
    setForm1(inputs)
  }, [inputs])

  // 信用卡自動帶到下一個欄位
  // 信用卡focus

  const pannum = useRef(null)
  const pan1 = useRef(null)
  const pan2 = useRef(null)
  const pan3 = useRef(null)
  const pan4 = useRef(null)
  const CVC = useRef(null)
  const expireMonth = useRef(null)
  const expireYear = useRef(null)
  const cardFlip = useRef(null)

  // 信用卡填完自動跳到下一個
  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    if (inputs.pan_no1.length === 4) {
      $(pan2.current).focus()
      if (inputs.pan_no2.length === 4) {
        $(pan3.current).focus()
        if (inputs.pan_no3.length === 4) {
          $(pan4.current).focus()
        }
      }
    }
  }, [inputs.pan_no1, inputs.pan_no2, inputs.pan_no3])

  // 信用卡翻轉
  useEffect(() => {
    $(CVC.current).focus(function () {
      setIsFlip(true)
      console.log('focus:', isFlip)
    })
    $(CVC.current).blur(function () {
      setIsFlip(false)
      console.log('blur:', isFlip)
    })
  }, [])

  // 信用卡focus
  // useEffect(() => {
  //   if (focusSection === 'pannum') {
  //     // const target = $(pannum.current)
  //     setFocusBoxStyle({
  //       // width: `${target.offsetWidth}px`,
  //       width: $(pannum.current).offsetWidth + `px`,
  //       // height: `${target.offsetHeight}px`,
  //       height: $(pannum.current).offsetHeight + `px`,
  //       // transform: `translate(${target.offsetLeft}px, ${target.offsetTop}px)`,
  //       transform: `translate(${$(pannum.current).offsetLeft}px, ${
  //         $(pannum.current).offsetTop
  //       }px)`,
  //     })
  //   }
  // }, [focusSection])
  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="mt-5 hy-color-gold">配送資訊</h4>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="w-100 d-flex justify-content-center">
            {/* input寬度我是用w-100 然後在form設定寬度col-7讓他相等
再麻煩各自頁面再作調整  */}

            <form
              name="deliever"
              className="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
            >
              <input type="hidden" name="amount" value={cartTotal} />
              <label htmlFor="username">訂購人姓名</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="username"
                id="username"
                value={inputs.username}
                onChange={onChangeForField('username')}
                required
              />
              <br />
              <small></small>
              <label htmlFor="tel">訂購人手機</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="tel"
                id="tel"
                value={inputs.tel}
                onChange={onChangeForField('tel')}
                required
              />
              <br />
              <small></small>
              {/* <input type="checkbox" name="sameAsAccount" id="sameAsAccount" /> */}

              <input
                type="checkbox"
                // value="false"
                onClick={(e) => {
                  setEqual(!equal)
                }}
              />
              <label htmlFor=""> &nbsp;收件人同訂購人</label>
              <br />

              <label htmlFor="receiver">收件人姓名</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="receiver"
                id="receiver"
                value={inputs.receiver}
                onChange={onChangeForField('receiver')}
                required
              />
              <small></small>
              <label htmlFor="receiverMobile">收件人手機</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="receiverMobile"
                id="receiverMobile"
                value={inputs.receiverMobile}
                onChange={onChangeForField('receiverMobile')}
                required
              />
              {/* <small>請輸入正確的手機格式</small> */}
              <label htmlFor="address">收件地址</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="address"
                id="address"
                value={inputs.address}
                onChange={onChangeForField('address')}
                required
              />
              <small></small>
              <label htmlFor="designated_date">收件日期</label>
              <br />
              <input
                className="w-100 pub-input"
                type="date"
                name="designated_date"
                id="designated_date"
                value={inputs.designated_date}
                onChange={onChangeForField('designated_date')}
                required
              />
              <small></small>
              <label htmlFor="designated_period">可收件時段</label>
              <br />
              <select
                className="w-100 pub-input pr-2 hoyu-select"
                name="designated_period"
                id="designated_period"
                value={seletedOption}
                onChange={(e) => {
                  setSeletedOption(e.target.value)
                }}
                required
              >
                <option value="不指定">不指定</option>
                <option value="8:00-12:00">8:00-12:00</option>
                <option value="13:00-17:00">13:00-17:00</option>
              </select>
              <small></small>
            </form>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="mt-5 hy-color-gold">付款資訊</h4>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="w-100 d-flex justify-content-center">
            {/* input寬度我是用w-100 然後在form設定寬度col-7讓他相等
再麻煩各自頁面再作調整  */}

            <form
              name="payment"
              className="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
            >
              <label htmlFor="payment_type">付款方式</label>
              <br />
              <select
                className="w-100 pub-input pr-2 hoyu-select"
                name="payment_type"
                id="payment_type"
                value={seletedPaymentType}
                onChange={(e) => {
                  setSeletedPaymentType(e.target.value)
                }}
              >
                <option value="信用卡一次付清">信用卡一次付清</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </select>
              <small></small>
              {seletedPaymentType === '信用卡一次付清' && (
                <>
                  <label htmlFor="creditCardNumber">信用卡卡號</label>
                  <br />
                  <div
                    className="w-100 d-flex jusitfy-content-between align-items-center text-center"
                    ref={pannum}
                  >
                    <input
                      className="pub-input"
                      type="text"
                      name="pan_no1"
                      size="4"
                      maxLength="4"
                      value={inputs.pan_no1}
                      onChange={onChangeForField('pan_no1')}
                      onClick={() => {
                        // setFocusSection('pannum')
                      }}
                      ref={pan1}
                    />
                    <span className="hy-w-6">-</span>
                    <input
                      className="pub-input"
                      type="text"
                      name="pan_no2"
                      size="4"
                      maxLength="4"
                      value={inputs.pan_no2}
                      onChange={onChangeForField('pan_no2')}
                      ref={pan2}
                    />
                    <span className="hy-w-6">-</span>

                    <input
                      className="pub-input"
                      type="text"
                      name="pan_no3"
                      size="4"
                      maxLength="4"
                      value={inputs.pan_no3}
                      onChange={onChangeForField('pan_no3')}
                      ref={pan3}
                    />
                    <span className="hy-w-6">-</span>

                    <input
                      className="pub-input"
                      type="text"
                      name="pan_no4"
                      size="4"
                      maxLength="4"
                      value={inputs.pan_no4}
                      onChange={onChangeForField('pan_no4')}
                      ref={pan4}
                    />

                    <small></small>
                  </div>
                  <br />
                  <label htmlFor="creditCardExpire">有效年月</label>
                  <br />
                  <select
                    className="w-25 pub-input pr-2 hoyu-select-plastic"
                    name="creditCardExpireMonth"
                    id="creditCardExpireMonth"
                    value={seletedOptionCardMonth}
                    onChange={(e) => {
                      setSeletedOptionCardMonth(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  &nbsp; 月
                  <select
                    className="w-25 pub-input pr-2 hoyu-select-plastic ml-4"
                    name="creditCardExpireYear"
                    id="creditCardExpireYear"
                    value={seletedOptionCardYear}
                    onChange={(e) => {
                      setSeletedOptionCardYear(e.target.value)
                    }}
                  >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                  &nbsp; 年
                  <br />
                  <small></small>
                  <label htmlFor="creditCardBack">背面末三碼</label>
                  <br />
                  <input
                    className="w-25 pub-input"
                    type="text"
                    name="creditCardBack"
                    id="creditCardBack"
                    size="3"
                    maxLength="3"
                    value={inputs.creditCardBack}
                    onChange={onChangeForField('creditCardBack')}
                    ref={CVC}
                  />
                  <small></small>
                  <div className="hy-scene">
                    <div
                      className={`hy-flipcard  ${isFlip ? 'is-flipped' : ''}`}
                      // className={`hy-flipcard  ${isFlip && `is-flipped`}`}
                      ref={cardFlip}
                    >
                      {/* <div
                        className={`card__focus-box ${
                          !!focusSection && `card__focus-box--active`
                        }`}
                        style={focusBoxStyle}
                      /> */}
                      <div
                        className="hy-creditCard hy-card-front card__face"
                        onClick={() => setIsFlip(!isFlip)}
                      >
                        <div className="d-flex justify-content-between">
                          <FcSimCardChip className="hy-chip" />
                          <div className="card__visa-icon">
                            <img src="https://i.imgur.com/lokBLnp.png" alt="" />
                          </div>
                        </div>

                        <div className="hy-pannum d-flex justify-content-between">
                          <span className="hy-cardpan">
                            {inputs.pan_no1 ? inputs.pan_no1 : '####'}
                          </span>
                          &nbsp;&nbsp;
                          <span className="hy-cardpan">
                            {inputs.pan_no2 ? inputs.pan_no2 : '####'}
                          </span>
                          &nbsp;&nbsp;
                          <span className="hy-cardpan">
                            {inputs.pan_no3 ? inputs.pan_no3 : '####'}
                          </span>
                          &nbsp;&nbsp;
                          <span className="hy-cardpan">
                            {inputs.pan_no4 ? inputs.pan_no4 : '####'}
                          </span>
                          &nbsp;&nbsp;
                        </div>

                        <div className="expiredate d-flex justify-content-between">
                          <div className="hy-cardName">
                            <p className="hy-valid"> Card Holder</p>
                            <span className="hy-cardpan">持卡人</span>
                          </div>
                          <div className="hy-valid">
                            <p className="hy-valid text-right"> valid thru</p>
                            <span className="hy-cardpan">
                              {seletedOptionCardMonth && seletedOptionCardYear
                                ? seletedOptionCardMonth +
                                  `/` +
                                  seletedOptionCardYear
                                : '####'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hy-creditCard hy-card-back card__face card__face--back"
                        onClick={() => setIsFlip(!isFlip)}
                      >
                        <div className="hy-card-back-bar1"></div>

                        <div className="hy-card-cvc text-right mb-1">
                          <span className="hy-cardpan ">
                            {inputs.creditCardBack
                              ? inputs.creditCardBack
                              : 'CVC'}
                          </span>
                        </div>
                        <div className="hy-card-signature mb-3"></div>
                        <div className="d-flex justify-content-end">
                          <div className="card__visa-icon">
                            <img src="https://i.imgur.com/lokBLnp.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {seletedPaymentType === 'ATM轉帳' && (
                <>
                  <p>點擊結帳後，請至會員信箱收取相關匯款訊息!</p>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default Cart1Content2
