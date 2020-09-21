import React from 'react';
import work from '../img/work.jpg'
import './img.css'

function Pictures() {
    return (
        <div className= ' picture dib ' >
          
           <div className='tc ma2 '> <img src={work} alt=''/></div>
           <div className='tc ma2'> <p>Every challenge that life gives you shows you what you're up for</p> </div>
             
         
          
        </div>
    )
}

export default Pictures
