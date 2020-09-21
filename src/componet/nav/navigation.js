import React from 'react';
import  './index.css'

function Navigation() {
    return (
        <div className=' nav1   '>
           <button className='na grow'><i class="fas fa-home"></i></button>
           <button className='na grow'><i class="far fa-file"></i></button>
           <button className='na grow'><a href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/"><i class="fab fa-linkedin"></i></a></button>
           <button className='na grow'><a href="https://github.com/barbaroreyes"><i class="fas fa-project-diagram"></i></a></button>
           <button className='na grow'><i class="fas fa-info"></i></button>
           
        </div>
    )
}

export default Navigation
