import React, {useState, useEffect} from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ImageModal from '../UI/ImageModal'
import passport from '../../assets/my-passport.jpg'
import passport2 from '../../assets/my-passport2.jpg'
import {FaLongArrowAltDown} from 'react-icons/fa'
import Typed from 'typed.js'
import anime from 'animejs'

const Header = () => {

  const [showImage, setShowImage] = useState(false)

  const el = React.useRef(null);
	const typed = React.useRef(null);
  
  useEffect(() => {
    const options = {
    	strings: ['Tolulope ^1000 Joshua'],
      typeSpeed: 150,
      backSpeed: 50,
      startDelay: 2000,
      backDelay: 2000,
    };
    
    typed.current = new Typed(el.current, options);

    anime({
      targets: '.drop-down',
      keyframes: [
        {translateY: -500, duration: 0},
        {translateY: 0}
      ],
      delay: 7000,
      duration: 3000,
      easing: 'easeOutElastic(1, .8)',
    });
    
    return () => {
      typed.current.destroy();
    }
  })

  return (
    <header>
      {showImage && <ImageModal image={passport2} onClose={() => setShowImage(false)} />}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <span ref={el}></span>
        </h1>
        <h5 className="text-light drop-down">Fullstack Developer</h5>
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