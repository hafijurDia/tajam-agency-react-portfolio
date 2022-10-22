import React from 'react'

export default function BottomFooter() {
  return (
    <div className='row footer-bottom-text'>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='footer-bottom-left'>
          <ul>
            <li>
              <a href='#'>HELP</a>
            </li>
            <li>
              <a href='#'>TERMS & CONDITION</a>
            </li>
            <li>
              <a href='#'>PRIVACY</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='footer-bottom-right'>
          <p>Copyright &copy; 2015-Tajem Creative</p>
        </div>
      </div>
    </div>
  )
}
