import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xwyenj4', 'template_dg9fnzo', form.current, 'LLErcEZSRlUGBQ138')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Successful. Thank you")
      }, (error) => {
          console.log(error.text);
      });

    }

  return (
    <section className="" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article data-aos="zoom-out-down" className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>babatundetolulopejoshua</h5>
            <h5>@yahoo.com</h5>
            <a href="mailto:babatundetolulopejoshua@yahoo.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article data-aos="zoom-out-up" className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2347041147115</h5>
            <a href="https://api.whatsapp.com/send?phone=2347041147115" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form data-aos="zoom-in" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' id="" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact