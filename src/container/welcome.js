import React, { Component } from 'react';
import {callApi1} from '../action/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Welcome extends Component {
  constructor(props){
      super(props)
      this.state={
          data1:[]
      }
  }
  componentWillMount(){
          this.props.callApi1()
  }
  componentWillReceiveProps(nextProps){
      this.setState({data1:nextProps.api1})
  }
    render() {
        return (
            <div className="App">
                <table border="1">
                    <tbody>
                {this.state.data1.map((v,i)=>{
                  return(
                      <tr>
                          <td>{v.userId}</td>
                          <td>{v.title}</td>
                          <td>{v.body}</td>
                          <td>{v.id}</td>
                      </tr>
                  )
                })}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        api1:state.api1
    }
}
function mapDispatchToProps(dispatch) {
        return bindActionCreators({callApi1},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
