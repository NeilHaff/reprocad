import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact";
import './ProductPage.css';

import { Document, Page } from 'react-pdf';




class ProductPage extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }


  render() {
      const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Header/>
        <div className='mainproduct'>
          <h1>{this.props.Machine.title}</h1>
            <img className='ProductImage' src={this.props.Machine.MainImage} alt='product image' />

        </div>
        <div className='productdetails'>
          <h1>Product Details</h1>
            <p> {this.props.Machine.MainDescription} </p>

            <div>
                <Document
                    file={this.props.Machine.PDF}
                    onLoadSuccess={this.onDocumentLoad}
                    onLoadError={'No file'}
                    // onItemClick=({pageNumber}+1)
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>


        </div>
          <div className='productdetails2'>
              <h1>{this.props.Machine.Title2} </h1>
              <p> {this.props.Machine.Text2} </p>
          </div>
        <div className='salestext'>
          <p>{this.props.Machine.Subtitle}</p>
        </div>
        <Contact/>
        <Footer/>

      </div>

    );
  }
}


export default ProductPage;
