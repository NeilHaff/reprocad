import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ProductPage from "./Pages/ProductPage.";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Machines from './components/Machines';

ReactDOM.render((
  <Router  >
    <div>
      <Switch>
        <Route path= '/ProductPage' exact component={ProductPage}/>
        <Route path='/' exact component={App}/>
        <Route path='/contact' exact component={ContactPage}/>
        {/*{Machines.map(machine => <Route path={machine.pageurl} exact component={<ProductPage Machine={machine}/>}/>)}*/}
        {Machines.map((machine, i) =>
          <Route onUpdate={() => window.scrollTo({top: 10,
              behavior: "smooth"})}  key={i} path={machine.pageurl} exact render={props =>
            <ProductPage Machine={machine} {...props}/>
          } />
        )}
      </Switch>
    </div>
  </Router>), document.getElementById('root'));
registerServiceWorker();

