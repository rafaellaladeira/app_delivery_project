import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './components/Provider';
import Register from './pages/Register';

function App() {
  return (
    <Provider>
      <section>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
