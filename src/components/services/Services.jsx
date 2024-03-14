import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article data-aos="fade-up-right" className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design, develop, and optimize UI.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Create user-friendly interfaces that enable users to understand how to use complex technical products.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Experience building applications with HTML, CSS, SCSS, Javascript and Typescript.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Experience with design frameworks such as Bootstrap, Tailwind css.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Good understanding of front-end technologies such as ReactJS, VueJS.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Write unit and UI tests to identify malfunctions.</p>
            </li>
          </ul>
        </article>
        
        <article data-aos="fade-up" className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design and implement backend infrastructure and APIs.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Good understanding of deployment tools such as Docker, Kubernetes & Jenkins.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Familiar with SQL/NoSQL databases and their declarative query languages.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Hands on experience with AWS.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Implement effective security protocols, data protection measures, and storage solutions.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Good understanding of web application security, and session management.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>REST server architecture and automated testing.</p>
            </li>
          </ul>
        </article>
        
        <article data-aos="fade-up-left" className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Translate designs and wireframes into high quality native code.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Experience with building Apps with Android SDK, Java/Kotlin.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Experience with React Native applications.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Experience with Google play services and Firebase.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Develop application programming interfaces (APIs) to support mobile functionality.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Develop and maintain lightweight applications that can run seamlessly on any device.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Unit-test code for robustness, usability, and general reliability.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services