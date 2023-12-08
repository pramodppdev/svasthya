

import React from 'react';
import './login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  return (
    <div className="container-login">
    <div className="form-container-login">
      <h2>Login</h2>
        <div className="form-dash">
            <label >Username:</label><br/>
            <input type="text" className='input-login'></input>
        </div>
        <div className="form-dash">
            <label>Password:</label><br/>
            <input type="password" className='input-login'></input>
        </div>
       <Link to="/dashboard"><button className='button-login'>Login</button></Link>
    </div>
    </div>
  );
};

export default Login;
