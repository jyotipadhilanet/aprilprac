import React, { Component } from 'react';
import {NavLink,Redirect,Route,Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import Welcome from './welcome'
import api2 from './api2'
import api3 from './api3'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
const Link=(props)=>{
    return(
        <div>
            <Menu>
                <NavLink to="/home/api1"><MenuItem primaryText="Api1" /></NavLink>
                <NavLink to="/home/api2"><MenuItem primaryText="Api2" /></NavLink>
                <NavLink to="/home/api3"><MenuItem primaryText="Api3" /></NavLink>
                <NavLink to="" onClick={()=>{localStorage.removeItem('user')}}>Logout</NavLink>
            </Menu>
        </div>
    )
}
const PrivateRoute=(props)=>{
    return(localStorage.getItem('user')? <Route {...props}/> : <Redirect to="/"/>)
}
class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <AppBar title="My Example" >
                </AppBar>
                <div style={{display:'flex'}}>
                <Menu style={{width:300}}>
                    <NavLink to="/home/api1"><MenuItem primaryText="Api1" /></NavLink>
                    <NavLink to="/home/api2"><MenuItem primaryText="Api2" /></NavLink>
                    <NavLink to="/home/api3"><MenuItem primaryText="Api3" /></NavLink>
                    <NavLink to="" onClick={()=>{localStorage.removeItem('user')}}>Logout</NavLink>
                </Menu>
                <PrivateRoute exact path="/home/api1" component={Welcome} />
                <PrivateRoute exact path="/home/api2" component={api2} />
                <PrivateRoute exact path="/home/api3" component={api3} />
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);
