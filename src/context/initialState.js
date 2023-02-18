//define initial state of users
//initially user information is null

import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    foodItems : null,
}