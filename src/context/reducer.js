//I don't need to pass the state information from one component to another
export const actionType = {
    SET_USER: ' SET_USER',
}
//data layer
const reducer = (state, action) => {
    console.log(action);

    //when dispatching type would be changed
    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state, //spreader operator
                user: action.user //update user action
            };
        default: return state;
    }
}

export default reducer;