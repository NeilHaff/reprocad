import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact";
import Company from "../components/company";
import './ProductPage.css';

import officedemoimage from '../Images/officedemoimage.jpg';



class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Company Image={officedemoimage}/>
        <Contact />
        <Footer/>
      </div>

    );
  }
}


export default ContactPage;
