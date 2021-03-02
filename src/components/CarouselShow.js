import Carousel from 'react-elastic-carousel'
import { Link, withRouter } from 'react-router-dom'

function CarouselShow() {
  return (
    <>
      <div className="container">
        <Carousel itemsToScroll={3} itemsToShow={3} pagination={false}>
          <div class="box">
            <div className="img-box">
              <Link to="#">
                <img
                  src="http://localhost:3000/k-images/asset 33.jpeg"
                  class="card-img-top product-img"
                  alt="cake29"
                />
              </Link>
            </div>
            <div class="card-body">
              <h5 class="card-title">微醺森林</h5>

              <div class="product-price">$ 450</div>
            </div>
          </div>
          <div className="box">
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
              <h5 class="card-title">微醺森林</h5>

              <div class="product-price">$ 450</div>
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
              <h5 class="card-title">微醺森林</h5>

              <div class="product-price">$ 450</div>
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
              <h5 class="card-title">微醺森林</h5>

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
              <h5 class="card-title">微醺森林</h5>

              <div class="product-price">$ 450</div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default withRouter(CarouselShow)
