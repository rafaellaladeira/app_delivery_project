import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './components/Provider';

function App() {
  return (
    <Provider>
      <section>
        <Switch>
          <Route exact path="/login" component={ Login } />
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
