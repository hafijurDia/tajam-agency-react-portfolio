import React from 'react'
import BottomFooter from './BottomFooter'

export default function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row footer-top-text'>
          <div className='col-lg-4 col-md-4 col-sm-12 m-auto'>
            <div className='footer-top-left'>
              <img
                src='img/main-logo.png'
                alt='Logo not found'
                className='img-fluid'
              />
              <p>
                lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
                odio non mauris vitae erat in elit
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='footer-top-middle'>
              <h4>OUR STUDIO</h4>
              <p>
                <i className='fas fa-map-marker-alt'></i>Ruko cucruk, Jl. Radio
                luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 -
                Indonesia
              </p>
              <p>
                <i className='fas fa-phone'></i>(+62) 21-2224 3333
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='footer-top-right'>
              <h4>STAY IN TOUCH</h4>
              <form className='row g-3 center'>
                <div className='col-auto'>
                  <input
                    type='email'
                    className='form-control'
                    id='inputPassword2'
                    placeholder='Subscribe our newsletter'
                  />
                </div>
                <div className='col-auto center-btn'>
                  <button type='submit' className='btn btn-custom mb-3'>
                    <i className='fas fa-paper-plane'></i>
                  </button>
                </div>
              </form>
              <ul>
                <li>
                  <a href='#'>
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-dribbble'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-instagram-square'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-google-plus-square'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-youtube-square'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BottomFooter />
      </div>
    </section>
  )
}