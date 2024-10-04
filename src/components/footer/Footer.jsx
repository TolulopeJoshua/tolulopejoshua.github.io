import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import baller from '../../assets/baller.gif'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Josh</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tolulope-joshua-babatunde-8b4266156/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
        <a href="https://twitter.com/Babtol_josh" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tolulope Joshua. All rights reserved</small>
      </div>
      {/* <div className="baller">
        <img src={baller} alt="baller" />
      </div> */}
    </footer>
  )
}

export default Footer