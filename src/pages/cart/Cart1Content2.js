import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'
function Cart1Content2(props) {
  const {
    cartTotal,
    setForm1,
    inputs,
    onChangeForField,
    seletedOption,
    setSeletedOption,
    seletedOptionCardMonth,
    setSeletedOptionCardMonth,
    seletedOptionCardYear,
    setSeletedOptionCardYear,
  } = props

  useEffect(() => {
    $('#sameAsAccount').on('click', () => {
      let sameAsAccount = $('#sameAsAccount').prop('checked')
      console.log(sameAsAccount)
      if (sameAsAccount === true) {
        $('#receiver').val($('#username').val())
        $('#receiverMobile').val($('#tel').val())
      }
      if (sameAsAccount === false) {
        $('#receiver').val('')
        $('#receiverMobile').val('')
      }
    })
  }, [])

  // useEffect(() => {
  //   console.log(inputs)
  // }, [inputs])

  useEffect(() => {
    setForm1(inputs)
  }, [inputs])

  function setBlur(obj, target2) {
    // console.log(obj.value)
    // var target = document.getElementById(target2)
    // if (obj.value.length === obj.getAttribute('maxLength')) {
    //   target.focus()
    // }
    // return
  }

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
              />
              <br />
              <small></small>
              <input type="checkbox" name="sameAsAccount" id="sameAsAccount" />
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
              />
              <small>請輸入正確的手機格式</small>
              <label htmlFor="address">收件地址</label>
              <br />
              <input
                className="w-100 pub-input"
                type="text"
                name="address"
                id="address"
                value={inputs.address}
                onChange={onChangeForField('address')}
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
              >
                <option value="信用卡一次付清">信用卡一次付清</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </select>
              <small></small>
              <label htmlFor="creditCardNumber">信用卡卡號</label>
              <br />
              <div className="w-100 d-flex jusitfy-content-between align-items-center text-center">
                <input
                  className="pub-input"
                  type="text"
                  name="pan_no1"
                  size="4"
                  maxLength="4"
                  // onKeyUp="setBlur(this,'pan_no2');"
                  value={inputs.pan_no1}
                  onChange={onChangeForField('pan_no1')}
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
                value={inputs.creditCardBack}
                onChange={onChangeForField('creditCardBack')}
              />
              <small></small>
            </form>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default Cart1Content2
