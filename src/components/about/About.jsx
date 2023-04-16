import React from 'react'
import './about.css'
import AboutMeImg from '../../assets/me-about.jpg'
import {FaAward }from 'react-icons/fa'
import {FiUsers }from 'react-icons/fi'
import {BsFolderCheck }from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMeImg} alt="About me" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 200 +  WorldWide</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className='about__icon'/>
              <h5>Project</h5>
              <small>80+ Completed </small>
            </article>

           

          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ratione dolor incidunt aliquam labore quas quod pariatur minus reprehenderit, rerum mollitia suscipit perferendis animi optio perspiciatis magni tempore, debitis vel?</p>
            
            <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About