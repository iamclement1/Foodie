export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clearItem();


    return userInfo;
}


// setting cart item to localStorage
export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== undefined ? JSON.parse(localStorage.getItem('cartItems')) : localStorage.clearItem();

    return cartInfo ? cartInfo : [];
}