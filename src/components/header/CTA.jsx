import React from 'react'
import CV from '../../assets/Full-Stack Developer 25a.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" className='btn' rel="noreferrer">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA