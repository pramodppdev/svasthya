import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/home/nav';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TopNavbar}></Route>
          

         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
