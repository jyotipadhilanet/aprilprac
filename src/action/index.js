import axios from 'axios'
export const callApi1=()=>{
    return (dispatch) => {
        return axios.get('http://localhost:5000/fetch')
            .then((success) => dispatch({type: "api1", payload: success.data}))
            .catch((err) => console.log(err))
    }
}
export const callApi2=()=>{
    return (dispatch)=>{
        return  fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json =>dispatch({type:"api2",payload:json}))
    }
}
export const callApi3=()=>{
    return (dispatch)=>{
        return  fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => dispatch({type:"api3",payload:json}))
    }
}