import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/home/nav';
function App() {
  return (
    <Router>
      <div>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={TopNavbar}></Route>
          

=======
          <Route exact path="/" component={Dashboard}></Route>
>>>>>>> 0442e9fc1e744a9f0fe13bec22368e1a52b31465
         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
