import React, { Component } from 'react';
import './App.css';
import Machines from './components/Machines';
import MachineCard from './components/MachineCard';
import Company from './components/company';

import Header from './components/Header';
import Footer from './components/Footer';

import manager from './Images/manager.jpg';

const SCROLL_THRESHOLD = 430;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  headerIsActive: false,  showMenu: false};
    document.addEventListener('scroll', this.HandleScroll);
  }

  HandleScroll = () => {
    let Y = window.scrollY ;
    if ( Y >= SCROLL_THRESHOLD) {
      this.setState({
        headerIsActive: true
      });
    } else  {
      this.setState({
        headerIsActive: false
      });
    }
  };


  render() {
    return (
      <div className='Page'>
        <div className='glass'>
          <video className='video' autoPlay='autoplay' loop="loop" muted=""
                 data-reactid=".0.1.0.0">
            <source type="video/mp4" data-reactid=".0.1.0.0.0" src='./printmaker.mp4'/>
          </video>
        </div>
        <h3 className='intro'>We  bring  exceptional  technologies  to  market  in  the  inkjet  printing  field. </h3>
        <Header/>
        <div className='StatementText'>
          <h1> With  our  global  partners  we  supply  leading  edge  printers,  next  generation  ink  technology  and  market  driven  consultancy.</h1>
          {/*<p>Located near Cambridge, England, Reprocad Ltd has been involved in digital print technology for 15 years. Working and consulting with some of the key players, worldwide,  we have been involved in bringing to market innovative solutions in hardware, software and consumables for printing applications in areas as diverse as CAD, labelling, graphics, production, architecture and packaging.*/}
          {/*</p>*/}
          <p> With our partners we provide digital printing solutions that give our customers real market advantage. View our range below.</p>
        </div>

        <div className='Products'>
          <h2 className={'products-title'}>Our Range</h2>
          {Machines.map(Card=> <MachineCard Card={Card} thumb={Card.thumb} key={Card.id}/>)}
        </div>
        <Company Image={manager} />
        <Footer/>
        {<Header fixed active={this.state.headerIsActive}/>}
      </div>

    );
  }
}

export default App;
