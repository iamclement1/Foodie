//I don't need to pass the state information from one component to another
export const actionType = {
    SET_USER: ' SET_USER',
    SET_FOOD_ITEMS: ' SET_FOOD_ITEMS',
    SET_CART_SHOW: ' SET_CART_SHOW',
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

        // fOOD ITEM STATE
        case actionType.SET_FOOD_ITEMS:
            return {
                ...state, //spreader operator
                foodItems: action.foodItems //update foodItems action
            };

            // CART SHOW STATE
        case actionType.SET_CART_SHOW:
            return {
                ...state, //spreader operator
                cartShow: action.cartShow //update cartShow action
            };
        default: return state;
    }
}

export default reducer;