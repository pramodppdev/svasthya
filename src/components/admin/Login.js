

import React from 'react';
import './login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BloodRequestForm = () => {
  return (
    <div className="container">
    <div className="form-container">
      <h2>Login</h2>
        <div className="form">
            <label>Username:</label><br/>
            <input type="text"></input>
        </div>
        <div className="form">
            <label>Password:</label><br/>
            <input type="password"></input>
        </div>
       <Link to="/dashboard"><button>Login</button></Link>
    </div>
    </div>
  );
};

export default BloodRequestForm;
<form >
<label htmlFor="name">Username:</label>
<input type="text"/>
<label htmlFor="bloodType">Password:</label>
<input type="password"/>
<button type="submit">Submit</button>
</form>