export const api2=((state=[],action)=>{
    switch (action.type){
        case "api2":
            return action.payload
        default :
            return state
    }
})