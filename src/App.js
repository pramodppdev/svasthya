import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/home/nav';
import Dashboard from './components/admin/Dashboard';
import Blood from './components/admin/Blood';
import Form from './components/admin/requested';

function App() {
  return (
    <Router>
      <div>
        <Switch>
{/*<!--<Route exact path="/" component={TopNavbar}></Route>--!>*/}
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/blood" component={Blood}></Route>
          <Route exact path="/Form" component={Form}></Route>

         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
