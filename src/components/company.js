import React from 'react';
import './company.css';

class Company extends React.Component {
  render() {
    return (
      <div className='Company'>
        <div className='textcompany'>
          <h1 className={'welcome-message'}>Welcome to Reprocad</h1>
          <h2 className={'headline'}>For over 15 years, we've been leading the way with print technology</h2>
          <p className={'description'}>
            Located near Cambridge, England, Reprocad Ltd has been involved in digital print technology for 15 years. Working and consulting with some of the key players, worldwide,  we have been involved in bringing to market innovative solutions in hardware, software and consumables for printing applications in areas as diverse as CAD, labelling, graphics, production, architecture and packaging.
          </p>
        </div>
        <div className='imageside'>
          <img className='Manager' src={this.props.Image} alt='reprocad customer'  />
        </div>
      </div>
    );

  }
}

export default Company;
