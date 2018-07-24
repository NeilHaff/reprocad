import React from 'react';
import './Header.css';
import DropDown from "./Dropdown";
import Machines from "./Machines";
import {Link} from "react-router-dom";
import reprocadLogo from '../Images/reprocad-logo.png';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  showMenu = () => {
    this.setState({ showMenu: true});
  };

  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  render(){
    let classes = ['mainnav'];
    if (this.props.fixed){
      classes.push('ScrollHeader')
    }

    if (this.props.active){
      classes.push('active');
    }

    return(
      <div className={classes.join(' ')}>
        <div className='mainnav1'>
            <Link to={'/'} className={"removelinkdefault"}>
                <img className='logo' src={reprocadLogo} alt='logo' />
            </Link>
          <button>
            <Link to={'/'} className={"removelinkdefault"}>
              <h2>Home</h2>
            </Link>
          </button>
          <button onMouseEnter={this.showMenu}>
            <h2>Products</h2>
          </button>
          <button>
            <Link to={'/contact'} className={"removelinkdefault"}>
              <h2>Contact</h2>
            </Link>
          </button>
        </div>
        {this.state.showMenu && <DropDown Machines={Machines}/>}
      </div>
    );
  }
}

export default Header;
