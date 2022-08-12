import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Soga Raoul - Copie.jpg'
import HeaderSocials from './HeaderSocials'



function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Soga Raoul Patrick</h1>
        <h3>alias RRamses</h3>
        <h5 classname="text-light">Fullstack react js developper</h5>
        <CTA/> 
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>  


    </header>

  )
}

export default Header