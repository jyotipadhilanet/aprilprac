export const callApi1=()=>{
    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({type: "api1", payload: json}))
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