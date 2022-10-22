import React from 'react'

export default function Contact() {
  return (
    <section name='contact' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='contact-left'>
              <h3>GIVE US A GOOD NEWS</h3>

              <form>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Name'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputsubject1'
                    placeholder='Subject'
                  />
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    rows='10'
                    placeholder='Your Massage'
                  ></textarea>
                </div>
                <a href='#'>SUBMIT</a>
              </form>
            </div>
          </div>

          <div className='col-lg-5 ms-5'>
            <div className='contact-right'>
              <h3>OUR HAPPY CLIENT</h3>
            </div>
            <div className='row text-center'>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo1.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo2.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo3.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo4.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo5.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo6.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo7.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                <img
                  src='img/logo8.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <img
                  src='img/logo9.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <img
                  src='img/logo10.png'
                  alt='Logo not found'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
