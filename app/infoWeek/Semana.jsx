import React from 'react'
import Tomorrow from '../week/Tomorrow';
import '@/app/infoWeek/Semana.css'
import One from '../week/One';
import Two from '../week/Two';
import Three from '../week/Three';
import Four from '../week/Four';

export default function Semana () {
  return (
    <div className='dias'>
      <div className="change">
        <button>c</button>
        <button>f</button>
      </div>
      <div className="days">
        <Tomorrow />
        <One />
        <Two />
        <Three />
        <Four />
      </div>
    </div>
  );
}
