import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'

function pagination() {
  return (
    <>
      {/* 基本上就複製下面9-59行，中間頁數可以寫死，也可以用你自己迴圈產生的資料去判斷 */}
      <nav aria-label="Page navigation example" className="hoyu-mt">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link
              className="page-link hoyu-page-link hoyu-page-arrow"
              to="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <MdKeyboardArrowLeft />
              </span>
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link hoyu-page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link hoyu-page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link hoyu-page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link hoyu-page-link" to="#">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link hoyu-page-link" to="#">
              5
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link hoyu-page-link hoyu-page-arrow"
              to="#"
              aria-label="Next"
            >
              <span aria-hidden="true">
                <MdKeyboardArrowRight />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default pagination
