import 'react-datepicker/dist/react-datepicker.css'
import '../../styles/font.scss'
import React, { useEffect, useState } from 'react'
import FishAside from '../../components/FishAside'
import { withRouter } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import $ from 'jquery'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
import '../../styles/fish.scss'
import Swal from 'sweetalert2'
import moment from 'moment'
registerLocale('zh-TW', zhTW)
// moment.locale('zh-tw')

function MemberEdit(props) {
  let mid = sessionStorage.getItem('mid')

  const [birthDate, setBirthDate] = useState(new Date())
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    birthday: '',
    tel: '',
    address: '',
  })
  const FetchData = async (mid) => {
    console.log('mid : ' + mid)
    const url = 'http://localhost:4000/loginverify'
    const request = new Request(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ mid }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('送出 : ' + JSON.stringify({ mid }))

    const response = await fetch(request)
    const rows = await response.json()
    console.log('伺服器回傳', rows)
    // let bir = '1970-1-1'
    setBirthDate(new Date(rows.body.birthday))
    setInputs({
      username: rows.body.username,
      email: rows.body.email,
      tel: rows.body.tel,
      birthday: rows.body.birthday,
      address: rows.body.address,
    })
  }
  useEffect(() => {
    if (sessionStorage.getItem('mid') === null) {
      props.history.push('/member/login')
    } else {
      FetchData(mid)
    }
  }, [])

  useEffect(() => {
    let selectedDate = $('#datepicker').val()
    console.log('selectedDate : ' + selectedDate)
    // console.log('selectedDate : ' + birthDate)
    setInputs((state) => ({
      ...state,
      birthday: moment(selectedDate).format(),
    }))
  }, [birthDate])

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }
  const token = sessionStorage.getItem('mid')
  const newData = { token, ...inputs }
  // console.log(newData)

  async function EditToServer() {
    // console.log('inputs.birthday' + inputs.birthday)
    // console.log(moment.utc(inputs.birthday).local().format('YYYY-MM-DD'))
    const regextel = /^\(?\d{2}\)?[\s\-]?\d{4}\-?\d{4}$/
    const regexemail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (inputs.email.match(regexemail)) {
      $('#email').next().text('')
      if (inputs.tel.match(regextel)) {
        $('#tel').next().text('')
        const url = 'http://localhost:4000/edit'
        const request = new Request(url, {
          method: 'PUT',
          body: JSON.stringify(newData),

          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(' 送出的資料', newData)
        console.log(' 回傳的資料', data)
        if (data.success === true) {
          Swal.fire({
            title: '修改成功',
            icon: 'success',
            type: '修改成功',
            text: '您的修改已被儲存.',
          })
        } else {
          Swal.fire({
            title: '修改失敗',
            icon: 'info',
            type: '修改失敗',
            text: '您未變更內容',
            className: 'swl-font',
          })
        }
      } else {
        $('#tel').next().text('手機格式錯誤')
      }
    } else {
      $('#email').next().text('請輸入正確的電子郵件格式')
    }
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
                <small></small>

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
                <small></small>

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
