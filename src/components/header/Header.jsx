import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>ELMACHEHOUR ISSAM</h1>
        <h5 className='text-light'>I'm a Data Engineer</h5>
        <CTA />
        <div className="IMAGE_ME">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header