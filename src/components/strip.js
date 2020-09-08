import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { IoIosCall,IoMdMail } from "react-icons/io";
import { RiUserSmileLine } from "react-icons/ri";

export default () => {
    return <div className="strip">
        <div className="strip-child">
        <div className="strip-child"><IoIosCall style={{color:"white"}} className="mt-2 prm-clr" /><p>041-12122324</p></div>
        <div className="strip-child ml-5"><IoMdMail style={{color:"white"}} className="mt-2 prm-clr" /><p>contact@boxking.com</p></div>
        </div>
        <div className="strip-child">
        <div className="strip-child"><RiUserSmileLine style={{color:"white"}} className="mt-2 prm-clr" /><p>account</p></div>
        <div className=""><p className="prm-clr">DE</p></div>
        </div>

    </div>



}

