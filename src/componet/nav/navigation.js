import React,{Component} from 'react';
import  './index.css'

class Navigation extends Component {
    render(){
        const sections = ['Home','About','Services','Portafolio','Contact','Footer'];
        const navLinks = sections.map(section =>   <li className='  '><a href={"#" + section}>{section}</a></li> )
          
        
        return (
           
            <div className=' nav1  '>
             
             <nav className ='navigation '>
               
               <h2 className='porta'>{this.props.title}</h2>
               {/* <h3 className='f2'>Portafolio</h3> */}
               <ul >
             {/* <h1 className=' bg-transparent name1'>Barbaro Reyes</h1> 
             <h3 className=' na1 grow m name1  name'>Software Developer Student</h3> */}
                 {navLinks}
             {/* <h1 className='na1 grow tc name1 f1'>Barbaro Reyes</h1>  
               <h3 className=' na1 grow pa2 name1 tc name'>Software Developer Student</h3>
             <button className='na grow'><i className="fas fa-home"></i></button>
               <button className='na '><i className="far fa-file"></i></button>
               <button className='na '><a href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/"><i className="fab fa-linkedin"></i></a></button>
               <button className='na '><a href="https://github.com/barbaroreyes"><i className="fas fa-project-diagram"></i></a></button>
               <button className='na '><i className="fas fa-info"></i></button>   */}
               </ul>
             </nav>
              </div>
        )
    }
   
}

export default Navigation
// const allCandyOrders = (collections, str) => {
//   const result = collections.find(({ candy }) => candy === str);
//   if(!result || result.inStock > result.weeklyAverage ||result.inStock<result.weeklAverage) {
//     return 0;
//   } else {
//     return result.weeklyAverage * 2;
//   }
//   }
