import React from "react";
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';
import { RiShoppingCartLine} from "react-icons/ri";
import { MdSearch} from "react-icons/md";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default ()=>{
  return <div className="bgNav"> <Navbar  expand="lg">
  <Navbar.Brand as={Link} to="/" ><img className="logomain" src={require('../images/logo.png')}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  as={Link} to="/" >Home</Nav.Link>
      <Nav.Link  as={Link} to="/products" >Products</Nav.Link>
      <Nav.Link   as={Link} to="/login" >Login</Nav.Link>
      <Nav.Link as={Link} to="/signin" >Signin</Nav.Link>
      <Nav.Link as={Link} to="/tool" >Tool</Nav.Link>
{
/* 
      <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
      <Nav.Link as={Link} to="/summry" >Summry</Nav.Link>
      <Nav.Link as={Link} to="/fpassword" >Forgot Password</Nav.Link>
*/
    }
    </Nav>
    <Form inline>
    <MdSearch  className="mr-sm-2" />
      <RiShoppingCartLine  className="mr-sm-2" />
      <Button className="prm-color btn-cst-primary">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
</div>
  
 
  
}

