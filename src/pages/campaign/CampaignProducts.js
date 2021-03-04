import { React, useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../../styles/campaignIndex.scss'
import '../../styles/campaignProducts.scss'
import '../../styles/font.scss'
import { Dropdown, Spinner, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faStar,
  faStarHalfAlt,
  faHeart,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons'

import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

function CampaignProducts(props) {
  const [productData, setProductData] = useState([])
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [cateProductData, setCateProductData] = useState([])
  const [allProductData, setAllProductData] = useState([])
  const [productDataDisplay, setProductDataDisplay] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //分類按鈕Active
  const [buttonActiveObj, setButtonActiveObj] = useState({
    categoryBtn1: false,
    categoryBtn2: false,
    categoryBtn3: false,
    categoryBtn4: true,
  })

  //排序按鈕Active
  const [sortButtonActiveObj, setSortButtonActiveObj] = useState({
    sortBtn1: false,
    sortBtn2: false,
    sortBtn3: false,
    sortBtn4: false,
    sortBtn5: false,
  })
  const [priceRangeMin, setPriceRangeMin] = useState('')
  const [priceRangeMax, setPriceRangeMax] = useState('')

  const { searchCampaign } = props
  const { categoryActiveObj } = props

  useEffect(() => {
    async function fetchdata() {
      var formBody = new FormData()
      formBody.set('searchCampaign', searchCampaign)
      const url = 'http://localhost:4000/search'
      const request = new Request(url, {
        method: 'POST',
        body: formBody,
      })
      const response = await fetch(request)
      const rows = await response.json()
      setSearchText(searchCampaign)
      setCateProductData(rows)
      setProductDataDisplay(rows)
      setAllProductData(rows)
      console.log('回傳的資料', rows)
    }
    fetchdata()
  }, [])

  useEffect(() => {
    async function fetchdata() {
      const url = 'http://localhost:4000/campaignSearch'
      const request = new Request(url, {
        method: 'GET',
      })
      const response = await fetch(request)
      const rows = await response.json()
      setProductData(rows)
    }
    fetchdata()
  }, [])

  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setProductDataDisplay(productData)

    // 1秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    function enterCategory() {
      setButtonActiveObj(categoryActiveObj)
    }
    enterCategory()
    if (categoryActiveObj.categoryBtn1 === true) {
      doCategoryTaste()
    }
    if (categoryActiveObj.categoryBtn2 === true) {
      doCategoryHandmade()
    }
    if (categoryActiveObj.categoryBtn3 === true) {
      doCategoryWorkshop()
    }
  }, [productData, categoryActiveObj])

  useEffect(() => {
    let curs = document.querySelector('.cursorFinn')

    document.addEventListener('mousemove', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      curs.style.top = y - 22 + 'px'
      // console.log('123')
    })

    document.addEventListener('mouseleave', (e) => {
      let x = e.pageX
      let y = e.pageY
      curs.style.left = x - 22 + 'px'
      // curs.style.opacity = 0.5
      curs.style.top = y - 22 + 'px'
    })
  }, [])

  function doSearch() {
    const newProductData = productData.filter((v, i) => {
      return v.title.includes(search)
    })
    setSearchText(search)
    setAllProductData(newProductData)
    setCateProductData(newProductData)
    setProductDataDisplay(newProductData)
  }

  function doAllCategory() {
    setCateProductData(allProductData)
    setProductDataDisplay(allProductData)
  }
  function doCategoryTaste() {
    const newProductData = allProductData.filter((v, i) => {
      return v.category.includes('taste')
    })
    setCateProductData(newProductData)
    setProductDataDisplay(newProductData)
  }

  function doCategoryHandmade() {
    const newProductData = allProductData.filter((v, i) => {
      return v.category.includes('handmade')
    })
    setCateProductData(newProductData)
    setProductDataDisplay(newProductData)
  }

  function doCategoryWorkshop() {
    const newProductData = allProductData.filter((v, i) => {
      return v.category.includes('workshop')
    })
    setCateProductData(newProductData)
    setProductDataDisplay(newProductData)
  }

  function doPriceRange() {
    const newProductData = allProductData.filter((v, i) => {
      if (priceRangeMax === '') {
        return v.price >= priceRangeMin || v.price <= priceRangeMax
      } else {
        return v.price >= priceRangeMin && v.price <= priceRangeMax
      }
    })
    setProductDataDisplay(newProductData)
  }

  function doPriceSort() {
    const newProductData = cateProductData.sort(function (a, b) {
      return a.price > b.price ? 1 : -1
    })
    setProductDataDisplay([...newProductData])
  }

  function doRateSort() {
    const newProductData = cateProductData.sort(function (a, b) {
      return a.rating < b.rating ? 1 : -1
    })
    setProductDataDisplay([...newProductData])
  }

  function doHotSort() {
    const newProductData = cateProductData.filter((v, i) => {
      return v.hot === 1
    })
    setProductDataDisplay(newProductData)
  }

  function doSeasonSort() {
    const newProductData = cateProductData.filter((v, i) => {
      return v.season === 1
    })
    setProductDataDisplay(newProductData)
  }

  function doDateSort() {
    const newProductData = cateProductData.sort(function (a, b) {
      return a.date > b.date ? 1 : -1
    })
    setProductDataDisplay(newProductData)
  }

  const spinner = (
    <>
      <Spinner animation="border" variant="warning" />
    </>
  )

  const displayProductCards = (
    <>
      {productDataDisplay.map((v, i) => (
        <Link
          to={`/campaign/products/` + v.sid}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <div className="campaignCardBig w-100 d-flex " key={i}>
            <div className="cardBigImgBox">
              <img
                className="cardBigImg"
                src={`/img/` + v.campaignCover}
                alt="campaignImg"
              />
            </div>
            <div className="cardBigText position-relative">
              <div className="heart position-absolute">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="d-flex">
                {v.hot ? <div className="cardBigTag1">熱門活動</div> : ''}
                {v.season ? (
                  <div className="cardBigTag2">季節主打</div>
                ) : (
                  <div className="cardBigTag"></div>
                )}
              </div>
              <div className="cardBigTitle">
                <h5>{v.title}</h5>
              </div>
              <div className="cardBigContent">
                <p>{v.content}</p>
                <p className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  &ensp;{v.district}
                </p>
                <p className="calendar">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  &ensp;{v.date.slice(0, 10)}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <p className="starsFinn mb-0">
                    {v.rating === 5 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </>
                    ) : (
                      ''
                    )}
                    {v.rating > 4 && v.rating < 5 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                      </>
                    ) : (
                      ''
                    )}

                    {v.rating === 4 ? (
                      <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={far.faStar} />
                      </>
                    ) : (
                      ''
                    )}

                    <span>{v.rating}</span>
                  </p>
                  <p className="price mb-0">{v.price}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )

  return (
    <>
      <div class="cursorFinn d-none d-sm-block"></div>
      <div className="container breadcrumbFinn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="*">首頁</a>
            </li>
            <li className="breadcrumb-item">
              <a href="*">體驗</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span>{searchText}</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container searchResultText d-none d-sm-block">
        <div className="row">
          <div className="col-lg-7">
            <h3>
              搜尋結果
              <span className="searchResult">{searchText}</span>
            </h3>
            <p>
              有 
              <span className="countResult">{productDataDisplay.length}</span>
               項體驗
            </p>
          </div>
          <Col lg={5}>
            <div
              className="searchBar w-100 d-flex
           justify-content-center "
            >
              <input
                type="text"
                name="campaignSearch"
                id="campaignSearch"
                placeholder={
                  searchText ? searchText : '立即搜尋你喜歡的活動...'
                }
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                }}
                style={{ border: '1px solid #cdaa8a' }}
              />
              <button
                className="searchBtn"
                type="submit"
                onClick={() => {
                  doSearch()
                }}
              >
                <i className="fas fa-search" />
                <FontAwesomeIcon icon={fas.faSearch} />
                &ensp;搜尋
              </button>
            </div>
          </Col>
        </div>
      </div>
      <div className="container d-xl-none ">
        <div className="row h-100">
          <div className="col-12">
            <div
              className="searchBar w-100 d-flex
         justify-content-center "
            >
              <input
                type="text"
                name="campaignSearch"
                id="campaignSearch"
                placeholder="手作"
              />
              <button className="searchBtn" type="submit">
                <i className="fas fa-search" /> 搜尋
              </button>
            </div>
            <p>
              有 
              <span className="countResult">{productDataDisplay.length}</span>
               項體驗
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Col lg={3} className="col-xl-3 col-12 ">
            <div className="categoryGroup d-none d-sm-block ">
              <button
                className={`categoryBtn w-100 categoryBtn1
            ${buttonActiveObj.categoryBtn4 ? 'active' : ''}`}
                onClick={() => {
                  doAllCategory()
                  setButtonActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: false,
                    categoryBtn3: false,
                    categoryBtn4: true,
                  })
                }}
              >
                所有商品
              </button>
              <button
                className={`categoryBtn w-100 categoryBtn1
            ${buttonActiveObj.categoryBtn1 ? 'active' : ''}`}
                onClick={() => {
                  doCategoryTaste()
                  setButtonActiveObj({
                    categoryBtn1: true,
                    categoryBtn2: false,
                    categoryBtn3: false,
                    categoryBtn4: false,
                  })
                }}
              >
                品味鑑賞
              </button>
              <button
                className={`categoryBtn w-100 categoryBtn2
            ${buttonActiveObj.categoryBtn2 ? 'active' : ''}`}
                onClick={() => {
                  doCategoryHandmade()
                  setButtonActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: true,
                    categoryBtn3: false,
                    categoryBtn4: false,
                  })
                }}
              >
                手作體驗
              </button>
              <button
                className={`categoryBtn w-100 categoryBtn3
            ${buttonActiveObj.categoryBtn3 ? 'active' : ''}`}
                onClick={() => {
                  doCategoryWorkshop()
                  setButtonActiveObj({
                    categoryBtn1: false,
                    categoryBtn2: false,
                    categoryBtn3: true,
                    categoryBtn4: false,
                  })
                }}
              >
                職人講座
              </button>
            </div>
            <div className="categoryGroup d-xl-none w-100">
              <div className="categoryHead">
                <h5 className="categoryTitle">所有商品分類</h5>
              </div>
              <div className="categoryBtns d-flex justify-content-center">
                <div className="categoryBtn ">甜點品嚐</div>
                <div className="categoryBtn ">手作體驗</div>
                <div className="categoryBtn  active">職人講座</div>
              </div>
            </div>
            <div className="categoryRange accordion mb-5" id="accordionExample">
              <button
                className="btn btn-link categoryHeading"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <label htmlFor="priceRangeMin">
                  <h5>價格篩選</h5>
                </label>
              </button>
              <div
                id="collapseOne"
                className="collapse show collapseFinn"
                aria-labelledby="categoryHeading"
                data-parent="#accordionExample"
              >
                <div className="w-100 d-flex justify-content-between">
                  <input
                    type="number"
                    id="priceRangeMin"
                    name="priceRangeMin"
                    placeholder="$"
                    min="0"
                    onChange={(event) => {
                      setPriceRangeMin(event.target.value)
                    }}
                  />
                  <p className="before" />
                  <input
                    type="number"
                    id="priceRangeMax"
                    name="priceRangeMax"
                    placeholder="$"
                    min="0"
                    onChange={(event) => {
                      setPriceRangeMax(event.target.value)
                    }}
                    required="required"
                  />
                </div>
                <button
                  className="rangeBtnFinn"
                  type="submit"
                  onClick={() => {
                    doPriceRange()
                  }}
                >
                  篩選
                </button>
              </div>
            </div>
          </Col>

          <div className="campaignCardBigPhone col-12 d-xl-none">
            <Dropdown className="sortBarPhone d-flex justify-content-end">
              <Dropdown.Toggle className="sortBarPhoneBtn btn ">
                <span>商品排序</span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="sortBarPhoneMenu dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <Dropdown.Item
                  className="sortBarPhoneItem dropdown-item active"
                  href="*"
                >
                  季節主打
                </Dropdown.Item>
                <Dropdown.Item
                  className="sortBarPhoneItem dropdown-item"
                  href="*"
                >
                  熱門活動
                </Dropdown.Item>
                <Dropdown.Item
                  className="sortBarPhoneItem dropdown-item"
                  href="*"
                >
                  評價最高
                </Dropdown.Item>
                <Dropdown.Item className="sortBarPhoneItem dropdown-item"></Dropdown.Item>
                <Dropdown.Item
                  className="sortBarPhoneItem dropdown-item"
                  href="*"
                >
                  活動時間：最近
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="campaignCardBig w-100 d-xl-none">
              <div className="cardBigImg w-100 position-relative">
                <div className="heart position-absolute">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                </div>
              </div>
              <div className="cardBigText w-100 ">
                <div className="cardBigTag">季節限定</div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    &ensp;台北市，板橋區
                  </p>
                  <p className="calendar">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    &ensp; 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                      <FontAwesomeIcon icon={far.faStar} />
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaignCardBig w-100 d-xl-none">
              <div className="cardBigImg w-100 position-relative">
                <div className="heart position-absolute">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="cardBigText w-100 ">
                <div className="cardBigTag">季節限定</div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    &ensp;台北市，板橋區
                  </p>
                  <p className="calendar">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    &ensp; 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                      <FontAwesomeIcon icon={far.faStar} />
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaignCardBig w-100 d-xl-none">
              <div className="cardBigImg w-100 position-relative">
                <div className="heart position-absolute">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="cardBigText w-100 ">
                <div className="cardBigTag">季節限定</div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    &ensp;台北市，板橋區
                  </p>
                  <p className="calendar">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    &ensp; 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                      <FontAwesomeIcon icon={far.faStar} />
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaignCardBig w-100 d-xl-none">
              <div className="cardBigImg w-100 position-relative">
                <div className="heart position-absolute">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="cardBigText w-100 ">
                <div className="cardBigTag">季節限定</div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    &ensp;台北市，板橋區
                  </p>
                  <p className="calendar">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    &ensp; 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                      <i className="farfa-star" />
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaignCardBig w-100 d-xl-none">
              <div className="cardBigImg w-100 position-relative">
                <div className="heart position-absolute">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="cardBigText w-100 ">
                <div className="cardBigTag">季節限定</div>
                <div className="cardBigTitle">
                  <h5>【戀戀草莓季】Funsiamo 甜點蛋糕 DIY 手作</h5>
                </div>
                <div className="cardBigContent">
                  <p>
                    無經驗新手也能輕鬆做出甜點！Funsiamo 玩美烘焙體驗，透過 iPad
                    數位教學，搭配現場服務人員的親切協助，每個走進店裡的人都能帶走精美
                  </p>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    &ensp;台北市，板橋區
                  </p>
                  <p className="calendar">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    &ensp; 2021-03-05
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="stars mb-0">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                      <FontAwesomeIcon icon={far.faStar} />
                    </p>
                    <p className="price mb-0">350</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="campaignCardBigPC col-xl-9 col-12 d-none d-sm-block ">
            <div className="sortBar ">
              <ol className="sort">
                <li className="sortItem">
                  <h5>排序：</h5>
                </li>
                <li
                  className={`sortItem
            ${sortButtonActiveObj.sortBtn1 ? 'active' : ''}`}
                  onClick={() => {
                    doSeasonSort()
                    setSortButtonActiveObj({
                      sortBtn1: true,
                      sortBtn2: false,
                      sortBtn3: false,
                      sortBtn4: false,
                      sortBtn5: false,
                    })
                  }}
                >
                  季節主打
                </li>
                <li
                  className={`sortItem
            ${sortButtonActiveObj.sortBtn2 ? 'active' : ''}`}
                  onClick={() => {
                    doHotSort()
                    setSortButtonActiveObj({
                      sortBtn1: false,
                      sortBtn2: true,
                      sortBtn3: false,
                      sortBtn4: false,
                      sortBtn5: false,
                    })
                  }}
                >
                  熱門活動
                </li>
                <li
                  className={`sortItem
            ${sortButtonActiveObj.sortBtn3 ? 'active' : ''}`}
                  onClick={() => {
                    doRateSort()
                    setSortButtonActiveObj({
                      sortBtn1: false,
                      sortBtn2: false,
                      sortBtn3: true,
                      sortBtn4: false,
                      sortBtn5: false,
                    })
                  }}
                >
                  評價最高
                </li>
                <li
                  className={`sortItem
            ${sortButtonActiveObj.sortBtn4 ? 'active' : ''}`}
                  onClick={() => {
                    doPriceSort()
                    setSortButtonActiveObj({
                      sortBtn1: false,
                      sortBtn2: false,
                      sortBtn3: false,
                      sortBtn4: true,
                      sortBtn5: false,
                    })
                  }}
                >
                  價格：低到高
                </li>
                <li
                  className={`sortItem
            ${sortButtonActiveObj.sortBtn5 ? 'active' : ''}`}
                  onClick={() => {
                    doDateSort()
                    setSortButtonActiveObj({
                      sortBtn1: false,
                      sortBtn2: false,
                      sortBtn3: false,
                      sortBtn4: false,
                      sortBtn5: true,
                    })
                  }}
                >
                  活動時間：最近
                </li>
              </ol>
            </div>
            <div className="displayPCardsBox w-100 ">
              {isLoading ? spinner : displayProductCards}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CampaignProducts)
