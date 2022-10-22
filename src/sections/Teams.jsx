import React from 'react'
import { Fade } from 'react-reveal'
import Slider from 'react-slick'

export default function Teams() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Fade duration={1000}>
      <section name='team' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='team-top-text'>
                <h3>MEET OUR AMAZING TEAM</h3>
                <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
              </div>
            </div>
          </div>

          <div className='row team-slider'>
            <Slider {...settings}>
              <div className='col-lg-3'>
                <div className='team-member'>
                  <div className='card team-card'>
                    <img
                      src='img/man1.jpg'
                      className='card-img-top'
                      alt='man image'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>SEMF UCUK</h5>
                      <p className='card-text'>CEO & FOUNDER</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='team-member'>
                  <div className='card team-card'>
                    <img
                      src='img/man02.jpg'
                      className='card-img-top'
                      alt='man image'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>DIK ADALIN</h5>
                      <p className='card-text'>ENGINEERING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='team-member'>
                  <div className='card team-card'>
                    <img
                      src='img/man3.jpg'
                      className='card-img-top'
                      alt='man image'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>JENG KOL</h5>
                      <p className='card-text'>DESIGNER</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='team-member'>
                  <div className='card team-card'>
                    <img
                      src='img/man4.jpg'
                      className='card-img-top'
                      alt='man image'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>PET ROMAK</h5>
                      <p className='card-text'>MARKETING</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='team-member'>
                  <div className='card team-card'>
                    <img
                      src='img/man5.jpg'
                      className='card-img-top'
                      alt='man image'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>PET ROMAK</h5>
                      <p className='card-text'>MARKETING</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='team-bottom-text'>
                <p>Become part of our dream team, let’s join us !</p>
                <a href='#'>WE ARE HIRING</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
