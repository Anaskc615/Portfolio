import React from 'react'
import {BsLinkedin,BsGithub,} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
<div className="header__social">
    <a href="https://www.linkedin.com" target='__blank'><BsLinkedin/></a>
    <a href="https://github.com" target='__blank'><BsGithub/></a>
    <a href="https://dribble.com" target='__blank'><FaDribbbleSquare/></a>
</div>

    )
}

export default HeaderSocial