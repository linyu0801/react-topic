import { React } from 'react'
import '../../styles/campaignIndex.scss'
import '../../styles/campaignProductInfo.scss'
import '../../styles/font.scss'
import { Carousel } from 'react-bootstrap'

function CampaignProductsInfo() {
    return (
        <div>
            <div className="container-fluid fixed-top">
                <nav className="navbar" />
            </div>
            <div className="wrapper-navbar" />
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">首頁</a></li>
                        <li className="breadcrumb-item"><a href="#">體驗</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <span>【戀戀草莓...</span>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="carouselRow col-xl-12 col-12">
                        <Carousel className="carouselFinn">
                            <Carousel.Item className="carousel-item-finn">
                                <img src="/img/CardBigImg.png" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item-finn">
                                <img src="/img/HeroImg.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="productInfoContent container">
                <div className="row">
                    <div className="col-xl-8 col-12">
                        <h3 className="productTitle">【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h3>
                        <div className="productReviews d-flex align-baseline">
                            <p className="stars align-self-center"><i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <i className="far fa-star" />
                            </p>
                            <p className="reviews align-self-center">
                                （ <span className="reviewsNum">20</span> ）則評價
                </p>
                            <p className="heart ml-auto"><i className="fas fa-heart" /></p>
                        </div>
                        <div className="productTimeLocation">
                            <p>
                                <span><i className="fas fa-map-marker-alt " /> 台北市 板橋區</span>
                                <span className="ml-3"><i className="far fa-clock" />
                                </span>全程3小時
                </p>
                        </div>
                        <div className="porductContent">
                            <h4 id="list-item-1">商品說明</h4>
                            <p>－ 行程特色
                  －<br /><br />・提供中、英文服務，讓你溝通無障礙<br />・可愛的冰棒及蛋糕讓您可自由DIY彩繪，同時還有美味手搖飲品可以享用，好吃又好玩！<br />・打卡還可免費得到迷你冰棒一支<br /><br /><br />－
                  行程資訊 －<br /><br />・營業時間：10:30 - 16:00（每週二 - 日營業）<br />・體驗場次：11:00 - 12:00 / 13:00 - 14:00 /
                  14:00 - 15:00<br />・店家地址：臺中市中區民族路68號<br />・如何抵達：台中火車站步行約10分鐘即可抵達<br />・行程長度：體驗至享用約 35
                  分鐘<br /><br /><br />－ 店家介紹
                  －<br /><br />每個人都有屬於自己的小惡魔。<br /><br />在這個恣意創作的奇幻空間，將生活中的壓力或不愉快，用巧克力筆自由揮灑在冰棒上，再一口吃掉，將內心的小惡魔通通釋放。在這裡，你可以用力歡笑、盡情做自己，讓你找回被歲月及社會洗鍊後，漸漸消失的童心。<br />找回最初的自己，讓玩心大發，一起釋放內心的小惡魔！<br /><br />『小惡魔雪莉貝爾彩繪冰棒蛋糕店』創立人陳汶萱為菖樺食品有限公司第三代接班人，品牌核心價值以「創意」為主，改良40餘年傳統枝仔冰加入彩繪元素及小熊外型等新世代思維，品牌名稱『小惡魔』是傳達一種獨特有自信且活潑調皮的個性，延伸到產品包裝及整體視覺，「雪莉貝爾」則是創立人英文名加上最喜歡的小熊為名。創意冰品皆嚴選自台灣在地食材及獨家專利製冰技術，突破消費者對於傳統枝仔冰印象，『小惡魔雪莉貝爾彩繪冰棒蛋糕店』要挑戰不可能的創意冰品。
                </p>
                            <h4 id="list-item-2">行程介紹</h4>
                            <h4 id="list-item-3">購買須知</h4>
                            <p className="noticed">
                                ・每人低消50元，3歲以下可免費入場</p>
                            <h4 id="list-item-4">體驗地點</h4>
                            <div className="locationContent">
                                <h5>醉糕品味 板橋店</h5>
                                <p>220新北市板橋區中山路一段160之11號</p>
                                <hr />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6617568553047!2d121.46449931474645!3d25.011606883982818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a81f3733fd9b%3A0x329a2ed272ee76d2!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5Lit5bGx6Lev5LiA5q61MTYw5LmLMTHomZ8!5e0!3m2!1szh-TW!2stw!4v1612585643413!5m2!1szh-TW!2stw" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} className="w-100" />
                            </div>
                            <h4 id="list-item-5">如何取消</h4>
                            <p>・所選日期 1 天（含）之前取消，收取手續費 0%</p>
                            <p>・所選日期 0 ~ 0 天之間取消，收取手續費 100%</p>
                            <p className="caption"> <i className="fas fa-exclamation-circle mr-2" />注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需
                  2-5
                  個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14 個工作天內退款。</p>
                        </div>
                    </div>
                    <div className="col-xl-4 d-none d-sm-block">
                        <div className="sticky-top">
                            <div className="addToCartCard ">
                                <p>價格</p>
                                <h5>$ 350</h5>
                                <p className="calendar">
                                    <i className="far fa-calendar-check" /> 2021-03-05
                  </p>
                                <button className="addToCartBtn">加入購物車</button>
                            </div>
                            <div id="list-example" className=" porductContentList list-group d-none d-sm-block">
                                <a className="porductContentListItem list-group-item list-group-item-action" href="#list-item-1">商品說明</a>
                                <a className="porductContentListItem list-group-item list-group-item-action" href="#list-item-2">行程介紹</a>
                                <a className="porductContentListItem list-group-item list-group-item-action" href="#list-item-3">購買須知</a>
                                <a className="porductContentListItem list-group-item list-group-item-action" href="#list-item-4">體驗地點</a>
                                <a className="porductContentListItem list-group-item list-group-item-action" href="#list-item-5">如何取消</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3 col-8 p-30">
                        <h3 className="more">更多推薦活動</h3>
                    </div>
                </div>
            </div>
            <div className="container d-none d-sm-block mb-5">
                <div className="row campaignCards">
                    <div className="col-lg-4 col-9">
                        <div className="campaignCard w-100">
                            <div className="cardImg w-100" />
                            <div className="cardText">
                                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                                <p className="campaignSite my-2"><i className="fas fa-map-marker-alt" /> 台北市，板橋區</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="stars"><i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p className="price">350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-9">
                        <div className="campaignCard w-100">
                            <div className="cardImg w-100" />
                            <div className="cardText">
                                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                                <p className="campaignSite my-2"><i className="fas fa-map-marker-alt" /> 台北市，板橋區</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="stars"><i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                    <p className="price">350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-9">
                        <div className="campaignCard w-100">
                            <div className="cardImg w-100" />
                            <div className="cardText">
                                <h4>【戀戀草莓季】Funsia甜點蛋糕 DIY 手作</h4>
                                <p className="campaignSite my-2"><i className="fas fa-map-marker-alt" /> 台北市，板橋區</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="stars"><i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                    <p className="price">350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-xl-none fixed-bottom">
                <div className="row">
                    <div className="col-12">
                        <div className="addToCartCardPhone ">
                            <div className="d-flex align-self-baseline">
                                <p>價格</p>
                                <h4 className="ml-2">350</h4>
                                <p className="calendar ml-auto">
                                    <i className="far fa-calendar-check" /> 2021-03-05
                  </p>
                            </div>
                        </div>
                        <button className="addToCartBtn">加入購物車</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer" />
            </div>
            <div className="wrapper-footer">
            </div>
        </div >
    );
}

export default CampaignProductsInfo