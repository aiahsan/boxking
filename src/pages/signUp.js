import React from 'react'
export default () => <>
    <div className="container main">
        <div className="main-form">
            <img src={require('../images/logo.png')} alt="Logo" className="logo" />
            <section>
                <div className="input-field">
                    <i className="fa fa-user-circle-o icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="name" placeholder="Enter your name" required />
                    <label for="name" className="user-label">Username</label>
                </div>
                <div className="input-field">
                    <i className="fa fa-phone icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="Email" placeholder="Enter your email address" required />
                    <label for="Password" className="user-label">Email</label>
                </div>
                <div className="input-field">
                    <i className="fa fa-phone icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="phone" placeholder="Enter your phone" required />
                    <label for="phone" className="user-label">Mobile Number</label>
                </div>
                <div className="input-field">
                    <i className="fa fa-eye icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="Password" placeholder="Enter your password" required />
                    <label for="Password" className="user-label">Password</label>
                </div>
                <div className="input-field">
                    <i className="fa fa-eye icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="Repeat-Password" placeholder="Repeat your password" required />
                    <label for="Repeat-Password" className="user-label">Repeat-Password</label>
                </div>


            </section>

            <div className="frgt-rmb">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Remember Me</label>
                </div>
                <a> Forgot Password</a>
            </div>
        </div>
        <div>
            <button type="submit" class="submit-button">LOGIN</button>
        </div>
        <div className="showBar">
  <div className="line1"><hr/></div>
  <div className="line-text"><p>or</p></div>
  <div className="line2"><hr/></div>
 
</div>
<div>
  <a href="" class="page-link1">Don,t have an account ?</a>
</div>
    </div>

</>