import React ,{Component}from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import  LandingPage from './componet/landingpage/landingpage'
// import work from './componet/img/work.jpg'

// import Header from './componet/header/header';
// import Pictures from './componet/im/pictures';
// import Navigation from './componet/nav/navigation'
  class App extends Component{
   
     
    render(){
          
     return  (
        <div>
           <Switch>
            <Route exact path ='/' component ={LandingPage}/>
           </Switch>
        </div>
     )
    }
  }


export default App;
