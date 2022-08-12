import React from 'react'
import './service.css'
import {GiCheckeredDiamond}  from 'react-icons/gi'

function Services() {
  return (
    <section id='services'>
      <h5> What i Offer</h5>
      <h2>Services</h2>

        <div className='container services__container'>

          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>website creation for business </p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>website creation for  individual</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>Website maintenance management</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>database creation and management</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>frontend only</p>
              </li>
            </ul>

          </article>
          {/*   END OF WEB DEVELOPMENT   */}

          <article className='service'>
            <div className='service__head'>
              <h3>Frontend creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>convert psd to html,css,responsive page</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>integrate html and/or css elements into your site or your code</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>integrate features into your site or your code (adding java script function)</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>make your site responsive</p>
              </li>

              <li>
                <GiCheckeredDiamond className="service__list-icon" />
                <p>turn your model into a web page</p>
              </li>
            </ul>

          </article>

          {/* END OF FRONTEND    */}

        </div>
    </section>
  )
}

export default Services