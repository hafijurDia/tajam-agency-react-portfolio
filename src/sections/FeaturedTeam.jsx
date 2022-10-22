import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import Slider from 'react-slick'

const PrevArrow = (props) => {
  const { onClick } = props

  return (
    <i className={`fas fa-chevron-left team-arrow-left`} onClick={onClick}></i>
  )
}

const NextArrow = (props) => {
  const { onClick } = props

  return (
    <i
      className={`fas fa-chevron-right team-arrow-right`}
      onClick={onClick}
    ></i>
  )
}

export default function FeaturedTeam() {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  return (
    <Fade duration={1000}>
      <section name='team-two' id='team-two'>
        <div className='container'>
          <div className='row text-slider'>
            <Slider
              asNavFor={nav2}
              {...settings}
              ref={(slider1) => setNav1(slider1)}
            >
              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>JANE GALADRIEL</h4>
                  <h5>CEO TENGKUREP</h5>
                </div>
              </div>

              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>Ezekiel</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>

              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>Gideon</h4>
                  <h5>UX/UI Designer</h5>
                </div>
              </div>

              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>Reuben</h4>
                  <h5>Javascript Developer</h5>
                </div>
              </div>

              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>Frederick</h4>
                  <h5>Marketing Officer</h5>
                </div>
              </div>

              <div className='col-lg-10 m-auto'>
                <div className='team-slider-text text-center'>
                  <i className='fas fa-quote-left'></i>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <h4>Frederick</h4>
                  <h5>Marketing Officer</h5>
                </div>
              </div>
            </Slider>
          </div>

          <div className='row slider-img'>
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
              centerMode={true}
              centerPadding='0px'
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man1.jpg' alt='image not found' />
                </div>
              </div>
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man02.jpg' alt='image not found' />
                </div>
              </div>
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man3.jpg' alt='image not found' />
                </div>
              </div>
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man4.jpg' alt='image not found' />
                </div>
              </div>
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man5.jpg' alt='image not found' />
                </div>
              </div>
              <div className='col-lg-2'>
                <div className='team-slider-img'>
                  <img src='img/man6.jpg' alt='image not found' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Fade>
  )
}