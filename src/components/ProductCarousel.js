import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'

function ProductCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3000/k-images/1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3000/k-images/1-1.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3000/k-images/1-2.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ProductCarousel
