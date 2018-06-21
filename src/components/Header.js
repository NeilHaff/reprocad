import React from 'react';
import './Header.css';
import MachineCard from './MachineCard'
import DropDown from "./Dropdown";
import Machines from "./Machines";
import {Link} from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  showMenu: false, };
         this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
}

showMenu(event) {
    this.setState({ showMenu: true, headerIsActive: true, }, () => {
    document.addEventListener('click', this.closeMenu);
});
}

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }


    render(){
        let classes = ['mainnav'];
        if (this.props.fixed){
            classes.push('ScrollHeader')
        }

        return(
                <div className={classes.join(' ')}>
                            <div className='mainnav1'>
                                <img className='logo' src='../reprocadlogo.png' alt='logo' />
                                <div className='logo'/>
                     <button>
                            <Link to={'/'} class="removelinkdefault" >
                                <h2>Home</h2>
                            </Link>
                    </button>
                            <button onPointerOver={this.showMenu}>
                                <h2>Products</h2>
                            </button>
                                <button>
                                    <Link to={'/contact'} class="removelinkdefault" >
                                        <h2>Contact</h2>
                                    </Link>
                                </button>
                </div>
                    <div>
                    {this.state.showMenu &&
                    <DropDown Machines={Machines}/>
                    }
                    </div>
            </div>
        );
    }
}

export default Header;