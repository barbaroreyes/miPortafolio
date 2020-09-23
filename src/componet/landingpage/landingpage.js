import React, { Component } from 'react';
import Header from '../header/header';
import Navigation from '../nav/navigation';
  
export default class LandingPage extends Component {
    
    render() {
        return (
            <div >
                <header>
                    <Navigation title = 'Barbaro Reyes'/>
                    <Header title= 'Portafolio' button='More Inside'/>
                </header>
            </div>
        )
    }
}
