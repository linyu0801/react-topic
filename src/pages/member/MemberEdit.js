import 'react-datepicker/dist/react-datepicker.css'
import '../../styles/fish.scss'
import '../../styles/font.scss'
import React, { useEffect, useState } from 'react'
import FishAside from '../../components/FishAside'
import { Link, withRouter } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import $ from 'jquery'
import moment from 'moment'
import { registerLocale, setDefaultLocale } from 'react-datepicker'

import { zhTW } from 'date-fns/esm/locale'
registerLocale('zh-TW', zhTW)
function MemberEdit(props) {
  const [birthDate, setBirthDate] = useState(new Date())
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    birthday: '',
    tel: '',
    address: '',
  })

  useEffect(() => {
    const FetchData = async () => {
      const url = 'http://localhost:4000/loginverify'
      const request = new Request(url, {
        method: 'GET',
        credentials: 'include',
      })
      const response = await fetch(request)
      const rows = await response.json()
      console.log('伺服器回傳', rows)
      setBirthDate(new Date(rows.body.birthday))
      setInputs({
        username: rows.body.username,
        email: rows.body.email,
        tel: rows.body.tel,
        birthday: rows.body.birthday,
        address: rows.body.address,
      })
    }
    if (sessionStorage.getItem('mid') === null) {
      props.history.push('/member/login')
    }

    FetchData()
  }, [])

  useEffect(() => {
    let selectedDate = $('#datepicker').val()
    console.log('selectedDate : ' + selectedDate)
    setInputs((state) => ({ ...state, birthday: selectedDate }))
  }, [birthDate])

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }
  const newData = { birthDate, ...inputs }
  console.log(newData)

  async function EditToServer() {
    // const editform = new FormData(document.editform)

    const url = 'http://localhost:4000/edit'
    const request = new Request(url, {
      method: 'PUT',
      // body: editform,
      body: JSON.stringify(newData),

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(' 回傳的資料', data)
  }

  return (
    <>
      <div className="container h-100 fish-mt-50">
        <div className="row">
          <div className="col-12 bread-div">
            <a className="clbread" href="*">
              首頁 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              會員中心 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              個人資訊 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              編輯個人資訊
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-9">
            <h2 className="fish-topic">
              <i className="fas fa-user-edit"> </i> 編輯個人資訊
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <FishAside />
          <div className="col-9">
            <div className="w-100 d-flex justify-content-center">
              <form
                action=""
                className="pub-form col-xl-7 col-lg-8 col-md-10 col-sm-12"
                name="editform"
              >
                <label htmlFor="username ">使用者名稱</label>
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

                <label htmlFor="email">電子郵件</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="email"
                  id="email"
                  value={inputs.email}
                  onChange={onChangeForField('email')}
                />
                <small>請輸入正確的電子郵件格式</small>

                <label htmlFor="birthday">生日</label>
                <br />
                <DatePicker
                  className="pub-input w-100"
                  id="datepicker"
                  selected={birthDate}
                  dateFormat="yyyy-MM-dd"
                  locale="zh-TW"
                  showYearDropdown
                  onChange={(date) => setBirthDate(date)}
                />

                <input
                  className="w-100 pub-input d-none"
                  type="text"
                  name="birthday"
                  id="birthday"
                  value={inputs.birthday}
                  onChange={onChangeForField('birthday')}
                />
                <br />
                <small></small>

                <label htmlFor="tel">手機</label>
                <br />
                <input
                  className="w-100 pub-input"
                  type="text"
                  name="tel"
                  id="tel"
                  value={inputs.tel}
                  onChange={onChangeForField('tel')}
                />
                <small>請輸入正確的手機格式</small>

                <label htmlFor="address">地址</label>
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

                <button
                  type="button"
                  className="pub-button pub-mb-100 mx-auto"
                  onClick={() => {
                    EditToServer()
                  }}
                >
                  儲存修改
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bgup-img"></div>
        <div className="bgdown-img"></div>
      </div>
    </>
  )
}

export default withRouter(MemberEdit)
