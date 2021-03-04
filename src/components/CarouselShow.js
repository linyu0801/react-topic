import Carousel from 'react-elastic-carousel'
import { Link, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CarouselShow() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const FetchData = async () => {
      const url = 'http://localhost:4000/mainproductcate' //讀取寫在node中的app.get('/mainproduct')
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({ productCate: 1 }), //設定一進來畫面為全部商品的畫面
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const rows = await response.json() //這邊的rows會得到所有資料庫中的資料
      console.log('伺服器回傳看看', rows) //先在這邊console.log出rows得到的資料

      setProduct(rows) //rows的東西會傳到product中，用setXXX的方式啟動整個畫面的更新
    }

    FetchData()
  }, [])
  return (
    <>
      <div className="container">
        <Carousel itemsToShow={3} pagination={false} showEmptySlots>
          {/* 原本沒有showEmptySlots時會出現破圖無法輪播，猜測原因是50/3除不盡，故加上showEmptySlots後就解決了 */}
          {product.map((v, i) => (
            <div className="box" key={i}>
              <div className="img-box">
                <Link to={`/mainproductdetail/products/` + v.p_sid}>
                  <img
                    src={`http://localhost:3000/k-images/${v.p_img}`}
                    class="card-img-top product-img"
                    alt="cake29"
                  />
                </Link>
              </div>
              <div class="card-body">
                <h5 class="card-title">{v.p_name}</h5>

                <div class="product-price">$ {v.p_price}</div>
              </div>
            </div>
          ))}
          {/* <div className="box">
            <div class="img-box">
              <Link to="#">
                <img
                  src="http://localhost:3000/k-images/8.jpeg"
                  class="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>
            <div class="card-body">
              <h5 class="card-title">森聲</h5>

              <div class="product-price">$ 650</div>
            </div>
          </div>
          <div className="box">
            <div class="img-box">
              <Link to="#">
                <img
                  src="http://localhost:3000/k-images/10.jpeg"
                  class="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>
            <div class="card-body">
              <h5 class="card-title">莓好願景</h5>

              <div class="product-price">$ 650</div>
            </div>
          </div>
          <div className="box">
            <div class="img-box">
              <Link to="#">
                <img
                  src="http://localhost:3000/k-images/11.jpeg"
                  class="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>
            <div class="card-body">
              <h5 class="card-title">微光</h5>

              <div class="product-price">$ 450</div>
            </div>
          </div>
          <div className="box">
            <div class="img-box">
              <Link to="#">
                <img
                  src="http://localhost:3000/k-images/12.jpeg"
                  class="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>
            <div class="card-body">
              <h5 class="card-title">月牙</h5>

              <div class="product-price">$ 650</div>
            </div>
          </div> */}
        </Carousel>
      </div>
    </>
  )
}

export default withRouter(CarouselShow)

//carousel：showEmptySlots https://sag1v.github.io/react-elastic-carousel/showEmptySlots
