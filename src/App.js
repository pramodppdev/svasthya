import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNavbar from './components/home/nav';
import React from 'react';
import Dashboard from './components/admin/Dashboard';
import Footer from './components/home/footer';
import CardView from './components/home/card_view';
import BlogPostCard from './components/home/blogPost';
import BlogData from './components/home/blog';
import Index from './components/home';
import BloodDonationApp from './components/home/Bloodinfo';
import MedicineRequestForm from './components/home/medicineReq';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/nav" component={TopNavbar}></Route>         
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/foot" component={Footer}></Route>
          <Route exact path="/card" component={CardView}></Route>
          <Route exact path="/blogpost" component={BlogPostCard}></Route>
          <Route exact path="/blog" component={BlogData}></Route>
          <Route exact path="/bloodinfo" component={BloodDonationApp}></Route>
          <Route exact path="/medicine" component={MedicineRequestForm}></Route>







          

         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
