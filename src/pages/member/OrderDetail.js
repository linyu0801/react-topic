import Cart1Content1 from '../cart/Cart1Content1'
import Cart1Content3 from '../cart/Cart1Content3'
import { withRouter } from 'react-router-dom'
import '../../styles/fish.scss'

function OrderDetail(props) {
  return (
    <>
      <div className="container">
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
              訂單資訊 <span className="clspan">{'>'}</span>
            </a>
            <a className="clbread" href="*">
              {' '}
              歷史訂單
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            {' '}
            <h2>訂單明細</h2>
          </div>
        </div>
        <Cart1Content1 />
        <Cart1Content3 />
        <div className="row">
          <button
            type="button"
            className="order-button pub-mb-100 mx-auto"
            onClick={() => {
              props.history.push('/')
            }}
          >
            儲存修改
          </button>
        </div>
      </div>
    </>
  )
}
export default withRouter(OrderDetail)
