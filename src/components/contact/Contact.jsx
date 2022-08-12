import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp , BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_di5pw73', 'template_raj4e3i', form.current, '73AZ3g9o0UZbPNTPG')
      .then((result) => {
          console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>contact me</h2>

      <div className=' container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sogaraoulpatrick@gmail.com</h5>
            <a href='mailto:sogaraoulpatrick@gmail.com' target="_blank" >Send message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin  className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Soga Raoul Patrick</h5>
            <a href='https://linkedin.com/in/raoul-patrick-soga-396645221//'  target="_blank">Send message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapps</h4>
            <h5>+2250776427851</h5>
            <a href='https://wa.me/+2250776427851'  target="_blank">Send message</a>
          </article>
        </div>
        {/* END OF OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
          <button type='submit' className=' btn btn-primary'>Send Message</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact