import React ,{Component}from 'react';
import './App.css';
// import work from './componet/img/work.jpg'

// import Header from './componet/header/header';
// import Pictures from './componet/im/pictures';
import Navigation from './componet/nav/navigation'
  class App extends Component{
    constructor(){
      super();
      this.state={
       divs : [
         {name :'Barbaro Reyes',
          // picture: <img src= {work} alt=''/>
          
         },{
           btn:<button className='' onClick ={() => this.setState({string:'reyes2'})}>change</button>,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptates, culpa libero error quo assumenda nihil voluptas soluta necessitatibus explicabo ducimus iusto cupiditate qui recusandae illum adipisci accusamus quis, exercitationem commodi eos corrupti nesciunt! Odio harum eaque quam laboriosam numquam.',
          
         },{
          btn:<button className='' onClick ={() => this.setState({string:'reyes2'})}>change</button>,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptates, culpa libero error quo assumenda nihil voluptas soluta necessitatibus explicabo ducimus iusto cupiditate qui recusandae illum adipisci accusamus quis, exercitationem commodi eos corrupti nesciunt! Odio harum eaque quam laboriosam numquam.'
         }]
      }
    }
    render(){
     return (
           <div className ='app tc'>
              <Navigation/>
              
          {
              
               this.state.divs.map( div => {
                 return (
                 <div className=' tc picture bg-transparent dib  ma3 pa2  f3'>
                 {div.picture}
                 {/* {div.btn} */}
                 </div>)
               })
              
             }
              {/* <Header/>
             <Navigation/>
             <header className=' picture bg-transparent dib grow ma3 pa2 shadow-3 f3'>
             <div className='dib'><img src={work} alt=''/></div>
             
               </header>
               <h1>{this.state.string}</h1>
             <button className='tc btn' onClick ={() => this.setState({string:'reyes2'})}>Change</button>
             <button className='tc btn' onClick ={() => this.setState({string:'reyes1'})}>Change</button> */}
           </div>
     )
    }
  }


export default App;
