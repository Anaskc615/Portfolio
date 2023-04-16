import React from 'react'
import CTA  from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
<header>
  <div id='home' className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Anas Kc</h1>
    <h5 className="text-light">
      FullStack Developer
    </h5>
    <CTA/>
    <HeaderSocial/>
    <div className="me">
      <img src={ME} alt="me" />
    </div>
    <a href="#contact" className="scroll_down">Scroll Down</a>
    
  </div>
  </header>

  )
}

export default Header