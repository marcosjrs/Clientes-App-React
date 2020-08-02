import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCostumerContainer from './containers/NewCostumerContainer';

class App extends Component {

  renderHome = () => <HomeContainer></HomeContainer>
  renderCustomerContainer = (dni) => <CustomerContainer></CustomerContainer>
  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>
  renderCustomerNewContainer = () => <NewCostumerContainer></NewCostumerContainer>

  render= () => {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            {this.renderHome()}
          </Route>
          <Route exact path="/customers">
            {this.renderCustomerListContainer()}
          </Route>
          {/* 
            Con switch va validando cada ruta en el orden puesto, si matchea la url ya no mira la siguiente.
            Sin switch, si matchera la url, mostraría el componente.. pudiendo mostrarse más de uno al mismo tiempo.
           */}
          <Switch>
            <Route path="/customers/new">
              {this.renderCustomerNewContainer()}
            </Route>
            <Route path="/customers/:dni" render={ (props) => <CustomerContainer dni={props.match.params.dni}></CustomerContainer>}></Route>
          </Switch>

        </div>
      </Router>
    );
  }

}

export default App;
