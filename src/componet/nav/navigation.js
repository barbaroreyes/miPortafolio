import React from 'react';
import  './index.css'

function Navigation() {
    return (
        <div className=' bg-light-green  tc'>
           <button className='na grow'>Home</button>
           <button className='na grow'>About Me</button>
           <button className='na grow'><a href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/">LinKedln</a></button>
           <button className='na grow'><a href="https://github.com/barbaroreyes">GitHub</a></button>
           <button className='na grow'>Contact</button>
           
        </div>
    )
}

export default Navigation
