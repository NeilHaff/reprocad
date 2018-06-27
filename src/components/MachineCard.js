import React from 'react';
import './Machines.css';
import {Link} from "react-router-dom";

class MachineCard extends React.Component {
  render() {
    return (
      <div className="MachineBox">
        <div className={'machinebox-bg'} style={{backgroundImage: `url("${this.props.thumb}")`}}/>
        <div className='trans'>
          <h2 className={'machine-name'}>{this.props.Card.title}</h2>
          <h4 className={'machine-subtitle'}>{this.props.Card.Subtitle}</h4>
            <Link className='MachineLink' to={this.props.Card.pageurl}>
                <h4> View Product Details</h4>
            </Link>
        </div>
      </div>
    );

  }
}

export default MachineCard;
