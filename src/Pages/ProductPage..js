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
    err: ''
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPage = num => {
     if (this.isValidPageNum(num)){
       this.setState({pageNumber: num})
     }
  };

  nextPage = () => {
    this.goToPage(this.state.pageNumber + 1)
  };

  prevPage = () => {
    this.goToPage(this.state.pageNumber - 1)
  };


  isValidPageNum = num => {
    return 0 < num && num <= this.state.numPages
  };

  renderPDFViewer = () => {
    const { pageNumber, numPages } = this.state;
    return (<div className={'pdf-container'}>
      <Document
        file={this.props.Machine.PDF}
        onLoadSuccess={this.onDocumentLoad}
        onLoadError={() => this.setState({err: 'Load Error'})} >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className={'pdf-controls'}>
        <div className={`arrow left ${this.state.pageNumber > 1 ? '' : 'inactive'}`} onClick={this.prevPage} />
        <p className={'page-description'}>Page {pageNumber} of {numPages}</p>
        <div className={`arrow right ${this.state.pageNumber <= this.state.numPages ? '' : 'inactive'}`} onClick={this.nextPage} />
      </div>
      <p className={'error'} style={{color: 'red'}}>{this.state.err}</p>
    </div>)
  };

  render() {
    return (
      <div>
        <Header/>
        <div className='mainproduct'>
          <h1>{this.props.Machine.title}</h1>
          <img className='ProductImage' src={this.props.Machine.MainImage} alt='product image' />

        </div>
        <div className='productdetails'>
          <h1>Product Details</h1>
          <p style={{margin: '10px 0'}}> {this.props.Machine.MainDescription} </p>
          {this.props.Machine.PDF && this.renderPDFViewer()}
        </div>
        <div className='productdetails2'>
          <h1 className={'product-details-title'}>{this.props.Machine.Title2} </h1>
          <ul> {this.props.Machine.Text2.split('\n').map(sentence => <li className={'product-detail-item'}>{sentence}</li>)} </ul>
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
