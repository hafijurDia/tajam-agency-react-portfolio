import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

export default function ScrollBottom() {
  return (
    <img
      className='scrollTopIcon'
      onClick={() => scroll.scrollToTop()}
      src='img/scroll.png'
    />
  )
}
