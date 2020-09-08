import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'
export default ()=><>
<div className="sub-part mt-5 pt-5 pb-5" >
    <p className="sub-h">
    Subscribe To Get Updates
    </p>
    <p className="whatwe-para"> We are all excited to work with you and see you growing </p>
    <div className="sub-text-input">
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter your email or mobile no."
      aria-label="Enter your email or mobile no."
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
    </div>
</div>
</>