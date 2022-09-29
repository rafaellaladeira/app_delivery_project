import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './components/Provider';
import Register from './pages/Register';
import Checkout from './pages/CheckOut';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrder from './pages/CustomerOrder';
import CostumerProducts from './pages/CustomerProducts';

function App() {
  return (
    <Provider>
      <section>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Redirect to="/login" />
            ) }
          />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/customer/orders" component={ CustomerOrders } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrder } />
          <Route exact path="/customer/products" component={ CostumerProducts } />
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
