import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}></Route>
         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
