import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage";
import ProductPage from '../Pages/ProductPage.';
import ContactPage from '../Pages/ContactPage';
import App from '../App';
import Machines from '../components/Machines';



const Routes = () => (
    <Router>
        <App />
        <Switch>
            <Route path= '/ProductPage' exact component={ProductPage}/>
            <Route path='/' exact component={Home}/>
            <Route path='/contact' exact component={ContactPage}/>
            {/*{Machines.map(Machine => <Route path={this.Machine.pageurl} exact component={<ProductPage {this.Machine.title}/>}/>*/}
            {/*)}*/}
        </Switch>
    </Router>
);


export default Routes;