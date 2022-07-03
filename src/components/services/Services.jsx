import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design websites.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Produce process flows, create infographics and design motion graphics.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Create user-friendly interfaces that enable users to understand how to use complex technical products.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design and create responsive website wireframes.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Analyze user behaviour and survey customers.</p>
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Write well designed, testable, efficient code by using best software development practices.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Integrate data from various back-end services and databases.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Transform data/files to meet UI/UX specifications.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Create and maintain software documentation</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Aware of emerging technologies and industry trends.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Good understanding of web application security, and session management.</p>
            </li>
            {/* <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, ipsa!</p>
            </li> */}
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Develop application programming interfaces (APIs) to support mobile functionality.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Implement new mobile products, applications and protocols.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Up to date with the terminology, concepts and best practices for coding mobile apps.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Write unit and UI tests to identify malfunctions.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Communicate with users to understand their needs and experiences.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services