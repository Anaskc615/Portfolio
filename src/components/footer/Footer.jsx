import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'>Portfolio</a>

      <ul className='peramalinks'>

        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact">Contact</a></li>

      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><FaFacebookF className='footer__logo'/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer