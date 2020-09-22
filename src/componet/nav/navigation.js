import React,{Component} from 'react';
import  './index.css'

class Navigation extends Component {
    render(){
        return (
            <div className=' nav1 ma2 pa3 '>
             <nav className ='navigation'>
             <h1 className='na1  tc '>Barbaro Reyes</h1>  
               <h3 className=' na1 pa2 name tc f3'>Software Developer Student</h3>
             <button className='na grow'><i className="fas fa-home"></i></button>
               <button className='na grow'><i className="far fa-file"></i></button>
               <button className='na grow'><a href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/"><i className="fab fa-linkedin"></i></a></button>
               <button className='na grow'><a href="https://github.com/barbaroreyes"><i className="fas fa-project-diagram"></i></a></button>
               <button className='na grow'><i className="fas fa-info"></i></button>  
             </nav>
              </div>
        )
    }
   
}

export default Navigation
