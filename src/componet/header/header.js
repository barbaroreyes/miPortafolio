import React ,{Component}from 'react';
import './index.css';
// import Pictures from '../../componet/im/pictures';
import Long from '../img/long.jpg'


  const myStyles ={
      background: `url(${Long})`,
      height: '80vh',
      backgroundsize: 'cover',

      
  }
class Header extends Component {
    
    render(){
        return (
            <div className =''>
              <header style={myStyles}>
                <h1 className='' >{this.props.title}</h1>
                <button><a href="#button butt"></a>{this.props.button}</button>
              </header>
            
        
         </div>
        )
    }
    
}

export default Header
