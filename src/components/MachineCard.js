import React from 'react';
import './Machines.css';

class MachineCard extends React.Component {
  render() {
    return (
      <button className="MachineBox">
        <div className='trans'>
          <h4>{this.props.Card.title}</h4>
          <h4>{this.props.Card.Subtitle}</h4>
        </div>
      </button>
    );

  }
}

export default MachineCard;
