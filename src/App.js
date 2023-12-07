import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
