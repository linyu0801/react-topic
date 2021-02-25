import React, { useEffect } from 'react'
import $ from 'jquery'

function Height(params) {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1) {
        $('.nav-height').addClass('h-90  ')
      } else {
        $('.nav-height').removeClass('h-90 ')
      }
    })
  }, [])
  return (
    <>
      <div className="nav-height"></div>
    </>
  )
}
export default Height
