import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
    <a href='https://linkedin.com/in/raoul-patrick-soga-396645221//' target="_blank" ><BsLinkedin /></a>
    <a href='https://github.com/RRamses' target="_blank"><BsGithub/></a>
    </div>
  ) 
}

export default HeaderSocials