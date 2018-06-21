import React, { Component } from 'react';
import './App.css';
import Machines from './components/Machines';
import MachineCard from './components/MachineCard';
import Company from './components/company';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  headerIsActive: false,  showMenu: false, };
        document.addEventListener('scroll', this.HandleScroll);
    }

    HandleScroll = () => {
       let Y = window.scrollY ;
        if ( Y >= 350) {
            console.log(" top");
            this.setState({
                headerIsActive: true
            });
        } else  {
            console.log("not active");
            this.setState({
                headerIsActive: false
            });
        }
    }


  render() {
        console.log(Machines)
    return (
      <div className='Page'>
          {this.state.headerIsActive && (
              <Header fixed />
          )}
          <div className='glass'>
          <video className='video' autoPlay='autoplay' loop="loop" muted=""
                 data-reactid=".0.1.0.0">
              <source type="video/mp4" data-reactid=".0.1.0.0.0" src='./printmaker.mp4'/>
          </video>
          </div>
          <h3 className='intro'>The Worlds Leading Print Technology</h3>
            <Header/>
          <div className='StatementText'>
              <h1>Bringing The Best Printing Technology To Market</h1>
              {/*<p>Located near Cambridge, England, Reprocad Ltd has been involved in digital print technology for 15 years. Working and consulting with some of the key players, worldwide,  we have been involved in bringing to market innovative solutions in hardware, software and consumables for printing applications in areas as diverse as CAD, labelling, graphics, production, architecture and packaging.*/}
          {/*</p>*/}
              <p> With our partners we provide digital printing solutions that give our customers real market advantage.</p>
      </div>

          <div className='Products'>
              <h2>Our Range</h2>
              {Machines.map(Card=> <MachineCard Card={Card} />
              )}
          </div>
          <Company />

              <Footer/>
      </div>

    );
  }
}

export default App;
