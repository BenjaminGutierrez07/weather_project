import React from 'react'
import '@/app/hight/Hight.css'
import Wind from '@/app/lights/Wind'
import Humidity from '../lights/Humidity'
import Visibility from '../lights/Visibility'
import Air from '../lights/Air'

export default function Hight() {
  return (
    <div className='size'>
      <div className='up'>
        <Wind />
        <Humidity />
      </div>
      <div className='down'>
        <Visibility />
        <Air />
      </div>
    </div>
  );
}
