import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import ProductPage from "./Pages/ProductPage.";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Machines from './components/Machines';
import App from "./App";

ReactDOM.render((
  <Router >
    <App />
  </Router>), document.getElementById('root'));
registerServiceWorker();

