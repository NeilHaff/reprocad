import React from 'react';
import Routes from '../Routes/Routes';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact";
import Company from "../components/company";
import './ProductPage.css';




class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Company/>
                <Contact/>
                <Contact/>
                <Footer/>
            </div>

        );
    }
}


export default ContactPage;