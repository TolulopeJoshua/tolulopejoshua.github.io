import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fasion-store.jpg'
import IMG2 from '../../assets/elibrary.jpg'
import IMG3 from '../../assets/gip-news.PNG'
import IMG4 from '../../assets/dealership.jpg'
import IMG5 from '../../assets/ludo-board.png'
import IMG6 from '../../assets/api.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article data-aos="flip-down" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="fashion store" />
          </div>
          <h3>Fashion Store with ReactJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/mabel-fashion-store" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://mabel-fashion-store.web.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="flip-up" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="e-library" />
          </div>
          <h3>Christian E-Library with NodeJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/GOD-IN-PRINTS" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://godinprints.org/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Site</a>
          </div>
        </article>
        <article data-aos="flip-up" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="ludo-board" />
          </div>
          <h3>Ludo Game with React and NodeJs</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/dice-boards" className='btn hidden' target='_blank' rel="noreferrer">Github</a>
            <a href="https://dice-boards-frontend.onrender.com/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="flip-down" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="global news" />
          </div>
          <h3>Global News Site with NextJs and Tailwind CSS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/global-news" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://gipnews.vercel.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="flip-up" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="dealership" />
          </div>
          <h3>Car Dealership with NextJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/dealer_shop" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://dealershop.vercel.app//" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="flip-down" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="blogging api" />
          </div>
          <h3>Blogging Rest API (NodeJs)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/Blogging-API" className='btn' target='_blank' rel="noreferrer">Github</a>
            {/* <a href="https://play.google.com/store/apps/details?id=com.ToluJosh.biblereadingplanner" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a> */}
          </div>
        </article>
      </div> 
    </section>
  )
}

export default Portfolio
