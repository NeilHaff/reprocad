import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage.";
import Machines from "./components/Machines";
import Home from "./Home";
import {Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from "react";

class App extends Component {

  componentWillMount() {
    this.unlisten = this.props.history.listen(() => {
      window.scrollTo(0, 0)
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path= '/ProductPage' exact component={ProductPage}/>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' exact component={ContactPage}/>
          {/*{Machines.map(machine => <Route path={machine.pageurl} exact component={<ProductPage Machine={machine}/>}/>)}*/}
          {Machines.map((machine, i) =>
            <Route   key={i} path={machine.pageurl} exact render={props =>
              <ProductPage Machine={machine} {...props}/>
            } />
          )}
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)
