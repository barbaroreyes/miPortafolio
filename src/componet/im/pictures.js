import React from 'react';
import work from '../img/work.jpg'
import './img.css'

function Pictures() {
    return (
        <div className= ' picture dib other' >
          
           <div className='tc ma2 '> <img src={work} alt=''/></div>
           <div className='tc ma2 grow'> <p>Every challenge that life gives you makes you grow</p> </div>
             
         
          
        </div>
    )
}

export default Pictures
