import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import {
  faAws,
  faCss3,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiFirebase} from 'react-icons/di'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#ddb100" />
            </div>
            <div className="face2">
              <DiFirebase/>
              {/* <FontAwesomeIcon icon={faBootstrap} color="#2962ff" /> */}
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#625a1b" />
              {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
            </div>
            <div className="face6">
              <TbBrandNextjs/>
              {/* <FontAwesomeIcon icon={faGitAlt} color="#333333" /> */}
            </div>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>120+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, an inventory store api, online bookstore website, and ios/android app for a not-for-profit organization. Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.          
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About