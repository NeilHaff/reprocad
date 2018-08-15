import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render(){
    return(
      <div className='FooterBox'>
        <div className='columns' >
          <div className='footcol'>
            <h2>Reprocad Ltd</h2>
            <p>10 Fen Street</p>
            <p>Boxford</p>
             <p>Cudbury,</p>
             <p>CO10 5HL</p>
          </div>
          <div className='footcol'>
            <h2>Products</h2>

              <Link to={'/machine1'} className={"removelinkdefault"}>
                  <p> Digital Packaging Printer - MVZ </p>
              </Link>
              <Link to={'/machine3'} className={"removelinkdefault"}>
                  <p> Maglev  6 colour Flatbed UV Printer </p>
              </Link>
              <Link to={'/machine4'} className={"removelinkdefault"}>
              <p> Quantum dot high security ink</p>
          </Link>
              <Link to={'/machine4'} className={"removelinkdefault"}>
                  <p> Special Projects</p>
              </Link>

          </div>
          <div className='footcol'>
            <h2>07962 156868 - We're available </h2>
              <h2>to help with any questions.</h2>
          </div>
        </div>
        <div className='line' />
      </div>

    );
  }
}

export default Footer;
