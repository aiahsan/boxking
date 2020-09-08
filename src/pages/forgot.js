import React from 'react'
export default () => <>
    <div className="container main">
        <div className="main-form1">
            <img src={require('../images/logo.png')} alt="Logo" className="logo" />
           
            <div>
    		<h4 class="login-head">Lost your password..?</h4>
    		<p class="login-para">Don't worry we're here to help you out. Please enter your registered email adress and we'll send you some instructions..!</p>
    	</div>
            <section>
               
                <div className="input-field">
                    <i className="fa fa-envelope-o icon" aria-hidden="true"></i>
                    <input className="user-fields" type="text" id="Email" placeholder="Enter your password" required />
                    <label for="Email" className="user-label">Email</label>
                </div>


            </section>

           
        </div>
        <div>
            <button type="submit" class="submit-button">Send Instructions</button>
        </div>

    </div>

</>