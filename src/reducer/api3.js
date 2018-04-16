export const api3=((state=[],action)=>{
    switch (action.type){
        case "api3":
            return action.payload
        default :
            return state
    }
})