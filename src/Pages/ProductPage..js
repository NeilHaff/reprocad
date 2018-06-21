import React from 'react';
import Routes from '../Routes/Routes';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact";
import './ProductPage.css';




class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='mainproduct'>
                <h1>{this.props.Machine.title}</h1>

                </div>
                <div className='productdetails'>
                    <h1>Product Details</h1>
                </div>
                <div className='salestext'>
                    <p>A short summary, maybe even a quote from a happy client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
                <Contact/>
                <Footer/>

            </div>

        );
    }
}


export default ProductPage;