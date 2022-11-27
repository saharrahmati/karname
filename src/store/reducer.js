const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RESPONSE_Good": {
            return {
                ...state,
                responseGood: action.payload
            };
        }
        case "SET_RESPONSE_Bad": {
            return {
                ...state,
                responseBad: action.payload
            };
        }
        default: 
            return state;
    }
};

export default reducer