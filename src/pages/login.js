import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default () => <>
    <div className="container main">
        <div className="main-form">
            <img src={require('../images/logo.png')} as={Link} to="/" alt="Logo" className="logo" />
            <section>
                <div className="input-field">
                    <i className="fa fa-user-circle-o icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="name" placeholder="Enter your name" required />
                    <label  className="user-label">Username</label>
                </div>
                <div className="input-field">
                    <i className="fa fa-lock icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="Password" placeholder="Enter your password" required />
                    <label  className="user-label">Password</label>
                </div>


            </section>

            <div className="frgt-rmb">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Remember Me</label>
                </div>
                <a className="nav-link" as={Link} to="/signin"> Forgot Password</a>
            </div>
        </div>
        <div>
            <button type="submit" className="submit-button">LOGIN</button>
        </div>
        <div className="showBar">
  <div className="line1"><hr/></div>
  <div className="line-text"><p>or</p></div>
  <div className="line2"><hr/></div>
 
</div>
<div>
  <a href="" className="page-link1">Don,t have an account ?</a>
</div>
    </div>

</>