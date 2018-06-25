import React from 'react';
import './Machines.css';

class MachineCard extends React.Component {
  render() {
    return (
      <div className="MachineBox">
        <div className={'machinebox-bg'} style={{backgroundImage: `url("${this.props.thumb}")`}}/>
        <div className='trans'>
          <h4 className={'machine-name'}>{this.props.Card.title}</h4>
          <h4 className={'machine-subtitle'}>{this.props.Card.Subtitle}</h4>
        </div>
      </div>
    );

  }
}

export default MachineCard;
