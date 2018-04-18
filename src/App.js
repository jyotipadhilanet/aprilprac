import React, { Component } from 'react';
import './App.css';
import {NavLink,Redirect,Route,Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import Header from './container/header'
import Footer from './container/footer'
import About from './container/about'
import Contact from './container/contact'
import Login from './container/login'
import Dashboard from './container/Dashboard'
import Register from './container/register'
import Welcome from './container/welcome'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem';

const Link=()=>{
    return(
        <div>
                <NavLink to="/">  <MenuItem primaryText="About" /></NavLink>
                <NavLink to="/contact"> <MenuItem primaryText="Contact" /></NavLink>
                <NavLink to="/register"><MenuItem primaryText="Register" /></NavLink>
                <NavLink to="/login"> <MenuItem primaryText="Sign up" /></NavLink>
        </div>
    )
}
const PublicRoute=(props)=>{
    return(
    !localStorage.getItem('user')?
      <div>
          <Header/>
          <AppBar title="My Example" >
              <NavLink to="/">  <MenuItem primaryText="About" /></NavLink>
              <NavLink to="/contact"> <MenuItem primaryText="Contact" /></NavLink>
              <NavLink to="/register"><MenuItem onClick={props.onToggle} primaryText="Register" /></NavLink>
              <NavLink to="/login"> <MenuItem primaryText="Sign up" /></NavLink>
          </AppBar>
          <Route {...props}/>
          <Footer/></div>:
        <Redirect to="/home"/>
    )
}
const PrivateRoute=(props)=>{
    return(
        localStorage.getItem('user')?
        <div>
        <Header/>
        <Dashboard/>
        <Route {...props}/>
        </div> :
        <Redirect to="/"/>
    )
}
class App extends Component {
    constructor(props){
        super(props)
        this.state={isActive:false}
    }
    toggle=()=>{
        this.setState({isActive: !this.state.isActive})
    }
  render() {
      return (
      <div className="App">
          <Switch>
          <PublicRoute exact path="/" component={About} />
          <PublicRoute exact path="/contact" component={Contact} />
          <PublicRoute exact path="/register" component={()=><Register close={this.toggle} open={this.state.isActive}/>} onToggle={this.toggle} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute  path="/home" component={Welcome} />
          </Switch>
          <Register open={this.state.isActive}/>
      </div>
    );
  }
}
export default withRouter(App);
