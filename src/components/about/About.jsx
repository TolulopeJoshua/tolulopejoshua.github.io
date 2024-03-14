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
import {TbBrandVue} from 'react-icons/tb'
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
              <TbBrandVue/>
              {/* <FontAwesomeIcon icon={faGitAlt} color="#333333" /> */}
            </div>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Diligent software engineer with 5+ years of experience in commercial application and software development. 
            Eager to build innovative and cutting-edge business solutions for clients. 
            I am also passionate about learning latest developments and technologies.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About