import '../../styles/MainProductDetail.scss'
import '../../styles/font.scss'
import { MdRemove } from 'react-icons/md'
import { useState, Link } from 'react'
import { MdAdd } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import ProductAccordion from '../../components/ProductAccordion'

function MainProductDetailTest2(props) {
  const { inputs } = props
  const [cartQuantity, setCartQuantity] = useState(1)
  const addToCart = async (id, quantity) => {
    try {
      const response = await fetch('http://localhost:4000/AddToCart1', {
        method: 'POST',
        body: JSON.stringify({
          p_sid: id,
          quantity: quantity,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      let data = await response.json()
      alert('Item Added To Cart')
      console.log(data)
    } catch (err) {
      alert('Something Went Wrong')
      console.log(err)
    }
  }
  return (
    <>
      <div className="content container">
        <div className="row k-mp-upper">
          <div className="col breadcrumbs">
            <Link className="clbread" to="*">
              首頁{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="*">
              商品{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="*">
              全部商品{'  '}
              <span className="clspan">{'>'}</span>
            </Link>
            <Link className="clbread" to="*">
              烈酒風味
            </Link>
          </div>
        </div>

        <div className="row k-mp-lower">
          <div className="col-lg-6 k-left-col">{/* <ProductCarousel /> */}</div>

          <div className="col-lg-6 right-col">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="k-product-name">微醺森林</h3>
              <Link to="*" className="a-right-style">
                <i className="k-collection far fa-heart">
                  <MdFavoriteBorder />
                </i>
              </Link>
            </div>

            <h4 className="k-mp-product-price">$ 450</h4>

            <div className="row shopping-zone">
              <div className="col-lg-6">
                <div className="k-counter my-3">
                  <i className="fas fa-minus k-left-icon">
                    <MdRemove
                      onClick={() => {
                        setCartQuantity(cartQuantity - 1)
                      }}
                    />
                  </i>
                  <span className="k-number">{cartQuantity}</span>
                  <i className="fas fa-plus k-right-icon">
                    <MdAdd
                      onClick={() => {
                        setCartQuantity(cartQuantity + 1)
                      }}
                    />
                  </i>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <button
                  className="k-style-addToCartBtn addToCartBtn"
                  onClick={() => {
                    addToCart(3, cartQuantity)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>

            <h5 className="product-description-text">
              以德式黑森林蛋糕為基礎，加入蘭姆酒烘托出成熟的味道，搭配濕潤的蛋糕體有如親臨森林中富帶水氣的土壤，你的嗅覺會否和小白兔一起迷失在黑櫻桃的酒香中呢？
            </h5>
          </div>
        </div>
        <div className="accordion">
          <ProductAccordion />
        </div>
      </div>
      <div className="more-info">
        <h4 className="more container">更多蛋糕</h4>
      </div>
      {/* <div id="footer" className="temp-footer"></div> */}
    </>
  )
}

export default MainProductDetailTest2
