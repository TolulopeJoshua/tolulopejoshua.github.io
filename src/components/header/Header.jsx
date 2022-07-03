import React, {useState} from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ImageModal from '../UI/ImageModal'
import passport from '../../assets/my-passport.jpg'
import passport2 from '../../assets/my-passport2.jpg'
import {FaLongArrowAltDown} from 'react-icons/fa'

const Header = () => {

  const [showImage, setShowImage] = useState(false)

  return (
    <header>
      {showImage && <ImageModal image={passport2} onClose={() => setShowImage(false)} />}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tolulope Joshua</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials />
        <a href="#contact" ><FaLongArrowAltDown className='header__scroll' /></a>
        <div className="me" onClick={() => setShowImage(true)}>
          <img src={passport} alt="my-pic" />
        </div>
      </div>
    </header>
  )
}

export default Header