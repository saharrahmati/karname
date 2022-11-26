
const initialState = {
    responses:[]
}
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case "SET_RESPONSE":
           return action.payload
        default:
           return state
    }   
}

export default reducer