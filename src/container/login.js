import React, { Component } from 'react';
const initialState={
    credentials:{
        email:'',
        password:''
    }
};
class Login extends Component {
 constructor(props){
     super(props)
        this.state={
            ...initialState,
        }
     }
     handleChange=(e)=>{
         e.stopPropagation();
         e.preventDefault();
      const {name,value}=e.target
      const {credentials}  =this.state
        credentials[name]=value
        this.setState({credentials})
    }
    handleSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
         if(this.state.credentials.email=="admin@gmail.com" && this.state.credentials.password=="admin123" ){
             console.log("successful entry")
              localStorage.setItem('user','admin')
              this.props.history.push('/home')
         }
         else{
             console.log("unsuccessful entry")
         }
    }
    render() {
        const { credentials } = this.state;
        return (
            <div className="App">
             <center> <form onSubmit={this.handleSubmit} >
                 <b><i><u> Sign In</u></i></b><br/><br/>
                   Email : <input type="email" name="email" value={credentials.email} onChange={this.handleChange} required/><br/><br/>
                   Password : <input type="password" name="password" value={credentials.password} onChange={this.handleChange} required/> <br/><br/>
                   <input type="submit" value="submit"/>
               </form></center>
            </div>
        );
    }
}
export default Login;
