import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/home/nav';
import Dashboard from './components/admin/Dashboard';
import Blood from './components/admin/Blood';
import Request from './components/admin/requested';
import Donate from './components/admin/donated';
import Medicine from './components/admin/Medicine';
import Login from './components/admin/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/blood" component={Blood}></Route>
          <Route exact path="/request" component={Request}></Route>
          <Route exact path="/donate" component={Donate}></Route>
          <Route exact path="/medicine" component={Medicine}></Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
