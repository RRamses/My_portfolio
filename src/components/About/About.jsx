import React from 'react'
import  './about.css'
import Me from '../../assets/raoul.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'


function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div  className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward  className='about__ion'   />
              <h5>Experience</h5>
              <small>+1 years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__ion'   />
              <h5>Clients</h5>
              <small>+5 Worldwide </small>
            </article>
            
            <article   className='about__card'>
              <VscFolderActive className='about__ion'   />
              <h5>Projects</h5>
              <small>+10 completed Project</small>
            </article>
          </div>
          <p>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie eros ut leo elementum dapibus.
          Maecenas ac tortor non ipsum dignissim vehicula. Quisque rhoncus suscipit est id posuere. 
          Etiam ut ante sit amet orci varius dignissim eget eu mi. 

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About