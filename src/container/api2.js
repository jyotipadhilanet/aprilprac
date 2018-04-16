import React, { Component } from 'react';
import {callApi2} from '../action/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Api2 extends Component {
    componentWillMount(){
        if(this.props.api2.length<=0)
        {
            console.log("called two time only")
            this.props.callApi2()
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({data2:nextProps.api1})
    }
    render() {
        return (
            <div className="App">
                <table border="1">
                    <tbody>
                {this.props.api2.map((v,i)=>{
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
        api2:state.api2
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({callApi2},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Api2);
