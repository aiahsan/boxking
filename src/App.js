import React,{Component} from "react";
import HomePage from './pages/home'
import Login from './pages/login';
import Forgot from './pages/forgot';
import SignUp from './pages/signUp';
import FAQ from './pages/faq'
import Cart from './pages/cart'
import Summry from './pages/summry'
import Tool from './pages/tool'
import TDcomp from './components/tool/threeDMainCom';
import ProductListing from './pages/ProductListing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Application extends Component
{

  constructor()
  {
    super();
    this.state={
      name:'',
      Id:1,
      status:true
    }
  }

  handleNameChange=(name)=>{
  
    console.log(name);
  // this.setState({name:name}) 
   // this.state.name=name;
  };

  render(){
    return <div>
    <h1>{this.state.name}</h1>
  <h2>Hello World</h2>
    <input onchangeText={(e)=>this.handleNameChange(e)}/>
  </div> 
  }
}



function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignUp />
          </Route>
          <Route path="/fpassword">
            <Forgot />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/summry">
            <Summry />
          </Route>
          <Route path="/products">
            <ProductListing />
          </Route>
          <Route path="/tool">
            <Tool/>
          </Route>
          
        </Switch>
  </Router>
  );
}

export default App;
