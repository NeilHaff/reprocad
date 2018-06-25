import React from 'react';
import './Header.css';

class Footer extends React.Component {
  render(){
    return(
      <div className='FooterBox'>
        <div className='columns' >
          <div className='footcol'>
            <h2>Reprocad</h2>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
          <div className='footcol'>
            <h2>Products</h2>
            <p>Product 1</p>
            <p>Product 2</p>
          </div>
          <div className='footcol'>
            <h2>We're available to help with any questions.</h2>
          </div>
        </div>
        <div className='line' />
      </div>

    );
  }
}

export default Footer;
