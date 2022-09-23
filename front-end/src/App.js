import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './components/Provider';
import Register from './pages/Register';
import Checkout from './pages/CheckOut';

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
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
