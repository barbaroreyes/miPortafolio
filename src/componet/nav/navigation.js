import React from 'react';
import  './index.css'

function Navigation() {
    return (
        <div className=' bg-light-green  tc'>
           <button className='na'>Home</button>
           <button className='na'>About Me</button>
           <button className='na'><a href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/">LinKedln</a></button>
           <button className='na'><a href="https://github.com/barbaroreyes">GitHub</a></button>
           <button className='na'>Contact</button>
           
        </div>
    )
}

export default Navigation
