import React, { useEffect } from 'react'
import Venobox from 'venobox'
import { Fade } from 'react-reveal'

export default function Promo() {
  useEffect(() => {
    new Venobox({
      autoPlay: false,
      spinner: 'wave',
    })
  }, [])
  return (
    <Fade left duration={1500}>
      <section name='video-part' id='video-part'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 m-auto'>
              <div className='video-icon text-center'>
                <a
                  className='venobox'
                  data-vbtype='video'
                  href='https://youtu.be/9KqUlIY2Aew'
                >
                  <i className='fab fa-youtube video-i'></i>
                </a>

                <h3>WATCH OUR STORY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}