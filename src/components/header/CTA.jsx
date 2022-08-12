import React from 'react'
import cv from '../../assets/CV_Soga_Raoul patrick.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download cv</a>
        <a href='#contact' className='btn btn-primary'>Let's Talks</a>


    </div>
  )
}

export default CTA