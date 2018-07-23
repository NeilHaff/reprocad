import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thumb:null, Subtitle:null, Pageurl:'/', };
  }

  render () {
    return (
      <div className='DropDown'>
        <div className='col1'>
          {this.props.Machines.map( (Machine, i) => {
            return(
              <button key={i}
                      onMouseEnter={()=> this.setState({thumb:Machine.MainImage, Subtitle:Machine.Subtitle, Pageurl:Machine.pageurl})}>
                <h2>
                  {Machine.title}
                </h2>
              </button>
            )
          })}
        </div>
        <div className='col2'>
          {/*<button className='DropDownButton' >*/}
            <Link to={this.state.Pageurl}>
             {/*<h4> View Product Details</h4>*/}

                {this.state.thumb && <img src={this.state.thumb} alt={'thumbnail'}/>}
                <p> {this.state.Subtitle}</p>

            </Link>
          {/*</button>*/}
        </div>
      </div>
    )
  };
}

export default DropDown;
