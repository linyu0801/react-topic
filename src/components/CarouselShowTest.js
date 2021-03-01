// import React, { useState, useEffect } from 'react'
// import Carousel from 'react-grid-carousel'
// import { Link } from 'react-router-dom'

// function CarouselShowTest(props) {
//   //   const [data, setData] = useState([])

//   //   useEffect(() => {
//   //     async function fetchdata() {
//   //       const url = 'http://localhost:4000/mainproductcate'
//   //       const request = new Request(url, {
//   //         method: 'GET',
//   //       })
//   //       const response = await fetch(request)
//   //       const rows = await response.json()

//   //       setData(rows)
//   //       console.log('測看看', rows)
//   //     }
//   //     fetchdata()
//   //   }, [])
//   return (
//     <>
//       <Carousel cols={3} rows={1} gap={30} loop>
//         {data.map((v, i) => (
//           <Carousel.Item>
//             <Link
//               to={`/campaign/products/` + v.sid}
//               style={{ textDecoration: 'none' }}
//             >
//               <div className="campaignCard w-100">
//                 <img
//                   className="cardImg w-100"
//                   src={`/img/` + v.campaignCover}
//                   alt="campaignImg"
//                 />
//                 <div className="cardText">
//                   <h4 className="cardTitle">{v.title}</h4>
//                   <p className="campaignSite my-2">
//                     <FontAwesomeIcon icon={fas.faMapMarkerAlt} />
//                     &ensp;{v.district}
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <p className="starsFinn" style={{ marginBottom: '0px' }}>
//                       {v.rating === 5 ? (
//                         <>
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                         </>
//                       ) : (
//                         ''
//                       )}
//                       {v.rating > 4 && v.rating < 5 ? (
//                         <>
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStarHalfAlt} />
//                         </>
//                       ) : (
//                         ''
//                       )}

//                       {v.rating === 4 ? (
//                         <>
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={faStar} />
//                           <FontAwesomeIcon icon={far.faStar} />
//                         </>
//                       ) : (
//                         ''
//                       )}
//                       <span>{v.rating}</span>
//                     </p>
//                     <p className="price">{v.price}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </>
//   )
// }

// export default CarouselShowTest
