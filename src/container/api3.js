import React, { Component } from 'react';
import {callApi3} from '../action/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Api3 extends Component {
    constructor(props){
        super(props)
        this.state={
            data3:[]
        }
    }
    componentWillMount(){
            this.props.callApi3()
    }
    componentWillReceiveProps(nextProps){
        this.setState({data3:nextProps.api3})
    }
    render() {
        return (
            <div className="App">
                <table border="1">
                    <tbody>
                {this.state.data3.map((v,i)=>{
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
        api3:state.api3
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({callApi3},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Api3);
