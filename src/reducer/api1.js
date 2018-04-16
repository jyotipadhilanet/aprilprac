export const api1=((state=[],action)=>{
    switch (action.type){
        case "api1":
            return action.payload;
        default :
            return state
    }
})