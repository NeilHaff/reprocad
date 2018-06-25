import React from 'react';
import './Header.css';
import MachineCard from './MachineCard'
import {Link} from "react-router-dom";


class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thumb:null, Subtitle:null, Pageurl:'/', };
  }

  render () {
    console.log(this.state)
    return (
      <div className='DropDown'>
        <div className='col1'>
          {this.props.Machines.map( Machine => {
            return(
              <button
                onMouseEnter={()=> this.setState({thumb:Machine.thumb, Subtitle:Machine.Subtitle, Pageurl:Machine.pageurl})}>
                <h2>
                  {Machine.title}
                </h2>
              </button>
            )
          })}
        </div>
        <div className='col2'>
          <img src={this.state.thumb} />
          <h2> {this.state.Subtitle}</h2>
          <button className='DropDownButton' >
            <Link to={this.state.Pageurl} />
            <h2>Click here</h2>
          </button>
        </div>
      </div>
    )
  };
}

export default DropDown;
