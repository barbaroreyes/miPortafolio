import React from 'react';
import './App.css';
import Header from './componet/header';
import Pictures from './componet/im/pictures';
import Navigation from './componet/nav/navigation'

function App() {
  return (
    <div className="App tc">
       <Header/>
       <Navigation/>
       <Pictures/>
       


    </div>
  );
}

export default App;
