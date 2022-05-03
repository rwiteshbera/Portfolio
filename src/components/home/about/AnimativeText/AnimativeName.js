import React from 'react'
import { Heading } from '@chakra-ui/react';
import "./TextAnimation.css";

const AnimativeName = () => {
  return (
    <Heading
          fontSize={['2rem', '2.4rem', '2.6rem', '2.8rem']}
          color="orangered"
          id="text-drop"
        >
          <div className='r'>R</div>
          <div className='w'>w</div>
          <div className='i'>i</div>
          <div className='t'>t</div>
          <div className='e'>e</div>
          <div className='s'>s</div>
          <div className='h'>h</div>
          <div className='space'></div>
          <div className='b'>B</div>
          <div className='e'>e</div>
          <div className='r'>r</div>
          <div className='a'>a</div>

        </Heading>
  )
}

export default AnimativeName