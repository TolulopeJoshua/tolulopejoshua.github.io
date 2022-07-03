import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tolulope-joshua-babatunde-8b4266156/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/TolulopeJoshua" target='_blank'><FaGithub/></a>
        {/* <a href="twitter"></a> */}
    </div>
  )
}

export default HeaderSocials