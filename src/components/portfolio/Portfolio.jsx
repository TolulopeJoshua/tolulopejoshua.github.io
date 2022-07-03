import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fasion-store.jpg'
import IMG2 from '../../assets/elibrary.jpg'
import IMG3 from '../../assets/quiz-app.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-Library with Nodejs</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/GOD-IN-PRINTS" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://godinprints.org/books" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Fashion Store (E-commerce)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/mabel-fashion-store" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://mabel-fashion-store.web.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Android Quiz App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TolulopeJoshua/Quiz---Guess-the-Chapter" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.bibleworld.biblequiz_guessthebook" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="/" className='btn' target='_blank'>Github</a>
            <a href="/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="/" className='btn' target='_blank'>Github</a>
            <a href="/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="/" className='btn' target='_blank'>Github</a>
            <a href="/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio